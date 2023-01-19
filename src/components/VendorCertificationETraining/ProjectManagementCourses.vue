<template>
    <div class="courses-area pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Go at your own pace</span>
                    <h2>Popular Project Management Courses</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses-box without-boxshadow">
                            <div class="courses-image">
                                <a href="single-courses-2.html" class="d-block image">
                                    <img src="../../assets/img/courses/img9.jpg" alt="image">
                                </a>
                                <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                <div class="price shadow">$39</div>
                            </div>
                            <div class="courses-content">
                                <div class="course-author d-flex align-items-center">
                                    <img src="../../assets/img/user/user1.jpg" class="rounded-circle" alt="image">
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <router-link to="/single-courses-two">
                                        PRINCE2® Practitioner Certification Training
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
                        <div class="single-courses-box without-boxshadow active">
                            <div class="courses-image">
                                <a href="single-courses-2.html" class="d-block image">
                                    <img src="../../assets/img/courses/img10.jpg" alt="image">
                                </a>
                                <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                <div class="price shadow">$49</div>
                            </div>
                            <div class="courses-content">
                                <div class="course-author d-flex align-items-center">
                                    <img src="../../assets/img/user/user2.jpg" class="rounded-circle" alt="image">
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <router-link to="/single-courses-twol">P
                                        MI-RMP® Certification Training
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
                        <div class="single-courses-box without-boxshadow">
                            <div class="courses-image">
                                <a href="single-courses-2.html" class="d-block image">
                                    <img src="../../assets/img/courses/img11.jpg" alt="image">
                                </a>
                                <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                <div class="price shadow">$59</div>
                            </div>
                            <div class="courses-content">
                                <div class="course-author d-flex align-items-center">
                                    <img src="../../assets/img/user/user3.jpg" class="rounded-circle" alt="image">
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <router-link to="/single-courses-two">
                                        PRINCE2® Foundation Certification Training
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
                    <div class="col-lg-12 col-md-12">
                        <div class="courses-info">
                            <router-link to="/courses-two" class="default-btn">
                                <i class="flaticon-user"></i>
                                View All Courses
                                <span></span>
                            </router-link>
                            <p>Get into details now? <router-link to="/courses-two">PM Master’s Program</router-link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'ProjectManagementCourses'
}
</script>