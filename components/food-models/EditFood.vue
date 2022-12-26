<template>
  <!-- component -->
  <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
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
                      @click="updatefood"
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    foodId: Number,
  },
  data() {
    return {
      food: {},
    }
  },
  mounted() {
    this.getFoodById()
  },
  methods: {
    // triggerClose() {
    //   this.$emit('closeEditModal')
    // },
    getFoodById() {
      axios
        .get(`http://localhost:3000/foods/${this.foodId}`)
        .then((response) => {
          this.food = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updatefood() {
      axios
        .put(
          `http://localhost:3000/foods/${this.foodId}`,
          this.food
        )
        .then((response) => {
          console.log(response.data)
        //   this.$emit('closeEditModal')
        //   this.$emit('reloadDataTable')
        //   this.$emit('showSuccessAlert')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>