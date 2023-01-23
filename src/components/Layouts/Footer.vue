<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <router-link to="/" class="logo">
                            <img src="../../assets/logo.png" alt="logo">
                        </router-link>
<!--                        <p>Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!</p>-->
                        <ul class="social-link">
                            <li>
                                <a href="https://twitter.com/" class="d-block" target="_blank">
                                    <i class='bx bxl-telegram'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/dilmach.tr?igshid=Zjc2ZTc4Nzk=" class="d-block" target="_blank">
                                    <i class='bx bxl-instagram'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=+905522950024" class="d-block" target="_blank">
                                    <i class='bx bxl-whatsapp'></i>
                                </a>
                            </li>
                            <!-- <li>
                                <a href="https://linkedin.com/" class="d-block" target="_blank">
                                    <i class='bx bxl-linkedin'></i>
                                </a>
                            </li> -->
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Address</h3>
                        <ul class="footer-contact-info">
                            <!-- <li>
                                <i class='bx bx-map'></i>
                                2750 Quadra Street Golden Victoria Road, New York, USA
                            </li> -->
                            <li>
                                <i class='bx bx-phone-call'></i>
                                <a href="tel:+905522950024">+90 552 295 00 24</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom-area">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <p><i class='bx bx-copyright'></i>{{currentYear}} Dilmach</p>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <ul>
                            <li>
                                <router-link to="/privacy-policy">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/terms-of-service">Terms & Conditions</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>
