<template>
  <div class="courses-area ptb-100">
    <div class="container">
      <div class="section-title">
        <span class="sub-title">Learn At Your Own Pace</span>
        <h2>Vdemy Popular Courses</h2>
        <p>
          Explore all of our courses and pick your suitable ones to enroll and
          start learning with us! We ensure that you will never regret it!
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-box">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img1.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$39</div>
            </div>
            <div class="courses-content">
              <div class="course-author d-flex align-items-center">
                <img
                  src="../../assets/img/user/user1.jpg"
                  class="rounded-circle"
                  alt="image"
                />
                <span>Alex Morgan</span>
              </div>
              <h3>
                <router-link to="/single-courses-one">
                  Deep Learning a-z™: Hands-on Artificial Neural Networks
                </router-link>
              </h3>
              <p>
                This master level course is for you if you are looking to learn
                the DL & ANN topics in and out within a short time!
              </p>
              <ul
                class="courses-box-footer d-flex justify-content-between align-items-center"
              >
                <li><i class="flaticon-agenda"></i> 15 Lessons</li>
                <li><i class="flaticon-people"></i> 145 Students</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-box">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img2.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$49</div>
            </div>
            <div class="courses-content">
              <div class="course-author d-flex align-items-center">
                <img
                  src="../../assets/img/user/user2.jpg"
                  class="rounded-circle"
                  alt="image"
                />
                <span>Sarah Taylor</span>
              </div>
              <h3>
                <router-link to="/single-courses-one">
                  Java Programming Masterclass for Software Developers
                </router-link>
              </h3>
              <p>
                Java is the most stable and vastly uses a top programming
                language for mobile, web, and desktop environments.
              </p>
              <ul
                class="courses-box-footer d-flex justify-content-between align-items-center"
              >
                <li><i class="flaticon-agenda"></i> 20 Lessons</li>
                <li><i class="flaticon-people"></i> 100 Students</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-box">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img3.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$59</div>
            </div>
            <div class="courses-content">
              <div class="course-author d-flex align-items-center">
                <img
                  src="../../assets/img/user/user3.jpg"
                  class="rounded-circle"
                  alt="image"
                />
                <span>David Warner</span>
              </div>
              <h3>
                <router-link to="/single-courses-one">
                  The Data Science Course 2022: Complete Data Science
                </router-link>
              </h3>
              <p>
                We designed the Data Science Bootcamp course to give you the
                best learning experience within a short time.
              </p>
              <ul
                class="courses-box-footer d-flex justify-content-between align-items-center"
              >
                <li><i class="flaticon-agenda"></i> 20 Lessons</li>
                <li><i class="flaticon-people"></i> 150 Students</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="courses-info">
            <p>
              Enjoy the top notch learning methods and achieve next level
              skills! You are the creator of your own career & we will guide you
              through that.
              <router-link to="/authentication">Register Free Now!</router-link
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularCourses",
};
</script>
