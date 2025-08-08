const fetchMALData = async (malId) => {
    try {
        const queryParams="?fields=num_episodes, studios, genres, synopsis, status, num_scoring_users, mean, start_season, my_list_status"
        const res = await fetch(`https://api.myanimelist.net/v2/anime/${malId}${queryParams}`, {
            method: 'GET',
            headers: {
                'X-MAL-CLIENT-ID': ''
            }
        })
        const malResponse = await res.json()
        return malResponse
    } catch (err) {
        console.error('======================Failed to fetch MAL data=======================')
        console.error(err);
        console.error('================= End Failed to fetch MAL data log===================')
        return null
    }
}

const fetchMyMALList = async() => {
    try {
        const queryParams="?fields=list_status&limit=50&sort=list_updated_at"
        const res = await fetch(`https://api.myanimelist.net/v2/users/minhhikari1994/animelist${queryParams}`, {
            method: 'GET',
            headers: {
                'X-MAL-CLIENT-ID': ''
            }
        })
        const malResponse = await res.json()
        return malResponse
    } catch (err) {
        console.error('======================Failed to fetch My MAL data=======================')
        console.error(err);
        console.error('================= End Failed to fetch My MAL data log===================')
        return null
    }
}

const fetchJikanData = async (animeId) => {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
        const jikanResponse = await res.json()
        return jikanResponse
    } catch (err) {
        console.error(`======================Failed to fetch Jikan data for anime ${animeId}=====================`)
        console.error(err);
        return null
    }
}

const populateAnimeInfoEntry = (malAnimeData) => {
    const result = {
        mal_id: malAnimeData.id,
        title: malAnimeData.title,
        image: malAnimeData.main_picture?.large,
        episodes: malAnimeData.num_episodes,
        studios: malAnimeData.studios?.map(studio => studio.name),
        genres: malAnimeData.genres?.map(genre => genre.name),
        synopsis: malAnimeData.synopsis,
        start_season: malAnimeData.start_season,
        status: malAnimeData.status,
        mal_score: malAnimeData.mean
        // my_status: {
        //     current_status: myStatus.status,
        //     watched_episodes: myStatus.num_episodes_watched,
        //     personal_score: myStatus.score,
        //     watch_on: dailyAnimeIds[animeInfo.id.toString()]
        // },
    }
    
    // const animeJikanResponse = await fetchJikanData(animeInfo.id)
    // result.external_links = []
    // if (animeJikanResponse) {
    //     const jikanInfo = animeJikanResponse.data
    //     result.external_links = jikanInfo.external
    // }
    // result.external_links.unshift(
    //     {
    //         name: 'MAL',
    //         url: `https://myanimelist.net/anime/${animeInfo.id}`
    //     }
    // )

    return result
}

const populateAnimeUserStatus = (malAnimeData) => {
    const myStatus = malAnimeData.my_list_status || {}
    const result = {
        mal_id: malAnimeData.id,
        my_status: {
            current_status: myStatus.status,
            watched_episodes: myStatus.num_episodes_watched,
            personal_score: myStatus.score
        }
    }

    return result
}

const populateAdditionalInfo = async (populatedMalData) => {
    const animeJikanResponse = await fetchJikanData(populatedMalData.mal_id)
    populatedMalData.external_links = []
    if (animeJikanResponse) {
        const jikanInfo = animeJikanResponse.data
        populatedMalData.external_links = jikanInfo.external
    }
    populatedMalData.external_links.unshift(
        {
            name: 'MAL',
            url: `https://myanimelist.net/anime/${populatedMalData.mal_id}`
        }
    )
    return populatedMalData
}

const myMALList = await fetchMyMALList()
// const result = await fetchMALData(59845)
// const populatedEntry = populateAnimeInfoEntry(result)
// const fullInfo = await populateAdditionalInfo(populatedEntry)
// const myStatusInfo = await populateAnimeUserStatus(result)

myMALList.data.map((entry) => console.log(entry))

