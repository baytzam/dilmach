<template>
    <div class="about-me-area pb-100">
        <div class="container">
            <div class="about-me-inner">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-12">
                        <div class="about-me-image">
                            <img src="../../assets/img/business-coach/business-coach2.jpg" alt="business">
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12">
                        <div class="about-me-content">
                            <span class="sub-title">ABOUT ME</span>
                            <h2 class="inter-font">Keep you accountable for your goals as a business and as a leader within your organization</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="quote">
                                “I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’”
                            </div>
                            <router-link to="/-authentication" class="default-btn">
                                <i class="flaticon-user"></i>
                                Join For Free
                                <span></span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>