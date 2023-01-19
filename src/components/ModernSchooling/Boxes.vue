<template>
    <div class="boxes-area boxes-style-two bg-f5f7fa">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-box-item">
                        <div class="image">
                            <img src="../../assets/img/shape/boxes-img1.png" alt="image">
                        </div>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.</p>
                        <router-link to="/courses-one" class="link-btn">Start Now!</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-box-item">
                        <div class="image">
                            <img src="../../assets/img/shape/boxes-img2.png" alt="image">
                        </div>
                        <h3>UX/UI Design</h3>
                        <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.</p>
                        <router-link to="/courses-one" class="link-btn">Start Now!</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-box-item">
                        <div class="image">
                            <img src="../../assets/img/shape/boxes-img3.png" alt="image">
                        </div>
                        <h3>App Development</h3>
                        <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.</p>
                        <router-link to="/courses-one" class="link-btn">Start Now!</router-link>
                    </div>
                </div>
            </div>
            <div class="boxes-info">
                <p>If you want more? <router-link to="/courses-one">View More Courses</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Boxes'
}
</script>