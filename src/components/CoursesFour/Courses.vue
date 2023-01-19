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
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img12.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$39</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  Agile Crash Course: Agile Project Management
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (1 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img13.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$59</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  Vue JS 3 - The Complete Guide (incl. Vue Router & Vuex)
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (2 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img14.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$69</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  The Python Bible™ | Everything You Need to Program in Python
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (3 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img15.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$79</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  Mathematical Foundation For Machine Learning and AI
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (4 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img16.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$89</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  The Ultimate Drawing Course - Beginner to Advanced
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (5 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img17.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$99</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  PyTorch: Deep Learning and Artificial Intelligence
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (6 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img1.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$39</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  Azure Machine Learning Certification- AZ AI100
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (1 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img2.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$59</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  Statistics for Data Science and Business Analysis
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (2 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img3.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$69</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  Data Science & Deep Learning for Business™ 20 Case Studies
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (3 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img4.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$79</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  Introduction to Machine Learning for Data Science
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (4 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img5.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$89</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  Microsoft Excel - Excel from Beginner to Advanced
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (5 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-courses-item-box">
            <div class="courses-image">
              <router-link to="/single-courses-two" class="d-block image">
                <img src="../../assets/img/courses/img6.jpg" alt="image" />
              </router-link>
              <a href="#" class="fav"><i class="flaticon-heart"></i></a>
              <div class="price shadow">$99</div>
            </div>
            <div class="courses-content">
              <h3>
                <router-link to="/single-courses-two">
                  Python Django Web Development: To-Do App
                </router-link>
              </h3>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <div class="rating-total">5.0 (6 rating)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="pagination-area text-center">
            <router-link to="/courses-four" class="prev page-numbers"
              ><i class="bx bx-chevrons-left"></i
            ></router-link>
            <span class="page-numbers current" aria-current="page">1</span>
            <router-link to="/courses-four" class="page-numbers">2</router-link>
            <router-link to="/courses-four" class="page-numbers">3</router-link>
            <router-link to="/courses-four" class="page-numbers">4</router-link>
            <router-link to="/courses-four" class="next page-numbers"
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
