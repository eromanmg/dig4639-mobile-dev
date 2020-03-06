import React from 'react';
import List from './data.json';
import Card from '../card'

class CardList extends React.Component{
   constructor(props){
       super(props)
       this.state = List
   }
    myFunction(content) {
        // This method should modify the list stored in this.state using this.setState with the new list.
    }
    render (){
        return (
            <>
            {
                this.state.cards.map((value) => <Card content={value.content} title={value.title}></Card>)
    
            }
            </>
        )
    }
}

    



export default CardList;