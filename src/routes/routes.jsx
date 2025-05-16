import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spotify from "../views/spotify/index";
import Facebook from "../views/facebook/index"; 
import Amazon from "../views/amazon/index";    
import '../../src/index.css';
import Home from "../../src/views/home/index";



export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/spotify" element={<Spotify />} />
                <Route path="/facebook" element={<Facebook />} />
                <Route path="/amazon" element={<Amazon />} />
            </Routes>
        </BrowserRouter>
    );
}
