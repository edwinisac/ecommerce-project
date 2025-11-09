import axios from 'axios';
import { useEffect ,useState} from 'react';
import { Header } from "../../components/Header";
import { ProductsGrid } from './ProductsGrid';
// import {products} from '../../starting-code/data/products'
import "./HomePage.css";
import { useSearchParams } from 'react-router';



export function HomePage({cart,loadCart}) {
  const [products,setProducts]=useState([]);

  const [searchParams]=useSearchParams();
  const search=searchParams.get('search');

  // useEffect(()=>{
  //   axios.get('/api/products')
  //   .then((response)=>{
  //       setProducts(response.data);
        
  //   })

  // },[])


  useEffect(()=>{
    const homeData= async()=>{
      const urlPath=search? `/api/products?search=${search}` : '/api/products'
      const response= await axios.get(urlPath);
      setProducts(response.data);
    }
    homeData()
  },[search])



  return (
    <>
      <link rel="icon" type="image/svg+xml" href="favicons/home.png" />

      <title>Ecommerce Project</title>
      <Header cart={cart}/>

      <div className="home-page">
      <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
