<template>
<!--
  <h1> Welcome to CPP </h1>
  <WelcomeCpp/>
  <AddCoin @added = "change"/>
  <ProfitDisplay :key = "refreshComp"/>
  <img id = "bg" src = "@/assets/Coins2.png" alt="">
  -->

  <div id ="nav">
    <router-link to = "/">Home</router-link> |
    <router-link to = "/about">About</router-link> | 
    <router-link to = "/profit">Profits</router-link>
  </div>
  <p> Displaying from App.vue </p>
  <router-view/>


</template>

<script>
//import WelcomeCpp from './components/WelcomeCpp.vue'
//import AddCoin from './components/AddCoin.vue'
//import ProfitDisplay from './components/ProfitDisplay.vue'

export default {
  name:'App'
  }
  /*
  ,
  components: { 
    WelcomeCpp, 
    AddCoin, 
    ProfitDisplay 
  
  },
  data(){
    return{
      refreshComp:0
    }
  },

  methods:{
    change(){
      this.refreshComp +=1
    }
  }

}*/
</script>

<style>
  #app{
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top:60px

  }

  #bg{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }

</style>