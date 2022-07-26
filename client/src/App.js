import  React from "react"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import { NotFound,Navbar } from "./pages"
import { Home, Products,Checkout } from "./components"
import { Login,Signup } from "./features"
import { useDispatch } from "react-redux"
import { getUsers,isAuth } from "./utils"




function App() {
  
  const dispatch = useDispatch()
  
 React.useEffect(()=>{
   dispatch(getUsers())
 }) 
 
 

  return (
       <BrowserRouter>
       <Navbar />
            <Routes>
            <Route path="/"
            element={<Home />}/>
            <Route 
            element={<Products />}
            path="products" /> 
            <Route path="/products/checkout"
            element={<Checkout />}/>
            <Route path="signup"
             element={<Signup />}/>
            <Route path="login"
             element={<Login />}/>
            <Route path="*" 
            element={<NotFound />}/> 
         </Routes>   
       </BrowserRouter>
  );
}

export default App;
