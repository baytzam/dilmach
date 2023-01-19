<template>
    <div class="advisor-area bg-f9f9f9 pt-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Instructor</span>
                <h2>Course Advisor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="advisor-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-advisor-box">
                            <div class="row align-items-center">
                                <div class="col-lg-4 col-md-4">
                                    <div class="advisor-image">
                                        <img :src="slide.image" alt="image">
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-8">
                                    <div class="advisor-content">
                                        <h3>
                                            <router-link to="/profile">{{slide.name}}</router-link>
                                        </h3>
                                        <span class="sub-title">{{slide.position}}</span>
                                        <p>{{slide.description}}</p>
                                        <ul class="social-link">
                                            <li>
                                                <a href="https://facebook.com/" class="d-block" target="_blank">
                                                    <i class='bx bxl-facebook'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/" class="d-block" target="_blank">
                                                    <i class='bx bxl-twitter'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com/" class="d-block" target="_blank">
                                                    <i class='bx bxl-instagram'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://linkedin.com/" class="d-block" target="_blank">
                                                    <i class='bx bxl-linkedin'></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Pagination />
                    </template> 
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'CourseAdvisor',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/img/advisor/img1.jpg'),
                name: 'John Smith',
                position: 'Python Developer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.',
            },
            {
                id: 2,
                image: require('../../assets/img/advisor/img2.jpg'),
                name: 'Sarah Taylor',
                position: 'Agile Project Expert',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.',
            },
            {
                id: 3,
                image: require('../../assets/img/advisor/img3.jpg'),
                name: 'James Andy',
                position: 'QA Project Expert',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
			},
            576: {
                itemsToShow: 2,
            },
            768: {
                itemsToShow: 1,
            },
            992: {
                itemsToShow: 2,
            },
        },
    }),
})
</script>