var React= require('react');
var ReactDom = require('react-dom');
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
    this.loadMsgData();
 },

  render: function() {
    return (
     <div>
        <h1></h1>
    </div>


    );
  }
});

module.exports = InboxMessageView;
