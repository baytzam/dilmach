<template>
    <div class="about-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-image text-center">
                        <img src="../../assets/img/23.png" alt="image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <span class="sub-title">Why choose us</span>
                        <h2>Наши групповые занятия проходят на онлайн платформе</h2>
                        <p>We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!</p>
                        <ul class="features-list">
                            <li><span><i class="flaticon-experience"></i> Skiled Teachers</span></li>
                            <li><span><i class="flaticon-time-left"></i> Afordable Courses</span></li>
                            <li><span><i class="flaticon-tutorials"></i> Efficient & Flexible</span></li>
                            <li><span><i class="flaticon-self-growth"></i> Lifetime Accesss</span></li>
                        </ul>
                        <router-link to="/authentication" class="default-btn">
                            <i class="flaticon-user"></i>
                            Join For Free
                            <span></span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhyChooseUs'
}
</script>