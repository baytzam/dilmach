<template>
    <div class="events-area pt-100 pb-70">
        <div class="container">
            <div class="shorting-menu shorting-menu-style-two">
                <button 
                    class="filter" 
                    :class="{active:itemFilterKey == 'all'}" 
                    v-on:click="itemFilterKey = 'all'" 
                >
                    All
                </button>
                <button 
                    class="filter" 
                    :class="{active:itemFilterKey == 'happening'}"
                    v-on:click="itemFilterKey = 'happening'"
                >
                    Development
                </button>
                <button 
                    class="filter" 
                    :class="{active:itemFilterKey == 'upcoming'}"
                    v-on:click="itemFilterKey = 'upcoming'"
                >
                    Upcoming
                </button>
                <button 
                    class="filter" 
                    :class="{active:itemFilterKey == 'expired'}"
                    v-on:click="itemFilterKey = 'expired'"
                >
                    Expired
                </button>
            </div>
            <div class="shorting">
                <div class="row">
                    <div 
                        class="col-lg-4 col-sm-6 col-md-6"
                        v-for="item in itemFilter"
                        :key="item.id"
                    >
                        <div class="single-events-box">
                            <div class="image">
                                <router-link to="/single-events" class="d-block">
                                    <img :src="item.image" alt="image">
                                </router-link>
                                <span class="date">{{item.date}}</span>
                            </div>
                            <div class="content">
                                <h3>
                                    <router-link to="/single-events">
                                        {{item.title}}
                                    </router-link>
                                </h3>
                                <span class="location">
                                    <i class="bx bx-map"></i>
                                    {{item.location}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Events',
    data: function (){
        return {
            itemFilterKey: 'all',
            items: [
                {
                    id: 1,
                    image: require('../../assets/img/events/img1.jpg'),
                    date: 'Wed, 20 May, 2021',
                    title: 'Global Conference on Business Management',
                    location: 'Vancover, Canada',
                    key: 'upcoming',
                },
                {
                    id: 2,
                    image: require('../../assets/img/events/img2.jpg'),
                    date: 'Tue, 19 May, 2021',
                    title: 'International Conference on Teacher Education',
                    location: 'Sydney, Australia',
                    key: 'happening',
                },
                {
                    id: 3,
                    image: require('../../assets/img/events/img3.jpg'),
                    date: 'Mon, 18 May, 2021',
                    title: 'International Conference on Special Needs Education',
                    location: 'Istanbul, Turkey',
                    key: 'upcoming',
                },
                {
                    id: 4,
                    image: require('../../assets/img/events/img4.jpg'),
                    date: 'Sun, 17 May, 2021',
                    title: 'International Conference on Literacy Teaching',
                    location: 'Athens, Greece',
                    key: 'happening',
                },
                {
                    id: 5,
                    image: require('../../assets/img/events/img5.jpg'),
                    date: 'Sat, 16 May, 2021',
                    title: 'International Conference on Educational Administration',
                    location: 'Rome, Italy',
                    key: 'expired',
                },
                {
                    id: 6,
                    image: require('../../assets/img/events/img6.jpg'),
                    date: 'Fri, 15 May, 2021',
                    title: 'International Conference on Education and Pedagogy',
                    location: 'Athens, Greece',
                    key: 'happening',
                },
                {
                    id: 7,
                    image: require('../../assets/img/events/img7.jpg'),
                    date: 'Thu, 14 May, 2021',
                    title: 'Research Conference Aims and Objectives',
                    location: 'Tokyo, Japan',
                    key: 'expired',
                },
                {
                    id: 8,
                    image: require('../../assets/img/events/img8.jpg'),
                    date: 'Wed, 13 May, 2021',
                    title: 'Conference on Gender Discrimination in Education',
                    location: 'Oslo, Norway',
                    key: 'upcoming',
                },
                {
                    id: 9,
                    image: require('../../assets/img/events/img9.jpg'),
                    date: 'Tue, 12 May, 2021',
                    title: 'Quality and Improvement in Education Conference',
                    location: 'Tokyo, Japan',
                    key: 'expired',
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
        happening(){
            return this.items.filter((item) => item.key == 'happening')
        },
        upcoming(){
            return this.items.filter((item) => item.key == 'upcoming')
        },
        expired(){
            return this.items.filter((item) => item.key == 'expired')
        },
    }
}
</script>