import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/customers',
            name: 'customers',
            component: () => import('./components/CustomerList')
        },
        {
            path: '/customers/:id',
            name: 'edit-customer',
            component: () => import('./components/EditCustomer')
        },
        {
            path: '/add',
            name: 'add-customer',
            component: () => import('./components/AddCustomer')
        }
    ]
})