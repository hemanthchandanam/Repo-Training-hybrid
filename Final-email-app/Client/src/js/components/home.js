var React= require('react');
var ReactDom = require('react-dom');


var home = React.createClass({
  render: function() {
    return (
      <div className ="home">
        <div className="container-fluid">
	       <div className="row">
		       <div className="col-md-12">
			        <div className="jumbotron">
				          <h2>
					             MailBox world!
				          </h2>
				          <p>
					            The MailBox World brings you a list of messages from the gmail
                      			 and lists the messages  of  both inbox and sent folder.
				          </p>
				          <p>
					             <a className="btn btn-primary btn-large" href="#">Learn more</a>
				          </p>
			        </div>
		        </div>
	      </div>
    </div>
    </div>
  );
  }
});
module.exports = home;
