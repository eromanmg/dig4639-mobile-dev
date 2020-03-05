import React from 'react';
import List from './data.json';
import './index.css';
import Card from '../card'

class CardList extends React.Component{
   constructor(props){
       super(props)
       this.state = List
   }
    myFunction() {
        
        
    }
    render (){
        return (
            <>
            {
                this.state.List.map((value) => )
            }
            

            </>

        )
    }
}

    



export default card;