import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import AddressBook from "./components/AddressBook.vue";
import EditForm from "./components/EditForm.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addAddressBook",
    name: "AddAddressBook",
    component: AddressBook,
  },


  {
    path: '/editaddressbook/:id?',
    name: 'EditForm',
    component: EditForm
},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;