import {Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Stripe | null;

const initializeStripe = async () => {
if (!stripePromise) {
    stripePromise = await loadStripe(
        "pk_test_51Mq002J523EziYg9bq8pwG7z2raFO23J42PHaeWBI5iuUMmmVOD2ySlUX8g3E3dlPW90YmES0mUGLKuEP7RgeSEa00S2Lqgx1q"
    );
}
return stripePromise;

};

export default initializeStripe;