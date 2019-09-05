import Vue from 'vue';
import Router from 'vue-router';

// DefaultContainer
import DefaultContainer from './layouts/DefaultLayout.vue';
// Login
import Login from './views/Login.vue';
// dashboard
import Dashboard from './views/Dashboard.vue';

// Vulnerability Analysis
import PocNewScan from './views/scanner/poc/PocNewScan'
import PocScans from './views/scanner/poc/PocScans'
import PocPluginList from './views/scanner/poc/PocPluginList'
import PocVulList from './views/scanner/poc/PocVulList'
import NessusNewScan from './views/scanner/nessus/NessusNewScan'

// Exploitation Tools
import JsonHijackerData from './views/exploit/jsonp/JsonHijackerData'
import JsonHijackerTask from './views/exploit/jsonp/JsonHijackerTask'
import HttpRequestLog from './views/exploit/http_log/HttpRequestLog'

Vue.use(Router);

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: '/',
          redirect: '/dashboard',
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        // Vulnerability Analysis
        {
          path: '/scanner/poc/new_scan',
          name: 'PocNewScan',
          component: PocNewScan,
        },
        {
          path: '/scanner/poc/scans',
          name: 'PocScans',
          component: PocScans,
        },
        {
          path: '/scanner/poc/plugin',
          name: 'PocPluginList',
          component: PocPluginList,
        },
        {
          path: '/scanner/poc/vuls',
          name: 'PocVulList',
          component: PocVulList,
        },
        {
          path: '/scanner/poc/vul/:tid',
          name: 'PocVulListFilter',
          component: PocVulList,
        },
        {
          path: '/scanner/nessus/new_scan',
          name: 'NessusNewScan',
          component: NessusNewScan,
        },
        // Exploitation Tools
        {
          path: '/exploit/jsonp/task',
          name: 'JsonHijackerTask',
          component: JsonHijackerTask,
        },
        {
          path: '/exploit/jsonp/data',
          name: 'JsonHijackerData',
          component: JsonHijackerData,
        },
        {
          path: '/exploit/httpLog',
          name: 'HttpRequestLog',
          component: HttpRequestLog,
        },
      ]
    },
    {
      path: '/login',
      name: "Login",
      component: Login,
    },
  ],
});
