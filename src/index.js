import ReactDOM from "react-dom";
import { Counter } from "./Counter";

const root = document.querySelector("#root")
ReactDOM.render(<Counter initialValue={30} incrementBy={3} timeout={500}/>, root)

