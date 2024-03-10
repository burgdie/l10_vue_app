<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mt-5 offset-3">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form @submit.prevent="register">
              <!-- Label and Input Field for Full Name -->
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  placeholder="Enter your Full Name"
                />
              </div>
              <!-- Label and Input Field for Email -->
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Email"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <!-- End Label and Input Field for Email -->
              <!--  -->
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="confirmed_password"
                  placeholder="Confirm your password"
                />
              </div>

              <button type="submit" class="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmed_password: "",
      errors: [],
      successMsg: "",
    };
  },

  methods: {
    register() {
      if (this.password != this.confirmed_password) {
        this.errors = ["Your password does not match with confirmed password"];

        return;
      }
      // api/register
      axios
        .post("api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>
