import React from 'react'; 

class Searchbar extends React.Component {
    state = {
        term: ''
    }; 

    onInputChange =(event) => {

        this.setState({term: event.target.value}); 
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term); 
    }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form"
                onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <div className="ui action input">
                            <input  
                            placeholder="Search..."
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}/>
                            <button className="ui button" type="submit">Search</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Searchbar; 