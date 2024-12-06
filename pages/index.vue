<script lang="ts" setup>
import { TabsComponent } from '#components'
import moment from 'moment';
import type { Availbility, Offer } from '~/models/api';


const store = useDataStore()

const { modalState, handleModal } = inject('modalControl', {
    modalState: ref(false),
    handleModal: () => { }
})

const isOpen = ref(false)
const isOpenAmenities = ref(false)

const itemsAction = [
    [{
        label: 'Actions',
        slot: 'header'
    }],
    [{
        label: 'Copy offer',
        icon: 'i-material-symbols:content-copy-outline'
    }], [{
        label: 'Screenshot offer',
        icon: 'i-mdi:line-scan'
    }],
]

const items = [{
    label: 'Deals',
    icon: 'i-mdi:tag-outline',
    content: 'This is the content shown for Tab1'
}, {
    label: 'Photos',
    icon: 'i-mdi:grid',
    content: 'And, this is the content for Tab2'
}, {
    label: 'Info',
    icon: 'i-mdi:information-outline',
    content: 'Finally, this is the content for Tab3'
}]



const itemsButton = [{
    label: 'TEXT',
    icon: 'i-mdi:format-text',
    content: 'This is the content shown for Tab1'
}, {
    label: 'IMAGE',
    icon: 'i-mdi:image',
    content: 'And, this is the content for Tab2'
}]

const activeTab = ref(0)
const activeTabButton = ref(0)
const activeRoom = ref<Offer>()


const handleModalButton = (selectOffer: Offer) => {
    isOpen.value = !isOpen.value
    activeRoom.value = selectOffer

}
const handleModalAmenitiesButton = async (selectOffer: Offer) => {
    isOpenAmenities.value = !isOpenAmenities.value
    activeRoom.value = selectOffer

    await store.fetchAmenities(selectOffer.room_data.id)

}

const handleTabChange = (payload: any) => {
    activeTab.value = payload.index
}
const handleTabButtonChange = (payload: any) => {
    activeTabButton.value = payload.index
}

const formatRate = (rate: string) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'decimal',
        currency: 'IDR'
    }).format(Number(rate))
}

const spokenLanguagesArray = computed(() => Object.values(store.content?.general_info.spoken_languages || {}));

// Reactive property to track the active filters
const activeFilters = ref<string[]>([]);

// Method to toggle the filter state
const toggleFilter = (filter: string) => {
    if (filter === '') {
        activeFilters.value = [];
    } else if (activeFilters.value.includes(filter)) {
        activeFilters.value = activeFilters.value.filter(f => f !== filter);
    } else {
        activeFilters.value.push(filter);
    }
};

// Computed property to filter the offers based on the active filters
const filteredOffers = computed(() => {
    if (activeFilters.value.length === 0) {
        return store.groupedAvailabilityByRoomName;
    }
    return Object.entries(store.groupedAvailabilityByRoomName).reduce((acc, [roomName, offers]) => {
        acc[roomName] = offers.filter(offer => {
            return (
                (!activeFilters.value.includes('breakfast') || offer.meal_plan_code !== 'RO') &&
                (!activeFilters.value.includes('cancel') || offer.cancel_policy_code !== 'RO')
            );
        });
        return acc;
    }, {} as Record<string, Availbility['offer_list']>);
});


const selectedRoom = computed(() => {
    return store.groupedAvailabilityByRoomName[activeRoom.value?.room_name || ''].find(v => v.offer_id === activeRoom.value?.offer_id);
})

const selectedRoomData = computed(() => {
    return store.content?.room[activeRoom.value?.room_data.id || '']
})

const isLoading = computed(() => store.isLoading);


</script>

