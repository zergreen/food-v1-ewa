<template>
  <!-- component -->
  <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
      <div></div>
      <div>
        <h2 class="font-semibold text-xl text-gray-600">แก้ไขเมนูอาหาร</h2>
        <p class="text-gray-500 mb-6">
          กรุณาตรวจสอบรายละเอียดทุกครั้งก่อนยืนยัน
        </p>

        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">
                พิมพ์ ID ของเมนูอาหารที่ต้องการลบ
              </p>
              <p>ตัวอย่างเช่น MENU01</p>

              <img
                :src="food.menu_picture"
                :alt="food.menu_name"
                class="object-cover h-48 w-80"
              />
            </div>

            <div class="lg:col-span-2">
              <div
                class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
              >
                <div>
                  Please Type Id
                  <div class="md:col-span-5">
                    <label for="custom-id">ID</label>
                    <input
                      type="text"
                      name="custom-id"
                      id="custom-id"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      @keyup.enter="update"
                      v-model="foodId"
                    />
                  </div>
                </div>

                <div class="md:col-span-5">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                    >เลือกรูปภาพ [หรือ]</label
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
                  <label for="menu_picture">url-รูป [หรือ]</label>
                  <input
                    type="text"
                    name="menu_picture"
                    id="menu_picture"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    v-model="food.menu_picture"
                  />
                </div>

                <div class="md:col-span-5">
                  <label for="menu_name">ชื่อเมนู</label>
                  <input
                    type="text"
                    name="menu_name"
                    id="menu_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    v-model="food.menu_name"
                  />
                </div>

                <div class="md:col-span-5">
                  <label for="price">ราคา</label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    v-model="food.price"
                  />
                </div>
                <div class="md:col-span-5">
                  <label for="detail">รายละเอียด</label>
                  <input
                    type="text"
                    name="detail"
                    id="detail"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    v-model="food.detail"
                  />
                </div>

                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button
                      @click="updateModal"
                      class="bg-green-600 m-2 hover:bg-blue-500 text-white py-1 px-3 rounded-full"
                    >
                      UPDATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-x-auto">
                  <h2 class="font-semibold text-xl text-gray-600">
                    List รวมเมนู
                  </h2>
                  <table class="min-w-full">
                    <thead class="border-b bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          MENU_ID
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          MENU_NAME
                        </th>
                      </tr>
                    </thead>
                    <tbody v-for="(model, index) in models" :key="index">
                      <tr class="border-b">
                        <td
                          @click="giveValue(model.menu_id)"
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:bg-gray-100"
                        >
                          (+){{ model.menu_id }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:bg-gray-100"
                        >
                          {{ model.menu_name }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <table class="table-auto">
          <thead>
            <tr>
              <th>RES_ID</th>
              <th>ชื่อร้าน</th>
            </tr>
          </thead>
          <tbody v-for="(model, index) in models" :key="index">
            <tr>
              <td @click="giveValue(model.menu_id)">+{{ model.menu_id }}</td>
              <td>{{ model.menu_name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      food: {},
      // custom_id: null,
      foodId: null,
      models: {},
      imageFile: null,
    };
  },
  mounted() {
    // this.getFoodById()
    // this.update()
    this.getAllMenu();
  },
  methods: {
    uploadFileUpload(event) {
      this.imageFile = event.target.files[0];
      console.log("edit page upload file:", this.imageFile);

      this.food.file = this.imageFile;
    },

    async updatemenu() {
      //   this.foodId = 'RES01'
      //   console.log("add res:", this.product);
      //   const formData = new FormData();
      //   formData.append("file", this.imageFile);
      //   formData.append("menu_name", this.product.menu_name);
      //   formData.append("price", this.product.price);
      //   formData.append("detail", this.product.detail);
      this.food.details = this.food.detail;
      console.log("food: ", this.food);

      await axios
        .post(`http://localhost:3000/updatemenu`, this.food, {
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
    getAllMenu() {
      axios
        .get("http://localhost:3000/BestFoodInfo")
        .then((res) => {
          console.log(res);
          this.models = res.data.response;
          console.log(this.models);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    giveValue(value) {
      console.log(value);
      this.foodId = value;
      this.update();
    },
    update() {
      // this.foodId = this.custom_id;
      this.getFoodById();
      this.$forceUpdate();
    },
    // triggerClose() {
    //   this.$emit('closeEditModal')
    // },
    getFoodById() {
      axios
        .get(`http://localhost:3000/menuforadmin/menuid=${this.foodId}`)
        .then((res) => {
          this.food = res.data.response[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updatefood() {
      axios
        .put(`http://localhost:3000/foods/${this.foodId}`, this.food)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateModal() {
      Swal.fire({
        title: "แน่ใจหรือไม่?",
        text: "ย้อนกลับไม่ได้แล้วนะ!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่, แก้ไขเลย",
        cancelButtonText: "ไม่",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "แก้ไข!",
            `ข้อมูลเมนู [${this.food.menu_name}] ของคุณแก้ไขแล้ว.`,
            "success"
          ).then((result) => {
            this.updatemenu();
            if (result.isConfirmed) {
              location.reload();

              //   history.back();
              //  location.href = "/admin/RES04";
              // location.reload();
            }
          });
        }
      });
    },
  },
};
</script>