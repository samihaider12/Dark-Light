import { createRouter,createWebHistory } from "vue-router";
 import LanguageChanger from "../LanguageChanger.vue";
import Detail from "../Detail.vue";
const routes=[

  {path:'/',
      component:LanguageChanger,
  },
  {
    path: '/Detail',
    component:Detail
  }
]

const router=createRouter({
    history: createWebHistory(),
    routes
}) 

export default router