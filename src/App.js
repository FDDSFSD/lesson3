import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Users from './Pages/Users';
import Contact from './Pages/Contact';
import Layout from './Layout';
import SingleUser from './Pages/SingleUser';
import './App.css'

import Pricing from './Pages/Pricing';
import Skills from './Pages/Skills';
// import Learn from './Pages/Learn';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          {/* <Route path='/learn' element={<Learn />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/price' element={<Pricing />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<SingleUser />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;