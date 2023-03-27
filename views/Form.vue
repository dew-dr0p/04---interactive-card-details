<script setup>
import { computed } from '@vue/reactivity';
import { inject, reactive, ref } from 'vue';
// import { useRouter, useRoute } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, numeric, helpers, minLength, maxLength, between } from '@vuelidate/validators'
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

const router = useRouter()

const state = inject('state')

// defineProps({
//   state: Object
// })

const rules = {
  name: { required: helpers.withMessage("Can't be blank", required) },
  number: { 
    required: helpers.withMessage("Can't be blank", required), 
    numeric: helpers.withMessage("Wrong format, numbers only", numeric),
    maxLength: helpers.withMessage("Invalid Card Number", maxLength(16))
  },
  month: { 
    required: helpers.withMessage("Can't be blank", required),
    numeric: helpers.withMessage("Wrong format, numbers only", numeric),
    minLength: helpers.withMessage("Wrong format", minLength(2)),
    maxLength: helpers.withMessage("Wrong format", maxLength(2)),
    between: helpers.withMessage("Invalid Month", between(0, 12))
  },
  year: { 
    required: helpers.withMessage("Can't be blank", required),
    numeric: helpers.withMessage("Wrong format, numbers only", numeric),
    minLength: helpers.withMessage("Wrong format", minLength(2)),
    maxLength: helpers.withMessage("Wrong format", maxLength(2)),
  },
  cvc: { 
    required: helpers.withMessage("Can't be blank", required), 
    numeric: helpers.withMessage("Wrong format, numbers only", numeric),
    minLength: helpers.withMessage("Wrong format", minLength(3)),
    maxLength: helpers.withMessage("Wrong format", maxLength(3)),
  }
}

const v$ = useVuelidate(rules, state)

state.name = v$.value.name.$model
state.number = v$.value.number.$model
state.month = v$.value.month.$model
state.year = v$.value.year.$model
state.cvc = v$.value.cvc.$model

function submit() {
  v$.value.$touch()
  v$.value.$validate
  console.log(v$.value)
  if (!v$.value.$error) { 
    state.name = null
    state.number = null
    state.month = null
    state.year = null
    state.cvc = null
    v$.value.$reset()
    router.push('/success')
    console.log(state)
  }
}

</script>

<template>
  <form action="" @submit.prevent="submit()" class="m-auto max-w-md relative mr-40">
    <Input 
      title="Cardholder Name" 
      type="text" 
      text="e.g. Jane Appleseed" 
      :error="v$.name.$errors" 
      v-model="v$.name.$model" 
    />
    <Input 
      title="Card Number" 
      type="number" 
      text="e.g. 1234 5678 9123 0000" 
      :error="v$.number.$errors"
      v-model="v$.number.$model" 
    />
    <div class="flex flex-row">
      <Input 
        title="Expiry Date" 
        type="number" 
        text="MM" 
        :error="v$.month.$errors"
        class="basis-1/4 mr-5" 
        v-model="v$.month.$model" 
      />
      <Input 
        title="  (mm/yy)" 
        type="number" 
        text="YY" 
        :error="v$.year.$errors"
        class="basis-1/4 mr-7" 
        v-model="v$.year.$model" 
      />
      <Input 
        title="Cvc" 
        type="number" 
        text=" e.g. 123" 
        :error="v$.cvc.$errors"
        class="basis-1/2" 
        v-model="v$.cvc.$model" 
      />
    </div>
    <Button text="Confirm" />
  </form>
</template>