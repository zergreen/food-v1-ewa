<template>
  <div>
   <i> test</i>
    <CreateFood :foodId="this.id" />
  </div>
</template>

<script>
import CreateFood from '@/components/food-models/CreateFood.vue'
export default {
  components: { CreateFood },
}
</script>
