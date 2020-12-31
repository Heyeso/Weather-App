import React, {Component} from 'react'
import Search from './components/search'
import Result from './components/result'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: "",
            cData: {},
            default : ""
        }
    }

    searchBtn = (input) => {
      if(input === "")
        input = this.state.default

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.toLowerCase()}&APPID=18afdaa88da7616c414c4fe1c66cb408`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          cData: data,
          text: input
        })
      })
      .catch(err => {
        console.log(err)
      });
    }

     componentDidMount() {
       navigator.geolocation.getCurrentPosition(
        position => {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=18afdaa88da7616c414c4fe1c66cb408`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              cData: data,
              default : data.name
            })
          })
          .catch(err => {
            console.log(err)
          });
          // this.setState({ 
          //   latitude: position.coords.latitude, 
          //   longitude: position.coords.longitude
          // })
        }, 
        err => console.log(err)
      );
    }

    render() {

        return(
          <React.Fragment>
            <div className="bg"></div>
            <div className="inner">
              <Search btn={this.searchBtn}/>
              {(this.state.cData.cod === 200) ? <Result data={this.state.cData}/> : <div className="error">{this.state.cData.message} :(</div>}
            </div>
          </React.Fragment>
        )
    }
}

export default App;
