import React from "react";


// Extend from component to make sure this works as a react component
export default class PokemonDisplay extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            PokemonName: null
        }
    }

    render(){
        return(
            <div>
                <h1>Some content here</h1>
            </div>
        )
    }
}
