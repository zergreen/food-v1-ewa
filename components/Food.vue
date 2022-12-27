<template>
  <div>
   <i> Food Component</i>
    <EditFoodV2 :foodId="this.id" />
  </div>
</template>

<script>
import EditFoodV2 from '@/components/food-models/EditFoodV2.vue'
export default {
  data() {
    return {
       id: 1,
    }
  },
  components: { EditFoodV2 },
}
</script>
