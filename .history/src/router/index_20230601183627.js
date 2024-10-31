import VueRouter from 'vue-router';
const routes =[
 {
    path:'/',
    name:'login',
    component:()=>import('../components/Login')
 },
 {
    path:'/Index',
    name:'index',
    component:()=>import('../components/index'),
    children:[
        {
            path:'/Home',
            name:'home',
            component:()=>import('../components/Home')
        }
    ]
 }
]

const router = new VueRouter({
    mode:'history',
    routes
})
export default router;