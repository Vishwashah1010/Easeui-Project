import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/Store.tsx";
import { setTheme } from "./features/ThemeSlice.tsx";

const rawSavedTheme = localStorage.getItem("theme");
const savedTheme: "light" | "dark" =
  rawSavedTheme === "dark" || rawSavedTheme === "light"
    ? rawSavedTheme
    : "light";
store.dispatch(setTheme(savedTheme));

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
