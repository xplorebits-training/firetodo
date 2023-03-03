import { defineStore } from "pinia";
import signup from "./user/signup";

export const useUser = defineStore('User',{
  state:() => ({
    profile : {},
  }),
  actions:{
    signup,
    updateLocalProfile (firstName,lastName,useremail){
      useUser.profile = { ...this.profile , firstName : firstName , lastName : lastName , email : useremail};
      console.log(useUser.profile)
    },
   }
  }
)
