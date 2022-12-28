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
                  <label for="res-id">RES_ID*</label>
                  <input
                    v-model="resID"
                    type="text"
                    name="res-id"
                    id="res-id"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

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
                      v-on:click="createModal()"
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

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-x-auto">
                <h2 class="font-semibold text-xl text-gray-600">
                  List รวมร้านอาหาร
                </h2>
                <table class="min-w-full">
                  <thead class="border-b bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        RES_ID
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        RES_NAME
                      </th>
                    </tr>
                  </thead>
                  <tbody v-for="(model, index) in models" :key="index">
                    <tr class="border-b">
                      <td
                        @click="giveValue(model.restaurant_id)"
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:bg-gray-100"
                      >
                        (+){{ model.restaurant_id }}
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:bg-gray-100"
                      >
                        {{ model.restaurant_name }}
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
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      resID: null,

      models: {},

      imageFile: "",
      menuID: "",
      text: "",
      resID: "",

      product: {
        menu_name: "",
        price: "",
        detail: "",
      },
    };
  },
  mounted() {
    this.getAllRest();
  },
  methods: {
    uploadFileUpload(event) {
      this.imageFile = event.target.files[0];
      console.log("edit page upload file:", this.imageFile);
    },

    async addmenu() {
      console.log("resID:", this.resID);
      console.log("add res:", this.product);
      const formData = new FormData();
      formData.append("file", this.imageFile);
      formData.append("menu_name", this.product.menu_name);
      formData.append("price", this.product.price);
      formData.append("detail", this.product.detail);
      // formData.append("restaurant_id", this.resID);

      await axios
        .post(`http://localhost:3000/addNewMenu/${this.resID}`, formData, {
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
    giveValue(value) {
      console.log(value);
      this.resID = value;
    },
    getAllRest() {
      axios
        .get("http://localhost:3000/BestRestuarantInfo")
        .then((res) => {
          console.log(res);
          this.models = res.data.response;
          console.log(this.models);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createModal() {
      Swal.fire({
        title: "แน่ใจหรือไม่?",
        text: "ย้อนกลับไม่ได้แล้วนะ!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่, สร้างเลย",
        cancelButtonText: "ไม่",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "สร้างแล้ว!",
            `ข้อมูลเมนู [${this.product.menu_name}] ของคุณได้ถูกสร้างแล้ว.`,
            "success"
          ).then((result) => {
            this.addmenu();
            if (result.isConfirmed) {
              location.reload();
              //   history.back();
              //  location.href = "/admin/RES04";
            }
          });
        }
      });
    },
  },
};
</script>
