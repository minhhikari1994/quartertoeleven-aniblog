<template>
    <UModal
        :ui="{ 
            content: 'xl:max-w-[60vw] max-w-[90vw] bg-[#f4f4f4] rounded-none overflow-y-scroll',
            header: 'sm:p-0 p-0 min-h-0 flex-row-reverse border-0'
        }">
        <template #header>
            <UButton class="bg-primary rounded-none relative align-end" color="secondary" icon="i-lucide-x" @click="$emit('close')" size="xs" />
        </template>
        <template #body class="">
            <div class="flex lg:flex-row flex-col xl:max-h-[61vh] max-h-[80vh]">
                <div class="basis-1/3 lg:pr-5">
                    <div class="lg:hidden">
                        <div class="bg-[#1f1f1f] p-2 text-white text-center font-bold text-xl xl:table">
                            <p class="">{{animeEntry.title}}</p>
                        </div>
                        <div
                            class="border-2 border-primary border-t-0 border-b-0 font-bold p-1 text-primary text-center xl:table">
                            <p class="text-xs">CloverWorks</p>
                        </div>
                    </div>
                    <div class="flex flex-col h-full jusitfy-between">
                        <div class="border-2 border-primary border-b-0 p-2">
                            <img :src="animeEntry.image"
                                class="lg:w-full h-auto w-auto m-auto" />
                        </div>
                        <div class="bg-[#1f1f1f] p-2 text-center text-white items-center">
                            <p class="text-xs">{{animeEntry.my_status.current_status}}</p>
                        </div>
                        <div
                            class="bg-[#f4f4f4] border-2 border-primary border-t-0 p-1 text-center text-primary items-center text-sm h-full">
                            <p class="">episodes: <span class="font-bold">{{animeEntry.my_status.watched_episodes}} / {{ animeEntry.episodes || '?' }}</span></p>
                            <p class="">mal rating: <span class="font-bold">{{ animeEntry.mal_score }}</span></p>
                        </div>
                    </div>
                </div>
                <div class="basis-2/3">
                    <div class="flex flex-col gap-3 h-full jusitfy-between">
                        <div>
                            <div
                                class="bg-[#1f1f1f] p-2 text-white text-center font-bold text-xl lg:table hidden lg:block">
                                <p class="">{{animeEntry.title}}</p>
                            </div>
                            <div
                                class="border-2 border-primary font-bold p-1 text-primary text-center lg:table hidden lg:block">
                                <p class="text-xs">{{animeEntry.studios.join(',')}}</p>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 lg:justify-start justify-center">
                            <UBadge v-for="genre in animeEntry.genres" class="font-bold rounded-full">{{genre}}</UBadge>
                        </div>

                        <div class="border-2 border-primary p-1 text-primary text-md h-full overflow-y-auto space-y-3" v-html="animeEntry.synopsis.replace(/\n/g, '<br>')"></div>

                        <!-- <div class="border-2 border-primary border-t-0">
                            <div class="bg-[#1f1f1f] p-2 text-center text-secondary items-center">
                                <p class="text-xs">external links</p>
                            </div>
                            <div class="bg-[#f4f4f4] p-1 text-center text-primary items-center text-sm">
                                <p class=""></p>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>

        </template>
    </UModal>
</template>

<script setup lang="js">

defineProps({
    animeEntry: {
        type: Object,
        required: true
    }
})

</script>