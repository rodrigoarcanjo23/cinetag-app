import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Favoritos from "Components/Pages/Favoritos";
import Rodape from "Components/Rodape";
import Player from "Components/Pages/Player";
import NaoEncontrada from "Components/Pages/NaoEncontrada";
import PaginaBase from "Components/Pages/PaginaBase";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes;