<template>
    <div>
        <div class="flex border-gray-200 items-center justify-center text-gray-500"
            :class="isTop ? 'border-t' : 'border-b'">
            <button v-for="(item, index) in props.items" :key="index" @click="handleTabClick(index, item.content)"
                :class="[
                    'px-4 py-2 font-medium transition-colors',
                    activeTab === index
                        ? 'border-blue-500 text-blue-500'
                        : 'border-transparent hover:border-gray-300',
                    isTop ? 'border-t-2' : 'border-b-2'
                ]">
                <div class="flex items-center te">
                    <UIcon :name="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </div>
            </button>
        </div>
        <div>
            <slot :activeTab="activeTab" />
        </div>
    </div>
</template>

<script setup lang="ts">
interface TabItem {
    icon: string;
    label: string;
    content: string;
}

const props = defineProps<{
    items: TabItem[],
    isTop: boolean
}>()



const activeTab = ref(0)
const emit = defineEmits(['tabChange'])

const handleTabClick = (index: number, content: any) => {
    activeTab.value = index
    emit('tabChange', { index, content })
}


</script>