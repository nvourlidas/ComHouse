import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';
import * as VueGoogleMaps from 'vue2-google-maps';


const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAym93VRVdSleq0ZnneRDJTb-__CvT2NPY',
      libraries: 'places',
    },
  })