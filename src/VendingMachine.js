import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Soda from "./Soda"
import Chips from "./Chips"
import Mystery from "./Mystery"

const VendingMachine = () => {



    return (
        <div className="VendingMachine">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/soda" element={<Soda />} />
                    <Route path="/chips" element={<Chips />} />
                    <Route path="/mystery" element={<Mystery />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;