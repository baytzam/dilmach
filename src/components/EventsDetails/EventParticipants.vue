<template>
    <div class="advisor-area bg-f9f9f9 ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Event Participants</h2>
            </div>
            <div class="advisor-slides-two">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-advisor-item">
                            <div class="advisor-image">
                                <img :src="slide.image" alt="image">
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
                            <div class="advisor-content">
                                <h3><a href="#">{{slide.name}}</a></h3>
                                <span>{{slide.position}}</span>
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
    name: 'EventParticipants',
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
                image: require('../../assets/img/advisor/img4.jpg'),
                name: 'James Andy',
                position: 'Project Management Expert',
            },
            {
                id: 2,
                image: require('../../assets/img/advisor/img5.jpg'),
                name: 'Jassica Hische',
                position: 'Illustrator Expert',
            },
            {
                id: 3,
                image: require('../../assets/img/advisor/img6.jpg'),
                name: 'Alister Cock',
                position: 'QA Project Expert',
            },
            {
                id: 4,
                image: require('../../assets/img/advisor/img7.jpg'),
                name: 'Lina Ninja',
                position: 'QA Project Expert',
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
                itemsToShow: 3,
            },
        },
    }),
})
</script>