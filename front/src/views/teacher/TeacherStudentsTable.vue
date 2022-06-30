<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Mes élèves</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th :class="className" class="ps-3">Élève</th>
              <th :class="className">Note</th>
              <th :class="className">Status</th>
              <th :class="className">Professeur</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(project, index) in projects" 
              :key="project.name"
              @click="$router.push(`/teacher/student-preview/${index}`)"
            >
              <td>
                <div class="d-flex px-2">
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ project.name }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ project.note }}</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">{{ project.status }}</span>
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
  name: "teacher-students-table",
  data() {
    return {
      className: 'text-uppercase text-secondary text-xxs font-weight-bolder text-start opacity-7 ps-2',
      projects: [
        { name: 'Jhon', note: 17, status: 'En cours', completion: 79, teacher: 'HiDoc' },
        { name: 'Jhon', note: 17, status: 'En cours', completion: 79, teacher: 'HElloworl' },
        { name: 'Jhon', note: 17, status: 'En cours', completion: 79, teacher: 'HiDoc' },
        { name: 'Jhon', note: 17, status: 'En cours', completion: 79, teacher: 'HiDoc' },
        { name: 'Jhon', note: 17, status: 'En cours', completion: 79, teacher: 'HiDoc' },
      ],
    };
  },
}
</script>
