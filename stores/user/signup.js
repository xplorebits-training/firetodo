import {getAuth,createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useUser } from '../user';

export default async function(firstName,lastName,useremail,userpassword){
  await createUserWithEmailAndPassword(getAuth(), useremail, userpassword);
  await updateProfileInFirebase(firstName,lastName,useremail);
  await updateLocalProfile()
}

const updateProfileInFirebase = function(firstName,lastName,useremail){
  updateProfile(getAuth().currentUser, {
    firstName: firstName,
    lastName: lastName,
    email: useremail
  })
}

const updateLocalProfile = function(){
  
}

/*const updateStore = async function(fName,lName,userEmail){
  const storage = getStorage();
  const firstName = ref(storage, fName);
  const lastName = ref(storage, lName);
  const email = ref(storage, userEmail);
}*/
