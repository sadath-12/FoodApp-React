import { getApp,getApps,initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCqZjE5lBrnUnOpeVj-DCcQLXMfrJQzk0Y",
    authDomain: "restaurant-297dd.firebaseapp.com",
    databaseURL: "https://restaurant-297dd-default-rtdb.firebaseio.com",
    projectId: "restaurant-297dd",
    storageBucket: "restaurant-297dd.appspot.com",
    messagingSenderId: "749054132191",
    appId: "1:749054132191:web:8d37c00fb409dd2a8ace6a"
  };

  const app = getApps.length>0 ? getApp() :initializeApp(firebaseConfig)

  const firestore=getFirestore(app)
  const storage = getStorage(app)  

  export {app,firestore,storage}