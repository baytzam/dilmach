<template>
    <div class="courses-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Go at your own pace</span>
                <h2>Project Management Master's Program</h2>
                <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-courses-box bg-color">
                        <div class="courses-image">
                            <router-link to="/single-courses-two" class="d-block image">
                                <img src="../../assets/img/courses/img6.jpg" alt="image">
                            </router-link>
                            <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                            <div class="price shadow">$39</div>
                        </div>
                        <div class="courses-content">
                            <h3><router-link to="/single-courses-two">PMP® Plus</router-link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                <li><i class='flaticon-agenda'></i> 15 Lessons</li>
                                <li><i class='flaticon-people'></i> 145 Students</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-courses-box bg-color">
                        <div class="courses-image">
                            <router-link to="/single-courses-two" class="d-block image">
                                <img src="../../assets/img/courses/img7.jpg" alt="image">
                            </router-link>
                            <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                            <div class="price shadow">$49</div>
                        </div>
                        <div class="courses-content">
                            <h3><router-link to="/single-courses-two">PMP® Renewal Pack</router-link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                <li><i class='flaticon-agenda'></i> 20 Lessons</li>
                                <li><i class='flaticon-people'></i> 100 Students</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-courses-box bg-color">
                        <div class="courses-image">
                            <router-link to="/single-courses-two" class="d-block image">
                                <img src="../../assets/img/courses/img8.jpg" alt="image">
                            </router-link>
                            <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                            <div class="price shadow">$59</div>
                        </div>
                        <div class="courses-content">
                            <h3><router-link to="/single-courses-two">Digital Project Manager</router-link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                <li><i class='flaticon-agenda'></i> 20 Lessons</li>
                                <li><i class='flaticon-people'></i> 150 Students</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape16">
            <img src="../../assets/img/shape/shape15.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectManagementMasters'
}
</script>