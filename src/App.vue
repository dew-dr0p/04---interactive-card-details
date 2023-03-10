<script setup>
import { reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'

import Input from './components/Input.vue';

// const state = ref({
//   name: "djhdiwd",
//   number: 0,
//   month: 0,
//   year: 0,
//   cvc: 0,
// })

const name = ref('yuyjl')

</script>

<template>
    <div class="bg-cover bg-[url('../src/assets/Images/bg-main-desktop.png')]"></div>
    <img src="./assets/Images/bg-card-front.png" alt="" class="absolute inset-60 top-1/4">
    <img src="./assets/Images/card-logo.svg" alt="" class="absolute inset-60 top-[27%] left-[19%]">
    <div class="absolute inset-60 left-[19%] top-[36%] w-max text-grayishViolet-light uppercase" style="letter-spacing: 0.15rem;">
      <p class="text-3xl mb-5">0000 0000 0000 0000</p>
      <div class="flex flex-row justify-between text-sm">
        <p>Jane Appleseed</p>
        <p>00/00</p>
      </div>
    </div>
    <img src="./assets/Images/bg-card-back.png" alt="" class="absolute inset-80 top-1/2">
    <p class="absolute inset-80 top-[58.5%] left-[47%] text-sm text-grayishViolet-light" style="letter-spacing: 0.15rem;">000</p>
    <div class="m-auto max-w-md relative mr-40">
      <Input 
        title="Cardholder Name"
        type="text"
        value="e.g. Jane Appleseed"
        @model="(input) => { name = input}"
        :model="name"
      />
      {{ name }}
      <Input
        title="Card Number"
        type="number"
        value="e.g. 1234 5678 9123 0000"
      />
      <div class="flex flex-row">
        <Input 
          title="Expiry Date"
          type="number"
          value="MM"
          class="basis-1/4 mr-5"
        />
        <Input 
          title="  (mm/yy)"
          type="number"
          value="YY"
          class="basis-1/4 mr-7"
        />
        <Input 
          title="Cvc"
          type="number"
          value=" e.g. 123"
          class="basis-1/2"
        />
      </div>
      <button class="bg-darkViolet rounded-lg text-grayishViolet-light p-3 m-1 mt-5 w-full">Confirm</button>
      <!-- <p>{{ state.name }}</p>
      <p>{{ state.number }}</p>
      <p>{{ state.month }}</p>
      <p>{{ state.year }}</p>
      <p>{{ state.cvc }}</p> -->
    </div>
</template>

<style scoped>
</style>
