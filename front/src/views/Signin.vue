<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto d-flex flex-column">
              <div class="card card-plain d-flex mx-auto">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Se connecter</h4>
                  <p class="mb-0">Renseigner votre adresse email et votre mot de passe</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <argon-input type="email" placeholder="Email" name="email" size="lg" />
                    </div>
                    <div class="mb-3">
                      <argon-input type="password" placeholder="Mot de passe" name="password" size="lg" />
                    </div>
                    <argon-switch id="rememberMe">Se souvenir de moi</argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                      >Connexion</argon-button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
<style scoped>

@media(min-width: 768px) {
  .card-plain {
    max-width: 30vw;
  }
}

</style>