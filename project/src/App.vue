<template>
  <div id="app">
    <div class="navigation">

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
  data() {
    return{
      
    }
  }
}

</script>

<style>
.navigation {
  margin:10px;

}

.nav-items {
  font-size: 130%;
  color:rgb(42, 43, 43);
  margin-right: 10px;
  padding:10px;
  background-color: ghostwhite;
  border: 0px;
}

.nav-items:hover {
  background-color: rgb(170, 167, 167);
  
}

</style>
