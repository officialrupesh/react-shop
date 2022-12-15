import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { data } from 'autoprefixer';


const Products = () => {
    const [loading,setLoading] = useState(false);
    const [data, setData] =useState([]);

    useEffect(()=>{
        setLoading(true);
        axios({
            method:"Get",
            url:"https://fakestoreapi.com/products"
        }).then(res=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    },[])

    return (
    <div>
        {loading && 
        <div>
          <h1>Loading ...</h1>  
        </div>}
    </div>
  )}
    {data.map((product)=>(
        <div>
            <div>
                {product.title}
            </div>
        </div>
    ))}
//   {data.map((product)=> (
//     <div key={product.id}>
//         <div><img src={product.image} /></div>
//         {/* <div>
//             <h6>{product.title}</h6>
//             <h6>{`Price: ${product.price}`}</h6>
//             <h6>{`Description: ${product.description}`}</h6>
//         </div> */}

//     </div>
//   ) )}

export default Products