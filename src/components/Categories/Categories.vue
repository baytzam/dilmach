<template>
    <div class="categories-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img1.jpg" alt="image">
                        <div class="content">
                            <h3>Development</h3>
                            <span>10 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img2.jpg" alt="image">
                        <div class="content">
                            <h3>Business</h3>
                            <span>20 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img3.jpg" alt="image">
                        <div class="content">
                            <h3>IT & Software</h3>
                            <span>15 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img4.jpg" alt="image">
                        <div class="content">
                            <h3>Design</h3>
                            <span>11 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img5.jpg" alt="image">
                        <div class="content">
                            <h3>Lifestyle</h3>
                            <span>10 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img6.jpg" alt="image">
                        <div class="content">
                            <h3>Photo & Flim</h3>
                            <span>12 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img7.jpg" alt="image">
                        <div class="content">
                            <h3>Animation</h3>
                            <span>05 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img8.jpg" alt="image">
                        <div class="content">
                            <h3>Writing</h3>
                            <span>20 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img9.jpg" alt="image">
                        <div class="content">
                            <h3>Python</h3>
                            <span>10 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img10.jpg" alt="image">
                        <div class="content">
                            <h3>Data Science</h3>
                            <span>12 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img11.jpg" alt="image">
                        <div class="content">
                            <h3>Machine Learning</h3>
                            <span>05 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-categories-box">
                        <img src="../../assets/img/categories/img12.jpg" alt="image">
                        <div class="content">
                            <h3>Web Development</h3>
                            <span>20 Courses</span>
                        </div>
                        <a href="#" class="link-btn"></a>
                    </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-md-12">
                    <div class="pagination-area text-center">
                        <router-link to="/categories" class="prev page-numbers"><i class='bx bx-chevrons-left'></i></router-link>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <router-link to="/categories" class="page-numbers">2</router-link>
                        <router-link to="/categories" class="page-numbers">3</router-link>
                        <router-link to="/categories" class="page-numbers">4</router-link>
                        <router-link to="/categories" class="next page-numbers"><i class='bx bx-chevrons-right'></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Categories'
}
</script>