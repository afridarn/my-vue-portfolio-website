<template>
  <div class="min-vh-100 bg-blue">
    <Nav />
    <h1 class="text-center text-yellow fw-bold">{{ project.title }}</h1>
    <div class="d-flex justify-content-center mt-5">
      <img :src="project.image" :alt="project.title" style="height: 50vh; width: 30vw;" />
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <h2 class="text-center text-yellow">Technology</h2>
          <ul class="list-unstyled text-center">
            <li v-for="tech in project.tech" class="text-light fs-5" :key="tech">{{ tech }}</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h2 class="text-center text-yellow">Developed Year</h2>
          <p class="text-light text-center fs-5">{{ project.developed }}</p>
        </div>
        <div class="col-md-4">
          <div class="col-md-4">
            <h2 class="text-center text-yellow">Demo</h2>
            <p class="text-light text-center fs-5" v-if="project.demo">
              <a :href="project.demo" target="_blank" class="text-white">{{ project.demo }}</a>
            </p>
            <p class="text-light text-center fs-5" v-else>-</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProjectsStore } from '../store/projects';
import Nav from '@/components/Nav.vue';

export default {
  name: 'ProjectDetails',
  components: {
    Nav,
  },
  props: ['slug'],
  setup(props) {
    const projectsStore = useProjectsStore();

    const project = projectsStore.projects.find((p) => p.slug === props.slug);

    return {
      project,
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-blue {
  background-color: #3330e4;
}

.text-yellow {
  color: #fce700;
}
</style>
