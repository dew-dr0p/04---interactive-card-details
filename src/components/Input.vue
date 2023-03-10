<template>
    <div>
        <p class="uppercase m-1  text-xs">{{ title }}</p>
        <input 
            class="rounded-lg border border-grayishViolet-light focus:outline-none focus:border-l-gradient-a focus:border-t-gradient-a focus:border-r-gradient-b focus:border-b-gradient-b focus:ring-1 focus:ring-gradient-a p-2 m-1 mb-5 w-full"
            :type="type" 
            :placeholder="value"
            v-model="model"
            @input="$emit('model', input)"
        >
        <!-- {{ state }} -->
        {{ model }}
    </div>
</template>

<script setup>
import { computed } from "@vue/runtime-dom"

defineProps({
    // state: { type: Object, required: true},
    title: String,
    type: String,
    value: String,
    model: String,
})

// const name = computed(
//     (value) => {
//         state.name = value
//         return state.name
//     }
// )

// const name = $props.model

// const vModel = `$props.state.${$props.model}`
</script>