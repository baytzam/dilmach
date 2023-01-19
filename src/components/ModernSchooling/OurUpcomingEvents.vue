<template>
    <div class="events-area bg-fffaf3 pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Events</span>
                <h2>Our Upcoming Events</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-events-box">
                        <div class="image">
                            <router-link to="/single-events" class="d-block">
                                <img src="../../assets/img/events/img1.jpg" alt="image">
                            </router-link>
                            <span class="date">Wed, 20 May, 2022</span>
                        </div>
                        <div class="content">
                            <h3>
                                <router-link to="/single-events">
                                    Global Conference on Business Management
                                </router-link>
                            </h3>
                            <span class="location"><i class="bx bx-map"></i>Vancover, Canada</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-events-box">
                        <div class="image">
                            <router-link to="/single-events" class="d-block">
                                <img src="../../assets/img/events/img2.jpg" alt="image">
                            </router-link>
                            <span class="date">Tue, 19 May, 2022</span>
                        </div>
                        <div class="content">
                            <h3>
                                <router-link to="/single-events">
                                    International Conference on Teacher Education
                                </router-link>
                            </h3>
                            <span class="location"><i class="bx bx-map"></i>Sydney, Australia</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-events-box">
                        <div class="image">
                            <router-link to="/single-events" class="d-block">
                                <img src="../../assets/img/events/img3.jpg" alt="image">
                            </router-link>
                            <span class="date">Mon, 18 May, 2022</span>
                        </div>
                        <div class="content">
                            <h3>
                                <router-link to="/single-events">
                                    International Conference on Special Needs Education
                                </router-link>
                            </h3>
                            <span class="location"><i class="bx bx-map"></i>Istanbul, Turkey</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-events-box">
                        <div class="image">
                            <router-link to="/single-events" class="d-block">
                                <img src="../../assets/img/events/img4.jpg" alt="image">
                            </router-link>
                            <span class="date">Sun, 17 May, 2022</span>
                        </div>
                        <div class="content">
                            <h3>
                                <router-link to="/single-events">
                                    International Conference on Literacy Teaching
                                </router-link>
                            </h3>
                            <span class="location"><i class="bx bx-map"></i>Athens, Greece</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-events-box">
                        <div class="image">
                            <router-link to="/single-events" class="d-block">
                                <img src="../../assets/img/events/img5.jpg" alt="image">
                            </router-link>
                            <span class="date">Sat, 16 May, 2022</span>
                        </div>
                        <div class="content">
                            <h3>
                                <router-link to="/single-events">
                                    International Conference on Educational Administration
                                </router-link>
                            </h3>
                            <span class="location"><i class="bx bx-map"></i>Rome, Italy</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-events-box">
                        <div class="image">
                            <router-link to="/single-events" class="d-block">
                                <img src="../../assets/img/events/img6.jpg" alt="image">
                            </router-link>
                            <span class="date">Fri, 15 May, 2022</span>
                        </div>
                        <div class="content">
                            <h3>
                                <router-link to="/single-events">
                                    International Conference on Education and Pedagogy
                                </router-link>
                            </h3>
                            <span class="location"><i class="bx bx-map"></i>Athens, Greece</span>
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