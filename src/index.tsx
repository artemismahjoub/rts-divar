import ReactDOM from "react-dom/client";
import App from "App";
import reportWebVitals from "reportWebVitals";
import "styles/index.css";
import "styles/fonts.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

reportWebVitals();
