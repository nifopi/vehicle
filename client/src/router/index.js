import Vue from 'vue'
import Router from 'vue-router'
import vehicle from '../components/vehicle'
import vehicle_type from '../components/vehicle_type'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vehicle',
      component: vehicle,
    },
    {
      path: '/vehicle_type',
      name: 'vehicle_type',
      component: vehicle_type,
    },


  ]
})
