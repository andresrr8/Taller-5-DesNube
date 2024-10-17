import { 
    initializeApp 
  }  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'

  import{
    getFirestore,
    collection, 
    addDoc,
    getDocs,
    setDoc,
    getDoc,
    doc
     
  } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'
  
  
  import { 
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    sendEmailVerification,
  }  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

  import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
    } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js'
  
    const firebaseConfig = {
      apiKey: "AIzaSyDPXbI9RZBW0u3UqNMUjjbwo2ZCrQMYPIA",
      authDomain: "prognub-de5c8.firebaseapp.com",
      projectId: "prognub-de5c8",
      storageBucket: "prognub-de5c8.appspot.com",
      messagingSenderId: "1047588645914",
      appId: "1:1047588645914:web:08050247fb84ca96c6f5a3",
      measurementId: "G-JRP6VRNTBQ"
    };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage();
  
  //metodo de autenticacion de usuario
  export const accessuser=(email,password)=>
    signInWithEmailAndPassword(auth, email, password)
  
  //Verificación de logeo
  export function userstate(){
    onAuthStateChanged(auth, (user) => {
      if (user) { 
        const uid = user.uid;
        console.log("usuario: "+uid)
      } else {
        window.location.href="../index.html"
      }
    });
  }
  
  //Cerrar sesión
  export const logout=()=>signOut(auth)

  //registrar usuario nuevo
  export const createuser=(email, password)=>
    createUserWithEmailAndPassword(auth, email, password)
  
  //Email de verificacion
  export const everification=()=>
    sendEmailVerification(auth.currentUser)

  //agregar datos
  export const Addproducto = (codigo,nombre,descripcion, cantidad)=>
    addDoc (collection(db, "productos"), {
      codigo,
      nombre, 
      descripcion, 
      cantidad
    });

    //mostrar productos
    export const viewproducts=()=>
      getDocs(collection(db,"productos"));

    //agregar datos con id
export const Setregister=(codigo,name,country)=> 
  setDoc(doc(db, "cities", codigo), {
    codigo,
    name,
    country
  });

//Leer registro especifico
export const Getregister=(codigo)=> 
  getDoc(doc(db, "cities", codigo))


  
//agregar datos con id y URL de imagen
export const save_url=(codigo,name,country,urlcountry)=> 
  setDoc(doc(db, "estados", codigo), {
    codigo,
    name,
    country,
    urlcountry
  });

//Leer registro especifico
export const Search_register=(codigo)=> 
  getDoc(doc(db, "estados", codigo))

//Unidad de almacenamiento storage
export const archivoimg = async (file, referencia)=>{
  const storageref=ref(storage,`Paisimg/${referencia+file.name}`)
  await uploadBytes(storageref, file);
  const url = await getDownloadURL(storageref);
  return url;
};

