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
var ref = database.ref('post');
ref.on('value', gotData, errData);

function gotData(data){
    console.log("data", data.val()[0].companyName);
    //var compName = document.getElementById("company-name");
    // compName.innerHTML = data.val().companyName;
}
function errData(err){
    console.log("ERROR");
    console.log(err);
}


firebase.database().ref('post').on('value', function(snapshot) {
    console.log("hi", snapshot.val());
    getCardInfo(snapshot);
});

function getCardInfo(snapshot) {
    //var posts = [];
    //console.log("loop",posts);
    var htmlCards = "";
    var compName = document.getElementById("resultscontainer");

    snapshot.forEach(snap => {
        //posts.push(snap.val().companyName, snap.val().postTitle);
        var filterItem = '';
        var filterItems = '';
        for (var i = 0; i < snap.val().filter.length; i++) {
            filterItem = snap.val().filter[i] + " ";
            filterItems += filterItem;
        }

        var htmlCard = '<a class="eachPost mix '+filterItems+'" data-companyID="'+snap.val().id+'">\
                            <div class="postImage"><img src="'+snap.val().images[0]+'" alt="office placholder"></div>\
                            <div class="company">\
                                <h3 id="company-name">'+snap.val().companyName+'</h3>\
                            </div>\
                            <div class="text">\
                                <h3>'+snap.val().postTitle+'</h3>\
                                <div class="info">\
                                    <p>'+snap.val().importantInfo.deadline+'</p>\
                                    <p>'+snap.val().importantInfo.loction+'</p>\
                                </div>\
                            </div>\
                        </a>';

        htmlCards += htmlCard; 
        compName.innerHTML = htmlCards;
    });
};

