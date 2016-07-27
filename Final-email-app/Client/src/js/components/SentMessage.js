var React = require('react');
var ReactDOM = require('react-dom');


var SentMessage = React.createClass({

  render: function () {
    return (
      <div className="SentMessage">
        <div className="container-fluid">
				  <input type="submit"  value="Add" />
			   </div>
			</div>
    );
  }
});

module.exports = SentMessage;
