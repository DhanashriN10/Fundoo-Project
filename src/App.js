import logo from './logo.svg';
import './App.css';
import Signin from './components/sign/signin'
import Signup from './components/signup/signup'
import Note_first from './components/Note1/note1';
import Note_second from './components/Note2/note2';
import Note_three from './components/Note3/note3';
import Header from './components/Header/header';
import DashBoard from './components/Dashboard/dashboard';
import Router1 from './components/router/router';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
      {/* <Signin /> */}
      {/* <Signup /> */}

      {/* <Header />
      <Note_first /> 
      <Note_second />
      <Note_three /> */}
      {/* <DashBoard /> */}
      
      {/* <Header /> */}
      {/* <Note_first />
      <Note_second />
      <Note_three /> */}

      {/* <DashBoard /> */}
      <Router1 />
      

    </div>
  );
}

export default App;
