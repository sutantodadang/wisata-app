<script lang="ts" setup>
import moment from 'moment';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { InputComponent } from "#components";
import { debounce } from '~/utils/debounce';

const store = useDataStore()

const emit = defineEmits(['success', 'close']);

const location = ref(store.content?.name + ', ' + store.content?.name_suffix);
const dateRange = ref([store.checkin, store.checkout]);
const dateFormat = computed(() => store.dateFormatted)
const minDate = computed(() => moment().subtract(1, 'days').toDate())
const guest = ref(store.guests)
const room = ref(store.rooms)
const isLoading = ref(false);

interface LocationResult {
    label: string;
    icon: string;
    value: {
        id: string;
        location_type: string;
        name: string;
        name_suffix: string;
        slug: string;
        fuzzy_ratio: number;
        hit_quality: number;
        highlight_data: {
            name: string;
            name_suffix: string;
        };
    };
}

const searchResults = ref<LocationResult[]>([])



const formatGuestRoom = computed(() => {

    switch (guest.value) {
        case 1:
            return `Single Room X ${room.value}`
        case 2:
            return `Double Room X ${room.value}`
        case 3:
            return `Triple Room X ${room.value}`
        default:
            return `Group Of ${guest.value} X ${room.value}`
    }

})

const handleGuest = (type: string) => {

    if (type === 'add') {
        guest.value += 1
    } else {
        guest.value -= 1
    }
}

const handleRoom = (type: string) => {
    if (type === 'add') {
        room.value += 1
    } else {
        room.value -= 1
    }
}

async function onClose() {
    await store.fetchContent(store.properties[0].id)
    await store.fetchAvailability(store.properties[0].id)
    emit('close', false);
}




watch(dateRange, (newDateRange) => {
    store.checkin = newDateRange[0];
    store.checkout = newDateRange[1];
});

// Handle selection of a location
const selectLocation = (selectedLocation: any) => {
    location.value = selectedLocation.name + ', ' + selectedLocation.name_suffix
    store.query = selectedLocation.name + ', ' + selectedLocation.name_suffix
    searchResults.value = [] // Clear results after selection
}

const fetchLocationData = debounce(async () => {
    if (location.value.length < 3) {
        searchResults.value = []
        return
    }

    try {
        isLoading.value = true
        store.query = location.value
        await store.fetchQuery()
        searchResults.value = store.location.map(loc => ({
            label: loc.name,
            icon: 'i-mdi:map-marker-outline',
            value: loc // Store full location object if needed
        }))
    } catch (error) {
        console.error('Error fetching locations:', error)
        searchResults.value = []
    } finally {
        isLoading.value = false
    }
}, 500)

// Watch for changes in location input
watch(location, (newLocation) => {
    if (newLocation) {
        fetchLocationData()
    } else {
        searchResults.value = []
    }
})

// Computed property to transform fetched location data into dropdown items
const dropdownItems = computed(() => {

    const items = store.properties.map((item) => ({
        property: item.location_type === 'property' ? 'HOTEL' : 'LANDMARK',
        suffix: item.highlight_data.name_suffix,
        label: item.highlight_data.name,
        icon: item.location_type === 'property' ? 'i-mdi:bed-outline' : 'i-mdi:bed',
        name: item.name,
        name_suffix: item.name_suffix
    }))

    return [items, store.location.map(loc => ({
        property: loc.location_type === 'province_state' ? 'AREA' : loc.location_type === 'city' ? 'CITY' : loc.location_type === 'neighborhood' ? 'AREA' : 'LANDMARK',
        suffix: loc.highlight_data.name_suffix,
        label: loc.highlight_data.name,
        icon: loc.location_type === 'province_state' ? 'i-mdi:map-marker-outline' : loc.location_type === 'city' ? 'i-mdi:city' : loc.location_type === 'neighborhood' ? 'i-mdi:city-variant-outline' : 'i-mdi:bank-outline',
        name: loc.name,
        name_suffix: loc.name_suffix
    }))];
});


</script>

<template>

    <div class="bg-white rounded-b-xl shadow-lg w-2/5 h-28 flex px-10 py-10 gap-2 items-center justify-between">

        <UDropdown :items="dropdownItems" :popper="{ placement: 'bottom-start' }" class="w-[150%]"
            :ui="{ width: 'w-80', height: 'h-96' }">
            <InputComponent v-model:value="location" placeholder="Where are you going?" icon="i-mdi:map-marker-outline"
                type="text" class="w-[150%]" use-clear @focus="fetchLocationData" />
            <template #item="{ item }">
                <div v-if="isLoading" class="flex items-center justify-center py-2">
                    <UIcon name="i-mdi:loading" class="animate-spin h-5 w-5 text-gray-500" />
                    <span class="ml-2 text-gray-500">Loading...</span>
                </div>

                <div class="flex flex-col items-start justify-start py-2" @click="selectLocation(item)">
                    <div class="flex items-center w-16 justify-around rounded"
                        :class="item.property === 'HOTEL' ? 'bg-blue-100 ' : 'bg-green-100 '">
                        <UIcon :name="item.icon" class="h-4 w-4 text-gray-400 dark:text-gray-500"
                            :class="item.property === 'HOTEL' ? 'bg-blue-700 ' : 'bg-green-700 '" />
                        <p class=" text-sm" :class="item.property === 'HOTEL' ? 'text-blue-700 ' : 'text-green-700 '">
                            {{ item.property }}</p>
                    </div>
                    <p v-html="item.label" class="text-start"></p>
                    <p v-html="item.suffix" class="text-start"></p>
                </div>

            </template>
        </UDropdown>


        <VueDatePicker v-model="dateRange" :range="true" id="datepicker" :min-date="minDate">
            <template #trigger>
                <InputComponent :value="dateFormat" placeholder="Check-in - Check-out" icon="i-mdi:calendar" type="text"
                    class="w-full" />
            </template>
        </VueDatePicker>



        <UPopover class="w-full">
            <InputComponent v-model:value="formatGuestRoom" placeholder="Guests & Rooms"
                icon="i-mdi:account-multiple-outline" type="text" class="w-full" />

            <template #panel="{ close }">

                <div class="p-8 flex justify-between">
                    <UButton icon="i-mdi:minus" size="sm" color="gray" variant="ghost" :trailing="false"
                        @click="handleGuest('subtract')" />
                    <div class="flex flex-col items-center">
                        <p>{{ formatGuestRoom.split("X")[0] }}</p>
                        <p>{{ guest }} guests/room</p>
                        <UButton icon="i-mdi:information-slab-circle-outline" size="2xs" color="gray"
                            label="What About Children" variant="ghost" :trailing="false" />
                    </div>
                    <UButton icon="i-mdi:plus" size="sm" color="blue" variant="ghost" :trailing="false"
                        @click="handleGuest('add')" />
                </div>
                <div class="p-8 flex items-center justify-between">
                    <UButton icon="i-mdi:minus" size="sm" color="gray" variant="ghost" :trailing="false"
                        @click="handleRoom('subtract')" />

                    <p>{{ room }} Rooms</p>

                    <UButton icon="i-mdi:plus" size="sm" color="blue" variant="ghost" :trailing="false"
                        @click="handleRoom('add')" />

                </div>
            </template>
        </UPopover>



        <UButton @click="onClose" label="Search" icon="i-mdi:magnify" :trailing="false" color="blue"
            class="w-[12%] h-12" />
    </div>

</template>