import { defineCronHandler } from '#nuxt/cron'
import dailyAnimeData from './dailyAnime.json'

const fetchMALData = async () => {
    try {
        const malResponse = await $fetch('https://api.myanimelist.net/v2/users/minhhikari1994/animelist', {
            query: {
                limit: 50,
                sort: 'list_updated_at',
                fields: 'list_status, num_episodes, studios, genres, synopsis, status, num_scoring_users, mean',
                nsfw: true
            },
            headers: {
                'X-MAL-CLIENT-ID': ''
            }
        })
        return malResponse
    } catch (err) {
        console.error('======================Failed to fetch MAL data=======================')
        console.error(err);
        console.error('================= End Failed to fetch MAL data log===================')
        return null
    }
}

const fetchJikanData = async (animeId) => {
    try {
        const jikanResponse = await $fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
        return jikanResponse
    } catch (err) {
        console.error(`======================Failed to fetch Jikan data for anime ${animeId}=====================`)
        console.error(err);
        return null
    }
}

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const populateDailyAnimeEntry = async (malAnimeData, dailyAnimeIds) => {
    const animeInfo = malAnimeData.node
    const myStatus = malAnimeData.list_status
    const result = {
        mal_id: animeInfo.id,
        title: animeInfo.title,
        image: animeInfo.main_picture?.large,
        episodes: animeInfo.num_episodes,
        studios: animeInfo.studios?.map(studio => studio.name),
        genres: animeInfo.genres?.map(genre => genre.name),
        synopsis: animeInfo.synopsis,
        start_season: animeInfo.start_season,
        status: animeInfo.status,
        mal_score: animeInfo.mean,
        my_status: {
            current_status: myStatus.status,
            watched_episodes: myStatus.num_episodes_watched,
            personal_score: myStatus.score,
            watch_on: dailyAnimeIds[animeInfo.id.toString()]
        },
    }
    
    const animeJikanResponse = await fetchJikanData(animeInfo.id)
    result.external_links = []
    if (animeJikanResponse) {
        const jikanInfo = animeJikanResponse.data
        result.external_links = jikanInfo.external
    }
    result.external_links.unshift(
        {
            name: 'MAL',
            url: `https://myanimelist.net/anime/${animeInfo.id}`
        }
    )

    return result
}

const getDailyAnimeIds = () => {
    const result = {}
    for (const key in dailyAnimeData) {
        for (const malUrl of dailyAnimeData[key]) {
            const urlSegments = malUrl.split('/')
            const malId = urlSegments[urlSegments.length - 2]
            result[malId] = key
        }
    }
    return result
}

const populateDailyAnimeData = async () => {
    const dailyAnimeIds = getDailyAnimeIds()
    const malData = await fetchMALData()
    
    const allAnimeIds = Object.keys(dailyAnimeIds).map(malId => parseInt(malId))
    
    const dailyAnimeData = malData.data.filter(malAnimeEntry => allAnimeIds.includes(malAnimeEntry.node.id))

    const populatedDailyData = []
    
    for (const malAnimeEntry of dailyAnimeData) {
        await delay(2000)
        const populatedEntry = await populateDailyAnimeEntry(malAnimeEntry, dailyAnimeIds)
        populatedDailyData.push(populatedEntry)
    }

    return populatedDailyData || []
}

export default defineCronHandler('daily', async () => {
    console.log('Populating daily anime schedule..,', new Date().toLocaleString())
    const result = await populateDailyAnimeData()
    await useStorage().setItem('dailyAnimeData', result)
    console.log('Done!')
}, { runOnInit: true, timeZone: 'UTC+7' })