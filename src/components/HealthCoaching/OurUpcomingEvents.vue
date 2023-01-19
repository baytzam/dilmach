<template>
    <div class="events-area bg-image bg-eee8df pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Events</span>
                <h2 class="playfair-display-font">Our Upcoming Events</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box-item">
                        <div class="image">
                            <router-link to="/single-events" class="d-block">
                                <img src="../../assets/img/events/health-img1.jpg" alt="image">
                            </router-link>
                            <span class="date">Wed, 20 May, 2022</span>
                        </div>
                        <div class="content">
                            <h3 class="playfair-display-font">
                                <router-link to="/single-events">
                                    Global Conference on Business Management
                                </router-link>
                            </h3>
                            <span class="location"><i class="bx bx-map"></i>Vancover, Canada</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box-item">
                        <div class="image">
                            <router-link to="/single-events" class="d-block">
                                <img src="../../assets/img/events/health-img2.jpg" alt="image">
                            </router-link>
                            <span class="date">Tue, 19 May, 2022</span>
                        </div>
                        <div class="content">
                            <h3 class="playfair-display-font">
                                <router-link to="/single-events">
                                    International Conference on Teacher Education
                                </router-link>
                            </h3>
                            <span class="location"><i class="bx bx-map"></i>Sydney, Australia</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box-item">
                        <div class="image">
                            <router-link to="/single-events" class="d-block">
                                <img src="../../assets/img/events/health-img3.jpg" alt="image">
                            </router-link>
                            <span class="date">Mon, 18 May, 2022</span>
                        </div>
                        <div class="content">
                            <h3 class="playfair-display-font">
                                <router-link to="/single-events">
                                    International Conference on Special Needs Education
                                </router-link>
                            </h3>
                            <span class="location"><i class="bx bx-map"></i>Istanbul, Turkey</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurUpcomingEvents'
}
</script>