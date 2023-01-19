<template>
    <div class="lifestyle-area bg-f6f7fb pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2 class="playfair-display-font">Inspring you to live a healthier lifestyle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-lifestyle-box">
                        <div class="icon">
                            <i class="flaticon-diet"></i>
                        </div>
                        <h3 class="playfair-display-font">
                            <router-link to="/courses-one">Nutrition Strategies</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <router-link to="/courses-one" class="link-btn">Start Now</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-lifestyle-box">
                        <div class="icon">
                            <i class="flaticon-vitamin-c"></i>
                        </div>
                        <h3 class="playfair-display-font">
                            <router-link to="/courses-one">Personal Program</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <router-link to="/courses-one" class="link-btn">Start Now</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-lifestyle-box">
                        <div class="icon">
                            <i class="flaticon-heart-rate-monitor"></i>
                        </div>
                        <h3 class="playfair-display-font">
                            <router-link to="/courses-one">Find Your Balance</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <router-link to="/courses-one" class="link-btn">Start Now</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HealthierLifestyle'
}
</script>