/*
 * IBM Confidential - OCO Source Materials
 * Copyright (c) IBM Corp. 1992, 2016
 * Copyright (c) Internet Security Systems, Inc. 1992-2006
 * The source code for this program is not published or otherwise divested of its trade secrets,
 * irrespective of what has been deposited with the U.S. Copyright Office.
 */

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
