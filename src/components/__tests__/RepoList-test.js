/*
 * IBM Confidential - OCO Source Materials
 * Copyright (c) IBM Corp. 1992, 2016
 * Copyright (c) Internet Security Systems, Inc. 1992-2006
 * The source code for this program is not published or otherwise divested of its trade secrets,
 * irrespective of what has been deposited with the U.S. Copyright Office.
 */

jest.unmock('../RepoList'); // unmock to use the actual implementation of the component
var React = require('react');
var ReactTestUtils = require ('react-addons-test-utils');
var RepoList = require('../RepoList');

describe('render list', function() {
  it('should render a list of repositories', function() {

    var repositories = ['react', 'node', 'jade'];
    var renderer = ReactTestUtils.createRenderer();
    renderer.render(<RepoList dataToShow={true} keyword="react" repositoryList={repositories} />);
    var testRepoList = renderer.getRenderOutput();

    expect(testRepoList.type).toBe('ul');
    expect(testRepoList.props.children).toEqual([
      <li key="0">react</li>,
      <li key="1">node</li>,
      <li key="2">jade</li>
    ]);

  });

  it('should not render when keyword is not found', function(){
    var repositories = ['react', 'node', 'jade'];
    var renderer = ReactTestUtils.createRenderer();
    renderer.render(<RepoList dataToShow={false} keyword="ioeue8989" repositoryList={repositories} />);
    var testRepoList = renderer.getRenderOutput();

    expect(testRepoList.type).toBe('div');
    expect(testRepoList.props.children).toEqual(' No repositories found... Try a new keyword! ');
  });

  it('will show the spinner wave when there are no repositories', function(){
    var repositories = [];
    var renderer = ReactTestUtils.createRenderer();
    renderer.render(<RepoList dataToShow={true} keyword="react" repositoryList={repositories}/>);
    var output = renderer.getRenderOutput();
    
    expect(output.type).toBe('div');
    expect(output.props.children.type.displayName).toBe('SpinnerWave');

  });

  it('when there is no keyword should advise to search with one', function(){
    var repositories = [];
    var renderer = ReactTestUtils.createRenderer();
    renderer.render(<RepoList dataToShow={true} keyword="" repositoryList={repositories}/>);
    var testRepoList = renderer.getRenderOutput();

    expect(testRepoList.type).toBe('div');
    expect(testRepoList.props.children).toEqual(' Search a list with a keyword! ');
  })

});