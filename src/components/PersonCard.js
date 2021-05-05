import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lastName: this.props.infoCard[0],
            firstName: this.props.infoCard[1],
            age: this.props.infoCard[2],
            hair: this.props.infoCard[3],
            clicked: 'false'
        };
    }
    birthdayButton = (props) => {
        if( this.state.clicked === "false" ) {
            this.setState({age: this.props.infoCard[2]++});
            this.setState({clicked: 'true' });
        } else {
            this.setState({age: this.props.infoCard[2]--});
            this.setState({clicked: 'false' });
        }
    }
    render(){
        return(
            <div>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <CardBody className="p-0">
                        <CardTitle style={{ width: '100%', backgroundColor: "#999", borderColor: "#999" }}><h2>{this.props.infoCard[0]}, {this.props.infoCard[1]}</h2></CardTitle><br></br>
                        <CardSubtitle className="mb-2 text-muted">Age: {this.props.infoCard[2]}</CardSubtitle><br></br>
                        <CardSubtitle className="mb-2 text-muted">Hair Color: {this.props.infoCard[3]}</CardSubtitle>
                    </CardBody>
                </Card> <br></br>
                <button onClick={ this.birthdayButton }>Birthday Button for {this.props.infoCard[1]}</button>
                <br></br><br></br>
            </div>
        );
    }
}




export default PersonCard;