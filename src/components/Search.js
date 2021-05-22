import React, { Component } from 'react'

export class Search extends Component {
   state = {
       text: ""
   }
    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    formHandler = (e) => { 
        e.preventDefault(); 

        if (this.state.text === ''){
            this.props.alert('Please enter something', 'warning ')
        }
        else {
            this.props.search(this.state.text);
            this.setState({ text: '' })
        }

    }

    render() {
        return (
         
            <form onSubmit={this.formHandler} className="d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group" >
                    <input className="form-control" type="text" onChange={this.handleChange} value={this.state.text} placeholder="Search for..." />
                    <div className="input-group-append" >
                        <button className="btn btn-primary  ml-n1" type="submit">
                            <i className="fa fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
           
        )
    }
}

export default Search
