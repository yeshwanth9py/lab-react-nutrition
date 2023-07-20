import React,{useState} from 'react';
// import data from "./resources/FoodData";

const Display = ({prop}) => {
    const [inputvals, setinputvals] = useState(new Array(prop.length).fill(0));   //{"name": 0,"val":0}
    function fun2(e,index){
        console.log(e.target.value)
        const newinputvals = [...inputvals]
        newinputvals[index] = e.target.value
        // setno({...no,"name":e.target.value})
        setinputvals(newinputvals)
    }
    return (
        <div>
            {prop.map((el, index) => (
                <div key={index} className='card'>
                    <div className='card2'>
                        <img src={`${prop[index].img}`} alt={prop[index].name} width="100px" />
                        <div className='pdata'>
                            <b>{prop[index].name}</b>
                            {prop[index].cal}
                        </div>
                        <div className='inp'><input type="number" placeholder="enter a number here" style={{ height: "20px", width: "100px" }} onChange={(e)=>fun2(e,index)}/></div>
                    </div>
                    <div className='card3'>
                        <div>{inputvals[index]} {prop[index].name} = {inputvals[index]*prop[index].cal} calories</div>
                        <div><button onClick={()=>{
                            const newinputvals = [...inputvals]
                            newinputvals[index]=0
                            setinputvals(newinputvals)
                            
                            }}>reset</button></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Display;
