import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Detail from './components/Detail';



function App() {
  return (
    <div className="font-body">
      <BrowserRouter >
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/detail" element={<Detail/>}/>      

      </Routes>
    </BrowserRouter>

    </div>
    
  );
}

export default App;
