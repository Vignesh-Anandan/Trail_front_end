import React from "react";

class Usercl extends React.Component{
    constructor(props){
            super(props);   
            console.log(props);
    }
    render(){
        
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Occupation: {this.props.description}</h2>
                <h2>Year: {this.props.year}</h2>
            </div>
        );
    };
};

export default Usercl;