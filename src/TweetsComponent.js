import React from 'react';
import './test.css';

class Tweets extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }

  render() {
    
    const { data } = this.state;

    return ( <div>
     <h1> Hello there! </h1>

     <p> {data.body} </p>
     <p> {data.user.handle} posted on {data.updated_at} </p>

    </div>
    
    )
  }

}

export default Tweets;