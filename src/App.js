import { Footer, Main,Contact} from './components'
import Menu from './assets/_Avatar share button.png'
import {Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen">
    <div className='flex  items-center justify-end md:hidden w-full h-full'>
    <img src={Menu} alt=''/>
    </div>
    <Routes>
    <Route path='/*' element={<Main/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
