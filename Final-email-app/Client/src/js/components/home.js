var React= require('react');
var ReactDom = require('react-dom');


var home = React.createClass({
  render: function() {
    return (
      <div className ="home">
        <div className="container-fluid">
	       <div className="row">
		       <div className="col-md-8">
			        <div className="jumbotron">
				          <h2>
					             My email messages
				          </h2>
				          <p>
					            Email messages are arrived !  Go to Indox to read
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
