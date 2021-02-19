<template>
    <div>
        
        <h1>Register Here!</h1>
        <div class="reg-form">
            <form>
                <label>Full Name: </label><br>
                <input type="text" name="first-name" placeholder="Last Name" required>
                <input type="text" name="surname" placeholder="Last Name" required>
                <input type="text" name="middle-name" placeholder="Middle Name">
                <br>
                <label>Gender: </label>
                <input type="radio" name="gender" label="Male" value="male">
                <label for="male">Male</label>
                <input type="radio" name="gender" label="Female" value="female">
                <label for="male">Female</label><br>
                <label>Birth Date: </label>
                <input type="date" name="birthdate"><br>
                <label>Email Address: </label>
                <input type="email" name="email" label="Email: " placeholder="Email Address" required>
                <input type="checkbox" name="newsletter" checked> 
                <label for="newsletter">Send me newsletters</label><br>
                <label>Mobile Number: </label>
                <input type="number" name="contact-number"><br>
                <label for="education">Education: </label>
                <select class="education">
                    <option>High School Diploma</option>
                    <option>College Undergraduate</option>
                    <option selected>Bachelor's Degree</option>
                </select> <br>

                <label>Username: </label><br>
                <input type="text" name="username" placeholder="username" required><br>
                <label>Password: </label><br>
                <input type="password" name="password" id="password" placeholder="password" required><br>
                <input type="password" name="verify-password" id="verify-password" 
                placeholder="verify password" required><br>
                <input type="submit">
        
            </form>
        
        
        
        
        </div>
    </div>
    
</template>


<style scoped>

input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        }

</style>