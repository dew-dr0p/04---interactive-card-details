<template>
    <button class="bg-darkViolet rounded-lg text-grayishViolet-light p-3 m-1 mt-5 w-full">
      {{ text }}
    </button>
</template>

<script setup>
defineProps({
    text: String
})
</script>