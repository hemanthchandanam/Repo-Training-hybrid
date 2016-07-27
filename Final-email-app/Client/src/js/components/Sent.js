var React= require('react');
var ReactDom = require('react-dom');
var SentMessageList = require('./SentMessageList');

var Sent = React.createClass({
  render: function() {
    return (
     <div>
          <SentMessageList />
    </div>


    );
  }
});

module.exports = Sent;
