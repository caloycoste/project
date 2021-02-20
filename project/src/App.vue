<template>
  <div id="app">
    <div class="navigation">

      <a href=""><img src="https://questronix.com.ph/wp-content/uploads/2019/03/logoflyer.png" class="logo"></a>

      
      <button @click="$router.push('/loginhere')" class ="nav-items"> Log In</button>
      <button @click="$router.push('/registerhere')" class="nav-items"> Register</button>
      <button @click="$router.push('/blogposts')" class="nav-items"> Blogs</button>
      <button @click="$router.push('/')" class="nav-items"> Home</button>
      
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
  height:50px;
}

.logo {
  width:4%;
}

.nav-items {
  float: right;
  border:none;
  padding:17px;
  font-family: sans-serif;
  
}

.nav-items:hover {
  background-color: rgba(226, 226, 226, 0.966);
  font-weight: 600;
}

</style>
