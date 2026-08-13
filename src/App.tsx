import AppRouter from "./router/AppRouter";
import ThemeManager from "./components/ThemeManager";

type Props = {};

function App({}: Props) {
  return (
    <ThemeManager>
      <div className="min-h-screen w-full">
        <AppRouter />
      </div>
    </ThemeManager>
  );
}

export default App;

