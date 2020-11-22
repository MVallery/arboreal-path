import { Router, Route, Switch } from "react-router";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
          <Route path="/" component= {Home} />
          <Route path="/about" component= {About} />
          <Route path="/presskit" component= {PressKit} />
          <Route path="/contact" component= {Contact} />
          <Route path="/arboreal-path" component= {ArborealPath} />

      </Switch>
    </main>
      
  );
}

export default App;
