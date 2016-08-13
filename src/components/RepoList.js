/*
 * IBM Confidential - OCO Source Materials
 * Copyright (c) IBM Corp. 1992, 2016
 * Copyright (c) Internet Security Systems, Inc. 1992-2006
 * The source code for this program is not published or otherwise divested of its trade secrets,
 * irrespective of what has been deposited with the U.S. Copyright Office.
 */


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