<template>
    <div class="courses-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Learn At Your Own Pace</span>
                <h2 class="font-weight-black">Top Selling Courses</h2>
                <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
            </div>
            <div class="courses-slides-two">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                    :wrap-around="true"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-kindergarten-courses-box">
                            <div class="courses-image">
                                <div class="image">
                                    <img :src="slide.image" alt="image">
                                </div>
                                <div class="price">
                                    <img :src="slide.priceBg" alt="image">
                                    <span>${{slide.price}}</span>
                                </div>
                                <a href="#" class="link-btn"></a>
                            </div>
                            <div class="courses-content">
                                <div class="course-author d-flex align-items-center">
                                    <img :src="slide.userImage" class="rounded-circle" alt="image">
                                    <span>{{slide.name}}</span>
                                </div>
                                <h3 class="font-weight-black">
                                    <router-link to="/single-courses-one">
                                        {{slide.title}}
                                    </router-link>
                                </h3>
                                <p>{{slide.description}}</p>
                            </div>
                        </div>
                    </Slide>
                    
                    <template #addons>
                        <Navigation />
                    </template>
                </carousel>
            </div>
        </div>
        <div class="kindergarten-shape11">
            <img src="../../assets/img/kindergarten-shape/k-shape11.png" alt="image">
        </div>
        <div class="kindergarten-shape12">
            <img src="../../assets/img/kindergarten-shape/k-shape12.png" alt="image">
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'TopSellingCourses',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/img/courses/kindergarten-img1.jpg'),
                priceBg: require('../../assets/img/shape/price-bg.png'),
                price: '39',
                userImage: require('../../assets/img/user/user1.jpg'),
                name: 'Alex Morgan',
                title: 'Equivalent fractions and comparing fractions',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            },
            {
                id: 2,
                image: require('../../assets/img/courses/kindergarten-img2.jpg'),
                priceBg: require('../../assets/img/shape/price-bg.png'),
                price: '49',
                userImage: require('../../assets/img/user/user2.jpg'),
                name: 'Sarah Taylor',
                title: 'Arithmetic patterns and problem solving',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            },
            {
                id: 3,
                image: require('../../assets/img/courses/kindergarten-img3.jpg'),
                priceBg: require('../../assets/img/shape/price-bg.png'),
                price: '59',
                userImage: require('../../assets/img/user/user3.jpg'),
                name: 'David Warner',
                title: 'Thinking about multivariable functions',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            },
            {
                id: 4,
                image: require('../../assets/img/courses/kindergarten-img4.jpg'),
                priceBg: require('../../assets/img/shape/price-bg.png'),
                price: '69',
                userImage: require('../../assets/img/user/user4.jpg'),
                name: 'James Andy',
                title: 'The unit circle definition of sine, and cosine',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
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
                snapAlign: 'left',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
})
</script>