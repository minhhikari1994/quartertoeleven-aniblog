<template>
    <UCard class="grayscale hover:grayscale-0 hover:cursor-pointer">
        <img :src="image" class="w-75 m-auto" />
        <template #footer>
            <div class="bg-[#1f1f1f] p-2 text-center text-white font-bold items-center whitespace-nowrap">
                <p class="overflow-hidden text-ellipsis">{{title}}</p>
            </div>
            <div class="bg-[#f4f4f4] p-1 text-center text-primary font-bold items-center text-sm">
                <p class="">{{studios.join(', ')}}</p>
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
    studios: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

</script>
