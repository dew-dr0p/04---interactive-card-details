<script setup>
import { computed } from '@vue/reactivity';
import { inject, reactive, ref } from 'vue';
// import { useRouter, useRoute } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, numeric, helpers, minLength, maxLength, between } from '@vuelidate/validators'
import Input from '../components/Input.vue';
import Button from './Button.vue';

// const state = inject('state')

const props = defineProps({
  state: Object
})

const emit = defineEmits(['change'])

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

const v$ = useVuelidate(rules, props.state)

props.state.name = v$.value.name.$model
props.state.number = v$.value.number.$model
props.state.month = v$.value.month.$model
props.state.year = v$.value.year.$model
props.state.cvc = v$.value.cvc.$model

function submit() {
  v$.value.$touch()
  v$.value.$validate
  console.log(v$.value)
  if (!v$.value.$error) { 
    props.state.name = null
    props.state.number = null
    props.state.month = null
    props.state.year = null
    props.state.cvc = null
    v$.value.$reset()
    emit('change', 'Success')
  }
}

</script>

<template>
  <form action="" @submit.prevent="submit()" class="m-auto max-w-sm absolute top-[30%] right-1 mr-52">
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
        title="Exp. Date (mm/yy)" 
        type="number" 
        text="MM" 
        :error="v$.month.$errors"
        class="basis-1/4 mr-3 w-16" 
        v-model="v$.month.$model" 
      />
      <Input 
        title="" 
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