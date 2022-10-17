import './App.css';
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Detail from './components/Detail';
import Listing from './components/Listing';
import Error from './components/ErrorPage';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './PrivateRoute';
import PublicRoutes from './PublicRoutes';
import Dashboard from './components/Admin/Dashboard';
import AdminContact from './components/Admin/AdminContact';
import AddListing from './components/Admin/AddListing';
import AdminRealtor from './components/Admin/AdminRealtor';
import AddRealtor from './components/Admin/AddRealtor';





function App() {
  return (
    <Provider store={store}>
<div className="font-body">
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<PublicRoutes/>}>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/detail/:slug" element={<Detail/>}/> 
        <Route exact path="/listing" element={<Listing/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/sign-up" element={<Register/>}/>
        <Route exact path="*" element={<Error/>}/>
      </Route>
      {/* protected routes */}
      <Route exact path="/" element={<PrivateRoute/>}>
        <Route exact path="/admin" element={<Dashboard/>}/>
        <Route exact path="/admin/contact" element={<AdminContact/>}/>
        <Route exact path="/admin/add-listing" element={<AddListing/>}/>
        <Route exact path="/admin/realtor" element={<AdminRealtor/>}/>
        <Route exact path="/admin/add-realtor" element={<AddRealtor/>}/>




      </Route>
      

    </Routes>
    </BrowserRouter>

    </div>
    </Provider>    
  );
}

export default App;
