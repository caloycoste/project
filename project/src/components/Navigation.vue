<template>
    <div class="navigation">

      <img src="https://questronix.com.ph/wp-content/uploads/2019/03/logoflyer.png" class="logo">

      <button @click="$router.push('/')" class="nav-items"> Home</button>
      <button @click="$router.push('/loginhere')" class ="nav-items"> Log In Here</button>
      <button @click="$router.push('/registerhere')" class="nav-items"> Register Here</button>
      <button @click="$router.push('/blogposts')" class="nav-items"> Blogs</button>
      
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navigation {
  width:100%;
  background-color:white;
  height:80px;
}

.logo {
  width:5%;
  margin:10px;
}

.nav-items {
  font-size: 130%;
  color:rgb(42, 43, 43);
  margin-top: 25px;
  padding:10px;
  background-color: rgb(248, 248, 255);
  border: 0px;
  float:right;
}

.nav-items:hover {
  background-color: rgb(170, 167, 167);
  
}

</style>