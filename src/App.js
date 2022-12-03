import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from './Home';
import {Mod1,Mod2} from './mods';
import {Win,Lose,Draw,Error} from './ResultPages';


function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/mod1' element={<Mod1 />}/>
              <Route path='/mod2' element={<Mod2 />}/>
              <Route path='/win' element={<Win />}/>
              <Route path='/lose' element={<Lose />}/>
              <Route path='/draw' element={<Draw />}/>
              <Route path='/error' element={<Error />}/>
          </Routes>
      </>
  );
}

export default App;
