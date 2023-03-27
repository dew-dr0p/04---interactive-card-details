<script setup>
import { reactive, provide } from 'vue';
import Form from '@/components/Form.vue';

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
  <!-- <div class="bg-cover bg-[url('assets/Images/bg-main-desktop.png')]"></div> -->
  <img src="assets/Images/bg-main-desktop.png" alt="" class="fixed">
  <div class="relative top-[41%] left-[11%] w-max drop-shadow-[0_50px_40px_rgb(0_0_0_/_0.15)]">
    <img src="assets/Images/bg-card-front.png" alt="">
    <img src="assets/Images/card-logo.svg" alt="" class="absolute bottom-[83%] left-8">
    <div class="absolute left-8 bottom-[52%] text-white uppercase grid" style="letter-spacing: 0.15rem;">
      <p class="text-3xl mb-6">
        {{ state.number ? state.number : '0000 0000 0000 0000'}}
      </p>
      <div class="grid grid-cols-2 text-sm">
        <p>
          {{ state.name ? state.name : 'Jane Appleseed' }}
        </p>
        <p class="justify-self-end">
          {{state.month ? state.month : '00'}}
          /
          {{state.year ? state.year : '00'}}
        </p>
      </div>
    </div>
  </div>
  <div class="relative left-[17%] top-4 w-max drop-shadow-[0_50px_40px_rgb(0_0_0_/_0.15)]">
    <img src="assets/Images/bg-card-back.png" alt="">
    <p class="absolute bottom-[71%] right-14 w-max text-sm text-white" style="letter-spacing: 0.15rem;">
      {{state.cvc ? state.cvc : '000'}}
    </p>
  </div>
  <component :is="Form" :state="state"/>
  <!-- <Form :state="state" /> -->
</template>