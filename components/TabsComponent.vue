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
                    isTop ? 'border-t-2' : 'border-b-2',
                    'sm:px-2 sm:py-1 md:px-3 md:py-1.5' // Responsive classes
                ]">
                <div class="flex items-center te">
                    <UIcon :name="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </div>
            </button>
        </div>
        <transition name="fade" mode="out-in">
            <div :key="activeTab">
                <slot :activeTab="activeTab" />
            </div>
        </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>