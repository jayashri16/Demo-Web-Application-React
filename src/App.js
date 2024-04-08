import "./App.css";
import Examples from "./components/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";



function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <main>
     <CoreConcepts/>
     <Examples/>
          
        </main>
      </header>
      </div>
  );
};

export default App;
