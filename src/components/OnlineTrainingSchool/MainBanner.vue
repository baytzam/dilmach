<template>
    <div class="banner-wrapper-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="banner-wrapper-content">
                        <h1>Build Skills With Experts Any Time, Anywhere</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <form @submit.prevent>
                            <label><i class="flaticon-search"></i></label>
                            <input type="text" class="input-search" placeholder="What do you want to learn?">
                            <button type="submit">Search Now</button>
                        </form>
                        <ul class="popular-search-list">
                            <li><span>Popular:</span></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">UX/UI</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="banner-wrapper-image">
                        <img src="../../assets/img/banner/banner-img2.png" alt="image">
                        <div class="banner-shape8">
                            <img src="../../assets/img/shape/banner-shape8.png" alt="image">
                        </div>
                        <div class="banner-shape9">
                            <img src="../../assets/img/shape/banner-shape9.png" alt="image">
                        </div>
                        <div class="banner-shape10">
                            <img src="../../assets/img/shape/banner-shape10.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-inner-area">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-banner-box">
                            <div class="icon">
                                <i class="flaticon-brain-process"></i>
                            </div>
                            <h3>10,000 Online Courses</h3>
                            <p>Lorem ipsum dolor sit amet consectets.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-banner-box">
                            <div class="icon">
                                <i class="flaticon-people"></i>
                            </div>
                            <h3>Experts Teachers</h3>
                            <p>Lorem ipsum dolor sit amet consectets.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-banner-box">
                            <div class="icon">
                                <i class="flaticon-world"></i>
                            </div>
                            <h3>Lifetime Accesss</h3>
                            <p>Lorem ipsum dolor sit amet consectets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider"></div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner',
    methods: {
        formSubmit() {
            console.log('form submitted');
        },
    },
}
</script>