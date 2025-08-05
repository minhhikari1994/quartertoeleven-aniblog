<template>
    <div class="h-auto flex bg-[#1f1f1f] p-2 flex items-center">
        <div class="text-white font-bold items-center text-lg">
            <span>daily anime</span>
        </div>
        <div class="text-white font-bold grow content-end">
            <div class="w-full">
                <UNavigationMenu highlight highlight-color="secondary" :items="daily"
                    class="w-full justify-end p-none" />
            </div>
        </div>
    </div>

    <div class="h-[calc(100vh-10rem)] w-full border-2 border-[#1f1f1f] bg-[#f4f4f4] p-2 overflow-y-scroll">

        <div class="my-4 flex flex-wrap gap-5 justify-center">
            <AnimeEntry v-for="dailyAnime in dailyAnimeData" :key="dailyAnime.mal_id" class="2xl:w-xs w-sm"
                @click="openAnimeEntryModal" :title="dailyAnime.title" :studios="dailyAnime.studios" :image="dailyAnime.image" />
            <!-- <AnimeEntry class="2xl:w-xs w-sm" title="Game Center Shoujo to Ibunka Kouryuu" @click="openAnimeEntryModal" />
            <AnimeEntry class="2xl:w-xs w-sm" title="Kaoru Hana wa Rin to Saku" />
            <AnimeEntry class="2xl:w-xs w-sm" title="Seishun Buta Yarou wa Santa Claus no Yume wo Minai" />
            <AnimeEntry class="2xl:w-xs w-sm" title="Game Center Shoujo to Ibunka Kouryuu" />
            <AnimeEntry class="2xl:w-xs w-sm" title="Kaoru Hana wa Rin to Saku" />
            <AnimeEntry class="2xl:w-xs w-sm" title="Seishun Buta Yarou wa Santa Claus no Yume wo Minai" />
            <AnimeEntry class="2xl:w-xs w-sm" title="Game Center Shoujo to Ibunka Kouryuu" />
            <AnimeEntry class="2xl:w-xs w-sm" title="Kaoru Hana wa Rin to Saku" />
            <AnimeEntry class="2xl:w-xs w-sm" title="Seishun Buta Yarou wa Santa Claus no Yume wo Minai" /> -->
        </div>
    </div>

    <AnimeEntryModal />
</template>

<script lang="js" setup>
import AnimeEntry from '~/components/AnimeEntry.vue';
import AnimeEntryModal from '~/components/AnimeEntryModal.vue';

const overlay = useOverlay()
const animeModal = overlay.create(AnimeEntryModal)

const { data: dailyAnimeData } = await useFetch('/api/dailyAnime')

const dailyItemClasses = 'py-0 text-[#f4f4f4]'

const daily = ref([
    {
        label: 'mon',
        class: dailyItemClasses
    },
    {
        label: 'tue',
        class: dailyItemClasses
    },
    {
        label: 'tue',
        class: dailyItemClasses
    },
    {
        label: 'wed',
        class: dailyItemClasses
    },
    {
        label: 'thu',
        class: dailyItemClasses
    },
    {
        label: 'fri',
        class: dailyItemClasses
    },
    {
        label: 'sat',
        class: dailyItemClasses,
        active: true
    },
    {
        label: 'sun',
        class: dailyItemClasses
    },

])

const openAnimeEntryModal = () => {
    animeModal.open()
}

console.log(dailyAnimeData.value)
</script>
