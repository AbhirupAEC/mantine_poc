import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderMiddle } from './components/Header';
import Body from './components/Body';


const links = [
  {
    link: '/',
    label: 'Home'
  },
  {
    link: '/other',
    label: 'Other'
  }
]

function App() {
  return (
  <div>
    <HeaderMiddle  links={links}/>
    <Body/>
  </div>
  );
}

export default App;
