<template>
  <div class="min-vh-100 bg-blue">
    <Nav />
    <Description />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Description from '@/components/Description.vue'
export default {
  name: 'Tes',
  components: {
    Nav, Description
  }
}
</script>

<style lang="scss" scoped>
.bg-blue {
  background-color: #3330e4;
}
</style>