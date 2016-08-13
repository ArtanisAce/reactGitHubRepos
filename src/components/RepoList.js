var React = require('react');
var SpinnerWave = require('./SpinnerWave');

var RepoList = function(props){
  
    if (!props.dataToShow){
      return <div> No repositories found... Try a new keyword! </div>
    }


    if (!props.keyword){
      return <div> Search a list with a keyword! </div>
    }

    if (!props.repositoryList.length){
      return (
        <div>
          <SpinnerWave />
        </div>
      );
    }

    return(

      <ul>
        {
          props.repositoryList.map(function(repo,i){
            return (

              <li key={i}>{repo}</li>
            )
          })}
      </ul>

    );
}

module.exports = RepoList;
