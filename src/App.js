import {Profile,Link, Footer} from './components'
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen gap-4">
    <Profile/>
    <Link/>
    <Footer/>
    </div>
  );
}

export default App;
