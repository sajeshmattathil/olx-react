import React, { Fragment,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../Store/FirebaseContext';
import {uploadBytes,ref,getStorage,getDownloadURL} from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const {AddDoc,Collection,firestore} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)

  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState('')
  const navigate = useNavigate()

  const handleSubmit =async (e)=>{
    e.preventDefault()
    console.log(image.name)
try{
  const storage = getStorage();
  const storageRef = ref(storage, `images/${image.name}`);
  await uploadBytes(storageRef, image)
  const downloadURL = await getDownloadURL(storageRef);

 
    AddDoc(Collection(firestore,'Products'),{
      name,
      price,
      category,
      userId : user.uid,
      url:downloadURL

    })
    navigate('/')
}catch(err){console.log(err.message);}
  

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              onChange={(e)=>{setName(e.target.value)}}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
               onChange={(e)=>{setCategory(e.target.value)}}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input onChange={(e)=>{
              setPrice(e.target.value)
            }}
              className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <form>
            <br />
            <input
            onChange={(e)=>{setImage(e.target.files[0])}}
            type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
