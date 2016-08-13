/*
 * IBM Confidential - OCO Source Materials
 * Copyright (c) IBM Corp. 1992, 2016
 * Copyright (c) Internet Security Systems, Inc. 1992-2006
 * The source code for this program is not published or otherwise divested of its trade secrets,
 * irrespective of what has been deposited with the U.S. Copyright Office.
 */

var React = require('react');

var PagesSelector = React.createClass({

  changeNumber: function(number){

    var numberOfPages = Number(number);
    this.props.onPagesChange(numberOfPages);
  },

  render: function(){
    return(
      <div>
        <p> Items per page: {this.props.itemsPage} </p>
        {this.props.pagesVector.map(function(n,i){
          return (
            <button key={i} className="page-btn" onClick={(this.changeNumber.bind(this,n))}> {n} </button>
          );
        }.bind(this))}
      </div>
    );
  }
});

module.exports = PagesSelector;
