/*
 * IBM Confidential - OCO Source Materials
 * Copyright (c) IBM Corp. 1992, 2016
 * Copyright (c) Internet Security Systems, Inc. 1992-2006
 * The source code for this program is not published or otherwise divested of its trade secrets,
 * irrespective of what has been deposited with the U.S. Copyright Office.
 */

var React = require('react');

var SpinnerWave = React.createClass({

  render: function(){
    return(
      <div className="sk-wave">
        <div className="sk-rect sk-rect1"></div>
        <div className="sk-rect sk-rect2"></div>
        <div className="sk-rect sk-rect3"></div>
        <div className="sk-rect sk-rect4"></div>
        <div className="sk-rect sk-rect5"></div>
      </div>
    );
  }
});

module.exports = SpinnerWave;