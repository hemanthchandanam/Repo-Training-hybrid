var React= require('react');
var ReactDom = require('react-dom');
//var InboxMessageView = require('./SentMessageList');
//var id = this.props.params.id;
var InboxMessageView = React.createClass({

  getInitialState: function(id){
       return{AllData:[]}
    },
    loadMsgData:function(){
      $.ajax({
    url:"http://localhost:8080/data/emaildata.json",
    type:'GET',
    datatype:"JSON",
    success: function(data)
    {
      console.log('ID',id)
      console.log(data);
      this.setState({AllData:data});

    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
    },
    componentWillMount: function(){
    this.loadMsgData(this.props.location.query.id);
 },

  render: function() {
    return (
     <div>
        <h1>{this.props.location.query.id}</h1>
    </div>


    );
  }
});

module.exports = InboxMessageView;
