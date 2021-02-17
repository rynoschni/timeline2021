import React from 'react';
// import ButtonTest from './components/ButtonTest';
import NavTimeline from './components/Nav-timeline';
// import VertTimeline from './components/Vert-timeline';
import ScopedCssBaseline from'@material-ui/core/ScopedCssBaseline';
// import Grid from '@material-ui/core/Grid';



function App() {
  return (
    <ScopedCssBaseline>
      <div className="App">
        {/* <ButtonTest /> */}
        <NavTimeline />
      </div>
    </ScopedCssBaseline>
    
  );
}

export default App;
