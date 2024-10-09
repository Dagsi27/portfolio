import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; // jeśli używasz Vuetify

const app = createApp(App);

app.use(router);
app.use(vuetify); // jeśli używasz Vuetify

app.mount('#app');
