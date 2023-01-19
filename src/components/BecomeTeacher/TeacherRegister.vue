<template>
    <div class="teacher-register-area ptb-100">
        <div class="container">
            <div class="teacher-register-box">
                <h2>Register to Become an Intructor</h2>
                <p>Your email address will not be published. Required fields are marked *</p>
                <form @submit.prevent>
                    <div class="form-group mb-3">
                        <input type="text" placeholder="Your Name *" required>
                    </div>
                    <div class="form-group mb-3">
                        <input type="email" placeholder="Your Email *" required>
                    </div>
                    <div class="form-group mb-3">
                        <input type="text" placeholder="Your Phone *" required>
                    </div>
                    <div class="form-group mb-3">
                        <textarea placeholder="Your Message *" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit" class="default-btn">Submit Message<span></span></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeacherRegister',
    methods: {
        formSubmit() {
            console.log('form submitted');
        },
    },
}
</script>