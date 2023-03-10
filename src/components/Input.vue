<template>
    <div class="mb-5">
        <p class="uppercase m-1 text-xs">{{ title }}</p>
        <input 
            class="
                rounded-lg border 
                border-grayishViolet-light 
                focus:outline-none 
                focus:border-l-gradient-a 
                focus:border-t-gradient-a 
                focus:border-r-gradient-b 
                focus:border-b-gradient-b 
                focus:ring-1 
                focus:ring-gradient-a
                p-2 m-1 w-full"
            :class="error ? `border-red ring-red` : ``"
            :type="type" 
            :placeholder="text"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <p v-for="err in error" class="text-red text-sm">
            {{ err.$message }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    type: String,
    text: String,
    modelValue: String | Number,
    error: Object
})
</script>