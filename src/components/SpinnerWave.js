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
