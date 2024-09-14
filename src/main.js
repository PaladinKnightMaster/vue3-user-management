import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import './styles/_mixins.scss';

axios.defaults.baseURL = 'https://6180472f8bfae60017adfa54.mockapi.io/users';

createApp(App).mount('#app');
