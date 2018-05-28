import firebase from 'firebase/app'
import 'firebase/database'
import moment from 'moment'

// need to update to get the current user
export const USER_ID = 'dev_user'

const config = {
  apiKey: 'AIzaSyB22SCFzgsRNn4RhzCwgz6Oorth6mcjtho',
  authDomain: 'watcher-8ecc7.firebaseapp.com',
  databaseURL: 'https://watcher-8ecc7.firebaseio.com',
  projectId: 'watcher-8ecc7',
  storageBucket: 'watcher-8ecc7.appspot.com',
  messagingSenderId: '27818768843',
}
firebase.initializeApp(config)

const userRef = firebase.database().ref(`users/${USER_ID}`)

export function addShowToUser(showID) {
  console.log('asty')
  return userRef.update({
    [showID]: {
      added: moment().toJSON(),
      watched: null,
    },
  })
}

export async function getUserShows() {
  const data = await userRef.once('value')
  return data.val()
}

export function removeShowFromUser(show) {
  return userRef.child(show).remove()
}
