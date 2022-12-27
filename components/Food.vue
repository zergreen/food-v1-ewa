<template>
  <div>
   <i> Food Component</i>
    <EditFood :foodId="this.id" />
  </div>
</template>

<script>
import EditFood from '@/components/food-models/EditFood.vue'
export default {
  data() {
    return {
       id: 1,
    }
  },
  components: { EditFood },
}
</script>
