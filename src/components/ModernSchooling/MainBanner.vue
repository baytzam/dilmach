<template>
    <div class="hero-banner-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="hero-banner-content">
                        <h1>Build Development Skills With eCademy Any Time, Anywhere</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <router-link to="/authentication" class="default-btn">
                            <i class="flaticon-user"></i>
                            Join For Free
                            <span></span>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="hero-banner-image">
                        <img src="../../assets/img/banner/main-banner3.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-shape19">
            <img src="../../assets/img/shape/banner-shape20.png" alt="image">
        </div>
        <div class="divider"></div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>