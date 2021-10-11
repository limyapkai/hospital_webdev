import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import OnlyProfit from '@/views/OnlyProfit.vue'
import Zhijingpage from '@/views/Zhijingpage.vue'
import Zenonpage from '@/views/zenonpage.vue'

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
    {
        path:'/zhijingpage',
        name: '(Zhi Jing)',
        component: Zhijingpage
    },
    {
        path:'/zenonpage',
        name: '(Zenon)',
        component: Zenonpage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router