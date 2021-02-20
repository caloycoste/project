<template>
    <div id="landing-page">
        <img src="https://questronix.com.ph/wp-content/uploads/2019/06/lenovo.png" alt="questronix-poster" 
        class="questronix-poster">

        <div class="landing-page-title">
            <h1 class="welcome">Welcome to Questronix!</h1>
        </div>

        <div class="about">
            <h2>We make <i>Digital Transformation</i> possible.</h2>
            <p>Your trusted business partner for IT solutions and services.<br> Questronix has grown to be one of the largest IT solutions and service providers and systems integrators in the Philippines since 1987 <br>that has earned awards and certificates through its focused professional team of experts.</p>

        </div>

        <div class="core-values">
            <div class="col"><License/><p>Leadership</p></div>
            <div class="col"><Church/><p>Faith</p></div>
            <div class="col"><Lock/><p>Integrity</p></div>
            <div class="col"><TrophyAward/><p>Excellence</p></div>
            <div class="col"><AccountGroup/><p>Teamwork</p></div>
            <div class="col"><Handshake/><p>Client First</p></div>
        </div>
    </div>
    
</template>

<script>
import Church from 'vue-material-design-icons/Church.vue'
import AccountGroup from 'vue-material-design-icons/AccountGroup.vue'
import TrophyAward from 'vue-material-design-icons/TrophyAward.vue'
import Lock from 'vue-material-design-icons/Lock.vue'
import Handshake from 'vue-material-design-icons/Handshake.vue'
import License from 'vue-material-design-icons/License.vue'

export default {
  name: 'landing-page',
   components:  {
     Church,AccountGroup,TrophyAward,Lock,Handshake,License
      
    }
    
}
</script>

<style scoped>

.landing-page {
    box-sizing:border-box;
}

.questronix-poster {
    display: block;
    margin:auto;
    width:75%
}

.landing-page-title {
    background-color: rgb(9, 9, 66);
    height:150px;
    vertical-align: middle;
}
.welcome {
    margin-top:10px;;
    font-size: 400%;
    text-align: center;
    font-family: sans-serif;
    color: aliceblue;
    line-height: 150px;
    letter-spacing: 3px;
    
}

.about {
    height: 300px;
    text-align: center;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image:url(https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-attachment: fixed;

}

.about h2 {
    color:mintcream;
    font-size: 200%;
    line-height: 30px;;

}

.about p {
    color:mintcream;
    font-size: 120%;
    line-height: 30px;;

}

.core-values {
    background-color:rgb(13, 13, 138);
    text-align: center;
    height:250px;
}

.col {
    width: 16%;
    display:inline-block;
    height:250px;
}

.col p {
    color:azure;
    margin-top:50px;
    font-size:120%;
    flex-direction: column;
    justify-content: center;
}
.material-design-icon {
    padding:25px;
    font-size: 500%;
    color: azure;
    
}

</style>