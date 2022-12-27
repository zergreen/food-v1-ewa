<template>
  <!-- component -->
  <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div>
      <pre>
        {{ this.models }}
      </pre>
      custom ID fill
      <div class="md:col-span-5">
        <label for="custom-id">ID</label>
        <input
          type="text"
          name="custom-id"
          id="custom-id"
          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          @input="update"
          @keyup.enter="update"
          @change="update"
          v-model="custom_id"
          :disabled="disabled == 1"
        />
      </div>
      <div>
        <button @click="disabled = (disabled + 1) % 2">Admin</button>
        <input type="text" :disabled="disabled == 1" />
      </div>
      <div>
        <input @click="myCheck" type="checkbox" />
        <label> ถ้าจะ create ติ๊กที่ปุ่มนี้</label>
      </div>
      <div>
        <img :src="food.menu_picture" />
      </div>
    </div>

    <div class="container max-w-screen-lg mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">แก้ไขเมนูอาหาร</h2>
        <p class="text-gray-500 mb-6">
          กรุณาตรวจสอบรายละเอียดทุกครั้งก่อนยืนยัน
        </p>

        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">รายละเอียดเมนูอาหาร</p>
              <p>กรุณากรอกลงในช่องว่าง</p>
            </div>

            <div class="lg:col-span-2">
              <div
                class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
              >
                <!-- <div class="md:col-span-5">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="menu_picture"
                    >เลือกรูปภาพ</label
                  >
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="menu_picture"
                    type="file"
                  />
                  <p
                    class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    SVG, PNG, JPG
                  </p>
                </div> -->

                <div class="md:col-span-5">
                  <label for="menu_picture">url-รูป</label>
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
                    <button
                      @click="deleteModal"
                      class="bg-green-600 m-2 hover:bg-blue-500 text-white py-1 px-3 rounded-full"
                    >
                      DELETE
                    </button>
                    <!-- <button
                      class="bg-green-600 m-2 hover:bg-blue-500 text-white py-1 px-3 rounded-full"
                    >
                      <a href="/create-food">CREATE</a>
                    </button> -->
                    <button @click="createModal" type="button">CREATE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <!-- <EditFoodV2 /> -->

      <p>list รายชื่อ เมนูทั้งหมด</p>
      <table class="table-auto">
        <thead>
          <tr>
            <th>id</th>
            <th>menu_name</th>
            <!-- <th>Year</th> -->
          </tr>
        </thead>
        <tbody v-for="(model, index) in models" :key="index">
          <tr @click="updateId(model.id)">
            <i @click="updateId(model.id)" class="bi bi-arrow-up"></i
            >{{
              model.id
            }}
            <td>{{ model.menu_name }}</td>
            <!-- <td>1961</td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import EditFoodV2 from "@/components/food-models/EditFoodV2";

export default {
  components: { EditFoodV2 },
  data() {
    return {
      food: {},
      custom_id: null,
      foodId: null,

      id: null,
      admin: false,
      disabled: 1,

      models: {},

      // models: [
      //   {
      //     id: 1,
      //     menu_name: "Green",
      //     detail: "Goblan",
      //   },
      //   {
      //     id: 2,
      //     menu_name: "Luffy",
      //     detail: "Monkey",
      //   },
      //   {
      //     id: 3,
      //     menu_name: "G",
      //     detail: "Dragon",
      //   },
      // ],
    };
  },
  mounted() {
    // this.getFoodById()
    // this.update()

    this.getData();
  },
  methods: {
    myCheck() {
      this.disabled = (this.disabled + 1) % 2;
    },
    updateId(value) {
      console.log("updateId : method");
      this.custom_id = value;

      //update form
      this.update();
    },
    getData() {
      axios
        .get("http://localhost:3000/foods/")
        .then((res) => {
          console.log(res);
          this.models = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update() {
      console.log("helloworld");
      this.foodId = this.custom_id;
      this.getFoodById();
      this.$forceUpdate();
    },
    // triggerClose() {
    //   this.$emit('closeEditModal')
    // },
    getFoodById() {
      axios
        .get(`http://localhost:3000/foods/${this.foodId}`)
        .then((response) => {
          this.food = response.data;
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
          //   this.$emit('closeEditModal')
          //   this.$emit('reloadDataTable')
          //   this.$emit('showSuccessAlert')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeFoodFromData() {
      axios
        .delete(`http://localhost:3000/foods/${this.foodId}`)
        .then((response) => {
          console.log("after call delte api");
          console.log(response);
          //   this.$emit('reloadDataTable')
          //   this.$emit('showDeleteAlert')
          //   this.$emit('closeDeleteModal')
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteModal() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success").then(
            (result) => {
              this.removeFoodFromData();
              if (result.isConfirmed) {
                location.reload();
                // this.$forceUpdate
              }
            }
          );
        }
      });
    },
    createModal() {
      Swal.fire({
        title: "Are you sure to creat?",
        text: "ไม่สามารถย้อนกลับได้แล้วนะ!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, create it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Created!", "Your Data has been Created.", "success").then(
            (result) => {
              this.addNewMenu();
              if (result.isConfirmed) {
                location.reload();
                // this.$forceUpdate
              }
            }
          );
        }
      });
    },
    updateModal() {
      Swal.fire({
        title: "Are you sure to edit?",
        text: "ไม่สามารถย้อนกลับได้แล้วนะ!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Edit it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Edited!", "Your Data has been edited.", "success").then(
            (result) => {
              this.updatefood();
              if (result.isConfirmed) {
                location.reload();
                // this.$forceUpdate()
              }
            }
          );
        }
      });
    },
    addNewMenu() {
      console.log("before value");
      console.log(this.food);
      console.log("--------------");
      axios
        .post("http://localhost:3000/foods/", this.food)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

slideshow.img {
  height: 100px;
  width: auto; /*maintain aspect ratio*/
  max-width: 200px;
}
</style>
