import { createStore } from "vuex";

export default createStore({
  state: {
    items: [
      {
        id: "note-book-mockup",
        image: require("../assets/img/products/img1.jpg"),
        sale: false,
        new: false,
        name: "Note Book Mockup",
        price: 250,
        oldPrice: 321,
      },
      {
        id: "motivational-book-cover",
        image: require("../assets/img/products/img2.jpg"),
        sale: true,
        new: false,
        name: "Motivational Book Cover",
        price: 190,
        oldPrice: false,
      },
      {
        id: "book-cover-softcover",
        image: require("../assets/img/products/img3.jpg"),
        sale: false,
        new: false,
        name: "Book Cover Softcover",
        price: 210,
        oldPrice: 240,
      },
      {
        id: "stop-and-take-a-second",
        image: require("../assets/img/products/img4.jpg"),
        sale: false,
        new: false,
        name: "Stop and Take a Second",
        price: 120,
        oldPrice: false,
      },
      {
        id: "real-life-fairytale",
        image: require("../assets/img/products/img5.jpg"),
        sale: false,
        new: false,
        name: "Real Life Fairytale",
        price: 299,
        oldPrice: 351,
      },
      {
        id: "running-from-me",
        image: require("../assets/img/products/img6.jpg"),
        sale: false,
        new: true,
        name: "Running From Me",
        price: 350,
        oldPrice: false,
      },
    ],
    cart: [],
  },

  getters: {
    total: (state) => {
      if (state.cart.length > 0) {
        return state.cart
          .map((item) => item.totalPrice)
          .reduce((total, amount) => total + amount);
      } else {
        return 0;
      }
    },
  },

  mutations: {
    addToCart(state, payload) {
      let addedItem = state.items.find((item) => item.id === payload.id);

      let existItem = state.cart.find((item) => item.id == payload.id);

      if (existItem) {
        existItem.productQuantity++;
        existItem.totalPrice += addedItem.price;
      } else {
        return state.cart.push(payload);
      }
    },

    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
    },
  },
  actions: {},
});
