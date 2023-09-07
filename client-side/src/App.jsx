import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Contact from './pages/ContactPage'
import About from './pages/AboutPage'
import Home from './components/layout/Home'
import Footer from './components/layout/Footer'

const App = () => {
  return(
    <section className='bg-gradient-to-b from-black/10 to-black/90'>
    <div>
    <Layout>
      <Routes>
        <Route path='/about-page' element={<About /> }/>
        <Route path='/contact-page' element={<Contact /> }/>
        <Route path='/jac-enterprises' element ={<JacEnterprises/>}/>
      </Routes>
    </Layout>
    </div>
    <div>
      <Routes>
      <Route path='/' element={<Home /> }/>
      </Routes>
    </div>
    <Footer/>
    </section>
  )
}

// Link To Public JAC Page
const JacEnterprises = () => {
  return (
    <iframe
      title="JAC Enterprises"
      src="/jac-enterprises/index.html"
      style={{ width: '100%', height: '100vh', border: 'none' }}
    />
  );
};

export default App
