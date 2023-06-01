<script>
import InputBox from '@/components/InputBox.vue'
export default {
  name: 'Contact',
  components: {
    InputBox,
  },
  data: () => ({
    title: 'Contact Me',
    input: {
      name: '',
      email: '',
      message: '',
    },
  }),
  methods: {
    submit() {
      console.log(this.input)
    },
  },
  watch: {
    'input.name'(val) {
      console.log('input name has changed to: ', val)
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center mt-5">
    <h1 class="text-yellow fw-bold">{{ title }}</h1>
    <form @submit.prevent="submit">
      <InputBox v-model="input.name" type="text" name="Name" label="Name" />
      <InputBox v-model="input.email" type="text" name="E-mail" label="E-mail" />
      <InputBox v-model="input.message" type="text" name="Message" label="Message" />
      <button type="submit" class="button-outline-yellow">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.text-yellow {
  color: #fce700;
}

.button-outline-yellow {
  border: 2px solid #fce700;
  color: #fce700;
  background: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.button-outline-yellow:hover {
  background: #fce700;
  color: #ffffff;
}
</style>