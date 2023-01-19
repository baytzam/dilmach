<template>
    <div class="main-banner">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="main-banner-content">
                        <h1>The World’s Leading Distance Learning Provider</h1>
                        <p>Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The Vdemy can offer you to enjoy the beauty of eLearning!</p>
                        <router-link to="/authentication" class="default-btn">
                            <i class="flaticon-user"></i>
                            Join For Free
                            <span></span>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="main-banner-courses-list">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-courses-box">
                                    <div class="courses-image">
                                        <router-link to="/single-courses-one" class="d-block image">
                                            <img src="../../assets/img/courses/img4.jpg" alt="image">
                                        </router-link>
                                        <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                        <div class="price shadow">$39</div>
                                    </div>
                                    <div class="courses-content">
                                        <div class="course-author d-flex align-items-center">
                                            <img src="../../assets/img/user/user6.jpg" class="rounded-circle" alt="image">
                                            <span>Alex Morgan</span>
                                        </div>
                                        <h3>
                                            <router-link to="/single-courses-one">
                                                Python for Finance: Investment Fundamentals & Data Analytics
                                            </router-link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                            <li><i class='flaticon-agenda'></i> 15 Lessons</li>
                                            <li><i class='flaticon-people'></i> 145 Students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="single-courses-box">
                                    <div class="courses-image">
                                        <router-link to="/single-courses-one" class="d-block image">
                                            <img src="../../assets/img/courses/img5.jpg" alt="image">
                                        </router-link>
                                        <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                        <div class="price shadow">$49</div>
                                    </div>
                                    <div class="courses-content">
                                        <div class="course-author d-flex align-items-center">
                                            <img src="../../assets/img/user/user5.jpg" class="rounded-circle" alt="image">
                                            <span>Sarah Taylor</span>
                                        </div>
                                        <h3>
                                            <router-link to="/single-courses-one">
                                                Machine Learning A-Z™: Hands-On Python & R In Data Science
                                            </router-link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                            <li><i class='flaticon-agenda'></i> 20 Lessons</li>
                                            <li><i class='flaticon-people'></i> 100 Students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="banner-shape1">
                            <img src="../../assets/img/shape/banner-shape1.png" alt="image">
                        </div>
                        <div class="banner-shape2">
                            <img src="../../assets/img/shape/banner-shape2.png" alt="image">
                        </div>
                        <div class="banner-shape3">
                            <img src="../../assets/img/shape/banner-shape3.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>