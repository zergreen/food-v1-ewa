<template>
  <div>
    <container fluid>
      <p class="text-danger text-center">Confirm to delete?</p>
      <p>Value:'{{foodId}}'</p>
      <div class="text-center">
        <button variant="danger" @click="removeFoodFromData"
          >Delete Menu</button
        >
        <button
          style="margin-left: 40px"
          variant="warning"
          @click="triggerClose"
          >Close</button
        >
      </div>
    </container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //   name: 'DeleteFoodModal',
  props: {
    foodId: Number,
  },
  methods: {
    triggerClose() {
      this.$emit("closeDeleteModal");
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
  },
};
</script>
