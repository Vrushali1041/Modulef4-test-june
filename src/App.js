import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from "./Components/HomePage";
import CartPage from "./Components/CartPage";



function App(){
       return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/item/:id" element={<CartPage />} />
            </Routes>
        </div>
       )
}

export default App;


