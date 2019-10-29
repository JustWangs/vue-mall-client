import router from './router'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

router.beforeEach((to, from, next)=> {
    if(to.meta.needLogin) {
        try {
            if(!JSON.parse(localStorage.getItem('userId'))) {
                Toast('您还没有登录，请先登录')
                return
            }
        } catch (error) {
            console.log(error)
            return
        }
    }
    next()
})

