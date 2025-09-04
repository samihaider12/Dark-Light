
import 'vuetify/styles'

import { createVuetify } from 'vuetify';

// import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


const vuetify=createVuetify({
    components,
    directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});


import { createApp} from 'vue';
import App from './App.vue';
import router from './components/router';
import store from './components/store';
import './assets/theme.css'



let app= createApp(App);
app.use(vuetify);
app.use(router)  
app.use(store)
app.mount('#app');

