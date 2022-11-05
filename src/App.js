import { Footer, Main,Contact} from './components'
import {Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen">
    <Routes>
    <Route path='/*' element={<Main/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
