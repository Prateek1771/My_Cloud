import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCo1joISpeY2r8twz-Jea_mSC-plnhxVIg",
    authDomain: "my-cloud-1f96f.firebaseapp.com",
    projectId: "my-cloud-1f96f",
    storageBucket: "my-cloud-1f96f.appspot.com",
    messagingSenderId: "1057711398802",
    appId: "1:1057711398802:web:63dc247cf2781ec207eb4b"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { db , storage };