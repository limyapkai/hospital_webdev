import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import OnlyProfit from '@/views/OnlyProfit.vue'

const routes = [

    {
        path: '/',
        name:'DashBoard (Zenon)',
        component: Home
    },
    {
        path: '/about',
        name:'DashBoard (Wei Qian)',
        component: About
    },
    {
        path:'/profit',
        name: 'Login (Zhi Jing)',
        component: OnlyProfit
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router