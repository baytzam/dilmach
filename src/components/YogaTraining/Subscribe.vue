<template>
    <div class="subscribe-area bg-f5f7fa ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="subscribe-image">
                        <img src="../../assets/img/subscribe/subscribe-img1.png" alt="image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="subscribe-content">
                        <span class="sub-title">Go At Your Own Pace</span>
                        <h2 class="playfair-display-font">Subscribe To Our Newsletter</h2>
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
            </div>
        </div>
        <div class="shape4">
            <img src="../../assets/img/shape/shape4.png" alt="image">
        </div>
        <div class="shape13">
            <img src="../../assets/img/shape/shape12.png" alt="image">
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