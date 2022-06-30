<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Mes projets</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th class="ps-3" :class="className">Projet</th>
              <th :class="className">Note</th>
              <th :class="className">Status</th> 
              <th :class="className">Completion</th>
              <th :class="className">Professeur</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="project in projects"
              :key="project.name"
            >
              <td>
                <div class="d-flex px-2">
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ project.name }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ project.note}}</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">{{ project.status}}</span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-start">
                  <span class="me-2 text-xs font-weight-bold">{{ project.completion }}%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-gradient-info" role="progressbar" :aria-valuenow="project.completion" aria-valuemin="0"
                        aria-valuemax="100" :style="`width: ${project.completion}%;`"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="align-middle small">
                {{ project.teacher }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects-table",
  data() {
    return {
      className: 'text-uppercase text-secondary text-xxs font-weight-bolder text-start opacity-7 ps-2',
      projects: [
        { name: 'Mon projet', note: 17, status: 'En cours', completion: 79, teacher: 'Kévin' },
        { name: 'Mon projet', note: 17, status: 'En cours', completion: 79, teacher: 'Léo' },
        { name: 'Mon projet', note: 17, status: 'En cours', completion: 79, teacher: 'Lilya' },
        { name: 'Mon projet', note: 17, status: 'En cours', completion: 79, teacher: 'Salah-eddine' },
        { name: 'Mon projet', note: 17, status: 'En cours', completion: 79, teacher: 'Guillaume' },
      ],
    };
  },
}
</script>
