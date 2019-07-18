import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtF2rdsRHsjtiG15jt4sCf0U8wrqsEv4U",
    authDomain: "texpensify.firebaseapp.com",
    databaseURL: "https://texpensify.firebaseio.com",
    projectId: "texpensify",
    storageBucket: "texpensify.appspot.com",
    messagingSenderId: "143301593285",
    appId: "1:143301593285:web:cee1e33bac4802e0"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/* database.ref('expenses').on('child_removed', (snapshot) => {
      console.log(snapshot.key, snapshot.val());
  }); */
//there is child_changed and child_added, too

/* database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expenses);
  }) */

/* database.ref('expenses').push({
    description: 'Rent2',
    notes: '',
    amount: 1095000,
    createdAt: 2321092102
}); */

/* database.ref('notes').push({
    title: 'Course topics',
    body: 'Go for a lesson.'
}); */ //pushes new note with unique id

/* const firebaseNotes = {
    notes: {
        someId: {
            title: 'First note',
            body: 'This is note.'
        },
        anotherId: {
            title: 'Another note',
            body: 'Body.'
        }
    }
}

const notes = [{
    id: '12',
    title: 'First note',
    body: 'This is my note.'
}, {
    id: '761',
    title: 'Another note',
    body: 'This is my note.'
}];
 
database.ref('notes').set(notes) */

  //ref -> reference
  //set returns a promise

/*   firebase.database().ref().set({
      name: 'Haine Cho',
      age: 21,
      isSingle: false,
      location: {
          city: 'Cliffside Park',
          country: 'US'
      }
  }).then(() => {
      console.log('Data is saved.');
  }).catch((e) => {
      console.log('This failed.', e)
  });

  console.log('Request to change data.'); */

/*
  database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
  }); //listens for something over and over again

  setTimeout(() => {
      database.ref('age').set(22);
  }, 3500); */


/*   database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val(); //everything in root 
        console.log(val);
    })
    .catch((e) => {
        console.log('Error is ', e);
    }); */