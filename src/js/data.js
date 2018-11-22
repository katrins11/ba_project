var config = {
    apiKey: "AIzaSyBIZI6hbCrbtBaCQ1cwm_B0NP245AAF5KY",
    authDomain: "theintern-95665.firebaseapp.com",
    databaseURL: "https://theintern-95665.firebaseio.com",
    projectId: "theintern-95665",
    storageBucket: "theintern-95665.appspot.com",
    messagingSenderId: "705619967315"
};
firebase.initializeApp(config);

var database = firebase.database();
var ref = database.ref('company');
ref.on('value', gotData, errData);

function gotData(data){
    console.log(data.val().companyName);
    var compName = document.getElementById("company-name");
    compName.innerHTML = data.val().companyName;
}
function errData(err){
    console.log("ERROR");
    console.log(err);
}
