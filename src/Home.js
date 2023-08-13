import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
                <p> <Link to="/Soda">Soda</Link> </p>
                <p> <Link to="/Chips">Chips</Link> </p>
                <p> <Link to="/Mystery">Mystery</Link> </p> 
        </div>
    )
}

export default Home;