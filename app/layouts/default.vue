<template>
    <nav class="h-auto border-2 m-3 flex bg-[#f4f4f4]">
        <div class="w-30 border-r-2 p-1">
            <img src="~/assets/images/logo.png" class="h-full" alt="">
        </div>
        <div class="w-full">
            <UNavigationMenu highlight highlight-color="primary" :items="items"  class="w-full justify-center" />
        </div>
    </nav>
    
    <div class="h-full m-3 mt-5">
        <slot />
    </div>
    

</template>

<script setup lang="js">

const itemFontClasses = 'font-bold text-lg text-[#1f1f1f]'

const items = ref([
    {
        label: 'daily anime',
        to: '/daily',
        class: itemFontClasses,
        active: true
    },
    {
        label: 'tracker',
        to: '/tracker',
        class: itemFontClasses
    },
    {
        label: 'moments',
        to: '/moments',
        class: itemFontClasses
    },
    {
        label: 'about',
        to: '/about',
        class: itemFontClasses
    }

])

</script>
