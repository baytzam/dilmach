<template>
    <div class="subscribe-area bg-f9f9f9 ptb-100">
        <div class="container">
            <div class="subscribe-content">
                <span class="sub-title">Go At Your Own Pace</span>
                <h2>Subscribe To Our Newsletter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form class="newsletter-form" @submit.prevent>
                    <input type="text" class="input-newsletter" placeholder="Enter your email address" name="EMAIL">
                    <button type="submit" class="default-btn">
                        <i class="flaticon-user"></i>
                        Subscribe Now
                        <span></span>
                    </button>
                </form>
            </div>
        </div>
        <div class="shape4">
            <img src="../../assets/img/shape/shape4.png" alt="image">
        </div>
        <div class="shape13">
            <img src="../../assets/img/shape/shape12.png" alt="image">
        </div>
        <div class="shape14">
            <img src="../../assets/img/shape/shape13.png" alt="image">
        </div>
        <div class="shape15">
            <img src="../../assets/img/shape/shape14.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Subscribe',
    methods: {
        formSubmit() {
            console.log('form submitted');
        },
    },
}
</script>