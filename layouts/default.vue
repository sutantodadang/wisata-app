<script setup lang="ts">

const store = useDataStore()
const modalState = ref(false)

function handleModal() {
    modalState.value = !modalState.value

}


provide('modalControl', { modalState, handleModal })


</script>

<template>
    <main class="w-full grow min-h-screen">
        <header class="text-white py-4 fixed w-full z-20 top-0 start-0 bg-white">
            <div class=" container mx-auto flex justify-between items-center">
                <div class="flex items-center">
                    <img src="https://project-exterior-technical-test-app.up.railway.app/img/logo.png"
                        alt="Fairmont Jakarta" class="h-8 mr-4" />
                </div>

                <!-- Modal toggle -->
                <UButton @click="handleModal"
                    class="bg-gray-100 text-black hover:bg-gray-200 w-9/12 items-center justify-center">
                    <UIcon name="i-mdi:magnify" class="w-5" />
                    {{ store.content?.name }} . {{ store.dateFormatted }}
                </UButton>


                <button
                    class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">
                    Sign In
                </button>
            </div>


        </header>



        <div v-if="modalState"
            class="fixed top-16 start-0 flex justify-center z-30 w-full h-full bg-gray-900 bg-opacity-50 transition-all">
            <SearchModalComponent @close="handleModal" />
        </div>


        <slot />


    </main>
    <footer class="bg-gray-100 w-full py-8 px-4 flex items-center justify-around min-w-full">
        <p class="text-center">&copy; Wisata App · Terms</p>
        <p>v0.10</p>
    </footer>

</template>
