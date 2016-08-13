/*
 * IBM Confidential - OCO Source Materials
 * Copyright (c) IBM Corp. 1992, 2016
 * Copyright (c) Internet Security Systems, Inc. 1992-2006
 * The source code for this program is not published or otherwise divested of its trade secrets,
 * irrespective of what has been deposited with the U.S. Copyright Office.
 */

jest.unmock('../RefreshButton'); // unmock to use the actual implementation of the component
var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require ('react-addons-test-utils');
var RefreshButton = require('../RefreshButton');

describe('refresh', function() {
  it('click should call the update function', function() {
    
    var updateRepoList = jest.fn();
    var button = ReactTestUtils.renderIntoDocument(<RefreshButton updateRepoList={updateRepoList}/>);

    expect(updateRepoList).not.toBeCalled();

    const buttonNode = ReactDOM.findDOMNode(button);
    ReactTestUtils.Simulate.click(buttonNode);

    expect(updateRepoList.mock.calls.length).toBe(1);
  });
});
