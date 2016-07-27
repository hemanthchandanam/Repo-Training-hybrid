var React = require('react');
var ReactDOM = require('react-dom');
var InboxMessage =require('./InboxMessage');

var InboxMessageList = React.createClass({
render: function() {
    var msgNodes = this.props.allData.map(function(msg) {
       return (
         <InboxMessage allMsgs={msg} key={msg.msgid}>
         </InboxMessage>
        );
      });

       return(
      <div className="inboxMessageList col-md-10 mid-section">
      <table className="table">
				<thead>
					<tr>
            <th>From</th>
  					<th>Subject</th>
  					<th>Date-Time</th>
            <th>Action</th>
          </tr>
				</thead>
          {msgNodes}
        </table>

      </div>
    );

  }


});

module.exports = InboxMessageList;
