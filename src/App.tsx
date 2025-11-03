import "./index.css";
import { APIProvider } from "@vis.gl/react-google-maps";
import { BreakpointProvider } from "./context/breakpointContext";
import { Routing } from "./Routes";

const App = () => {
  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <BreakpointProvider>
        <Routing />
      </BreakpointProvider>
    </APIProvider>
  );
};

export default App;
