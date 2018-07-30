import home    from './components/Home.vue';
import men     from './components/Men.vue';
import women   from './components/Women.vue';
import account from './components/Account.vue';
import signin  from './components/Signin.vue';
import signup  from './components/Signup.vue';
import mycart  from './components/MyCart.vue';
//import data    from './Products.json';

export default [
  {path: '/', component: home},
  {path: '/home', component: home},
  {path: '/men', component: men},
  {path: '/women', component: women},
  {path: '/account', component: account},
  {path: '/signin', component: signin},
  {path: '/signup', component: signup},
  {path: '/mycart', component: mycart},
];
