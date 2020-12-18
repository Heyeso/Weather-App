import React, {Component} from 'react'
import Search from './components/search'
import Result from './components/result'
import $ from "jquery";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: "",
            cData: {}
        }
    }

    searchBtn = (input) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.toLowerCase()}&APPID=18afdaa88da7616c414c4fe1c66cb408`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          cData: data,
          text: input,
          first: false
        })
        console.log(data)
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      });
      $(".result").fadeOut(0)
    }

    // position = async () => {
    //   await navigator.geolocation.getCurrentPosition(
    //     position => this.setState({ 
    //       latitude: position.coords.latitude, 
    //       longitude: position.coords.longitude
    //     }), 
    //     err => console.log(err)
    //   );
    // }

    componentDidMount() {
      this.searchBtn("Baltimore")
    }

    componentDidUpdate() {
      $(".result").fadeIn(300)
    }

    render() {

        return(
          <div className="inner">
            <Search btn={this.searchBtn}/>
            {(this.state.cData.cod === 200) ? <Result data={this.state.cData}/> : <div className="error">{this.state.cData.message}</div>}
        </div>
        )
    }
}

export default App;
