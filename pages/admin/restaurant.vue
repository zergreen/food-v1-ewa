<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-10 sm:px-6 lg:max-w-7xl lg:px-5 m-4">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        สถานที่ร้านอาหาร
      </h2>
      <button
        class="bg-red-800 m-2 hover:bg-red-900 text-white py-1 px-3 rounded"
      >
        <a href="/admin/hellow"> Add + </a>
      </button>
      <button
        class="bg-red-800 m-2 hover:bg-red-900 text-white py-1 px-3 rounded"
      >
        <a href="/admin/hellow"> Edit / </a>
      </button>
      <button
        class="bg-red-800 m-2 hover:bg-red-900 text-white py-1 px-3 rounded"
      >
        <a href="/admin/deleterestaurant"> Delete - </a>
      </button>
      
      <button
        class="bg-red-800 m-2 hover:bg-red-900 text-white py-1 px-3 rounded"
      >
        <nuxt-link to="/admin/edit/EditMenu"> <i class="bi bi-pencil-square"/>MENU</nuxt-link>
      </button>

      <button
        class="bg-red-800 m-2 hover:bg-red-900 text-white py-1 px-3 rounded"
      >
        <nuxt-link to="/admin/edit/CreateMenu"> <i class="bi bi-plus-square"/>MENU </nuxt-link>
      </button>
      
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
        <div class="group relative">
          <div
            class="min-h-100 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75 lg:aspect-none lg:h-60"
          >
            <img
              src="https://image.pngaaa.com/768/791768-middle.png"
              class="object-cover h-48 w-96"
            />
          </div>
          <div class="mt-2">
            <div class="text-center example">
              <h1 class="text-lg text-gray-0">
                <a href="/admin/Hellow">
                  <span class="absolute inset-0" />
                  เพิ่มร้านค้าขายอาหาร
                </a>
              </h1>
            </div>
          </div>
        </div>
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
      products: [],
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

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");
</style>
