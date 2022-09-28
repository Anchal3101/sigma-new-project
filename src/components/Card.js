import  './Card.css';
import {BsFillTelephoneOutboundFill} from "react-icons/bs";
import {BrowserRouter ,Link } from 'react-router-dom';

function Card(props){
    return(
        <>
  <div className='Card-holder'>
<span className='span1'><span className='icon'><BsFillTelephoneOutboundFill/></span>{props.sign}</span>
<br></br>
<h1 className='numbers'>{props.num}</h1>

<Link className='links1' to={props.path}>{props.link}</Link>

  </div>
        </>
    );
}

export default Card;