<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.money.title"
              :value="stats.money.value"
              :percentage="stats.money.percentage"
              :iconClass="stats.money.iconClass"
              :iconBackground="stats.money.iconBackground"
              :detail="stats.money.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.users.title"
              :value="stats.users.value"
              :percentage="stats.users.percentage"
              :iconClass="stats.users.iconClass"
              :iconBackground="stats.users.iconBackground"
              :detail="stats.users.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.clients.title"
              :value="stats.clients.value"
              :percentage="stats.clients.percentage"
              :iconClass="stats.clients.iconClass"
              :iconBackground="stats.clients.iconBackground"
              :percentageColor="stats.clients.percentageColor"
              :detail="stats.clients.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.sales.title"
              :value="stats.sales.value"
              :percentage="stats.sales.percentage"
              :iconClass="stats.sales.iconClass"
              :iconBackground="stats.sales.iconBackground"
              :detail="stats.sales.detail"
              directionReverse
            ></card>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 mb-4">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-2 ms-1">Les derniers projets de mes élèves</h6>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center">
                  <tbody>
                    <tr v-for="(project, index) in projects" :key="index">
                      <td class="w-30">
                        <div class="px-2 py-1 d-flex align-items-center">
                          <div class="ms-4">
                            <p class="mb-0 text-xs font-weight-bold">Intitulé :</p>
                            <h6 class="mb-0 text-sm">{{ project.name }}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Note :</p>
                          <h6 class="mb-0 text-sm">{{ project.grade }}</h6>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Status:</p>
                          <h6 class="mb-0 text-sm">{{ project.status }}</h6>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/examples/Cards/Card.vue";

export default {
  name: "dashboard-default",
  data() {
    return {
      stats: {
        money: {
          title: "Nombre de projets encadrés",
          value: "15",
          percentage: "+1",
          detail: "cette semaine",
          iconClass: "ni ni-money-coins",
          iconBackground: "bg-gradient-primary",
        },
        users: {
          title: "Reste de projet à noter",
          value: "20",
          iconClass: "ni ni-world",
          iconBackground: "bg-gradient-danger",
        },
        clients: {
          title: "Dernière note attribué",
          value: " 13 / 20",
          iconClass: "ni ni-paper-diploma",
          percentageColor: "text-danger",
          iconBackground: "bg-gradient-success",
        },
        sales: {
          title: "Moyenne générale de la classe",
          value: "14.3 / 20",
          percentage: "+5%",
          iconClass: "ni ni-paper-diploma",
          iconBackground: "bg-gradient-warning",
          detail: "ce mois-ci",
        },
      },
      projects: [
        {
          name: "Nom du projet de l'élève",
          grade: "La note de l'élève",
          status: "En cours",
        },
        {
          name: "Nom du projet de l'élève",
          grade: "La note de l'élève",
          status: "En cours",
        },
        {
          name: "Nom du projet de l'élève",
          grade: "La note de l'élève",
          status: "En cours",
        },
        {
          name: "Nom du projet de l'élève",
          grade: "La note de l'élève",
          status: "En cours",
        },
        {
          name: "Nom du projet de l'élève",
          grade: "La note de l'élève",
          status: "En cours",
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>
