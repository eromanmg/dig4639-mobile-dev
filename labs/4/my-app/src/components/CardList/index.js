import React from 'react';
import './data.json';
import './index.css';

class Card extends React.Component{
    myArray = [{v:"Enjoys the beach.", t:"Max"}, {v:"Loves to run.", t:"Maggie", v:"Sniffs butts.", t:"Buddy"}]
    myFunction() {
        
    }
    render (){
        return (
            <>
            {
                this.myArray.map((value) => <p>{value.v}</p> <h3>{value.t}</h3>)
            }
            

            </>

        )
    }
}

    



export default card;