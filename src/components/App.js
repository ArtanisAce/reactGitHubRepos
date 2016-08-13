var React = require('react');
var SearchNewList = require('./SearchNewList');
var RefreshButton = require('./RefreshButton');
var RepoList = require('./RepoList');
var PagesSelector = require('./PagesSelector');
var SpinnerWave = require('./SpinnerWave');

require('whatwg-fetch');

var App = React.createClass({

  getInitialState: function() {

    return {
      repositoryList: [],
      keyword:'',
      page: 0,
      itemsPerPage: 20,
      dataToShow: true
    };
  },

  updateRepoList: function(){

    //Retrieves 100 repositories by the keyword selected on the params
    var repositories = [];
    fetch('https://api.github.com/legacy/repos/search/'+this.state.keyword+'?start_page=1')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
      json.repositories.map(function (repository) {
        repositories.push(repository.name);
      });

      if (repositories.length === 0 ){
        this.setState({dataToShow:false});
        return;
      }
      this.setState({repositoryList: repositories, dataToShow: true});


    }.bind(this)).catch(function(ex) {
      console.log('error', ex)
    })

  },

  nextPage: function(){
    this.setState(function(previousState, currentProps) {
      return {page: previousState.page + 1};
    });
  },

  previousPage: function(){
    this.setState(function(previousState, currentProps) {
      return {page: previousState.page - 1};
    });
  },

refreshRequest: function(){
    this.setState({repositoryList:[]}, this.updateRepoList);

  },

  onPageNumberChange: function(number){
    this.setState({itemsPerPage:number});
  },

  newSearch: function(newKeyword){
    this.setState({keyword:newKeyword, repositoryList:[], page:0}, this.updateRepoList);
  },

  render: function() {

    var page = this.state.page;
    var itemsPerPage = this.state.itemsPerPage;
    var data = this.state.repositoryList.slice(page*itemsPerPage, (page*itemsPerPage) + itemsPerPage);

    return (
      <div className="app">
        <h1>GitHub Repository List</h1>
        <SearchNewList onNewSearch={this.newSearch}/>
        <p>Page {this.state.page}</p>
        <PagesSelector
          pagesVector={['5','10','20','50']}
          onPagesChange={this.onPageNumberChange}
          itemsPage={this.state.itemsPerPage}/>
        <div className="btns">
          <button className="btn btn-secondary" onClick={this.previousPage} disabled={(this.state.page === 0)
          || (this.state.repositoryList.length === 0)}>
            Previous
          </button>
          <RefreshButton updateRepoList={this.refreshRequest}/>
          <button className="btn btn-secondary" onClick={this.nextPage}
                  disabled={
                  ((this.state.itemsPerPage*(this.state.page+1)) === this.props.repositoryListSize) ||
                  (!this.state.repositoryList.length)} >
            Next
          </button>
        </div>
        <RepoList keyword={this.state.keyword} repositoryList={data} dataToShow={this.state.dataToShow}/>
      </div>
    );
  }
});

module.exports = App;
