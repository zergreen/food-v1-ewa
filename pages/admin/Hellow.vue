<template>
  <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">เพิ่มเมนู</h2>
        <p class="text-gray-500 mb-6">
          กรุณาตรวจสอบรายละเอียดทุกครั้งก่อนยืนยัน
        </p>

        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">รายละเอียดเมนู</p>
              <p>กรุณากรอกลงในช่องว่าง</p>
            </div>

            <div class="lg:col-span-2">
              <div
                class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
              >
                <div class="md:col-span-5">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                    >เลือกรูปภาพ</label
                  >
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file"
                    type="file"
                    v-on:change="uploadFileUpload($event)"
                  />
                  <p
                    class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    SVG, PNG, JPG
                  </p>
                </div>

                <div class="md:col-span-5">
                  <label for="full_name">ชื่อเมนู</label>
                  <input
                    v-model="product.menu_name"
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                 <div class="md:col-span-5">
                  <label for="food-id">ID</label>
                  <input
                    v-model="foodId"
                    type="text"
                    name="food-id"
                    id="food-id"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div class="md:col-span-5">
                  <label for="full_name">ราคา</label>
                  <input
                    v-model="product.price"
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div class="md:col-span-5">
                  <label for="full_name">รายละเอียด</label>
                  <input
                    v-model="product.detail"
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button
                      v-on:click="addmenu()"
                      class="bg-green-600 m-2 hover:bg-blue-500 text-white py-1 px-3 rounded-full"
                    >
                      ยืนยันการแก้ไข
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      foodId: null,
    }
  },
  methods: {
    uploadFileUpload(event) {
      this.imageFile = event.target.files[0];
      console.log("edit page upload file:", this.imageFile);
    },

    async addmenu() {
      console.log('foodID:', this.foodId);
      console.log("add res:", this.product);
      const formData = new FormData();
      formData.append("file", this.imageFile);
      formData.append("menu_name", this.product.menu_name);
      formData.append("price", this.product.price);
      formData.append("detail", this.product.detail);
      // formData.append("restaurant_id", this.foodId);

      await axios
        .get(`http://localhost:3000/addNewMenu/${this.foodId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log(res.data.response);
          console.log("Success");
        })
        .catch((error) => {
          console.log("Error on Adding page:", error);
        });
    },
  },

  data() {
    return {
      imageFile: "",
      menuID: "",
      text: "",

      product: {
        menu_name: "",
        price: "",
        detail: "",
      },
    };
  },
};
</script>

<style></style>