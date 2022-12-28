<template>
  <div class="container mx-auto">
    <div class="mx-auto max-w-2xl py-6 px-4 sm:px-8 lg:max-w-5xl lg:px-5">
      <div class="columns-2">
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <div
            class="min-h-60 aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75 lg:aspect-none"
          >
            <img
              :src="product.menu_picture"
              class="object-cover h-80 w-90"
            />
          </div>
          <br />
          <br />
          <div class="text-center example">
            <div class="text-lg sm:text-4xl text-gray-0">
              {{ product.menu_name }}
            </div>
          </div>
          <br sm:invisible />
          <br />
          <div class="text-xs sm:text-xl text-center">
            {{ product.detail }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  menu_name: "Suggestmenu",
  props: {
    id: {
      type: String,
      default: "",
    },
    menu_name: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    menu_picture: {
      type: String,
      default: "",
    },
    detail: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      // ความหมายเหมือนกัน แค่ว่า ตัวล่างมันไม่มีข้อมูล เป็น mock data เฉยๆ
      // products: [],
      products: [
      {
          id: "",
          menu_name: "",
          detail:
            "",
          href: "#",
          menu_picture:
            "",
        },
      ]
    };
  },
  mounted() {
    this.getTest();
  },
  methods: {
    getTest() {
      console.log("HI");
      axios
        .get("http://localhost:3000/MenuInfo/menuid=MENU06")
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
