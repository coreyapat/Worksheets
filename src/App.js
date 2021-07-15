import React, { Component } from 'react'; 
import DisplayName from './components/DisplayName.jsx/DisplayName';
import NameList from './components/DisplayName.jsx/NameList/NameList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: 'Reggie',
            lastName: 'White',
            listOfNames: ['Nevin', 'David', 'JJ', 'Mike']
        }
    }

    render() {
        return (
            <React.Fragment>
                <DisplayName firstName = {this.state.firstName} lastName={this.state.lastName}/>
                <ul>
                   <li><NameList listOfNames = {this.state.listOfNames}/></li>
                </ul>
            </React.Fragment>
                 );
        }
    }     
export default App;