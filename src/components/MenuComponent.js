import React, {Component} from "react";
import { Media } from "reactstrap";

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        <h1>Menu List</h1>
                        <Apple dishes={this.props.dishes}/>
                    </Media>
                </div>
            </div>
        );
    }
}


class Apple extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return(
            this.props.dishes.map((dish)=> {
                return (
                    <div key={dish} className="col-12 mt-5">
                        <Media tag='li'>
                            <Media left middle>
                                <Media object src={dish.image} alt={dish.name}>
                                </Media>
                                <Media body className="ml-5">
                                    <h1>
                                        {dish.name}
                                    </h1>
                                    <p>{dish.description}</p>
                                </Media>
                            </Media>
                        </Media>
                        
                    </div>
                );
            }
         )
        )
        
    }
}


export default Menu