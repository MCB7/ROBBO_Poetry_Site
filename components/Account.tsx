import { useState } from 'react'
import firebase from '../firebase/firebaseClient';
import { goToBillingPortal } from '../stripe/createCustomerPortal'
import { useAuthState } from 'react-firebase-hooks/auth'

const Account = () => {

 

  return (
    <>


    <button
      onClick={() => {
    
        goToBillingPortal()
      }}>
      Manage Billing
    </button>

    </>
  )
}

export default Account