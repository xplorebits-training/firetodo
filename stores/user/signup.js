import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { useUser } from '../user';

export default async function(firstName,lastName,useremail,userpassword){
  await createUserWithEmailAndPassword(getAuth(), useremail, userpassword);
  await updateStore(firstName,lastName,useremail);
}

const updateStore = async function(fName,lName,userEmail){
  const storage = getStorage();

  const firstName = ref(storage, fName);
  const lastName = ref(storage, lName);
  const email = ref(storage, userEmail);

}