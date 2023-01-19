<template>
    <div class="profile-area pt-100 pb-70">
        <div class="container">
            <div class="profile-box">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-4">
                        <div class="image">
                            <img src="../../assets/img/advisor/img10.jpg" alt="image">
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8">
                        <div class="content">
                            <h3>Sarah Taylor</h3>
                            <span class="sub-title">Agile Project Expert</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul class="info">
                                <li><span>Phone Number:</span> <a href="tel:+44254588689">(+44) -2545 - 88689</a></li>
                                <li><span>Email:</span> <a href="mailto:hello@sarahtaylor.com">hello@sarahtaylor.com</a></li>
                            </ul>
                            <ul class="social-link">
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile-courses-quizzes">
                <div class="section-title">
                    <h2>Courses</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses-box">
                            <div class="courses-image">
                                <router-link to="/single-courses-one" class="d-block image">
                                    <img src="../../assets/img/courses/img1.jpg" alt="image">
                                </router-link>
                                <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                <div class="price shadow">$39</div>
                            </div>
                            <div class="courses-content">
                                <div class="course-author d-flex align-items-center">
                                    <img src="../../assets/img/user/user1.jpg" class="rounded-circle" alt="image">
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <router-link to="/single-courses-one">
                                        The Data Science Course 2021: Complete Data Science Bootcamp
                                    </router-link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li><i class='flaticon-agenda'></i> 15 Lessons</li>
                                    <li><i class='flaticon-people'></i> 145 Students</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses-box">
                            <div class="courses-image">
                                <router-link to="/single-courses-one" class="d-block image">
                                    <img src="../../assets/img/courses/img2.jpg" alt="image">
                                </router-link>
                                <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                <div class="price shadow">$49</div>
                            </div>
                            <div class="courses-content">
                                <div class="course-author d-flex align-items-center">
                                    <img src="../../assets/img/user/user2.jpg" class="rounded-circle" alt="image">
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <router-link to="/single-courses-one">
                                        Java Programming Masterclass for Software Developers
                                    </router-link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li><i class='flaticon-agenda'></i> 20 Lessons</li>
                                    <li><i class='flaticon-people'></i> 100 Students</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses-box">
                            <div class="courses-image">
                                <router-link to="/single-courses-one" class="d-block image">
                                    <img src="../../assets/img/courses/img3.jpg" alt="image">
                                </router-link>
                                <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                <div class="price shadow">$59</div>
                            </div>
                            <div class="courses-content">
                                <div class="course-author d-flex align-items-center">
                                    <img src="../../assets/img/user/user3.jpg" class="rounded-circle" alt="image">
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <router-link to="/single-courses-one">
                                        Deep Learning A-Z™: Hands-On Artificial Neural Networks
                                    </router-link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li><i class='flaticon-agenda'></i> 20 Lessons</li>
                                    <li><i class='flaticon-people'></i> 150 Students</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
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
                    <div class="col-lg-4 col-md-6">
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
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses-box">
                            <div class="courses-image">
                                <router-link to="/single-courses-one" class="d-block image">
                                    <img src="../../assets/img/courses/img6.jpg" alt="image">
                                </router-link>
                                <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                <div class="price shadow">$99</div>
                            </div>
                            <div class="courses-content">
                                <div class="course-author d-flex align-items-center">
                                    <img src="../../assets/img/user/user4.jpg" class="rounded-circle" alt="image">
                                    <span>James Anderson</span>
                                </div>
                                <h3>
                                    <router-link to="/single-courses-one">
                                        R Programming A-Z™: R For Data Science With Real Exercises!
                                    </router-link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li><i class='flaticon-agenda'></i> 44 Lessons</li>
                                    <li><i class='flaticon-people'></i> 440 Students</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <div class="pagination-area text-center">
                            <a href="#" class="prev page-numbers"><i class='bx bx-chevrons-left'></i></a>
                            <span class="page-numbers current" aria-current="page">1</span>
                            <a href="#" class="page-numbers">2</a>
                            <a href="#" class="page-numbers">3</a>
                            <a href="#" class="page-numbers">4</a>
                            <a href="#" class="page-numbers">5</a>
                            <a href="#" class="next page-numbers"><i class='bx bx-chevrons-right'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile'
}
</script>