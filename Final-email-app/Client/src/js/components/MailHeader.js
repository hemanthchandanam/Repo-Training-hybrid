var React= require('react');
var ReactDom = require('react-dom');


var MailHeader = React.createClass({
  render: function() {
    return (
      <div className ="MailHeader row">
    		<div className="col-md-12">
    			<nav className="navbar navbar-default" role="navigation">
    				<div className="navbar-header">

    					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
    						 <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
    					</button> <a className="navbar-brand frontEmail" href="#"><h3>Gmail</h3></a>
    				</div>

    					<h4></h4>

    			</nav>
    		</div>
    	</div>
  );
  }
});
module.exports = MailHeader;
