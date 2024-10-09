<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>My Projects</h2>
      </v-col>
      <v-col
        v-for="project in projects"
        :key="project.id"
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Projects',
  computed: {
    ...mapGetters(['allProjects']),
  },
  data() {
    return {
      projects: this.allProjects,
    };
  },
};
</script>

<style scoped>
h2 {
  margin-top: 20px;
  font-size: 2rem;
}
</style>
