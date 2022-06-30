<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12 mb-4">
        <div class="card">
          <div class="p-3 pb-0 card-header">
            <div class="d-flex flex-column">
              <h6 class="mb-2 ms-1">{{ user.surname}}</h6>
              <h6 class="mb-2 ms-1">{{ user.lastname}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-12">
        <card :title="user.stats.money.title" :value="user.stats.money.value" :percentage="user.stats.money.percentage"
          :iconClass="user.stats.money.iconClass" :iconBackground="user.stats.money.iconBackground"
          :detail="user.stats.money.detail" directionReverse></card>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <card :title="user.stats.users.title" :value="user.stats.users.value" :percentage="user.stats.users.percentage"
          :iconClass="user.stats.users.iconClass" :iconBackground="user.stats.users.iconBackground"
          :detail="user.stats.users.detail" directionReverse></card>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <card :title="user.stats.clients.title" :value="user.stats.clients.value"
          :percentage="user.stats.clients.percentage" :iconClass="user.stats.clients.iconClass"
          :iconBackground="user.stats.clients.iconBackground" :percentageColor="user.stats.clients.percentageColor"
          :detail="user.stats.clients.detail" directionReverse></card>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <card :title="user.stats.sales.title" :value="user.stats.sales.value" :percentage="user.stats.sales.percentage"
          :iconClass="user.stats.sales.iconClass" :iconBackground="user.stats.sales.iconBackground"
          :detail="user.stats.sales.detail" directionReverse></card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table-vue />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/examples/Cards/Card.vue";
import ProjectsTableVue from "./TeacherStudentProjectTable.vue";
export default {
  name: "dashboard-default",
  computed: {
    user() {
      return this.users[this.$route.params.id] ?? this.users[0];
    },
  },
  data() {
    return {
      users: [{
        lastname: "DOE",
        surname: "John",
        stats: {
          money: {
            title: "Nombre de projets rendus",
            value: "15 / 30",
            percentage: "+1",
            detail: "cette semaine",
            iconClass: "ni ni-money-coins",
            iconBackground: "bg-gradient-primary",
          },
          users: {
            title: "Classement",
            value: "100 / 300",
            percentage: "+3 places",
            iconClass: "ni ni-world",
            iconBackground: "bg-gradient-danger",
            detail: "depuis la semaine dernière",
          },
          clients: {
            title: "Dernière note",
            value: " 13 / 20",
            percentage: "-1.3",
            iconClass: "ni ni-paper-diploma",
            percentageColor: "text-danger",
            iconBackground: "bg-gradient-success",
            detail: "par rapport à la moyenne",
          },
          sales: {
            title: "Moyenne générale",
            value: "14.3 / 20",
            percentage: "+5%",
            iconClass: "ni ni-paper-diploma",
            iconBackground: "bg-gradient-warning",
            detail: "ce mois-ci",
          },
        },
      }, {
        lastname: "DOE",
        surname: "John",
        stats: {
          money: {
            title: "Nombre de projets rendus",
            value: "15 / 30",
            percentage: "+1",
            detail: "cette semaine",
            iconClass: "ni ni-money-coins",
            iconBackground: "bg-gradient-primary",
          },
          users: {
            title: "Classement",
            value: "100 / 300",
            percentage: "+3 places",
            iconClass: "ni ni-world",
            iconBackground: "bg-gradient-danger",
            detail: "depuis la semaine dernière",
          },
          clients: {
            title: "Dernière note",
            value: " 13 / 20",
            percentage: "-1.3",
            iconClass: "ni ni-paper-diploma",
            percentageColor: "text-danger",
            iconBackground: "bg-gradient-success",
            detail: "par rapport à la moyenne",
          },
          sales: {
            title: "Moyenne générale",
            value: "14.3 / 20",
            percentage: "+5%",
            iconClass: "ni ni-paper-diploma",
            iconBackground: "bg-gradient-warning",
            detail: "ce mois-ci",
          },
        },
      },
      {
        lastname: "DOE",
        surname: "John",
        stats: {
          money: {
            title: "Nombre de projets rendus",
            value: "15 / 30",
            percentage: "+1",
            detail: "cette semaine",
            iconClass: "ni ni-money-coins",
            iconBackground: "bg-gradient-primary",
          },
          users: {
            title: "Classement",
            value: "100 / 300",
            percentage: "+3 places",
            iconClass: "ni ni-world",
            iconBackground: "bg-gradient-danger",
            detail: "depuis la semaine dernière",
          },
          clients: {
            title: "Dernière note",
            value: " 13 / 20",
            percentage: "-1.3",
            iconClass: "ni ni-paper-diploma",
            percentageColor: "text-danger",
            iconBackground: "bg-gradient-success",
            detail: "par rapport à la moyenne",
          },
          sales: {
            title: "Moyenne générale",
            value: "14.3 / 20",
            percentage: "+5%",
            iconClass: "ni ni-paper-diploma",
            iconBackground: "bg-gradient-warning",
            detail: "ce mois-ci",
          },
        },
      },
      {
        lastname: "DOE",
        surname: "John",
        stats: {
          money: {
            title: "Nombre de projets rendus",
            value: "15 / 30",
            percentage: "+1",
            detail: "cette semaine",
            iconClass: "ni ni-money-coins",
            iconBackground: "bg-gradient-primary",
          },
          users: {
            title: "Classement",
            value: "100 / 300",
            percentage: "+3 places",
            iconClass: "ni ni-world",
            iconBackground: "bg-gradient-danger",
            detail: "depuis la semaine dernière",
          },
          clients: {
            title: "Dernière note",
            value: " 13 / 20",
            percentage: "-1.3",
            iconClass: "ni ni-paper-diploma",
            percentageColor: "text-danger",
            iconBackground: "bg-gradient-success",
            detail: "par rapport à la moyenne",
          },
          sales: {
            title: "Moyenne générale",
            value: "14.3 / 20",
            percentage: "+5%",
            iconClass: "ni ni-paper-diploma",
            iconBackground: "bg-gradient-warning",
            detail: "ce mois-ci",
          },
        },
      }],
      projects: [
        {
          name: "Nom du projet",
          grade: "Ma note",
          status: "En cours",
        },
        {
          name: "Nom du projet",
          grade: "Ma note",
          status: "En cours",
        },
        {
          name: "Nom du projet",
          grade: "Ma note",
          status: "En cours",
        },
        {
          name: "Nom du projet",
          grade: "Ma note",
          status: "En cours",
        },
        {
          name: "Nom du projet",
          grade: "Ma note",
          status: "En cours",
        },
      ],
    };
  },
  components: {
    Card,
    ProjectsTableVue,
  },
};
</script>
