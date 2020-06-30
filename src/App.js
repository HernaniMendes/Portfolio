import React from 'react';
import Global from './styles/global';

import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

function App() {
	return (
    <>
      <Global />
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App;
