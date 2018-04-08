import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Drawer from '../components/Drawer';
import Counter from '../components/Counter';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/drawer',
      component: Drawer,
      meta: {
        title: 'Drawer',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {path: '*', redirect: '/'},
  ],
});

router.replace('/');

module.exports = router;
