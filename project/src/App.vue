<template>
  <div id="app">
    <div class="navigation">

      <img src="https://questronix.com.ph/wp-content/uploads/2019/03/logoflyer.png" class="logo">

      <button @click="$router.push('/')" class="nav-items"> Home</button>
      <button @click="$router.push('/loginhere')" class ="nav-items"> Log In Here</button>
      <button @click="$router.push('/registerhere')" class="nav-items"> Register Here</button>
      <button @click="$router.push('/blogposts')" class="nav-items"> Blogs</button>
      
    </div>


    <router-view/>


  </div>
</template>

<script>
export default {

}
</script>
<style>
#app {
  width:100%;
  overflow:hidden;
  box-sizing: border-box;
  background-color: rgba(250, 250, 250, 0.966);
}

.navigation {
  height:70px;
}

.logo {
  width:5%;
}

.nav-items {
  float: right;

}

</style>
