<template>
    <div class="yoga-main-banner">
        <div class="container-fluid">
            <div class="yoga-banner-content">
                <img src="../../assets/img/yoga-banner.png" alt="image" class="main-image">
                <div class="content">
                    <img src="../../assets/img/shape/top-img.png" class="top-image" alt="image">
                    <h1 class="playfair-display-font">Accredited Online Yoga Teacher Training</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <router-link to="/authentication" class="default-btn">
                        <i class="flaticon-user"></i>
                        Join For Free
                        <span></span>
                    </router-link>
                    <br>
                    <img src="../../assets/img/shape/bottom-img.png" class="bottom-image" alt="image">
                </div>
            </div>
        </div>
        <div class="banner-shape2">
            <img src="../../assets/img/shape/banner-shape2.png" alt="image">
        </div>
        <div class="banner-shape3">
            <img src="../../assets/img/shape/banner-shape3.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>