<template>
  <div class="min-vh-100 bg-blue">
    <Nav />
    <ContactForm />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import ContactForm from '@/components/ContactForm.vue'
export default {
  name: 'Tes',
  components: {
    Nav, ContactForm
  }
}
</script>

<style lang="scss" scoped>
.bg-blue {
  background-color: #3330e4;
}
</style>