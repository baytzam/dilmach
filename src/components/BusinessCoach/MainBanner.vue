<template>
    <div class="caoching-banner-area">
        <div class="container">
            <ul class="social-links">
                <li>
                    <a href="https://linkedin.com/" target="_blank">Linkedin</a>
                </li>
                <li>
                    <a href="https://facebook.com/" target="_blank">Facebook</a>
                </li>
                <li>
                    <a href="https://instagram.com/" target="_blank">Instagram</a>
                </li>
                <li>
                    <a href="https://pinterest.com/" target="_blank">Pinterest</a>
                </li>
            </ul>
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="caoching-banner-content">
                        <h1 class="inter-font">Control with eCademy Business Coaching</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        <router-link to="/authentication" class="default-btn">
                            <i class="flaticon-user"></i>
                            Get My Free Book
                            <span></span>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12">
                    <div class="caoching-banner-image">
                        <img src="../../assets/img/business-coach/business-man.png" alt="business">
                    </div>
                </div>
            </div>
        </div>
        <div class="c-shape1">
            <img src="../../assets/img/business-coach/c-shape1.png" alt="shape">
        </div>
        <div class="c-shape2">
            <img src="../../assets/img/business-coach/c-shape2.png" alt="shape">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>