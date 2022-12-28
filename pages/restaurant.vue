<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-10 sm:px-6 lg:max-w-7xl lg:px-5 m-4">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        สถานที่ร้านอาหาร
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <!-- begin suggest menu component -->
        <Suggestmenu
          v-for="(product, index) in products"
          :key="index"
          :restaurant_name="product.restaurant_name"
          :href="product.restaurant_id"
          :restaurant_picture="product.restaurant_picture"
          :restaurant_score="product.restaurant_score"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Suggestmenu from "@/components/post/Suggestmenu.vue";
import axios from "axios";
export default {
  components: { Suggestmenu },
  restaurant_name: "restaurant",
  data() {
    return {
      products: [
      ],
    };
  },
  mounted() {
    this.getTest();
  },
  methods: {
    getTest() {
      console.log("HI");
      axios
        .get("http://localhost:3000/BestRestuarantInfo")
        .then((res) => {
          console.log(res);
          this.products = res.data.response;
          console.table(res.data.response);
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
  },
};
</script>
