<template>
  <div class="courses-area courses-section ptb-100">
    <div class="container">
      <div class="vdemy-grid-sorting row align-items-center">
        <div class="col-lg-6 col-md-6 result-count">
          <p>
            We found <span class="count">12</span> courses available for you
          </p>
        </div>
        <div class="col-lg-6 col-md-6 ordering">
          <div class="select-box">
            <label>Sort By:</label>
            <select>
              <option>Default</option>
              <option>Popularity</option>
              <option>Latest</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-box bg-color">
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
                  The Data Science Course 2021: Complete Data Science Bootcamp
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
          <div class="single-courses-box bg-color">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
          <div class="single-courses-box bg-color">
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
                  Deep Learning A-Z???: Hands-On Artificial Neural Networks
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-box bg-color">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img4.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$39</div>
            </div>
            <div class="courses-content">
              <div class="course-author d-flex align-items-center">
                <img
                  src="../../assets/img/user/user6.jpg"
                  class="rounded-circle"
                  alt="image"
                />
                <span>Alex Morgan</span>
              </div>
              <h3>
                <router-link to="/single-courses-one">
                  Python for Finance: Investment Fundamentals & Data Analytics
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
          <div class="single-courses-box bg-color">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img5.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$49</div>
            </div>
            <div class="courses-content">
              <div class="course-author d-flex align-items-center">
                <img
                  src="../../assets/img/user/user5.jpg"
                  class="rounded-circle"
                  alt="image"
                />
                <span>Sarah Taylor</span>
              </div>
              <h3>
                <router-link to="/single-courses-one">
                  Machine Learning A-Z???: Hands-On Python & R In Data Science
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
          <div class="single-courses-box bg-color">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img6.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$99</div>
            </div>
            <div class="courses-content">
              <div class="course-author d-flex align-items-center">
                <img
                  src="../../assets/img/user/user4.jpg"
                  class="rounded-circle"
                  alt="image"
                />
                <span>James Anderson</span>
              </div>
              <h3>
                <router-link to="/single-courses-one">
                  R Programming A-Z???: R For Data Science With Real Exercises!
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <ul
                class="courses-box-footer d-flex justify-content-between align-items-center"
              >
                <li><i class="flaticon-agenda"></i> 44 Lessons</li>
                <li><i class="flaticon-people"></i> 440 Students</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-box bg-color">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img10.jpg" alt="image" />
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
                  Deep Learning The Numpy Stack in Python
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
          <div class="single-courses-box bg-color">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img11.jpg" alt="image" />
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
                  Statistics for Data Science and Business Analysis
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
          <div class="single-courses-box bg-color">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img12.jpg" alt="image" />
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
                  Microsoft Excel - Excel from Beginner to Advanced
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-box bg-color">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img13.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$39</div>
            </div>
            <div class="courses-content">
              <div class="course-author d-flex align-items-center">
                <img
                  src="../../assets/img/user/user6.jpg"
                  class="rounded-circle"
                  alt="image"
                />
                <span>Alex Morgan</span>
              </div>
              <h3>
                <router-link to="/single-courses-one">
                  Python Django Web Development: To-Do App
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
          <div class="single-courses-box bg-color">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img14.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$49</div>
            </div>
            <div class="courses-content">
              <div class="course-author d-flex align-items-center">
                <img
                  src="../../assets/img/user/user5.jpg"
                  class="rounded-circle"
                  alt="image"
                />
                <span>Sarah Taylor</span>
              </div>
              <h3>
                <router-link to="/single-courses-one">
                  Oracle SQL Developer : Essentials, Tips and Tricks
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
          <div class="single-courses-box bg-color">
            <div class="courses-image">
              <router-link to="/single-courses-one" class="d-block image">
                <img src="../../assets/img/courses/img15.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$99</div>
            </div>
            <div class="courses-content">
              <div class="course-author d-flex align-items-center">
                <img
                  src="../../assets/img/user/user4.jpg"
                  class="rounded-circle"
                  alt="image"
                />
                <span>James Anderson</span>
              </div>
              <h3>
                <router-link to="/single-courses-one">
                  Learning A-Z???: Hands-On Python In Data Science
                </router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <ul
                class="courses-box-footer d-flex justify-content-between align-items-center"
              >
                <li><i class="flaticon-agenda"></i> 44 Lessons</li>
                <li><i class="flaticon-people"></i> 440 Students</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="pagination-area text-center">
            <router-link to="/courses-three" class="prev page-numbers"
              ><i class="bx bx-chevrons-left"></i
            ></router-link>
            <span class="page-numbers current" aria-current="page">1</span>
            <router-link to="/courses-three" class="page-numbers"
              >2</router-link
            >
            <router-link to="/courses-three" class="page-numbers"
              >3</router-link
            >
            <router-link to="/courses-three" class="page-numbers"
              >4</router-link
            >
            <router-link to="/courses-three" class="next page-numbers"
              ><i class="bx bx-chevrons-right"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
};
</script>
