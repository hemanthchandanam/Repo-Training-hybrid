var React = require('react');
var ReactDOM = require('react-dom');
var SentMessage =require('./SentMessage');

var SentMessageList = React.createClass({
  render: function () {
    return (    
      <div className="SentMessageList">
        <h2> Sent Message data </h2>
          <SentMessage />
      </div>);
}
});

module.exports = SentMessageList;