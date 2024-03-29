

import { initializeApp, getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {

  apiKey: process.env. NEXT_PUBLIC_FIREBASE_API_KEY,

  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,

  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,

  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGER_SENDER_ID,

  appId: process.env. NEXT_PUBLIC_APP_ID,

};


// Initialize Firebase for server side rendering

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export{app,firestore,auth,storage};