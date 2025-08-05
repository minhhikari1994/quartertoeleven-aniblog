export default defineEventHandler(async (event) => {
    const result = await useStorage().getItem('dailyAnimeData')
    return result
})