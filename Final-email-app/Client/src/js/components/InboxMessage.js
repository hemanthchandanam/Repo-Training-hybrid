var React = require('react');
var ReactDOM = require('react-dom');
var InboxMessageView = require('./InboxMessageView');
var Link = require('react-router').Link;

var InboxMessage = React.createClass({
  onAdd:function(){
    	$.ajax({
        url: "http://localhost:8080/addmailtodb",
        dataType: 'json',
        type: 'POST',
        data: this.props.allMsgs,
        success: function(data) {
          console.log("data instered in db");
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
  render: function () {
    return (
				<tbody>
					<tr className="active">
						<td><Link to={{ pathname: 'msg/', query: { id: this.props.allMsgs.msgid } }}>{this.props.allMsgs.msgFrom}</Link></td>
						<td><Link to={{ pathname: 'msg/', query: { id: this.props.allMsgs.msgid } }}>{this.props.allMsgs.msgSubject}</Link></td>
						<td><Link to={{ pathname: 'msg/', query: { id: this.props.allMsgs.msgid } }}>{this.props.allMsgs.msgReceivedOn}</Link></td>
            <td><a href="javascript:void(0)" onClick={this.onAdd}>Add</a></td>
					</tr>
				</tbody>

    );
  }
});

module.exports = InboxMessage;
