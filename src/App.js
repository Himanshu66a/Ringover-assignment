import Header from "./Components/Header/Header";
import Store from "./Pages/Store";
import {Routes,Route} from 'react-router-dom'
import Display from "./Pages/display/Display";
import ContactUs from "./Pages/Contact/ContactUs";
import Team from "./Pages/team/Team";
import Journey from "./Pages/journey/Journey";
import Home from "./Pages/home/Home";

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/store" element={<Store/>}/>
        <Route path="/display/:id" element={<Display/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/journey" element={<Journey/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
