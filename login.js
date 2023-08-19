import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGpWKkEVIoL4x3ptKyupoq6EJ_zrCED2Y",
  authDomain: "personal-blogging-app-7a320.firebaseapp.com",
  projectId: "personal-blogging-app-7a320",
  storageBucket: "personal-blogging-app-7a320.appspot.com",
  messagingSenderId: "623699062716",
  appId: "1:623699062716:web:31d1bf15ff0fd1c4d6c5b9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();


  let login_btn = document.getElementById('login_btn');

  login_btn.addEventListener("click", function(){

    let form3Example3c = document.getElementById('form3Example3c');
    let form3Example4c = document.getElementById('form3Example4c');

    signInWithEmailAndPassword(auth, form3Example3c.value, form3Example4c.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log('user=>', user)
    window.location.replace("./dashbord.html")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  })