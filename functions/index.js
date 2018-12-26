const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification =>{
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('Notification added', doc));
})

exports.noteAdded = functions.firestore
  .document('notes/{noteId}')
  .onCreate(doc => {
    const note = doc.data();
    const notification = {
      content: 'added a new note',
      user: `${note.authorFirstName} ${note.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
  })

exports.userJoined = functions.auth.user()
  .onCreate(user => {

    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const new_user = doc.data();
        const notification = {
          content: 'joined the session',
          user: `${new_user.firstname} ${new_user.lastname}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
      })
  })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
