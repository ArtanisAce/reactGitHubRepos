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
