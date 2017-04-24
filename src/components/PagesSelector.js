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