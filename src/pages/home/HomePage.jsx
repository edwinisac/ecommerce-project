import axios from 'axios';
import { useEffect ,useState} from 'react';
import { Header } from "../../components/Header";
import { ProductsGrid } from './ProductsGrid';
// import {products} from '../../starting-code/data/products'
import "./HomePage.css";


export function HomePage({cart}) {
  const [products,setProducts]=useState([]);

  // useEffect(()=>{
  //   axios.get('/api/products')
  //   .then((response)=>{
  //       setProducts(response.data);
        
  //   })

  // },[])


  useEffect(()=>{
    const homeData= async()=>{
      const response=await axios.get('/api/products');
      setProducts(response.data);
    }
    homeData()
  },[])



  return (
    <>
      <link rel="icon" type="image/svg+xml" href="favicons/home.png" />

      <title>Ecommerce Project</title>
      <Header cart={cart}/>

      <div className="home-page">
      <ProductsGrid products={products}/>
      </div>
    </>
  );
}
