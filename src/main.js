import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import veProgress from "vue-ellipse-progress";
import Toaster from "@meforma/vue-toaster";

const app = createApp(App)
app.use(veProgress);
app.use(Toaster);

app.mount('#app');