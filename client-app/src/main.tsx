import ReactDOM from "react-dom/client";
import App from "./app/layout/App";
import "semantic-ui-css/semantic.min.css";
import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./app/layout/styles.css";
import { store, StoreContext } from "./app/stores/store";
import { BrowserRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>
);
