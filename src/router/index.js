import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import indexHome from '../views/HomeView.vue';
import CharacterDetail from '../views/CharacterDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: indexHome
      },
      {
        path: ':id',
        name: 'character',
        component: CharacterDetail
      }
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
