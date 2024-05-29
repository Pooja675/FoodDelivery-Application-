import {getApp, getApps , initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyAeaSwJhw5feUQslQd0L358l4q7loE6hLY",
    authDomain: "fooddeliveryapp-c8e29.firebaseapp.com",
    databaseURL: "https://fooddeliveryapp-c8e29-default-rtdb.firebaseio.com",
    projectId: "fooddeliveryapp-c8e29",
    storageBucket: "fooddeliveryapp-c8e29.appspot.com",
    messagingSenderId: "616240429613",
    appId: "1:616240429613:web:84fa5705fb1551b02456a4",
    crossOriginOpenerPolicy: 'same-origin'
    
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  
  export{app, firestore, storage};