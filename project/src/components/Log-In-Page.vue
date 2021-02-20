<template>
<div class="log-in-page">
    <div class="log-in">
        <div class="col-1">
            <p>Username: </p><br>
            <p>Password: </p>
        </div>
        <div class="col-2">
            <form class="login-form">
                <input type="text" name="username" placeholder="Enter username" class="field"><br>
                <input type="password" name="password" placeholder="Enter password" class="field"><br>
                
            </form>
        </div>
        <input type="submit"><br>
        <p>Not a member yet? <button @click="$router.push('/registerhere')" class="sign-up"> 
            Sign-up Here</button></p> 
            
    </div>

</div>
</template>


<style scoped>

.log-in {

    width:30%;
    height:250px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    padding: 10px;
    text-align: center;
    background-color: azure;
    font-family: sans-serif;
    box-shadow: 7px 7px 5px rgb(71, 71, 71);

}
.col-1 {
    width:30%;
    display: inline-block;
}

.col-1 p{
    margin: 5px;
    text-align: right;
}

.col-2 {
    width:70%;
    display: inline-block;
    text-align: left;
}

form {
    padding:20px;
    
}

input[type=submit] {
    font-size: 100%;
    background-color:rgb(13, 13, 138);
    color:azure;
    padding: 10px;
    width:50%;
    
}

input[type=text], input[type=password] {
    background-color:beige;
    margin: 10px;
    height:20px;
    border-radius: 20px;
    text-align: center;
}

</style>