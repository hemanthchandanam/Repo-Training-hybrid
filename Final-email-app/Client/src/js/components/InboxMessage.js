var React = require('react');
var ReactDOM = require('react-dom');
var InboxMessageView = require('./InboxMessageView');
var Link = require('react-router').Link;

var InboxMessage = React.createClass({



  onAdd:function(){
  //  alert(this.props.allMsgs.msgBody);
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
          <td>
          <button type="button" onClick={this.onAdd} className="btn btn-info" data-toggle="modal">Save</button>
          </td>

          <td>
          <button type="button"  className="btn btn-info" data-toggle="modal"
          data-target={"#myModal"+this.props.allMsgs.msgid}>View</button>
          </td>
         <td>
         <div id={"myModal"+this.props.allMsgs.msgid} className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"></button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>{this.props.allMsgs.msgBody}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal"
                onClick={this.onAdd} >Save</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
       </td>
        </tr>
      </tbody>

    );
  }
});

module.exports = InboxMessage;
