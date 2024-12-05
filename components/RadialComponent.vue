<template>
    <div class="relative" :class="`w-${width} h-${height}`">
        <svg class="w-full h-full" viewBox="0 0 100 100">
            <!-- Background circle -->
            <circle class="text-gray-200 stroke-current" :stroke-width="strokeWidth" cx="50" cy="50" r="25"
                fill="transparent">
            </circle>
            <!-- Progress circle -->
            <circle class="progress-ring__circle stroke-current" :class="strokeColor" :stroke-width="strokeWidth"
                stroke-linecap="round" cx="50" cy="50" r="25" fill="transparent" stroke-dasharray="157.08"
                :stroke-dashoffset="`calc(157.08px - (157.08px * ${progress}) / ${maxValue})`">
            </circle>

            <!-- Center text -->
            <text x="50" y="50" font-family="Verdana" :font-size="fontSize" text-anchor="middle" font-weight="bold"
                :fill="fontColor" alignment-baseline="middle">{{
                    text }}</text>

        </svg>
    </div>
</template>

<script setup lang="ts">


defineProps({
    progress: {
        type: Number,
        default: 100
    },
    text: {
        type: String,
        default: 100
    },
    maxValue: {
        type: Number,
        default: 100
    },
    strokeWidth: {
        type: Number,
        default: 10
    },
    strokeColor: {
        type: String,
        default: "text-indigo-500"
    },
    width: {
        type: Number,
        default: 40
    },
    height: {
        type: Number,
        default: 40
    },
    fontSize: {
        type: Number,
        default: 12
    },
    fontColor: {
        type: String,
        default: "#9701A5"
    }
})

</script>

<style>
.progress-ring__circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}
</style>