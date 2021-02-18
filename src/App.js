import './App.css';
import Index from './components/index';
// import NavTimeline from "./components/Nav-timeline";

import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

function App() {
  return (
    <ScopedCssBaseline>
      <div className="App">
        <header className="App-header">
          <Index />
        </header>
      </div>
    </ScopedCssBaseline>
  );
}

export default App;
