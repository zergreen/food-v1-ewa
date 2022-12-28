<template>
    <div >
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-5">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            แนะนำเมนูอาหาร
          </h2>
  
          <div
            class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          >
            <!-- begin suggest menu component -->
            <Menu
            v-for="product in products.slice(0, 4)"
              :key="product"
              :menu_name="product.menu_name"
              :href="product.menu_id"
              :menu_picture="product.menu_picture"
              :score="product.score"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import HeadBox from "@/components/post/HeadBox.vue";
  import Menu from "@/components/post/Menu.vue";
  import axios from "axios";
  export default {
    components: { HeadBox, Menu },
    data() {
      return {
        products: [
          {
            id: "",
            menu_name: "",
            href: "",
            menu_picture: "",
            imageAlt: "",
            score: "",
          },
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
          .get("http://localhost:3000/RetuarantInfo/restuarantid=RES06")
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
  