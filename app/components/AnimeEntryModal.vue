<template>
    <UModal open :ui="{ content: 'xl:max-w-[60%] max-w-[90%] p-5 bg-[#f4f4f4] overflow-y-scroll' }">
        <template #content>
            <div class="grid xl:grid-cols-3 grid-cols-1 xl:gap-5 gap-y-5 h-full">
                <div>
                    <UCard class="">
                        <img src="https://cdn.myanimelist.net/images/anime/1013/148711l.jpg" class="w-75 m-auto" />
                        <template #footer>
                            <div class="bg-[#1f1f1f] p-2 text-center text-white items-center">
                                <p class="text-xs">watching</p>
                            </div>
                            <div class="bg-[#f4f4f4] p-1 text-center text-primary items-center text-sm">
                                <p class="">episodes: <span class="font-bold">4 / 13</span></p>
                                <p class="">mal rating: <span class="font-bold">8.76</span></p>
                            </div>
                        </template>
                    </UCard>
                </div>
                <div class="col-span-2 flex flex-col h-full">
                    <div>
                        <div class="bg-[#1f1f1f] p-2 text-white text-center font-bold xl:table">
                            <p class="">Kaoru Hana wa Rin to Saku</p>
                        </div>
                        <div
                            class="border-2 border-primary border-t-0 font-bold p-1 text-primary text-center text-sm xl:table">
                            <p class="text-xs">CloverWorks</p>
                        </div>
                    </div>

                    <div
                        class="my-5 border-2 border-primary p-1 text-primary items-center text-sm overflow-hidden max-h-inital h-full">
                        <p>
                            Despite being adjacent to one another, Chidori Public High School and the all-girls Kikyo
                            Private Academy
                            seem to exist in two different worlds. While the latter boasts an immaculate reputation and
                            favors students
                            from wealthy backgrounds, the former is a nest for dim-witted delinquents. Everyone at Kikyo
                            harbors a deep
                            hatred for their Chidori neighbors.
                        </p>
                        <p>
                            Sixteen-year-old Rintarou Tsumugi is a student at Chidori whose intimidating face leads
                            people to avoid him.
                            Rintarou pays no mind to this, as he is content with his group of friends. However, there is
                            something he
                            has not told them yet: sometimes, he helps out at his family's cake shop.
                        </p>
                        <p>
                            One day at work, Rintarou sees a customer at a table, but she runs off before he can talk to
                            her. The next
                            day, he receives an apology from the girl, Kaoruko Waguri, who explains that she did not run
                            away because of
                            his appearance and that she believes Rintarou is a kind-hearted person. Although he is not
                            used to Kaoruko's
                            bright personality, Rintarou looks forward to forming a friendship with her. There is just
                            one obstacle that
                            stands in his way: Kaoruko is a Kikyo student!
                        </p>
                    </div>

                    <div class="border-2 border-primary border-t-0">
                        <div class="bg-[#1f1f1f] p-2 text-center text-white items-center">
                            <p class="text-xs">external links</p>
                        </div>
                        <div class="bg-[#f4f4f4] p-1 text-center text-primary items-center text-sm">
                            <p class="">episodes: <span class="font-bold">4 / 13</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="flex flex-col items-center justify-center gap-4">
            <h1 class="font-bold text-2xl text-(--ui-primary)">
                Nuxt UI - Starter
            </h1>
            </div> -->
        </template>
    </UModal>
</template>
