import React, {Component} from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    textHandler = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
             this.props.btn(this.state.text)
             this.setState({
                text: ""
            })
        }
    }

    render() {
        return(
            <div className="searchLoc">
                <div className="search-box">
                    <input onKeyPress={this.handleKeyPress} value={this.state.text} onChange={this.textHandler} placeholder="Location" type="text" />
                    <button onClick={() => {this.setState({text: ""}); return this.props.btn(this.state.text)}} ><i className="fas fa-search" /></button>
                </div>
            </div>
        )
    }
}

export default Search