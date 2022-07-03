  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDzf6-rIP3oE9k7GJPSUX4Vm8zGtn4HI0A",
    authDomain: "loginapp-89941.firebaseapp.com",
    projectId: "loginapp-89941",
    storageBucket: "loginapp-89941.appspot.com",
    messagingSenderId: "843248523422",
    appId: "1:843248523422:web:d8532258b6abe7f300c38f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

//Inicio de Sesión con Google
const googleLogin = document.querySelector('#googlelogin')

googleLogin.addEventListener('click', e=>{
  console.log('Inicio con Google')

  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider).then(result =>{
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user; 
        window.location.href = "Ordenar.html" 
  }).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

  })
})

//Inicio de Sesión Facebook
const FBLogin = document.querySelector('#fblogin')

FBLogin.addEventListener('click', e =>{
  e.preventDefault();
  console.log('Inicio con Facebook')

  const provider = new FacebookAuthProvider();

  signInWithPopup(auth,provider).then(result=>{
    console.log('Logueado con FB!')
    window.location.href = "Ordenar.html" 
  }).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
  })
})

//Inicio de Sesión Twitter
const TWLogin = document.querySelector('#twlogin')

TWLogin.addEventListener('click', e =>{
  e.preventDefault();
  console.log('Inicio con Twitter')

  const provider = new TwitterAuthProvider();

  signInWithPopup(auth,provider).then(result=>{
    console.log('Logueado con Twitter!')
    window.location.href = "Ordenar.html" 
  }).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})