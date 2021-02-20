<template>
    <div id="landing-page">
        <div class="landing-page-title">
            <img src="https://questronix.com.ph/wp-content/uploads/2019/06/lenovo.png" alt="questronix-poster"
            class="questronix-poster">
            <h1 class="welcome">Welcome to Questronix!</h1>
        </div>
        <div class="core-values">
            <Church/><p class="icon">Belief in One God</p>
            <Lock/><p class="icon">Integrity</p>
            <TrophyAward/><p class="icon">Personal Commitment to Excellence</p>
            <AccountGroup/><p class="icon">One Team Company</p>
            <Handshake/><p class="icon">Client First Policy</p>
            <License/><p class="icon">Leadership Through Innovation</p>
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
    background-color:aliceblue;
    align-items: center;
}

.questronix-poster{
    display: block;
    width:50%;
    margin-left:auto;
    margin-right:auto; 
}

.welcome {
    text-align: center;
}

ion-icon {
    font-size: 200%;
}

</style>