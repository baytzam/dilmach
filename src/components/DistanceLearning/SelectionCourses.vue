<template>
    <div class="courses-area bg-f5f7fa pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Go At Your Own Pace</span>
                <h2>The World’s Largest Selection Of Courses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="shorting-menu">
                <button 
                    class="filter" 
                    :class="{active:itemFilterKey == 'all'}" 
                    v-on:click="itemFilterKey = 'all'" 
                >
                    All
                </button>
                <button 
                    class="filter" 
                    :class="{active:itemFilterKey == 'development'}"
                    v-on:click="itemFilterKey = 'development'"
                >
                    Development
                </button>
                <button 
                    class="filter" 
                    :class="{active:itemFilterKey == 'business'}"
                    v-on:click="itemFilterKey = 'business'"
                >
                    Business
                </button>
                <button 
                    class="filter" 
                    :class="{active:itemFilterKey == 'design'}"
                    v-on:click="itemFilterKey = 'design'"
                >
                    Design
                </button>
            </div>
            <div class="shorting justify-content-center">
                <div class="row justify-content-center">
                    <div 
                        class="col-lg-4 col-md-6"
                        v-for="item in itemFilter"
                        :key="item.id"
                    >
                        <div class="single-courses-item-box">
                            <div class="courses-image">
                                <router-link to="/single-courses-two" class="d-block image">
                                    <img :src="item.image" alt="image">
                                </router-link>
                                <a href="#" class="fav"><i class="flaticon-heart"></i></a>
                                <div class="price shadow">${{item.price}}</div>
                            </div>
                            <div class="courses-content">
                                <h3>
                                    <router-link to="/single-courses-two">
                                        {{item.title}}
                                    </router-link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <div class="rating-total">
                                        5.0 (1 rating)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape16">
            <img src="../../assets/img/shape/shape15.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectionCourses',
    data: function (){
        return {
            itemFilterKey: 'all',
            items: [
                {
                    id: 1,
                    image: require('../../assets/img/courses/img12.jpg'),
                    price: '39',
                    title: 'Agile Crash Course: Agile Project Management',
                    key: 'business'
                },
                {
                    id: 2,
                    image: require('../../assets/img/courses/img13.jpg'),
                    price: '59',
                    title: 'Vue JS 3 - The Complete Guide (incl. Vue Router & Vuex)',
                    key: 'development'
                },
                {
                    id: 3,
                    image: require('../../assets/img/courses/img14.jpg'),
                    price: '69',
                    title: 'The Python Bible™ | Everything You Need to Program in Python',
                    key: 'design'
                },
                {
                    id: 4,
                    image: require('../../assets/img/courses/img15.jpg'),
                    price: '79',
                    title: 'Mathematical Foundation For Machine Learning and AI',
                    key: 'business'
                },
                {
                    id: 5,
                    image: require('../../assets/img/courses/img16.jpg'),
                    price: '89',
                    title: 'The Ultimate Drawing Course - Beginner to Advanced',
                    key: 'development'
                },
                {
                    id: 6,
                    image: require('../../assets/img/courses/img17.jpg'),
                    price: '99',
                    title: 'PyTorch: Deep Learning and Artificial Intelligence',
                    key: 'design'
                },
            ],
        }
    },
    computed: {
        itemFilter(){
            return this[this.itemFilterKey]
        },
        all(){
            return this.items
        },
        development(){
            return this.items.filter((item) => item.key == 'development')
        },
        business(){
            return this.items.filter((item) => item.key == 'business')
        },
        design(){
            return this.items.filter((item) => item.key == 'design')
        },
    }
}
</script>