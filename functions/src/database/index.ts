import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(
    'wedding-wix-tutorial-firebase-adminsdk-k9n7n-80a3fbb799.json'
  ),
  databaseURL: 'https://wedding-wix-tutorial-default-rtdb.firebaseio.com',
});

const firestore = admin.firestore();

export function addDocument(
  collectionName: string,
  document: object
): Promise<
  FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
> {
  const collectionRef = firestore.collection(collectionName);
  return collectionRef.add(document);
}
