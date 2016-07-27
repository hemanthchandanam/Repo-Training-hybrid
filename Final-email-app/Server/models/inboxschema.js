var mongoose = require("mongoose");

var inboxschema = mongoose.Schema({
  labelType:String, //Inbox, Sent, Draft, Outbox
    msgFrom:String,// email address
    msgTo:String, // To whom the messages has been sent to
    msgSubject:String, // Message Subject
    msgBody:String, // Message body
    msgSentOn:{ type: Date, default: Date.now }, // When the message has been sent
    msgReceivedOn:{ type: Date, default: Date.now }, // WHen the message has been received
    hasAttachment:[Boolean], // Is there any attachment
    isRead:[Boolean], // is already message been read
    isSent:[Boolean] // Has it been sent
});

module.exports = mongoose.model("inboxes", inboxschema);
