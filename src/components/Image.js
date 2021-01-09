import { render } from "@testing-library/react";
import React,{Component} from "react"

class Image extends Component
{
    constructor(){
        super();
        this.state ={
            pictures:[]
        };
    
}

componentDidMount(){
fetch('https://randomuser.me/api')
.then(results => {
    return results.json();
}).then(data => {
    let pictures =data.results.map((pic) => {
        return(
            <div key ={pic.results}>
            <img src={pic.picture.large} />
            </div>
        )
    
})

this.setState({pictures:pictures});


})
}

render()
{
    return(
        <div>
                {this.state.pictures}

        </div>
    )}

    }

    export default Image