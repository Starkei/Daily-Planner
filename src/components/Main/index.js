import React from "react";
import { Route } from "react-router-dom";

const Main = ({ links }) => {
    //TODO: Add error handling
    const result = links && links.length ? links.map((link) => <Route path={link.to} component={link.component} render={link.render} />) : "Error";
    return <>{result}</>;
};

export { Main };
