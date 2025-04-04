import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
// import {App} from "./HelloWorldApp";
// import FirstApp from "./FirstApp";
import "./styles.css";
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
{/* <App />
<FirstApp title="Hola pajitatox" subTitle="sung jiwo"/> */}
<CounterApp value={10} />
</React.StrictMode>
);


