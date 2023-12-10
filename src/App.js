import './App.css';
import { firestore ,Collection, GetDocs } from './Firebase/Config';
import { addDoc ,deleteDoc,doc,setDoc} from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function App() {
 
const handle =async ()=>{

  try {

   //read
    // GetDocs(Collection(firestore,'Products')).then((citySnapshot)=> citySnapshot.forEach((obj)=>{console.log(obj.data(),obj.id)})).catch((err)=>console.log(err))

    // addDoc(Collection(firestore,'Products'),{name:'Nokia',price:2000})
    // deleteDoc(doc(firestore,'Products','q8wc3oKa1qw5Ejm7Av0K'))
// setDoc(doc(firestore,'Products','q8wc3oKa1qw5Ejm7Av0K'),{name:'dkjksdjklds',price:8888888})
  

const auth = getAuth();
createUserWithEmailAndPassword(auth, 'sajesh@gmail.com', 'password')
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


}catch(err){console.log(err.message)}

   }
 
  return (
    <div className="">
      <button onClick={handle  }>Click me</button>
   
    </div>
  );
}

export default App;
