import * as fire from 'firebase';

const config = {
	apiKey: "AIzaSyBCKU6S03uu3ZKiVSgDIyOCxBC3W2NinVw",
	autoDomain: "cricbuss-web-app.firebaseapp.com",
	dataBaseURL: "https://cricbuss-web-app.firebaseio.com",
	projectId:"cricbuss-web-app",
	storageBucket:"cricbuss-web-app.appspot.com",
	messegingSenderId:"251915039472",
	appId: "1:251915039472:web:debb78426e0eb513"

};
fire.initializeApp(config);
export default fire;
