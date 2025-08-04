<template>
    <UCard class="grayscale hover:grayscale-0 hover:cursor-pointer">
        <img src="https://cdn.myanimelist.net/images/anime/1013/148711l.jpg" class="w-75 m-auto" />
        <template #footer>
            <div class="bg-[#1f1f1f] p-2 text-center text-white font-bold items-center whitespace-nowrap">
                <p class="overflow-hidden text-ellipsis">{{title}}</p>
            </div>
            <div class="bg-[#f4f4f4] p-1 text-center text-primary font-bold items-center text-sm">
                <p class="">CloverWorks</p>
            </div>
        </template>
    </UCard>
</template>

<script lang="js" setup>

defineProps({
    title: {
        type: String,
        required: true
    },
})

</script>
