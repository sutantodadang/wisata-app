import moment from 'moment';
import { defineStore } from 'pinia';
import type { Availbility } from '~/models/api';
import type { DataContent } from '~/models/content';
import type { Property } from '~/models/property';
import type { Ilocation } from '~/models/location';


export const useDataStore = defineStore('data', {

    state: () => ({
        config: useRuntimeConfig(),
        data: [] as any[],
        properties: [] as Property[],
        location: [] as Ilocation[],
        content: null as DataContent | null,
        availability: null as Availbility | null,
        checkin: moment().toDate(),
        checkout: moment().add(2, 'days').toDate(),
        guests: 2,
        rooms: 1,
        loading: false,
        query: 'Fairmont Jakarta, Jakarta, Indonesia',
        error: null as string | null,
        isLoading: false,
    }),
    actions: {
        async fetchData(apiUrl: string) {
            this.isLoading = true;
            this.loading = true;
            this.error = null;
            try {
                const response = await $fetch(apiUrl);
                const data = await (response as Response).json();
                this.data = data;
            } catch (error) {
                if (error instanceof Error) {
                    this.error = error.message;
                } else {
                    this.error = String(error);
                }
            } finally {
                this.loading = false;
                this.isLoading = false;
            }
        },

        formatQuery(query: string) {
            const parts = query.split(' ')
            return parts.join('+')
        },

        async fetchProperties() {
            this.isLoading = true;
            this.loading = true;
            this.error = null;
            try {
                const response = await $fetch(`${this.config.public.baseUrl}/property/search?query=${this.formatQuery(this.query)}`)

                const data = await response as any

                this.properties = data

                for (const property of this.properties) {

                    await Promise.all([
                        this.fetchContent(property.id),
                        this.fetchAvailability(property.id)
                    ])
                }
            } catch (error) {
                if (error instanceof Error) {
                    this.error = error.message;
                } else {
                    this.error = String(error);
                }
                console.error('Error fetching properties:', error)
            } finally {
                this.loading = false;
                this.isLoading = false;
            }
        },
        async fetchContent(propertyId: string) {
            this.isLoading = true;
            const url = `${this.config.public.baseUrl}/property/content?id=${propertyId}&include=image&include=general_info&include=important_info&include=room`

            try {
                const response = await $fetch(url)
                const data = await response as any

                this.content = data[propertyId]
            } catch (error) {
                console.error(`Error fetching availability for property ${propertyId}:`, error)
            } finally {
                this.isLoading = false;
            }
        },

        async fetchAvailability(propertyId: string) {
            this.isLoading = true;
            const checkin = moment(this.checkin).format('YYYY-MM-DD')
            const checkout = moment(this.checkout).format('YYYY-MM-DD')
            const url = `${this.config.public.baseUrl}/stay/availability/${propertyId}?checkin=${checkin}&checkout=${checkout}&guest_per_room=${this.guests}&number_of_room=${this.rooms}`

            try {
                const response = await $fetch(url)
                const data = await response as any
                this.availability = data
            } catch (error) {
                console.error(`Error fetching availability for property ${propertyId}:`, error)
            } finally {
                this.isLoading = false;
            }
        },

        async fetchQuery() {
            this.loading = true;
            this.error = null;
            try {
                const response = await $fetch(`${this.config.public.baseUrl}/property/search?query=${this.formatQuery(this.query)}`)

                const data = await response as any

                this.properties = data

                const responseLoc = await $fetch(`${this.config.public.baseUrl}/location/search?query=${this.formatQuery(this.query)}`)


                const dataLoc = await responseLoc as any

                this.location = dataLoc


            } catch (error) {
                if (error instanceof Error) {
                    this.error = error.message;
                } else {
                    this.error = String(error);
                }
                console.error('Error fetching properties:', error)
            } finally {
                this.loading = false;

            }
        },

        async fetchAmenities(roomId: string) {
            this.isLoading = true;

            const url = `${this.config.public.eksternalUrl}/amenities`

            try {
                const response = await $fetch(url, {
                    method: 'POST',
                    body: JSON.stringify({ context: 'room', amenities: JSON.stringify(this.content?.room[roomId].amenities) }),
                    headers: { 'Content-Type': 'application/json' },
                    mode: 'no-cors'
                })


                const data = await response as any
                if (this.content) {
                    this.content.show_amenity = data;
                }
            } catch (error) {
                console.error(`Error fetching availability for property ${roomId}:`, error)
            } finally {
                this.isLoading = false;
            }
        },

    },

    getters: {
        // grooup availability by room_name
        groupedAvailabilityByRoomName(): Record<string, Availbility['offer_list']> {
            if (!this.availability) return {}

            return this.availability.offer_list.reduce((acc, offer) => {
                if (!acc[offer.room_name]) {
                    acc[offer.room_name] = []
                }
                acc[offer.room_name].push(offer)
                return acc
            }, {} as Record<string, Availbility['offer_list']>)
        },

        groupedAvailability(): Record<string, Availbility['offer_list']> {
            if (!this.availability) return {}

            return this.availability.offer_list.reduce((acc, offer) => {
                if (!acc[offer.room_bed_groups]) {
                    acc[offer.room_bed_groups] = []
                }
                acc[offer.room_bed_groups].push(offer)
                return acc
            }, {} as Record<string, Availbility['offer_list']>)
        },

        groupedImagesByRoomName(): Record<string, string[]> {
            if (!this.availability) return {}

            const groupedImages = this.availability.offer_list.reduce((acc, offer) => {
                if (!acc[offer.room_name]) {
                    acc[offer.room_name] = new Set<string>()
                }
                if (offer.room_images) {
                    offer.room_images.forEach(image => acc[offer.room_name].add(image.size_sm))
                }
                return acc
            }, {} as Record<string, Set<string>>)

            return Object.fromEntries(
                Object.entries(groupedImages).map(([key, value]) => [key, Array.from(value)])
            )
        },

        groupedImages(): string[] {
            if (!this.availability) return []

            const imageSet = new Set<string>();

            this.availability.offer_list.forEach(offer => {
                if (offer.room_images) {
                    offer.room_images.forEach(image => imageSet.add(image.size_sm));
                }
            });

            return Array.from(imageSet);
        },

        dateFormatted(): string {
            return formattedDate(this.checkin, this.checkout)
        },

        getSelectedRoom(): any {

            return this.content?.show_amenity

        }


    }
});





