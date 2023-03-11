<template>
    <div class="mb-5">
        <p class="uppercase m-1 text-xs">{{ title }}</p>
        <input 
            class="
                rounded-lg border 
                border-grayishViolet-light 
                focus:outline-none 
                focus:ring-1
                p-2 m-1 w-full"
            :class="error.length != 0 ? `border-red` : ``"
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

<style scoped>
input:focus {
  padding: 0.5rem;
  border: double 1px transparent;
  border-radius: 0.5rem;
  background-image: linear-gradient(white, white), 
                    linear-gradient(to right, #6448FE, #600594);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
</style>