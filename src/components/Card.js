import  './Card.css';
function Card(props){
    return(
        <>
  <div className='Card-holder'>
<span className='span1'>{props.sign}</span>
<br></br>
<h1 className='numbers'>{props.num}</h1>
<a className='links1' href='#'>{props.link}</a>

  </div>
        </>
    );
}

export default Card;