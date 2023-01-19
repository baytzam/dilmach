<template>
  <div :class="['navbar-area', { 'is-sticky': isSticky }]">
    <div class="vdemy-nav">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/logo.png" alt="logo" />
          </router-link>
          <div
            class="navbar-toggler"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
            v-bind:class="{ active: button_active_state }"
            v-on:click="button_active_state = !button_active_state"
          >
            <i class="bx bx-menu"></i>
            <i class="bx bx-x"></i>
          </div>
          <div class="collapse navbar-collapse" :class="{ toggler: active }">
            
          </div>

          <div class="others-option d-flex align-items-center">
            <div class="option-item">
              <router-link to="/authentication" class="default-btn">
                <i class="flaticon-user"></i>
                Записаться
                <span></span>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isSticky: false,
      active: false,
      button_active_state: false,
    };
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
  computed: {
    shoppingCart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    formSubmit() {
      console.log('form submitted');
    },
  },
};
</script>
