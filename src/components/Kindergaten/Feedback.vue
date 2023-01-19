<template>
    <div class="feedback-area bg-6dbbbd pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Testimonials</span>
                <h2 class="font-weight-black">Our Guardian Feedback</h2>
                <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
            </div>
        </div>
        <div class="container-fluid">
            <div class="feedback-slides-three">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                    :wrap-around="true"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-kindergarten-feedback-item">
                            <div class="content">
                                <img :src="slide.image" alt="image">
                                <p>{{slide.description}}</p>
                            </div>
                            <div class="client-info">
                                <img :src="slide.userImage" alt="image">
                                <h3 class="font-weight-black">{{slide.name}}</h3>
                                <span>{{slide.guardian}}</span>
                            </div>
                        </div>
                    </Slide>
                    
                    <template #addons>
                        <Navigation />
                    </template>
                </carousel>
            </div>
        </div>
        <div class="kindergarten-shape13">
            <img src="../../assets/img/kindergarten-shape/k-shape13.png" alt="image">
        </div>
        <div class="kindergarten-shape14">
            <img src="../../assets/img/kindergarten-shape/k-shape14.png" alt="image">
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Feedback',
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
                image: require('../../assets/img/shape/feedback-shape.png'),
                description: 'Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.',
                userImage: require('../../assets/img/user/user1.jpg'),
                name: 'Alex Morgan',
                guardian: 'Guardian',
            },
            {
                id: 2,
                image: require('../../assets/img/shape/feedback-shape.png'),
                description: 'Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.',
                userImage: require('../../assets/img/user/user2.jpg'),
                name: 'Sarah Taylor',
                guardian: 'Guardian',
            },
            {
                id: 3,
                image: require('../../assets/img/shape/feedback-shape.png'),
                description: 'Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.',
                userImage: require('../../assets/img/user/user3.jpg'),
                name: 'David Smith',
                guardian: 'Guardian',
            },
            {
                id: 4,
                image: require('../../assets/img/shape/feedback-shape.png'),
                description: 'Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.',
                userImage: require('../../assets/img/user/user4.jpg'),
                name: 'James Andy',
                guardian: 'Guardian',
            },
            {
                id: 5,
                image: require('../../assets/img/shape/feedback-shape.png'),
                description: 'Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.',
                userImage: require('../../assets/img/user/user5.jpg'),
                name: 'Max Lucy',
                guardian: 'Guardian',
            },
            {
                id: 6,
                image: require('../../assets/img/shape/feedback-shape.png'),
                description: 'Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.',
                userImage: require('../../assets/img/user/user6.jpg'),
                name: 'Harry Zayn',
                guardian: 'Guardian',
            },
            {
                id: 5,
                image: require('../../assets/img/shape/feedback-shape.png'),
                description: 'Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.',
                userImage: require('../../assets/img/user/user2.jpg'),
                name: 'Max Lucy',
                guardian: 'Guardian',
            },
            {
                id: 6,
                image: require('../../assets/img/shape/feedback-shape.png'),
                description: 'Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.',
                userImage: require('../../assets/img/user/user3.jpg'),
                name: 'Harry Zayn',
                guardian: 'Guardian',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 4,
                snapAlign: 'left',
            },
        },
    }),
})
</script>