import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Servicios from '../pages/Servicios';
import Clientes from '../pages/Clientes';

const AppRouter = () => {
    return (
        
            <Routes>
                <Route path='/servicios' element ={<Servicios />} />
                <Route path='/clientes' element = {<Clientes />} />
            </Routes>
       
    );
};

export default AppRouter; 