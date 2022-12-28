<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-10 sm:px-6 lg:max-w-7xl lg:px-5 m-4">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        แนะนำเมนูอาหาร
      </h2>
      <button
        class="bg-red-800 m-2 hover:bg-red-900 text-white py-1 px-3 rounded"
      >
        <a href="/admin/hellow"> Add + </a>
      </button>
      <button
        class="bg-red-800 m-2 hover:bg-red-900 text-white py-1 px-3 rounded"
      >
        <a href="/admin/hellow">Edit / </a>
      </button>
      <button
        class="bg-red-800 m-2 hover:bg-red-900 text-white py-1 px-3 rounded"
      >
        <a href="/admin/deletemenu"> Delete - </a>
      </button>
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
                  เพิ่มเมนูอาหาร
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
        .get("http://localhost:3000/RetuarantInfo/restuarantid=RES07")
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
