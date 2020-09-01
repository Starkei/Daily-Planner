import React from "react";
import { Link } from "react-router-dom";
const Header = ({ links }) => {
    //TODO: Add error handling
    const result = links && links.length > 0 ? links.map((link) => <Link to={link.to}>{link.name}</Link>) : "Error";
    return <header className="header">{result}</header>;
};

export { Header };
