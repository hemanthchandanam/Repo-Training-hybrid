var React= require('react');
var {render} = require('react-dom');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');
var home = require('./components/home');
var MailHeader = require('./components/MailHeader');
var MailLabels = require('./components/MailLabels');
var Inbox = require('./components/Inbox');
var Sent = require('./components/Sent');
var InboxMessageList = require('./components/InboxMessageList');
var InboxMessage = require('./components/InboxMessage');
var InboxMessageView = require('./components/InboxMessageView');


var MainComponent = React.createClass({
  render: function() {
    return (
      <div className ="MainComponent container-fluid">
      <MailHeader/>
      <div className="row">
      <MailLabels/>
      {this.props.children}
      </div>
      </div>
    );
  }
});

render(
  <Router history={browserHistory}>
  <Route path="/" component={MainComponent} >
    <IndexRoute component={home}/>
    <Route path = "home" component={home} />
     <Route path = "Inbox" component={Inbox} />

      <Route path="msg" component={InboxMessageView}/>
      <Route path="msg/:id" handler={InboxMessageView}/>
     <Route path = "Sent" component={Sent} />

  </Route>
  </Router>,
  document.getElementById('app')
);
