import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import CreateWorker from './components/CreateWorker';
import OneEmployee from './components/OneEmployee';
import AllEmployee from './components/AllEmployees';
import Views from './components/views';
import Update from './components/Update'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Views></Views>
        <Routes>
          <Route path="/employer"element={<CreateWorker/>}/>
          <Route path="/"element={<AllEmployee/>}/>
          <Route path="/employee/:id"element={<OneEmployee/>}/>
          <Route path="/update/:id"element={<Update/>}/>

        </Routes>


      </BrowserRouter>
        
    </div>
  );
}

export default App;
