<template>
    <div class="courses-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Go At Your Own Pace</span>
                <h2>Our Popular Courses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="courses-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                    :wrap-around="true"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-courses-box">
                            <div class="courses-image">
                                <router-link to="/single-courses-two" class="d-block image">
                                    <img :src="slide.image" alt="image">
                                </router-link>
                                <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                <div class="price shadow">${{slide.price}}</div>
                            </div>
                            <div class="courses-content">
                                <div class="course-author d-flex align-items-center">
                                    <img :src="slide.userImg" class="rounded-circle" alt="image">
                                    <span>{{slide.name}}</span>
                                </div>
                                <h3>
                                    <router-link to="/single-courses-two">
                                        {{slide.title}}
                                    </router-link>
                                </h3>
                                <p>{{slide.description}}</p>
                                <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li><i class='flaticon-agenda'></i> {{slide.lessons}} Lessons</li>
                                    <li><i class='flaticon-people'></i> {{slide.students}} Students</li>
                                </ul>
                            </div>
                        </div>
                    </Slide>
                    
                    <template #addons>
                        <Pagination />
                    </template>
                </carousel>
            </div>
            <div class="courses-info">
                <p>Get the most dedicated consultation for your life-changing course. Earn a certification for your effort and passion
                    <router-link to="/profile-authentication">
                        Join Free Now
                    </router-link>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'PopularCourses',
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
                image: require('../../assets/img/courses/img1.jpg'),
                price: '39',
                userImg: require('../../assets/img/user/user1.jpg'),
                name: 'Alex Morgan',
                title: 'The Data Science Course 2022: Complete Data Science Bootcamp',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                lessons: '15',
                students: '145',
            },
            {
                id: 2,
                image: require('../../assets/img/courses/img2.jpg'),
                price: '49',
                userImg: require('../../assets/img/user/user2.jpg'),
                name: 'Sarah Taylor',
                title: 'Java Programming Masterclass for Software Developers',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                lessons: '20',
                students: '100',
            },
            {
                id: 3,
                image: require('../../assets/img/courses/img3.jpg'),
                price: '49',
                userImg: require('../../assets/img/user/user3.jpg'),
                name: 'David Warner',
                title: 'Deep Learning A-Z™: Hands-On Artificial Neural Networks Vdemy',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                lessons: '20',
                students: '150',
            },
            {
                id: 4,
                image: require('../../assets/img/courses/img4.jpg'),
                price: '54',
                userImg: require('../../assets/img/user/user4.jpg'),
                name: 'Andy Smith',
                title: 'Python for Finance: Investment Fundamentals & Data Analytics',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                lessons: '14',
                students: '211',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
})
</script>