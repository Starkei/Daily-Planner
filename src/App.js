import React from "react";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Header, Main, Tasks } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer);
const links = [
    { to: "/", name: "Home", render: () => <div></div> },
    { to: "/tasks", name: "Tasks", component: Tasks },
];

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header links={links} />
                <Main links={links} />
            </Router>
        </Provider>
    );
}

export default App;
