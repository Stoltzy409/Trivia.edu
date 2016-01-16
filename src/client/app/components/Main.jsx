import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import utils from '../utils/helpers';

class Main extends Component{
  componentDidMount(){
    utils.getQuestions().then((res) => {
      console.log(res.data);
    });
  }
  render(){
    return(
      <div>
        Hello React-dev =)
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
