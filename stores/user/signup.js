import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { useUser } from '../user';

export default async function(useremail,userpassword){
  await createUserWithEmailAndPassword(getAuth(), useremail, userpassword);
}
