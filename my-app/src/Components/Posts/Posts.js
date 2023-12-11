import React,{useState,useContext, useEffect} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../Store/FirebaseContext';
import { PostContext } from '../../Store/postContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const [products,setProducts] = useState([])

  const {firebase} = useContext(FirebaseContext)
  console.log( firebase.firestore(),"dsjkljsd")

  useEffect(()=>{
    
    firebase.firestore().collection('Products').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((product)=>{
        return{
          ...product.data(),id:product.id
        } 
      })
     setProducts(allPost)
    })
   },[])
  
const {setPostDetails}= useContext(PostContext)
const navigate = useNavigate()
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
products.map((product)=>{

  return  <div
            onClick={()=>{
              setPostDetails(product)
            navigate('/view')
            }}
            
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createsAt}</span>
            </div>
          </div>
  
          })
}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
