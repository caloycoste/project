<template>
<div>
    <div class="register">
        <h2>Join us!</h2>
        
        <div class="col-0">
            <img src="https://s3-ap-southeast-1.amazonaws.com/kalibrr-company-assets/images/68TXVU3NP9FCWJGSA3QX-5892d4d6.jpg">
        </div>

        <div class="col-form">
        <div class="col-1">
            <label>Full Name: </label><br>
            <label>Gender: </label><br>
            <label>Birth Date: </label><br>
            <label>Email Address: </label><br>
            <label>Mobile Number: </label><br>
            <label>Education: </label><br>
            <label>Username: </label><br>
            <label>Password: </label><br>

        </div>
        <div class="col-2">
            <form>
                <input type="text" name="first-name" placeholder="Full Name" required><br>
                <input type="radio" name="gender" label="Male" value="male">
                <label for="male">Male</label>
                <input type="radio" name="gender" label="Female" value="female">
                <label for="male">Female</label><br>
                <input type="date" name="birthdate"><br>
                <input type="email" name="email" label="Email: " placeholder="Email Address" required>
                <input type="checkbox" name="newsletter" checked> 
                <label for="newsletter">Send me newsletters</label><br>
                <input type="number" name="contact-number"><br>
                <select class="education">
                    <option>High School Diploma</option>
                    <option>College Undergraduate</option>
                    <option selected>Bachelor's Degree</option>
                </select> <br>
                <input type="text" name="username" placeholder="username" required><br>
                <input type="password" name="password" id="password" placeholder="password" required><br>
                <input type="password" name="verify-password" id="verify-password" 
                placeholder="verify password" required><br>
                <input type="submit">
            </form>

        </div>
        
        </div>
    </div>

</div>
    
</template>


<style scoped>

input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        }

h2 {
    text-align: center;
    font-family: sans-serif;
}
.col-0 {
    width:50%;
    display: inline-block;
    text-align: center;

}

.col-0 img {
    width:80%;
    box-shadow: 5px 10px 8px rgb(9, 9, 66);
    
}

.col-form {
    width: 50%;
    display:inline-block;
}
.col-1 {
    width:20%;
    text-align:left;
    height:350px;
    display: table-cell;
    line-height: 30px;
    
}

.col-2 {
    width:60%;
    text-align: left;
    height:350px;
    display: table-cell;
    
    
}

form {
padding: 20px;
margin-top:10px;

}

input {
    padding:3px;
    margin:4px;
}


input[type=text], input[type=submit], input [type=password], 
input type[type=number], input [type=email] {
    width:40%;
}

</style>