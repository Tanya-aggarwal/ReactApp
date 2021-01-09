import React, {Component} from "react"


class Details extends Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <p className="head"> First Name: {this.state.person.name.first}</p>
        <p className="head">Last Name:{this.state.person.name.last} </p>
        <p className="head"> City: {this.state.person.location.city}</p>
        <p className="head"> Pincode: {this.state.person.location.postcode}</p>


        
      </div>
    );
  }
}
export default Details