<template>
    <div class="subscribe-area bg-eee8df ptb-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="subscribe-image">
                        <img src="../../assets/img/subscribe/subscribe-img3.png" alt="image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="subscribe-content text-start">
                        <h2 class="font-weight-black">Subscribe To Our Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <form class="newsletter-form" @submit.prevent>
                            <input type="text" class="input-newsletter" placeholder="Enter your email address" name="EMAIL">
                            <button type="submit" class="default-btn"><i class="flaticon-user"></i>Subscribe Now<span></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="kindergarten-shape19">
            <img src="../../assets/img/kindergarten-shape/k-shape19.png" alt="image">
        </div>
        <div class="kindergarten-shape20">
            <img src="../../assets/img/kindergarten-shape/k-shape20.png" alt="image">
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