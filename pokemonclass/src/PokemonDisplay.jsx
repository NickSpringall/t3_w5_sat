import React from "react";


// Extend from component to make sure this works as a react component
export default class PokemonDisplay extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            PokemonName: null
        }
    }

    async componentDidMount(){
        console.log("This message will appear once");

        // grab a pokemon and store its name
        // Retrieve the API data
	let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId()).catch(error => {
		throw new Error("API failure.");
	});
    console.log("fetch has finished")

	if (response.status === 404){
		throw new Error("API did not have data for the requested ID.");
	}

	// Convert the response into usable JSON 
	let data = await response.json().catch(error => {
		throw new Error("API did not return valid JSON.");
	});

    // Save pokemon name to component state
    this.setState({PokemonName: data.name})

        // Generate a random number or usre a user-provided number
        function getRandomPokemonId(){
            return Math.floor(Math.random() * 1010) + 1
        }
    }



    componentWillUnmount(){
        console.log("Component is being removed from the page")
    }

    render(){

        if(this.state.PokemonName) {
            return (
                <div>
                    <h1>{this.state.PokemonName}</h1>
                </div>
            )
        }
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}
