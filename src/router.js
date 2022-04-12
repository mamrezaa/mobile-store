import { createRouter,createWebHistory } from "vue-router";
import Contact_us from './components/Contact-us.vue';
import Home from './components/Home.vue';
import Blog from './components/Blog/Blog.vue';
import Blog_1 from './components/Blog/Blog-1.vue';
import Shop from './components/Shop/Shop.vue'
import Samsung from './components/Shop/Samsung.vue'
import apple from './components/Shop/apple.vue'
import xiaomi from './components/Shop/xiaomi.vue'
import huawei from './components/Shop/huawei.vue'


const routes = [
    {path:'/', component:Home},
    {path:'/contact_us', component:Contact_us},
    {path:'/Blog', component:Blog},
    {path:'/Blog_1', component:Blog_1},
    {path:'/Shop', component:Shop},
    {path:'/Samsung', component:Samsung},
    {path:'/apple',component:apple},
    {path:'/xiaomi', component:xiaomi},
    {path:'/huawei', component:huawei}    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;