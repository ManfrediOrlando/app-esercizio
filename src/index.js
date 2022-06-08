import {createRoot} from "react-dom/client";
import { MyUncontrolledComponent } from "./MyUncontrolledComponent";
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<div>
               <MyUncontrolledComponent />
            </div>)

