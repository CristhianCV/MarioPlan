const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((response) => {
      console.log("Notification added.");
    });
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

exports.userJoiner = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("user")
    .doc(user.uid)
    .get()
    .then((response) => {
      const newUser = response.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };
      return createNotification(notification);
    });
});
