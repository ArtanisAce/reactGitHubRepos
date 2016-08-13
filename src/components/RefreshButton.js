/*
 * IBM Confidential - OCO Source Materials
 * Copyright (c) IBM Corp. 1992, 2016
 * Copyright (c) Internet Security Systems, Inc. 1992-2006
 * The source code for this program is not published or otherwise divested of its trade secrets,
 * irrespective of what has been deposited with the U.S. Copyright Office.
 */


var React = require('react');

var RefreshButton = React.createClass({
  
  onRefreshRequest: function(){
    this.props.updateRepoList();
  },
  
  render: function(){
    return(
      <button className="btn btn-secondary" onClick={this.onRefreshRequest}>
        Refresh list
      </button>
    );
  }
});

module.exports = RefreshButton;