<template>
  <div class="blog-details-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="blog-details-desc">
            <div class="article-image-slides">
              <carousel :autoplay="5000" :wrap-around="true">
                <Slide v-for="slide in carouselItems" :key="slide.id">
                  <div class="article-image">
                    <img :src="slide.image" alt="image" />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </carousel>
            </div>
            <div class="article-content">
              <div class="entry-meta">
                <ul>
                  <li>
                    <i class="bx bx-folder-open"></i>
                    <span>Category</span>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <i class="bx bx-group"></i>
                    <span>View</span>
                    <a href="#">813,454</a>
                  </li>
                  <li>
                    <i class="bx bx-calendar"></i>
                    <span>Last Updated</span>
                    <a href="#">25/04/2021</a>
                  </li>
                </ul>
              </div>
              <h3>It’s Time To Think Differently About Homeschooling</h3>
              <p>
                Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quia non numquam eius modi tempora incidunt ut
                labore et dolore magnam dolor sit amet, consectetur adipisicing.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <blockquote class="wp-block-quote">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <cite>Tom Cruise</cite>
              </blockquote>
              <p>
                Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quia non numquam eius modi tempora incidunt ut
                labore et dolore magnam dolor sit amet, consectetur adipisicing.
              </p>
              <ul class="wp-block-gallery columns-3">
                <li class="blocks-gallery-item">
                  <figure>
                    <img src="../../assets/img/blog/img15.jpg" alt="image" />
                  </figure>
                </li>
                <li class="blocks-gallery-item">
                  <figure>
                    <img src="../../assets/img/blog/img14.jpg" alt="image" />
                  </figure>
                </li>
                <li class="blocks-gallery-item">
                  <figure>
                    <img src="../../assets/img/blog/img13.jpg" alt="image" />
                  </figure>
                </li>
              </ul>
              <h3>Four major elements that we offer:</h3>
              <ul class="features-list">
                <li>
                  <i class="bx bx-badge-check"></i> Scientific skills for
                  getting a better result
                </li>
                <li>
                  <i class="bx bx-badge-check"></i> Communication skills to
                  getting in touch
                </li>
                <li>
                  <i class="bx bx-badge-check"></i> A career overview
                  opportunity available
                </li>
                <li>
                  <i class="bx bx-badge-check"></i> A good work environment for
                  work
                </li>
              </ul>
              <h3>Setting the mood with incense</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <h3>The rise of marketing and why you need it</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </div>
            <div class="article-footer">
              <div class="article-tags">
                <span><i class="bx bx-purchase-tag"></i></span>
                <a href="#">Fashion</a>, <a href="#">Games</a>,
                <a href="#">Travel</a>
              </div>
              <div class="article-share">
                <ul class="social">
                  <li><span>Share:</span></li>
                  <li>
                    <a
                      href="https://facebook.com/"
                      class="facebook"
                      target="_blank"
                    >
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      class="twitter"
                      target="_blank"
                    >
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/"
                      class="linkedin"
                      target="_blank"
                    >
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/"
                      class="instagram"
                      target="_blank"
                    >
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="article-author">
              <div class="author-profile-header"></div>
              <div class="author-profile">
                <div class="author-profile-title">
                  <img
                    src="../../assets/img/user/user1.jpg"
                    class="shadow-sm"
                    alt="image"
                  />
                  <div class="author-profile-title-details">
                    <div class="author-profile-details">
                      <h4>Chris Orwig</h4>
                      <span class="d-block">Photographer, Author, Writer</span>
                    </div>
                  </div>
                </div>
                <p>
                  Chris Orwig is a celebrated photographer, author, and writer
                  who brings passion to everything he does.
                </p>
              </div>
            </div>
            <div class="vdemy-post-navigation">
              <div class="prev-link-wrapper">
                <div class="info-prev-link-wrapper">
                  <a href="#">
                    <span class="image-prev">
                      <img src="../../assets/img/blog/img11.jpg" alt="image" />
                      <span class="post-nav-title">Prev</span>
                    </span>
                    <span class="prev-link-info-wrapper">
                      <span class="prev-title"
                        >What Is The MLB Summer Slugger Program?</span
                      >
                      <span class="meta-wrapper">
                        <span class="date-post">January 21, 2021</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="next-link-wrapper">
                <div class="info-next-link-wrapper">
                  <a href="#">
                    <span class="next-link-info-wrapper">
                      <span class="next-title"
                        >28 Student-Centered Instructional Strategies</span
                      >
                      <span class="meta-wrapper">
                        <span class="date-post">January 19, 2021</span>
                      </span>
                    </span>
                    <span class="image-next">
                      <img src="../../assets/img/blog/img12.jpg" alt="image" />
                      <span class="post-nav-title">Next</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="comments-area">
              <h3 class="comments-title">2 Comments:</h3>
              <ol class="comment-list">
                <li class="comment">
                  <div class="comment-body">
                    <footer class="comment-meta">
                      <div class="comment-author vcard">
                        <img
                          src="../../assets/img/user/user1.jpg"
                          class="avatar"
                          alt="image"
                        />
                        <b class="fn">John Jones</b>
                        <span class="says">says:</span>
                      </div>
                      <div class="comment-metadata">
                        <a href="#">
                          <span>April 24, 2019 at 10:59 am</span>
                        </a>
                      </div>
                    </footer>
                    <div class="comment-content">
                      <p>
                        Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen.
                      </p>
                    </div>
                    <div class="reply">
                      <a href="#" class="comment-reply-link">Reply</a>
                    </div>
                  </div>
                  <ol class="children">
                    <li class="comment">
                      <div class="comment-body">
                        <footer class="comment-meta">
                          <div class="comment-author vcard">
                            <img
                              src="../../assets/img/user/user2.jpg"
                              class="avatar"
                              alt="image"
                            />
                            <b class="fn">Steven Smith</b>
                            <span class="says">says:</span>
                          </div>
                          <div class="comment-metadata">
                            <a href="#">
                              <span>April 24, 2019 at 10:59 am</span>
                            </a>
                          </div>
                        </footer>
                        <div class="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>
                        <div class="reply">
                          <a href="#" class="comment-reply-link">Reply</a>
                        </div>
                      </div>
                      <ol class="children">
                        <li class="comment">
                          <div class="comment-body">
                            <footer class="comment-meta">
                              <div class="comment-author vcard">
                                <img
                                  src="../../assets/img/user/user3.jpg"
                                  class="avatar"
                                  alt="image"
                                />
                                <b class="fn">Sarah Taylor</b>
                                <span class="says">says:</span>
                              </div>
                              <div class="comment-metadata">
                                <a href="#">
                                  <span>April 24, 2019 at 10:59 am</span>
                                </a>
                              </div>
                            </footer>
                            <div class="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>
                            <div class="reply">
                              <a href="#" class="comment-reply-link">Reply</a>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li class="comment">
                  <div class="comment-body">
                    <footer class="comment-meta">
                      <div class="comment-author vcard">
                        <img
                          src="../../assets/img/user/user4.jpg"
                          class="avatar"
                          alt="image"
                        />
                        <b class="fn">John Doe</b>
                        <span class="says">says:</span>
                      </div>
                      <div class="comment-metadata">
                        <a href="#">
                          <span>April 24, 2019 at 10:59 am</span>
                        </a>
                      </div>
                    </footer>
                    <div class="comment-content">
                      <p>
                        Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen.
                      </p>
                    </div>
                    <div class="reply">
                      <a href="#" class="comment-reply-link">Reply</a>
                    </div>
                  </div>
                  <ol class="children">
                    <li class="comment">
                      <div class="comment-body">
                        <footer class="comment-meta">
                          <div class="comment-author vcard">
                            <img
                              src="../../assets/img/user/user1.jpg"
                              class="avatar"
                              alt="image"
                            />
                            <b class="fn">James Anderson</b>
                            <span class="says">says:</span>
                          </div>
                          <div class="comment-metadata">
                            <a href="#">
                              <span>April 24, 2019 at 10:59 am</span>
                            </a>
                          </div>
                        </footer>
                        <div class="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>
                        <div class="reply">
                          <a href="#" class="comment-reply-link">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ol>
                </li>
              </ol>
              <div class="comment-respond">
                <h3 class="comment-reply-title">Leave a Reply</h3>
                <form class="comment-form" @submit.prevent>
                  <p class="comment-notes">
                    <span id="email-notes"
                      >Your email address will not be published.</span
                    >
                    Required fields are marked
                    <span class="required">*</span>
                  </p>
                  <p class="comment-form-author">
                    <label>Name <span class="required">*</span></label>
                    <input
                      type="text"
                      id="author"
                      placeholder="Your Name*"
                      name="author"
                      required="required"
                    />
                  </p>
                  <p class="comment-form-email">
                    <label>Email <span class="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email*"
                      name="email"
                      required="required"
                    />
                  </p>
                  <p class="comment-form-url">
                    <label>Website</label>
                    <input
                      type="url"
                      id="url"
                      placeholder="Website"
                      name="url"
                    />
                  </p>
                  <p class="comment-form-comment">
                    <label>Comment</label>
                    <textarea
                      name="comment"
                      id="comment"
                      cols="45"
                      placeholder="Your Comment..."
                      rows="5"
                      maxlength="65525"
                      required="required"
                    ></textarea>
                  </p>
                  <p class="comment-form-cookies-consent">
                    <input
                      type="checkbox"
                      value="yes"
                      name="wp-comment-cookies-consent"
                      id="wp-comment-cookies-consent"
                    />
                    <label for="wp-comment-cookies-consent"
                      >Save my name, email, and website in this browser for the
                      next time I comment.</label
                    >
                  </p>
                  <p class="form-submit">
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      class="submit"
                      value="Post A Comment"
                    />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogSidebar from "../Common/BlogSidebar";
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "BlogDetails",
  components: {
    BlogSidebar,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/img/blog/img3.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/img/blog/img2.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/img/blog/img1.jpg"),
      },
    ],
  }),
  methods: {
    formSubmit() {
      console.log('form submitted');
    },
  },
});
</script>
