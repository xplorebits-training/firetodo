import { ref } from "vue";
import { defineStore } from "pinia";
import signup from "./user/signup";

export const useUser = defineStore('User',{
  state:() => {
    const profile = ref({});
  },
  actions:{
    signup
  }
})
