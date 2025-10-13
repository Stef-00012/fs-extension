import { FerretsProvider } from "../../hooks/useFerrets";

import Nav from "./components/Nav";
import Ferrets from "./components/Ferrets";

function App() {
  return (
    <FerretsProvider>
      <div className="relative h-full w-full">
        <Nav />
        <Ferrets />
      </div>
    </FerretsProvider>
  );
}

export default App;
