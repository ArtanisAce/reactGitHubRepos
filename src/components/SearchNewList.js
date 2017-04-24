var React = require('react');

var SearchNewList = React.createClass({

  getInitialState: function(){

    return {newKeyword:''};
  },

  searchKeyword: function(event){

    event.preventDefault();
    
    //callback to parent component
    this.props.onNewSearch(this.state.newKeyword);

    //clear input
    this.setState({newKeyword: ''});
  },

  onInputChange: function(event){

    this.setState({newKeyword: event.target.value});

  },

  render: function(){
    return(
      <form onSubmit={this.searchKeyword}>

        <input className="key-bar" type="search" placeholder="Enter a keyword..."

               onChange={this.onInputChange}
               value = {this.state.newKeyword}/>
        <span >
        <button className="btn btn-secondary" type="submit" >Search!</button>
        </span>
      </form>

    );

  }
});

module.exports = SearchNewList;
