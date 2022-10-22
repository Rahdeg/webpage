import {Profile,Link, Footer, Social} from './components'
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen">
    <Profile/>
    <Link/>
    <Social/>
    <Footer/>
    </div>
  );
}

export default App;
