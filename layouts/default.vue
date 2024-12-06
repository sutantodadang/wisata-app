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
        <!-- Loading Spinner -->

        <div v-if="store.isLoading"
            class="text-center fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div role="status">
                <svg aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                <span class="sr-only loader">Loading...</span>
            </div>
        </div>

        <header class="text-white py-4 fixed w-full z-20 top-0 start-0 bg-white">
            <div class="container mx-auto justify-between items-center px-4 md:px-0 flex flex-col md:flex-row gap-2">

                <NuxtImg src="https://project-exterior-technical-test-app.up.railway.app/img/logo.png" alt="Wisata App"
                    loading="lazy" densities="x1 x2" quality="100" fit="contain"
                    class="w-20 h-auto rounded-lg md:w-32" />


                <!-- Modal toggle -->
                <UButton @click="handleModal"
                    class="bg-gray-100 text-black hover:bg-gray-200 w-full md:w-9/12 items-center justify-center">
                    <UIcon name="i-mdi:magnify" class="w-5" />
                    {{ store.content?.name }} . {{ store.dateFormatted }}
                </UButton>

                <button
                    class="hidden md:block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">
                    Sign In
                </button>
            </div>
        </header>

        <div v-if="modalState"
            class="fixed top-20 md:top-16 start-0 flex justify-center z-30 w-full h-full bg-gray-900 bg-opacity-50 transition-all">
            <SearchModalComponent @close="handleModal" />
        </div>

        <slot />
    </main>
    <footer class="bg-gray-100 w-full py-8 px-4 flex flex-col md:flex-row items-center justify-around min-w-full">
        <p class="text-center">&copy; Wisata App · Terms</p>
        <p>v0.10</p>
    </footer>
</template>
