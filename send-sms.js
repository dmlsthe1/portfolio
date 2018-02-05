    // Twilio Credentials
    const accountSid = 'AC6e00b9cc0ba1867e8cfbf48e79860661';
    const authToken = '9ab4fb0a44ee0e05ce1b68ad74856e56';

    // require the Twilio module and create a REST client
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        to: '+18588699338',
        from: '+18582950507',
        body: "some string for twilio"
    })
    .then((message) => console.log(message.sid));
    

    