<template>
    <main class="container mx-auto pt-4 px-4 md:px-6 lg:px-8">
        <!-- Hero section -->
        <section
            class="flex flex-col md:flex-row pt-20 md:pt-32 pb-10 md:pb-20 items-center md:px-8 lg:px-80 gap-8 md:gap-12 lg:gap-32">
            <div v-if="isLoading" class="animate-pulse flex flex-col items-center">
                <div class="rounded-full bg-gray-300 w-32 h-32 md:w-44 md:h-44"></div>
                <div class="mt-4 h-6 bg-gray-300 w-48"></div>
                <div class="mt-2 h-4 bg-gray-300 w-32"></div>
                <div class="mt-2 h-4 bg-gray-300 w-24"></div>
            </div>
            <img v-else :src="store.content?.catalog.hero_image_url.ori" alt="Fairmont Jakarta"
                class="rounded-full object-cover w-32 h-32 md:w-44 md:h-44" />

            <div v-if="isLoading"
                class="animate-pulse flex flex-col items-center md:items-start text-center md:text-left">
                <div class="h-6 bg-gray-300 w-48"></div>
                <div class="mt-2 h-4 bg-gray-300 w-32"></div>
                <div class="mt-2 h-4 bg-gray-300 w-24"></div>
                <div class="mt-2 h-4 bg-gray-300 w-16"></div>
            </div>
            <div v-else class="text-black items-center md:items-start flex flex-col text-center md:text-left">
                <div class="flex items-center text-center justify-center">
                    <h1 class="text-xl font-bold">{{ store.content?.name }}</h1>
                    <div class="text-yellow-500 flex ">
                        <div v-for=" (star) in store.content?.catalog.star_rating">
                            <UIcon name="i-fontisto:star" class="w-5" />
                        </div>

                    </div>
                </div>
                <p>{{ store.content?.catalog.category }}</p>
                <p>{{ store.content?.address_line }}</p>
                <div class="flex items-center justify-center gap-1">


                    <RadialComponent :text="String(store.content?.catalog.review_rating)"
                        :progress="store.content?.catalog.review_rating" :strokeWidth="5" :width="16" :height="16"
                        strokeColor="text-fuchsia-700" :max="100" :font-size="18" font-color="#a21caf" />



                    <div v-if="Number(store.content?.catalog.review_rating) > 90">
                        <p>Excellent</p>
                    </div>
                    <div v-else>
                        <p class="text-red-500">No Rating</p>
                    </div>
                    ·
                    <div>{{ store.content?.catalog.review_count }} reviews</div>
                </div>
            </div>
        </section>

        <section>
            <TabsComponent :items="items" @tabChange="handleTabChange" isTop />
            <div v-if="activeTab == 0">
                <div v-if="isLoading" class="animate-pulse py-10 text-gray-900">
                    <div class="flex flex-col justify-center items-center gap-6">
                        <div class="w-32 h-32 bg-gray-300 rounded-full"></div>
                        <div class="h-6 bg-gray-300 w-48"></div>
                        <div class="h-10 bg-gray-300 w-32"></div>
                    </div>
                </div>
                <div v-else>
                    <div v-if="Object.keys(store.groupedAvailabilityByRoomName).length === 0"
                        class="py-10 text-gray-900">
                        <div class="flex flex-col justify-center items-center gap-6">
                            <UIcon name="i-mdi:calendar-search-outline" class="w-32" />
                            <p>No available room on {{ store.dateFormatted }} for 2 guests per room and 1 room.</p>
                            <UButton label="Modify Search" color="blue" @click="handleModal" />
                        </div>
                    </div>
                    <section v-else>
                        <div class="flex items-center justify-center gap-3 text-gray-800 py-10">
                            <UIcon name="i-mdi:filter-outline" />
                            <p class="font-bold">Filter rooms by</p>
                            <UButton
                                :class="{ 'hover:bg-blue-100 bg-white text-blue-600': activeFilters.length != 0, 'bg-white hover:bg-gray-100 text-black': activeFilters.length == 0 }"
                                v-if="activeFilters.length > 0" @click="toggleFilter('')" variant="outline" class="">
                                Clear
                                All <div class="bg-blue-600 rounded-full w-5 h-5 text-white">{{ activeFilters.length }}
                                </div>
                            </UButton>
                            <UButton @click="toggleFilter('breakfast')"
                                :class="{ 'hover:bg-blue-200 bg-blue-100 text-blue-600': activeFilters.includes('breakfast'), 'bg-white hover:bg-gray-100 text-black': !activeFilters.includes('breakfast') }"
                                label="Free Breakfast" variant="ghost" icon="i-mdi:silverware-fork-knife"
                                class="rounded-xl font-semibold border" />
                            <UButton @click="toggleFilter('cancel')" label="Free Cancellation" variant="ghost"
                                :class="{ 'hover:bg-blue-200 bg-blue-100 text-blue-600': activeFilters.includes('cancel'), 'bg-white hover:bg-gray-100 text-black': !activeFilters.includes('cancel') }"
                                icon="i-material-symbols:credit-score-outline"
                                class="rounded-xl font-semibold border" />
                        </div>


                        <div class="flex items-center justify-center w-full">



                            <div class="flex flex-col w-full rounded-lg">

                                <div v-for="(offers, bedGroup) in filteredOffers" :key="bedGroup">


                                    <div class="flex flex-col lg:flex-row justify-center gap-6 w-full">

                                        <div class="flex flex-col items-center w-full lg:w-auto">


                                            <div class="relative">
                                                <NuxtImg :src="store.groupedImagesByRoomName[bedGroup][0]"
                                                    :alt="store.groupedImagesByRoomName[bedGroup][0]" loading="lazy"
                                                    class="w-full lg:w-[300px] h-auto rounded-lg" />
                                                <UButton label="See photos" variant="ghost" color="white"
                                                    @click="handleModalAmenitiesButton(offers[0])"
                                                    class="absolute bottom-2 left-2 bg-white rounded-lg items-center gap-2 p-1 shadow-lg">
                                                    <UIcon name="i-mdi:grid" />
                                                    <span>See photos</span>
                                                </UButton>
                                            </div>

                                            <div class="grid grid-cols-3 gap-1 justify-center pt-1 items-center">
                                                <div v-for="(image, index) in store.groupedImagesByRoomName[bedGroup]"
                                                    :key="index" class="flex justify-center items-center">

                                                    <div v-if="index < 3" class="relative w-24 h-24">
                                                        <NuxtImg
                                                            :src="store.groupedImagesByRoomName[bedGroup][index + 1]"
                                                            :alt="store.groupedImagesByRoomName[bedGroup][index + 1]"
                                                            loading="lazy" densities="x1 x2" quality="100" fit="contain"
                                                            class="max-w-full h-auto rounded-lg" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div
                                            class="shadow-xl rounded-lg bg-white border border-gray-200 mb-8 w-full lg:w-2/4">

                                            <div class="border-b border-gray-200 p-7">

                                                <div class="flex items-center justify-between">
                                                    <h3 class="text-xl font-bold mb-4">{{ bedGroup }}</h3>
                                                    <UButton label="See details" variant="ghost" color="blue"
                                                        @click="handleModalAmenitiesButton(offers[0])" />
                                                </div>


                                                <div class="flex items-center justify-start gap-2 text-gray-500">
                                                    <UIcon name="i-mdi:bed-king-outline" />
                                                    <p>{{ offers[0].room_bed_groups }}</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        role="img" aria-hidden="true" class="v-icon__svg"
                                                        style="font-size: 16px; height: 16px; width: 16px;">
                                                        <path
                                                            d="M23,15H21V17H23V15M23,11H21V13H23V11M23,19H21V21C22,21 23,20 23,19M15,3H13V5H15V3M23,7H21V9H23V7M21,3V5H23C23,4 22,3 21,3M3,21H11V15H1V19A2,2 0 0,0 3,21M3,7H1V9H3V7M15,19H13V21H15V19M19,3H17V5H19V3M19,19H17V21H19V19M3,3C2,3 1,4 1,5H3V3M3,11H1V13H3V11M11,3H9V5H11V3M7,3H5V5H7V3Z">
                                                        </path>
                                                    </svg>
                                                    <p>{{ offers[0].room_size_sqm }} m2</p>
                                                </div>

                                            </div>


                                            <div v-for="offer in offers" :key="offer.offer_id" class="overflow-hidden ">

                                                <div class="p-7 border-b border-gray-200">
                                                    <div class="flex flex-row items-center justify-between">
                                                        <div v-if="offer.meal_plan_code !== 'RO'"
                                                            class="flex items-center gap-2 text-green-600">
                                                            <UIcon name="i-material-symbols:restaurant" />
                                                            <p>{{ offer.meal_plan_description }}</p>
                                                        </div>

                                                        <div v-else class="flex items-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                role="img" aria-hidden="true" class="text-gray-800"
                                                                style="font-size: 16px; height: 16px; width: 16px;">
                                                                <!-- <line x1="4" y1="4" x2="20" y2="20"></line> -->
                                                                <path
                                                                    d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z">
                                                                </path>
                                                                <line x1="26" y1="26" x2="6" y2="6" stroke="gray"
                                                                    stroke-width="2" />
                                                            </svg>
                                                            <p class=" text-gray-800">Without breakfast</p>
                                                        </div>

                                                        <div>
                                                            <UTooltip text="Copy offer" :popper="{ placement: 'top', }">
                                                                <UButton icon="i-material-symbols:content-copy-outline"
                                                                    variant="ghost" color="gray"
                                                                    @click="handleModalButton(offer)" />
                                                            </UTooltip>
                                                            <UTooltip text="Screenshot offer"
                                                                :popper="{ placement: 'top' }">

                                                                <UButton icon="i-mdi:line-scan" variant="ghost"
                                                                    color="gray" @click="handleModalButton(offer)" />
                                                            </UTooltip>
                                                            <UTooltip text="See all action"
                                                                :popper="{ placement: 'top' }">
                                                                <UDropdown :items="itemsAction" :ui="{ divide: '' }">
                                                                    <UIcon name="i-mdi:dots-horizontal"
                                                                        class="text-gray-800" />
                                                                    <template #header="{ item }">
                                                                        <p>{{ item.label }}</p>


                                                                    </template>
                                                                    <template #item="{ item }">

                                                                        <UButton :icon="item.icon" :label="item.label"
                                                                            variant="ghost" color="gray"
                                                                            @click="handleModalButton(offer)" />
                                                                    </template>
                                                                </UDropdown>

                                                            </UTooltip>
                                                        </div>
                                                    </div>

                                                    <div class="flex flex-row items-center">
                                                        <div v-if="offer.cancel_policy_code !== 'RO'"
                                                            class="flex items-center gap-2 text-green-600">
                                                            <UIcon name="i-material-symbols:credit-score-outline" />
                                                            <p>{{ offer.cancel_policy_description }}</p>
                                                        </div>

                                                        <div v-else class="flex items-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                role="img" aria-hidden="true" class="text-gray-800"
                                                                style="font-size: 16px; height: 16px; width: 16px;">
                                                                <!-- <line x1="4" y1="4" x2="20" y2="20"></line> -->
                                                                <path
                                                                    d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z">
                                                                </path>
                                                                <line x1="26" y1="26" x2="6" y2="6" stroke="gray"
                                                                    stroke-width="2" />
                                                            </svg>
                                                            <p class=" text-gray-800">No Cancellation</p>
                                                        </div>


                                                    </div>


                                                    <div class="flex items-center justify-between">
                                                        <div>
                                                            <h4>Rp {{
                                                                formatRate(offer.pricing_data.rate_nightly.toString())
                                                                }}
                                                                /
                                                                night <span class="text-gray-500">*</span>
                                                            </h4>

                                                            <p class="text-gray-500">Total · Rp {{
                                                                formatRate(offer.pricing_data.price_total.toString()) }}
                                                            </p>

                                                            <p class="text-gray-500">after tax & fees</p>
                                                        </div>

                                                        <div class="flex justify-between items-center">

                                                            <button
                                                                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Book
                                                                Now</button>
                                                        </div>

                                                    </div>

                                                    <div class="flex items-center justify-between">
                                                        <p class="text-gray-500 text-sm">
                                                            <span class="text-gray-500">*</span>
                                                            Member-only price, valid in
                                                            app
                                                            only
                                                        </p>
                                                        <p class="text-blue-600 text-sm">
                                                            <UIcon name="i-mdi:star" /> Collect {{
                                                                offer.pricing_data.wisata_point }}
                                                            points
                                                        </p>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>


                                    </div>



                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div v-if="activeTab == 1">
                <div v-if="isLoading"
                    class="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
                    <div v-for="n in 8" :key="n" class="relative">
                        <div class="w-full h-48 bg-gray-300 rounded-lg"></div>
                    </div>
                </div>
                <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
                    <div v-for="(image, index) in store.content?.image" :key="index" class="relative">
                        <img :src="image.url.ori" :alt="image.caption"
                            class="w-full h-48 object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            <div v-if="activeTab == 2">
                <div v-if="isLoading" class="animate-pulse py-10">
                    <div class="h-6 bg-gray-300 w-48"></div>
                    <div class="mt-2 h-4 bg-gray-300 w-32"></div>
                    <div class="mt-2 h-4 bg-gray-300 w-24"></div>
                    <div class="mt-2 h-4 bg-gray-300 w-16"></div>
                </div>
                <div v-else class="py-10">
                    <div class="pb-5">
                        <h3 class="text-xl font-bold">About the property</h3>
                        <p>{{ store.content?.general_info.descriptions.location }}</p>
                        <p>{{ store.content?.general_info.descriptions.dining }}</p>
                        <p>{{ store.content?.general_info.descriptions.amenities }}</p>

                        <div class="py-5">
                            <h4 class="text-lg font-semibold">Languages</h4>
                            <div class="flex">
                                <div v-for="(lang, i) in spokenLanguagesArray">
                                    <p v-if="i === spokenLanguagesArray.length - 1">{{ lang.name }}.</p>
                                    <p v-else>{{ lang.name + ", " }}</p>
                                </div>
                            </div>

                        </div>
                        <h4 class="text-lg font-semibold">Policies</h4>
                        <div class="flex gap-4 py-5">
                            <div>
                                <h4>Check-in</h4>
                                <p>{{ store.content?.important_info.checkin.begin_time }}</p>
                            </div>
                            <div>
                                <h4>Check-out</h4>
                                <p>{{ store.content?.important_info.checkout.time }}</p>
                            </div>
                        </div>
                        <div class="pb-5">
                            <h4 class="text-lg font-semibold">Additional check-in information</h4>
                            <div v-html="store.content?.important_info.checkin.instructions"></div>
                        </div>

                        <h4 class="text-lg font-semibold">Others</h4>
                        <div v-html="store.content?.important_info.policies.know_before_you_go"></div>
                    </div>

                    <h3 class="text-xl font-bold">Important information</h3>
                    <div class="py-5">
                        <h4 class="text-lg font-semibold">Optional charges</h4>
                        <div v-html="store.content?.important_info.fees.optional"></div>
                    </div>

                </div>
            </div>

        </section>


        <UModal v-model="isOpen" :ui="{
            width: 'w-[90vw] md:w-[50vh]',
            height: 'h-[80vh] md:h-[40vh]',
            overflow: 'overflow-y-auto',
            strategy: 'override'
        }">

            <div class="w-full h-full overflow-auto">

                <div class="flex items-center justify-between border-b h-12">
                    <div class="flex items-center justify-center pl-4 md:pl-40 gap-2">
                        <UIcon name="i-mdi:share-variant-outline" class="text-blue-500" />
                        <h2>Share This Offer</h2>
                    </div>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="isOpen = false" />
                </div>


                <div class="flex flex-col md:flex-row justify-center">
                    <section class="w-full md:w-96 h-full">
                        <TabsComponent :items="itemsButton" @tabChange="handleTabButtonChange" :isTop=false />
                        <div v-if="activeTabButton == 0">
                            <div v-if="isLoading"
                                class="animate-pulse flex items-start flex-col bg-gray-100 text-sm gap-y-5 p-5 w-96 h-96">
                                <div class="h-6 bg-gray-300 w-48"></div>
                                <div class="mt-2 h-4 bg-gray-300 w-32"></div>
                                <div class="mt-2 h-4 bg-gray-300 w-24"></div>
                                <div class="mt-2 h-4 bg-gray-300 w-16"></div>
                            </div>
                            <div v-else class="flex items-start flex-col bg-gray-100 text-sm gap-y-5 p-5 w-96 h-96">
                                <div>
                                    <p>{{ store.content?.name }}</p>
                                    <p v-if="(store.content?.catalog.review_rating ?? 0) > 90">Excellent ({{
                                        store.content?.catalog.review_rating }} of 100) · {{
                                            store.content?.catalog.review_count }} reviews</p>
                                    <p>{{ store.dateFormatted }} · {{
                                        moment.duration(moment(store.checkout).diff(moment(store.checkin))).days() }}
                                        nights</p>
                                </div>

                                <div>
                                    <p>{{ selectedRoom?.room_name }}</p>
                                    <p>{{ selectedRoom?.room_bed_groups }}</p>
                                    <p>{{ selectedRoom?.meal_plan_description }} · {{
                                        selectedRoom?.cancel_policy_description }}</p>
                                    <p>Rp {{ formatRate(String(selectedRoom?.rate_nightly)) }} / night</p>
                                    <p>Total · Rp {{ formatRate(String(selectedRoom?.price_total)) }} ({{ store.rooms }}
                                        room, {{
                                            moment.duration(moment(store.checkout).diff(moment(store.checkin))).days() }}
                                        nights)</p>
                                </div>

                                <p>*Price is subject to change without prior notice</p>

                            </div>
                        </div>

                        <div v-if="activeTabButton == 1">

                            <div v-if="isLoading"
                                class="animate-pulse flex items-start justify-center flex-col bg-gray-100 p-5 w-96 h-96">
                                <div class="h-6 bg-gray-300 w-48"></div>
                                <div class="mt-2 h-4 bg-gray-300 w-32"></div>
                                <div class="mt-2 h-4 bg-gray-300 w-24"></div>
                                <div class="mt-2 h-4 bg-gray-300 w-16"></div>
                            </div>
                            <div v-else class="flex items-start justify-center flex-col bg-gray-100 p-5 w-96 h-96">
                                <UCard :ui="{ strategy: 'override', base: 'w-80 h-96' }">
                                    <div class="flex items-center text-center justify-start">
                                        <h1 class="text-sm font-bold">{{ store.content?.name }}</h1>
                                        <div class="text-yellow-500 flex ">
                                            <div v-for=" (star) in store.content?.catalog.star_rating">
                                                <UIcon name="i-fontisto:star" class="w-2" />
                                            </div>

                                        </div>
                                    </div>

                                    <div class="flex items-center justify-start gap-1">


                                        <RadialComponent :text="String(store.content?.catalog.review_rating)"
                                            :progress="store.content?.catalog.review_rating" :strokeWidth="5"
                                            :width="12" :height="12" strokeColor="text-fuchsia-700" :max="100"
                                            :font-size="18" font-color="#a21caf" />



                                        <div v-if="Number(store.content?.catalog.review_rating) > 90" class="text-sm">
                                            <p>Excellent</p>
                                        </div>
                                        <div v-else class="text-sm">
                                            <p class="text-red-500">No Rating</p>
                                        </div>
                                        ·
                                        <div class="text-sm">{{ store.content?.catalog.review_count }} reviews</div>
                                    </div>

                                    <p class="text-xs">{{ store.dateFormatted }} · {{
                                        moment.duration(moment(store.checkout).diff(moment(store.checkin))).days() }}
                                        nights</p>


                                    <img :src="selectedRoom?.room_images[0].size_sm" :alt="selectedRoom?.room_name"
                                        class="w-64 h-28 object-cover rounded-lg shadow-md my-2" />
                                    <div>
                                        <h3 class="text-sm font-bold">{{ selectedRoom?.room_name }}</h3>
                                        <div class="flex items-center justify-start text-sm gap-2">
                                            <p>{{ selectedRoom?.room_bed_groups }}</p>
                                            <p>{{ selectedRoom?.room_size_sqm }} m2</p>
                                        </div>
                                    </div>

                                    <div>


                                        <div class="flex flex-row items-center text-sm gap-y-2">
                                            <div v-if="selectedRoom?.cancel_policy_code !== 'RO'"
                                                class="flex items-center gap-2 text-green-600">
                                                <UIcon name="i-material-symbols:credit-score-outline" />
                                                <p>{{ selectedRoom?.cancel_policy_description }}</p>
                                            </div>

                                            <div v-else class="flex items-center gap-2 text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img"
                                                    aria-hidden="true" class="text-gray-800"
                                                    style="font-size: 16px; height: 16px; width: 16px;">

                                                    <path
                                                        d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z">
                                                    </path>
                                                    <line x1="26" y1="26" x2="6" y2="6" stroke="gray"
                                                        stroke-width="2" />
                                                </svg>
                                                <p class=" text-gray-800">No Cancellation</p>
                                            </div>


                                        </div>


                                        <div class="flex items-center justify-between text-xs">
                                            <div>
                                                <p>Rp {{ formatRate(String(selectedRoom?.rate_nightly)) }} / night</p>
                                                <p>Total · Rp {{ formatRate(String(selectedRoom?.price_total)) }} ({{
                                                    store.rooms }}
                                                    room, {{
                                                        moment.duration(moment(store.checkout).diff(moment(store.checkin))).days()
                                                    }}
                                                    nights)</p>

                                                <p>*Price is subject to change without prior notice</p>
                                            </div>


                                        </div>
                                    </div>
                                </UCard>

                            </div>






                        </div>

                    </section>

                    <section class="flex flex-col justify-between mt-4 md:mt-0">
                        <div>
                            <div class="flex items-center justify-between h-11 border-b p-3 text-sm">
                                <p>Address</p>
                                <UButton icon="i-mdi:eye" size="sm" variant="ghost" color="black" />
                            </div>
                            <div class="flex items-center justify-between h-11 border-b  p-3 text-sm">
                                <p>Hotel Reviews</p>
                                <UButton icon="i-mdi:eye" size="sm" variant="ghost" color="black" />
                            </div>
                            <div class="flex items-center justify-between h-11 border-b  p-3 text-sm">
                                <p>Room info (bed type, room size, view)</p>
                                <UButton icon="i-mdi:eye" size="sm" variant="ghost" color="black" />
                            </div>
                            <div class="flex items-center justify-between h-11 border-b  p-3 text-sm">
                                <p>Total price</p>
                                <UButton icon="i-mdi:eye" size="sm" variant="ghost" color="black" />
                            </div>
                        </div>

                        <div class="flex items-center justify-around h-10 border-t w-full">
                            <UButton label="Copy as Text" color="blue" variant="outline" icon="i-mdi:content-copy" />
                            <UButton label="Copy as Image" color="blue" variant="outline" icon="i-mdi:line-scan" />
                        </div>

                    </section>

                </div>

            </div>


        </UModal>

        <UModal v-model="isOpenAmenities" :ui="{
            width: 'w-[90vw] md:w-[40vw]',
            height: 'h-[80vh] md:h-[40vh]',
            strategy: 'override'
        }">


            <div class="flex flex-col md:flex-row justify-center h-full">
                <section class="w-full md:w-full md:h-full bg-black flex flex-col items-center justify-center">
                    <UCarousel v-slot="{ item, index }" :items="selectedRoomData.images" :ui="{
                        item: 'basis-full'
                    }" class="overflow-hidden" arrows>

                        <NuxtImg :src="item.links['1000px'].href" :alt="item.caption" loading="lazy" fit="contain" />





                    </UCarousel>
                    <!-- <div class="relative bottom-0 right-0 bg-gray-700 bg-opacity-30 text-white rounded-lg">
                        <p>{{ index + 1 }} / {{ selectedRoomData.images.length }}</p>
                    </div> -->
                </section>

                <section class="flex flex-col w-3/5 overflow-y-auto">
                    <div class="flex items-center justify-between border-b px-4 py-2">
                        <h3>Room Details</h3>
                        <UButton color="blue" variant="ghost" icon="i-heroicons-x-mark-20-solid"
                            @click="isOpenAmenities = false" />
                    </div>

                    <p class="px-4">{{ selectedRoomData.name }}</p>

                    <div class="flex items-center justify-start gap-2 text-gray-500 px-4">
                        <UIcon name="i-mdi:bed-king-outline" />
                        <p>{{ activeRoom?.room_bed_groups }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                            class="v-icon__svg" style="font-size: 16px; height: 16px; width: 16px;">
                            <path
                                d="M23,15H21V17H23V15M23,11H21V13H23V11M23,19H21V21C22,21 23,20 23,19M15,3H13V5H15V3M23,7H21V9H23V7M21,3V5H23C23,4 22,3 21,3M3,21H11V15H1V19A2,2 0 0,0 3,21M3,7H1V9H3V7M15,19H13V21H15V19M19,3H17V5H19V3M19,19H17V21H19V19M3,3C2,3 1,4 1,5H3V3M3,11H1V13H3V11M11,3H9V5H11V3M7,3H5V5H7V3Z">
                            </path>
                        </svg>
                        <p class="px-4">{{ activeRoom?.room_size_sqm }} m2</p>
                    </div>

                    <div class="px-4">
                        <h3>Room Amenities</h3>


                    </div>

                </section>

            </div>




        </UModal>
    </main>
</template>

<style scoped>
@media (max-width: 768px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>
