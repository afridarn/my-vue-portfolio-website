<template>
  <div class="min-vh-100 bg-blue">
    <Nav />
    <h1 class="text-center text-yellow fw-bold"> My Recent Projects</h1>
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-4 mb-4" v-for="project in projects" :key="project.slug">
          <div class="card">
            <img :src="project.image" class="card-img-top" :alt="project.title" style="height: auto;">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <router-link :to="`/project/${project.slug}`" class="btn btn-primary">View Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProjectsStore } from '../store/projects';
import Nav from '@/components/Nav.vue'


export default {
  name: 'Projects',
  components: {
    Nav,
  },
  setup() {
    const projectsStore = useProjectsStore();

    return {
      projects: projectsStore.projects,
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
