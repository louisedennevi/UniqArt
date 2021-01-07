import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://uniqart-d89a5-default-rtdb.europe-west1.firebasedatabase.app/"
});
export default admin;