import './App.css';
import { useState } from 'react';
import { Homepage } from './page/Homepage';
import { Aboutpage } from './page/Aboutpage';
import { ProductPage } from './page/ProductPage';
import { ProductDetailPage } from './page/ProductDetailPage';
import {Route,Routes,Navigate} from 'react-router-dom';
import { Userpage } from './page/Userpage';
import { LoginPage } from './page/LoginPage';

function App() {
  const[auth,setAuth]=useState(false) //false면 로그안안한것. true면 로그인
  const PrivateRoute =()=>{ //대문자면 컴포넌트임.
    return auth ==true ? <Userpage/> : < Navigate to ='/login'/>
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:id' element={<ProductDetailPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}
//

export default App;
