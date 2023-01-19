<template>
    <div class="training-area bg-f5f7fa pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2 class="playfair-display-font">Why Online Yoga Training</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-training-box">
                        <img src="../../assets/img/shape/training-img1.png" alt="image">
                        <h3 class="playfair-display-font">
                            <router-link to="/courses-one">Flexibility</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <router-link to="/courses-one" class="link-btn">Start Now</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-training-box">
                        <img src="../../assets/img/shape/training-img2.png" alt="image">
                        <h3 class="playfair-display-font">
                            <router-link to="/courses-one">Comfort</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <router-link to="/courses-one" class="link-btn">Start Now</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-training-box">
                        <img src="../../assets/img/shape/training-img3.png" alt="image">
                        <h3 class="playfair-display-font">
                            <router-link to="/courses-one">Resources</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <router-link to="/courses-one" class="link-btn">Start Now</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="tree-shape2">
            <img src="../../assets/img/shape/tree-shape2.png" alt="image">
        </div>
        <div class="tree-shape3">
            <img src="../../assets/img/shape/tree-shape3.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineYogaTraining'
}
</script>