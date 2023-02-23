import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc , getFirestore } from "firebase/firestore"; 
import { useUser } from "../user";

export default async function(firstName,lastName,useremail,userpassword){
  await createUserWithEmailAndPassword(getAuth(), useremail, userpassword);
  await useUser().updateLocalProfile(firstName,lastName,useremail);
  await setDoc(doc(getFirestore(), "users", getAuth().currentUser.uid), {
    firstName,
    lastName,
    email : useremail
  });
  console.log("done")
};
