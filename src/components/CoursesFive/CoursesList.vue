<template>
  <div class="courses-area ptb-100 bg-f5f7fa">
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
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img1.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$39</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      Agile Crash Course: Agile Project Management
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 15 Lessons</li>
                    <li><i class="flaticon-people"></i> 145 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img2.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$99</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      Vue JS 3 - The Complete Guide (incl. Vue Router & Vuex)
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 14 Lessons</li>
                    <li><i class="flaticon-people"></i> 100 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img3.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$49</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      The Python Bible™ | Everything You Need to Program in
                      Python
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 11 Lessons</li>
                    <li><i class="flaticon-people"></i> 104 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img4.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$79</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      Mathematical Foundation For Machine Learning and AI
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 14 Lessons</li>
                    <li><i class="flaticon-people"></i> 100 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img5.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav"
                    ><i class="flaticon-heart"></i
                  ></router-link>
                  <span class="price">$59</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      The Ultimate Drawing Course - Beginner to Advanced
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 09 Lessons</li>
                    <li><i class="flaticon-people"></i> 150 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img6.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$89</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      PyTorch: Deep Learning and Artificial Intelligence
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 20 Lessons</li>
                    <li><i class="flaticon-people"></i> 200 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img7.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$39</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      Data Visualization with Python and Matplotlib
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 15 Lessons</li>
                    <li><i class="flaticon-people"></i> 145 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img8.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$99</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      Static and Interactive Data Visualizations in R
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 14 Lessons</li>
                    <li><i class="flaticon-people"></i> 100 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img9.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$49</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      R for Data Science: Learn R Programming in 2 Hours
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 11 Lessons</li>
                    <li><i class="flaticon-people"></i> 104 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img10.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$79</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      Complete Python Developer in 2021: Zero to Mastery
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 14 Lessons</li>
                    <li><i class="flaticon-people"></i> 100 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img11.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$59</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      Python for Beginners with Examples
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 09 Lessons</li>
                    <li><i class="flaticon-people"></i> 150 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="single-courses-item">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="courses-image">
                  <img
                    src="../../assets/img/courses-small/img12.jpg"
                    alt="image"
                  />
                  <router-link
                    to="/single-courses-one"
                    class="link-btn"
                  ></router-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="courses-content">
                  <router-link to="/single-courses-one" class="fav">
                    <i class="flaticon-heart"></i>
                  </router-link>
                  <span class="price">$89</span>
                  <h3>
                    <router-link to="/single-courses-one">
                      Python Django Web Development: To-Do App
                    </router-link>
                  </h3>
                  <ul
                    class="courses-content-footer d-flex justify-content-between align-items-center"
                  >
                    <li><i class="flaticon-agenda"></i> 20 Lessons</li>
                    <li><i class="flaticon-people"></i> 200 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="pagination-area text-center">
            <router-link to="/courses-five" class="prev page-numbers"
              ><i class="bx bx-chevrons-left"></i
            ></router-link>
            <span class="page-numbers current" aria-current="page">1</span>
            <router-link to="/courses-five" class="page-numbers">2</router-link>
            <router-link to="/courses-five" class="page-numbers">3</router-link>
            <router-link to="/courses-five" class="page-numbers">4</router-link>
            <router-link to="/courses-five" class="next page-numbers"
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
  name: "CoursesList",
};
</script>
