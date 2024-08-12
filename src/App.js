import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PostDetails from './components/PostDetails';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/post/:id' element={<PostDetails />}></Route>
        </Routes>

        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
