<template>
  <div class="container">
    <div>
      <!-- Value: '{{this.models}}' -->
      <div class="input-group flex-nowrap">
        <!-- <span class="input-group-text" id="addon-wrapping">@</span> -->
        <input
          type="text"
          class="form-control"
          placeholder="id"
          aria-label="id"
          aria-describedby="addon-wrapping"
          v-model="id"
        />
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">menu_name</th>
            <!-- <th scope="col">detail</th> -->
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody v-for="(model, index) in models" :key="index">
          <tr>
            <th scope="row">
              <i @click="updateId(model.id)" class="bi bi-arrow-up"></i
              >{{ model.id }}
            </th>
            <td>{{ model.menu_name }}</td>
            <!-- <td>{{ model.detail }}</td> -->
            <td v-html="rawHtml"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    return {
      title: "menu-edit",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
        },
      ],
    };
  },
  data() {
    return {
      id: null,
      rawHtml:
        '<button type="button" class="btn btn-outline-warning btn-sm"><i class="bi bi-pencil-square"></i></button> <button type="button" class="btn btn-outline-danger btn-sm"><i class="bi bi-trash"></i></button>',
      models: [
        {
          id: 1,
          menu_name: "Green",
          detail: "Goblan",
        },
        {
          id: 2,
          menu_name: "Luffy",
          detail: "Monkey",
        },
        {
          id: 3,
          menu_name: "G",
          detail: "Dragon",
        },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    updateId(value) {
      console.log("helloworld");
      this.id = value;
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
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

/* .action-item:hover {
  cursor: pointer;
}

.my-custom-scrollbar {
  position: relative;
  height: 400px;
  overflow: auto;
}

.table-wrapper-scroll-y {
  display: block;
} */
</style>
