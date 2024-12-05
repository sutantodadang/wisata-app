<template>
    <div :class="props.style" class="relative">
        <div class="flex items-center">
            <div class="absolute inset-y-0 start-0 pl-2 flex items-center pointer-events-none">
                <UIcon :name="props.icon || ''" class="bg-gray-900 h-5 w-5" />
            </div>
            <input :type="props.type" id="floating_outlined" :value="props.value"
                @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
                class="block px-8 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />

            <div v-if="props.value !== '' && props.useClear" class="absolute inset-y-0 end-0 pr-2 flex items-center">
                <button @click="clearInput" class="pointer-events-auto">
                    <UIcon name="i-mdi:close-circle" />
                </button>
            </div>
            <slot name="input-content" />
        </div>
        <label for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            {{ props.placeholder }}
        </label>

    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    value?: string;
    placeholder?: string;
    icon?: string;
    useClear?: boolean;
    type: "text" | "password" | "email" | "date";
    style?: string;
}>();

const emit = defineEmits(['update:value']);

const clearInput = () => {
    emit('update:value', '');
};
</script>