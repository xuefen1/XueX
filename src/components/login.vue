<template>
  <div class="wrap">
      <div class="main">
          <p><input type="text" placeholder="请输入手机号" v-model="phone_value"></p>
          <p><input type="password" placeholder="请输入密码" v-model="psw_value"></p>
          <button @click="handleClick">登录/注册</button>
      </div>
  </div>
</template>
<script>
import request from "../utils/request"
import { mapState } from 'vuex';
import api from '../api/index'
export default {

  data(){
    return {
      phone_value:'',
      psw_value:''
    }
  },
  methods:{
    handleClick(){
        if(this.phone_value.trim()!==""&&this.psw_value.trim()!==""){
            api.userLogin({
              phone:this.phone_value,
              password:this.psw_value
            }).then(res=>{
               window.localStorage.setItem('token',res.token)
               this.$router.back()
            }).catch(error=>{
              console.log(error.response)
            })
        }else{
          alert('请输入正确的用户名和密码')
        }
    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
    body,html{
      width: 100%;
      height: 100%;
    }
    .wrap{
      width: 100%;
      height: 100%;
      display:flex;
      flex-direction: column;
    }
    .header{
      width: 100%;
      height: 150px;
      background: red;
    }
    .main{
      flex: 1;
      width: 100%;
      p{
        width: 90%;
        height: 100px;
        margin:30px auto;
        input{
          border-bottom: 1px solid black;
          width: 100%;
          height: 100%;
          line-height: 50px;
          padding-left: 20px;
        }
      }
      button{
        width: 80%;
        height: 80px;
        margin: 30px auto;
        border-radius: 45px;
        border:0;
        outline: none;
        margin-left: 70px;
        font-size: 30px;
        color: aliceblue;
      }
    }
</style>

