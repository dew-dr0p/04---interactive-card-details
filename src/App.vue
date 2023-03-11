<script setup>
import { reactive, provide } from 'vue';
import Form from './components/Form.vue';

const state = reactive({
  name: null,
  number: null,
  month: null,
  year: null,
  cvc: null,
})

provide('state', state)

console.log(state)

</script>

<template>
  <div class="bg-cover bg-[url('assets/Images/bg-main-desktop.png')]"></div>
  <img src="assets/Images/bg-card-front.png" alt="" class="absolute inset-60 top-1/4">
  <img src="assets/Images/card-logo.svg" alt="" class="absolute inset-60 top-[27%] left-[19%]">
  <div class="absolute inset-60 left-[19%] top-[36%] w-max text-white uppercase"
    style="letter-spacing: 0.15rem;">
    <p class="text-3xl mb-5">
      {{ state.number ? state.number : '0000 0000 0000 0000'}}
    </p>
    <div class="flex flex-row justify-between text-sm">
      <p>
        {{ state.name ? state.name : 'Jane Appleseed' }}
      </p>
      <p>
        {{state.month ? state.month : '00'}}
        /
        {{state.year ? state.year : '00'}}
      </p>
    </div>
  </div>
  <img src="assets/Images/bg-card-back.png" alt="" class="absolute inset-80 top-1/2">
  <p class="absolute inset-80 top-[60.7%] left-[47%] w-max text-sm text-white" style="letter-spacing: 0.15rem;">
    {{state.cvc ? state.cvc : '000'}}
  </p>
  <!-- <component :is="Form" :state="state"/> -->
  <!-- <Form :state="state" /> -->
  <RouterView />
</template>