import { BrowserRouter, Route, Routes } from "react-router-dom";
import Amazon from "../views/amazon"
import Facebook from "../views/facebook";
import Spotify from "../views/spotify";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/spotify" element={<Spotify/>} />
                <Route path="/facebook" element={<Facebook/>} />
                <Route path="/amazon" element={<Amazon />} />
            </Routes>
        </BrowserRouter>
    );
}