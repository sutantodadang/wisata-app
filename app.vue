<script setup lang="ts">

const data = useDataStore()

await callOnce(data.fetchProperties)

</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
      <UModals />
    </NuxtLayout>


  </div>
</template>
