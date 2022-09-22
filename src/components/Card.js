import  './Card.css';
import {BsFillTelephoneOutboundFill} from "react-icons/bs";
function Card(props){
    return(
        <>
  <div className='Card-holder'>
<span className='span1'><span className='icon'><BsFillTelephoneOutboundFill/></span>{props.sign}</span>
<br></br>
<h1 className='numbers'>{props.num}</h1>
<a className='links1' href='#'>{props.link}</a>

  </div>
        </>
    );
}

export default Card;