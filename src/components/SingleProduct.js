import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${BaseUrl}/posts/${id}`);
        const data = await response.json();
        
        setProduct(data.data.posts[0]);
        
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductData();
  }, [id]);

  return (
    <div>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Location: {product.location}</p>
          <p>Username: {product.author.username}</p>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SingleProduct;
