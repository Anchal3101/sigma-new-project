import Nav from "./components/Nav";
import "./App.css";
import Card from "./components/Card";
import Table from "./components/Table";
import DateRang from "./components/DateRang";
import SecondCard from "./components/SecondCard";
import ThirdCard from "./components/ThirdCard";
import ChartBox from "./ChartBox";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h2 className="first-let">Total Calls</h2>
      <h2 className="second-let">Highest Call Time</h2>
      
      <div className="container122">
      <div className="card1222">
      <Card sign= "Active calls" num="7" link="View All Active Calls" />
        <Card sign="Customers in Queue" num="26" link="View All Queue" />
        <ChartBox/>
      </div>
      
        <Table></Table>
    
      </div>
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
  );
}

export default App;
