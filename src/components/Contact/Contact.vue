<template>
    <div class="contact-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="contact-info">
                        <span class="sub-title">Contact Details</span>
                        <h2>Get in Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                        <ul>
                            <li>
                                <div class="icon">
                                    <i class='bx bx-map'></i>
                                </div>
                                <h3>Our Address</h3>
                                <p>2750 Quadra Street Victoria Road, New York, Canada</p>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class='bx bx-phone-call'></i>
                                </div>
                                <h3>Contact</h3>
                                <p>Mobile: <a href="tel:+44457895789">(+44) - 45789 - 5789</a></p>
                                <p>Mail: <a href="mailto:hello@vdemy.com">hello@vdemy.com</a></p>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class='bx bx-time-five'></i>
                                </div>
                                <h3>Hours of Operation</h3>
                                <p>Monday - Friday: 09:00 - 20:00</p>
                                <p>Sunday & Saturday: 10:30 - 22:00</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="contact-form">
                        <h2>Ready to Get Started?</h2>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form id="contactForm" @submit.prevent>
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group mb-3">
                                        <input type="text" name="name" id="name" placeholder="Your name">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group mb-3">
                                        <input type="email" name="email" id="email" placeholder="Your email address">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group mb-3">
                                        <input type="text" name="phone_number" id="phone_number" placeholder="Your phone number">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group mb-3">
                                        <textarea name="message" id="message" cols="30" rows="5" placeholder="Write your message..."></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn">Send Message<span></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    methods: {
        formSubmit() {
            console.log('form submitted');
        },
    },
}
</script>