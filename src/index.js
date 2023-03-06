const CohortName = '2301-FTB-MT-WEB-FT';
const BaseUrl = `https://strangers-things.herokuapp.com/api/${CohortName}`;

import {createRoot} from "react-dom/client";
import {useState, useEffect} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; 
import { AllProducts, SingleProduct, RegisterForm, Login } from "./components";

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
   
    const fetchProductData = async() => {
        try {
            
            const response = await fetch(`${BaseUrl}/posts`);

            const translatedData = await response.json();

            const actualProductData = translatedData.data.posts

            setProducts(actualProductData)
            
        } catch (error) {
            console.log(error);
        }
    }

        fetchProductData();
    }, [])

    return(
       
        
    <BrowserRouter>

        <div>

            <div>
                <nav id="links">
                <Link to="/">Listings</Link>
                <Link to="/register">Sign Up</Link>
                <Link to="/login">Login</Link>
                </nav>
               
               <section>
                {
                    
                }
               </section>
            </div>
              
            <Routes>
           
                <Route path="/"element={<AllProducts productProps={products}/>} />
               
                <Route path="/products/:id" element={<SingleProduct />} />

                <Route path="register" element={<RegisterForm />}/>

                <Route path="login" element={<Login />}/>
            </Routes>
            
        </div>
    </BrowserRouter>
   
    )
}

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />)