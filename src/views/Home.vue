<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-img src="@/assets/logo.png" max-width="200" />
        <h1>Welcome to My Portfolio</h1>
        <p>This is the place where you will find all my projects and work.</p>
        <v-btn color="primary" @click="$router.push('/projects')">
          See My Projects
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
h1 {
  margin-top: 40px;
  font-size: 2.5rem;
}
</style>
