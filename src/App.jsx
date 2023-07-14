import React, { useEffect } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'



function App() {
  //this function use <title></title> tag
  useEffect(() => {
    document.title = 'My React App';
  }, []);

  return (
    <div className="App">
      <Header title="My React App" />
      <Content />
      <Footer />
    </div>
  )
}

export default App
