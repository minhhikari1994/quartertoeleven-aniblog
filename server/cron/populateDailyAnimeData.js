import { defineCronHandler } from '#nuxt/cron'

const fetchMALData = async () => {
    try {
        const malResponse = await $fetch('https://api.myanimelist.net/v2/users/minhhikari1994/animelist', {
            query: {
                limit: 10,
                sort: 'list_updated_at',
                fields: 'list_status, num_episodes, studios, genres, synopsis, status, num_scoring_users, mean',
                nsfw: true
            },
            headers: {
                'X-MAL-CLIENT-ID': process.env.MAL_KEY
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

const populateDailyAnimeEntry = (malAnimeData) => {
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
            watch_on: "sunday"
        },
    }

    return result
}

const populateDailyAnimeData = async () => {
    const malData = await fetchMALData()

    console.log(malData)
    
    const populatedDailyData = malData.data.map(malAnimeEntry => populateDailyAnimeEntry(malAnimeEntry))

    return populatedDailyData || []
}

export default defineCronHandler('daily', async () => {
    console.log('Populating daily anime schedule..,', new Date().toLocaleString())
    const result = await populateDailyAnimeData()
    // console.log('hahahahah', result)
    await useStorage().setItem('dailyAnimeData', result)
}, { runOnInit: true, timeZone: 'UTC+7' })