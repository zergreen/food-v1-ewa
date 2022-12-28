<template>
  <div class="group relative">
    <div
      class="min-h-100 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75 lg:aspect-none lg:h-60"
    >
      <img 
        :src="restaurant_picture"
        class="object-cover h-48 w-96"
      />
    </div>
    <div class="mt-2 flex justify-between">
      <div>
        <h1 class="text-lg text-gray-0">
          <nuxt-link :to="href">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ restaurant_name }}
          </nuxt-link>
        </h1>
      </div>

      <p class="text-sm font-medium text-gray-900">
        <button
          class="bg-red-800 m-2 hover:bg-red-900 text-white py-1 px-3 rounded"
        >
          {{ restaurant_score }}
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  restaurant_name: "Suggestmenu",
  props: {
    id: {
      type: String,
      default: "",
    },
    restaurant_name: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    restaurant_picture: {
      type: String,
      default: "",
    },
    restaurant_score: {
      type: String,
      default: "",
    },
  },
};
</script>
