<template>
  <nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container-fluid mt-3">
      <router-link to="/" class="navbar-brand fw-bold text-yellow ls-2" style="margin-left: 7%;">AFRIDA.</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
        <ul class="navbar-nav gap-5">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ 'text-yellow': isActive('/'), 'text-light': !isActive('/') }">
              Home</router-link>
          </li>
          <li class=" nav-item">
            <router-link to="/projects" class="nav-link"
              :class="{ 'text-yellow': isActive('/projects'), 'text-light': !isActive('/projects') }">
              Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link"
              :class="{ 'text-yellow': isActive('/contact'), 'text-light': !isActive('/contact') }">
              Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.text-yellow {
  color: #fce700;
}
</style>

<script>
export default {
  name: 'Nav',
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
}
</script>
