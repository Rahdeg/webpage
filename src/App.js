import {Profile,Link, Footer, Social} from './components'
import Menu from './assets/_Avatar share button.png'
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen">
    <div className='flex  items-center justify-end md:hidden w-full h-full'>
    <img src={Menu} alt=''/>
    </div>
    <Profile/>
    <Link/>
    <Social/>
    <Footer/>
    </div>
  );
}

export default App;
