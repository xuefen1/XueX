<template>
  <div class="wrap">
    <div class="header">
      <headerVue/>
      <tableViews @handleClick="handleClick"/>
    </div>
    <div class="main">
      <navVue @handleTable="handleTable"/>
      <div class="con">
        <ul>
          <listVue :list="list" />
        </ul>
      <button @click="show=true">发起任务</button>
      </div>
    </div>
    <popUp @close="show=false" :show="show"/>
  </div>
</template>
<script>
import {mapState} from "vuex"
import navVue from "./pages/navVue";
import listVue from "./pages/listVue";
import headerVue from './pages/header'
import popUp from "./pages/popUp";
import request from "../utils/request";
import api from '../api/index'
import tableViews from "./pages/table";

export default {
    data() {
        return {
        tableOptions: {
            status: 0,
            type: "overtime",
            create_at: 0,
            pageSize: 10,
            page: 1

        },
        list:[],
        value:"",
        show:false
        };
    },
    components: {
        tableViews,
        navVue,
        listVue,
        popUp,
        headerVue
    },
    created() {
        this.getTaskList();
        this.$store.dispatch('user/getuserInfo')
    },
    methods: {
        close(){
            this.show!=show
        },
        handleClick(index) {
            this.tableOptions.status = index;
            this.getTaskList();
        },
        handleTable(i,type){
            this.tableOptions.type = type;
            this.getTaskList();
        },
        getTaskList() {
            api.taskList({
                ...this.tableOptions
            }).then(({data}) => {
                this.list=data;
            });
        },
        addText(){
        if(this.value.trim()!=""){
            this.$store.commit('CHANGE_LIST',this.value)
        }
        }
    },

};
</script>

<style lang="scss" scoped>
body,
html {
  width: 100%;
  height: 100%;
  position: relative;
}
.mark {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 220px;
  text-align: center;
  font-size: 30px;
  border-bottom: 1px solid #cccccc;

}
.main {
  width: 100%;
  flex: 1;
  .con {
    width: 100%;
    height: 100%;
    ul {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    button {
      width: 280px;
      height: 100px;
      position: fixed;
      border-radius: 50px;
      bottom: 230px;
      right: 50px;
      background: #07501cd4;
      color: white;
      font-size: 35px;
      z-index: 333;
      outline: 0;
      border: 0;
    }
  }
}
</style>

