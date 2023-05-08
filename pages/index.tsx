import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import Login from '../components/Login'
import firebase from '../firebase/firebaseClient';
import { useAuthState } from 'react-firebase-hooks/auth'
import { createCheckoutSession } from '@/stripe/createCheckoutSession';
import usePremiumStatus from '@/stripe/usePremiumStatus';
import Account from '../components/Account'

//
export default function Home() {
  const [user, userLoading] : any = useAuthState(firebase.auth() as any);
  const userIsPremium= usePremiumStatus(user);
  
  
  return (
    <>
      {!user && userLoading && <h1> loading...</h1>}
      {!user && !userLoading && <Login/>}
     
      {user && !userLoading && (
        <div>
          <h1>Hello, {user.displayName}</h1>
          {!userIsPremium ? (
            <button onClick={()=> createCheckoutSession(user.uid)}>
              Buy Zine
            </button>
          ): (
            <>
            <h2>thank you!</h2>
            <Account/>

            </>
          )}
        </div>
      )}
    
    </>
  )
}
