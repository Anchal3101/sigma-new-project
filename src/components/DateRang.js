import './DateRang.css';
import {BiCalendar}from "react-icons/bi";
function DateRang(){
    
let d = new Date();
let text = d.toDateString();

    return(
        <>
<div className="rangcont">
<div className="datecont">
    <div className='datebg1'><h3>Date Rang</h3></div>
    <div className="datebg"><BiCalendar className='ico'/>{text}</div>
</div>
</div>

        </>
    );
}

export default DateRang;