import firebase from '../firebase/firebaseClient';
import getStripe from './initializeStripe'

export async function createCheckoutSession(uid: string) {
    const firestore = firebase.firestore();

    /// create new checkout session in the subcollection inside this users document 
    const checkoutSessionRef = await firestore
    .collection('customers')
    .doc(uid)
    .collection("checkout_sessions")
    .add({
        price: "price_1MqNOAJ523EziYg9CxoYJEWG",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
    })
    /// Wait for the CheckoutSession to get attached by the extension
    checkoutSessionRef.onSnapshot(async (snap) => {
        const { sessionId } : any = snap.data();
        if (sessionId) {
            // we have a session, lets redirect to Checkout
            // Init Stripe
            const stripe = await getStripe();
            stripe?.redirectToCheckout( { sessionId });
        }
    })


}

