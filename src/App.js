import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Card from "./components/Card";
import Table from "./components/Table";
import DateRang from "./components/DateRang";
import SecondCard from "./components/SecondCard";
import ThirdCard from "./components/ThirdCard";
import ChartBox from "./ChartBox";
import{ BrowserRouter, Route, Router,NavLink,Switch, Routes,element} from 'react-router-dom';
import NextPage from "./components/NextPage";


function App() {
  return (
<>
<BrowserRouter>


  
  <div className="App">
      <Nav></Nav>
      <h2 className="first-let">Total Calls</h2>
      <h2 className="second-let">Highest Call Time</h2>

      <div className="container122">
        <div className="card1222">
          <Card path='dext' sign="Active calls" num="7" link="View All Active Calls" />
          <Card path="Next" sign="Customers in Queue" num="26" link="View All Queue" />
          <ChartBox />
        </div>
        <Table></Table>
      </div>
      <Routes>
  <Route path="Next" element={<NextPage></NextPage>}></Route>
</Routes>  
      <div>
        <DateRang />
      </div>
      <div>
        <SecondCard sign="Customers in Queue" num="26" link="View All Queue" />
      </div>
      <div>
        <ThirdCard></ThirdCard>
      </div>
      

  
    
    </div>  
   


 
  
</BrowserRouter>

 

    </>
  );
}

export default App;
