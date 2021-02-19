<template>
    <div>
        <h1>Register Here</h1>
        <div class="reg-form">
            <form>
                <input type="text" name="name" label="Name: " placeholder="Last Name, Fist Name MI" required><br>
                <input type="email" name="email" label="Email: " placeholder="Email Address" required><br>
                <input type="radio" name="gender" label="Male" value="male">
                <label for="male">Male</label><br>
                <input type="radio" name="gender" label="Female" value="female">
                <label for="male">Female</label><br>
                <input type="date" name="birthdate">
                <input type="number" name="contact-number" minlength=11>

            </form>
        
        
        
        
        </div>
    </div>
    
</template>


<style scoped>

</style>