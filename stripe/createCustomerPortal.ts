import firebase from '../firebase/firebaseClient';
import { getFunctions, httpsCallable } from "firebase/functions";


const app = firebase.app()



export async function goToBillingPortal() {
const functions = getFunctions(app, "us-west1");
const functionRef = httpsCallable(functions, 'ext-firestore-stripe-payments-createPortalLink');


const { data } : any = await functionRef({
    returnUrl: `${window.location.origin}/account`,
  })

  window.location.assign(data.url)
}




