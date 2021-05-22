const sonicx = require('sonicx');
const googleAuth = require('google-oauth-jwt');

//const config = {
	//"private_key": process.env.private_key,
	//"client_email": process.env.private_key,
//}
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:8100/'
}

const getToken = async () => {
	return new Promise((resolve) => {
		
		googleAuth.authenticate(
			{
				email: "myassistant@myassistant-c9au.iam.gserviceaccount.com",
				key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDLAETwZtgAuy/K\nSpuopVKesZUHbcaO7APlmiZI2ZTjYbeckD9Hqk+c3hDNG5PdKox0tqOptnuCk6W0\nkyexndhVNqkjsnjexcLgAjtew3LwdOIke/HA6ObiPw8MoSr8Z0caOr0vljNQsxLr\nVOByNfZivjnCBNiAMkrTpv/tKi3XDHPJgjYHFhFhailMqzHqii6jHA47WZXZhcLh\na2IfprVpi90F8GcbxzqHCjGbHt/W8wOWxD7D+ebznYl6gz5HF7aiWV1u42U9gLvM\n8Pr/UZ5ne704vYgHJ3ltzEGl2qLY35Ztz8+sjUqWFcnMY9ZQkxV5YVP7JjRLJULI\nlsSzdHtRAgMBAAECggEAEm8RbSZc2KDzrTiRLtAa0vMbriadygsZX33CZ2/t2ttC\nXSLY9dA7yOoX0UhLz3pppSX6Pqyl32AHXOc8yrg9FZ/dEOZhnqxYQeQLmCApDWs2\nJ37J0tOGnWaBUb6ttJxJEwZHRhorMFmfW8qQhxtQ85TqkcYqEs1LIv64BsVQKR+v\nt3J/iTC58Djw+MG+rYr1hPI7QP69g2cEsD/GHmthgU/wy9vClKkNfkZmsGgKjjc1\nmg0jUpQS1G4aAuuDsgmIHDE1NpIVuetCHM0q+yenv7Yww9NRKnp+4ZRaJOildGV0\nP/jHSSnPzX/1IgoIb1lic0y0xYw8saGd5JnNHOaecQKBgQDtcBGThDJCgEFz0u7h\nzJuuWObGZLfe53fHyZIJrJeDK9TRY521l2aIyk0oKO7ZY5la+14UQikCYWh6JhgM\nZqxDeNyAfiQFmPRiL8n47ccvPC74kF9q9OS9BkszJyvO1MHI54nLp78hLx0f5z7f\nQ0FNBsFxkPKqAKOGVUOIxyElYwKBgQDa3wF0etNuNNTTr6XDH0Ws/ynhmHbmYMYE\n1EakrwLyyaVVzaAWS5yVen9cgIYRia1k09tIsx8oIxTQGma2O2PSK/F2o7Euvcyz\nkUa/FiRXy53TQ/JBF/QT4SdIzjHxtEpORZnppL7FmVzUnoeos9Xr1Fwn+GNHNUcV\nAOoP9ubkuwKBgQDGOfvShllXf7AlPILG7IVEp1/zXf7MD77GgxhzDy5nCl7geSQf\niMjHhu2ni5Ts1OQhOx6uFxYZsK0C3W7SW52RrwOYGreEHNBacL9UHV9fpgUo649d\nwhp9XRXHHPrL8H/gdL1r0x4UXDsaeXrZ9lI8NlmlsHeHSoU7D1AUjvqzNQKBgQDS\n2kPskuddJEhkJrLqZxYYszkFvHvPNSuPO3FS9cdBXkGJh67Ry8XtuzU3SBngi2If\n4HlAcE9zu1gxoz2QEWb48pyMTuZCwVaTJ0GglRQuAFrrTGn1i7336NCPsxUqZSWw\nghzkmXGvqy9jJdZLD/TmXI7rcr8xuoHgGiFjf9iwQQKBgBz5wPRjNTzQfOksbZYq\nciQndT+5r80BveCm+NodVwsCE6iLE7/4FugrGA/OK71G/FJTfs47i22IiPhOJj57\n2fHk8ErS1suB4ZaTveo2c2gPw2zNoVy8/BSAU4E5ltuaUgXEoFSEu1xrz3basg1W\nEzqCfQtzSPlXks2Y+j4mtcfa\n-----END PRIVATE KEY-----\n",
				scopes: ['https://www.googleapis.com/auth/cloud-platform',"https://www.googleapis.com/auth/dialogflow"],
					},
					(err, token) => {
						resolve(token);
						},
						);
	}
						);
						}
						sonicx.configuration = {
    disableFormdata: false, // if want to use third party form data parser default is true.
    uploadPath: '_uploads', // default upload path default is os.tempDir().
    memoryUpload: true, // if do not want to store in any directory and want to use as buffers.
    requestTimeout: 150000, // milliseconds.
    staticPath: 'public', // Serve static files.
    responseHeaders: {
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Origin": "*",
    }, // can use to configure cors or other header settings.
};
						
						sonicx.route('/token', [
						{
						controller: async (req, res) => {
						let token = await getToken();
						console.log("TOken:::"+token);
						res.send({token});
						}
						},
						]);
						sonicx.listen(process.env.PORT || 4000, () => console.log("Listening on 4000"));
