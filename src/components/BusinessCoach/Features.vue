<template>
    <div class="features-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Education for everyone</span>
                <h2 class="inter-font font-weight-bold">Online Coaching Lessons For Remote Learning</h2>
                <p>Finding your own space and utilize better learning options can result in faster than the traditional ways. Enjoy the beauty of eLearning!</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-features-box without-bg">
                        <div class="icon">
                            <i class="flaticon-brain-process"></i>
                        </div>
                        <h3 class="inter-font font-weight-bold">Learn the Latest Top Skills</h3>
                        <p>Learning top skills can bring an extra-ordinary outcome in a career.</p>
                        <router-link to="/authentication" class="link-btn">Start Now!</router-link>
                        <div class="back-icon">
                            <i class="flaticon-brain-process"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-features-box without-bg active">
                        <div class="icon">
                            <i class="flaticon-shield-1"></i>
                        </div>
                        <h3 class="inter-font font-weight-bold">Learn From Industry Experts</h3>
                        <p>Experienced teachers can assist in learning faster with their best approaches!</p>
                        <router-link to="/authentication" class="link-btn">Start Now!</router-link>
                        <div class="back-icon">
                            <i class="flaticon-shield-1"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-features-box without-bg">
                        <div class="icon">
                            <i class="flaticon-world"></i>
                        </div>
                        <h3 class="inter-font font-weight-bold">Learn Anywhere in the World</h3>
                        <p>We are delighted to give you options to enjoy learning from anywhere in the world.</p>
                        <router-link to="/authentication" class="link-btn">Start Now!</router-link>
                        <div class="back-icon">
                            <i class="flaticon-world"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features'
}
</script>