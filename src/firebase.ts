import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyAi98MxjLLwjwC7GG_PNVl8PbalX1Ri8-0',
  authDomain: 'mail-app-926ce.firebaseapp.com',
  projectId: 'mail-app-926ce',
  storageBucket: 'mail-app-926ce.appspot.com',
  messagingSenderId: '394191310159',
  appId: '1:394191310159:web:db2d715275a8d0744d493a',
  measurementId: 'G-5E9JC3T086',
}

const app = firebase.initializeApp(config)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
