import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'
Vue.use(Vuex)
const store=new Vuex.Store({
    namespaced: true,
    state:{//用户信息
        userinfo:{}
    },
    mutations: {
        setuserInfo(state,data){
            state.userinfo=data
        }
    },
    actions:{
        getuserInfo(context){
            api.isLogin().then(res=>{
                context.commit('setuserInfo',res.data)
            })
        }
    }
})

export default store
