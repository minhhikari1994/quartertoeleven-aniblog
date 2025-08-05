<template>
    <div class="h-auto flex bg-[#1f1f1f] p-2 flex items-center">
        <div class="text-white font-bold items-center text-lg">
            <span>daily anime</span>
        </div>
        <div class="text-white font-bold grow content-end">
            <div>
                <UNavigationMenu highlight highlight-color="secondary" :items="populateDaysInWeekNavItems()"
                    class="justify-end p-none" />
            </div>
        </div>
    </div>

    <div class="h-[calc(100vh-10rem)] w-full border-2 border-[#1f1f1f] bg-[#f4f4f4] p-2 overflow-y-scroll">

        <div class="my-4 flex flex-wrap gap-5 justify-center">
            <AnimeEntry v-for="dailyAnime in dailyAnimeData" :key="dailyAnime.mal_id" class="2xl:w-xs w-sm"
                @click="openAnimeEntryModal" :title="dailyAnime.title" :studios="dailyAnime.studios"
                :image="dailyAnime.image" />
        </div>
    </div>

    <AnimeEntryModal />
</template>

<script lang="js" setup>
import AnimeEntry from '~/components/AnimeEntry.vue';
import AnimeEntryModal from '~/components/AnimeEntryModal.vue';

const { data: allDailyAnimeData } = await useFetch('/api/dailyAnime')
const dailyAnimeData = ref([]);

const selectedDay = ref('mon')
const dailyItemClasses = 'py-0 text-[#f4f4f4]'
const daysInWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

const overlay = useOverlay()
const animeModal = overlay.create(AnimeEntryModal)

onMounted(async () => {
    dailyAnimeData.value = allDailyAnimeData.value
    getAnimeListForSelectedDay()
    console.log(allDailyAnimeData.value)
})

const populateDaysInWeekNavItems = () => {
    return daysInWeek.map((day) => {
        return {
            label: day,
            active: day === selectedDay.value,
            class: dailyItemClasses,
            onSelect: ($event) => {
                selectedDay.value = day
                populateDaysInWeekNavItems()
                getAnimeListForSelectedDay()
            }
        }
    })
}

const getAnimeListForSelectedDay = () => {
    const animeOnSelectedDay = allDailyAnimeData.value.filter(dailyAnime => dailyAnime.my_status.watch_on === selectedDay.value)
    dailyAnimeData.value = animeOnSelectedDay
}

const openAnimeEntryModal = () => {
    animeModal.open()
}

</script>
