import Nav from './components/Nav';
import './App.css';
import Card from './components/Card';
import Table from './components/Table';
import DateRang from './components/DateRang';
import LastCard from './components/LastCard';

function App() {
  return (
    <div className="App">
     <Nav></Nav>
     <h2 className='first-let' >Total Calls</h2>
     <h2 className='second-let'>Highest Call Time</h2>

     <div className='container122'>

<Card/><Card/>
<div>
  <Table></Table>
</div>
 </div>
<div>
  <DateRang/>
</div>
<div>
<LastCard/>
</div>
    </div>
  );
}

export default App;
