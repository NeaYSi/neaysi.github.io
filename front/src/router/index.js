import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import TeacherVue from "../views/teacher/Teacher.vue";
import TablesTeacher from "../views/teacher/TablesTeacher.vue";
import TeacherProfile from "../views/teacher/TeacherProfile.vue";
import TeacherStudentView from "../views/teacher/TeacherStudentView.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/student",
  },
  {
    path: "/teacher",
    name: "Teacher",
    component: TeacherVue,
  },
  {
    path: "/teacher/student-preview/:id",
    name: "Teacher Student Preview",
    component: TeacherStudentView,
  },
  {
    path: "/teacher/students",
    name: "Teacher Students Table",
    component: TablesTeacher,
  },
  {
    path: "/teacher/profile",
    name: "Teacher Profile",
    component: TeacherProfile,
  },
  {
    path: "/student",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
