<template>
    <UModal open :ui="{ content: 'max-w-[60vw] p-5 bg-[#f4f4f4]' }">
        <template #content>
            <div class="flex flex-row max-h-[55vh]">
                <div class="basis-1/3 pr-5">
                    <div class="flex flex-col h-full jusitfy-between">
                        <div class="border-2 border-primary border-b-0 p-2">
                            <img src="https://cdn.myanimelist.net/images/anime/1013/148711l.jpg"
                                class="w-full h-auto m-auto" />
                        </div>
                        <div class="bg-[#1f1f1f] p-2 text-center text-white items-center">
                            <p class="text-xs">watching</p>
                        </div>
                        <div
                            class="bg-[#f4f4f4] border-2 border-primary border-t-0 p-1 text-center text-primary items-center text-sm h-full">
                            <p class="">episodes: <span class="font-bold">4 / 13</span></p>
                                <p class="">mal rating: <span class="font-bold">8.76</span></p>
                        </div>
                    </div>
                </div>
                <div class="basis-2/3">
                    <div class="flex flex-col gap-3 h-full jusitfy-between">
                        <div>
                            <div class="bg-[#1f1f1f] p-2 text-white text-center font-bold text-xl xl:table">
                                <p class="">Kaoru Hana wa Rin to Saku</p>
                            </div>
                            <div
                                class="border-2 border-primary border-t-0 font-bold p-1 text-primary text-center xl:table">
                                <p class="text-xs">CloverWorks</p>
                            </div>
                        </div>

                        <div class="flex gap-2">
                            <UBadge class="font-bold rounded-full">Romance</UBadge>
                            <UBadge class="font-bold rounded-full">School</UBadge>
                            <UBadge class="font-bold rounded-full">Drama</UBadge>
                        </div>

                        <div class="border-2 border-primary p-1 text-primary text-md h-full overflow-y-auto space-y-3">

                            <p>
                                Sixteen-year-old Rintarou Tsumugi is a student at Chidori whose intimidating face leads
                                people to avoid him.
                                Rintarou pays no mind to this, as he is content with his group of friends. However,
                                there is
                                something he
                                has not told them yet: sometimes, he helps out at his family's cake shop.
                            </p>
                            <p>
                                One day at work, Rintarou sees a customer at a table, but she runs off before he can
                                talk to
                                her. The next
                                day, he receives an apology from the girl, Kaoruko Waguri, who explains that she did not
                                run
                                away because of
                                his appearance and that she believes Rintarou is a kind-hearted person. Although he is
                                not
                                used to Kaoruko's
                                bright personality, Rintarou looks forward to forming a friendship with her. There is
                                just
                                one obstacle that
                                stands in his way: Kaoruko is a Kikyo student!
                            </p>
                            <p>
                                One day at work, Rintarou sees a customer at a table, but she runs off before he can
                                talk to
                                her. The next
                                day, he receives an apology from the girl, Kaoruko Waguri, who explains that she did not
                                run
                                away because of
                                his appearance and that she believes Rintarou is a kind-hearted person. Although he is
                                not
                                used to Kaoruko's
                                bright personality, Rintarou looks forward to forming a friendship with her. There is
                                just
                                one obstacle that
                                stands in his way: Kaoruko is a Kikyo student!
                            </p>
                            <p>
                                One day at work, Rintarou sees a customer at a table, but she runs off before he can
                                talk to
                                her. The next
                                day, he receives an apology from the girl, Kaoruko Waguri, who explains that she did not
                                run
                                away because of
                                his appearance and that she believes Rintarou is a kind-hearted person. Although he is
                                not
                                used to Kaoruko's
                                bright personality, Rintarou looks forward to forming a friendship with her. There is
                                just
                                one obstacle that
                                stands in his way: Kaoruko is a Kikyo student!
                            </p>
                            
                        </div>

                        <div class="border-2 border-primary border-t-0">
                            <div class="bg-[#1f1f1f] p-2 text-center text-secondary items-center">
                                <p class="text-xs">external links</p>
                            </div>
                            <div class="bg-[#f4f4f4] p-1 text-center text-primary items-center text-sm h-auto">
                                <p class="">episodes: <span class="font-bold">4 / 13</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </template>
    </UModal>

</template>