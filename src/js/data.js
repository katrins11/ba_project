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

function gotData(data) {
    console.log("data", data.val()[0].companyName);
}
function errData(err) {
    console.log("ERROR", err);
}

database.ref('post').on('value', function(snapshot) {
    var frontpage = document.getElementById("front-page");
    var overviewPage = document.getElementById("overview-page");
    if(frontpage) {
        console.log("Your are on the FrontPage");
        getFrontCardInfo(snapshot);
    }
    else if(overviewPage) {
        console.log("Your are on the OverviewPage");
        getCardInfo(snapshot);
    }    
});

function getCardInfo(snapshot) {
    var compName = document.getElementById("resultscontainer");

    snapshot.forEach(snap => {
        var filterItem = '',
            filterItems = '';
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
        compName.insertAdjacentHTML('beforeend', htmlCard);
    });
};

function getFrontCardInfo(snapshot) {
    var companyPosts = document.getElementById("frontPagePosts"),
        numberOfPosts = '',
        i = 0;

    if( screen.width >= 1500 ){ numberOfPosts = 4; }
    else if(screen.width >= 1030) { numberOfPosts = 3; }
    else if(screen.width >= 500) { numberOfPosts = 2; }
    else { numberOfPosts = 1; }
    //console.log("numberOfPosts: ", numberOfPosts);

    snapshot.forEach(snap => {
        if(i >= numberOfPosts) { return; }
        var frontCard = '<a class="eachPost" data-companyID="'+snap.val().id+'">\
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
        companyPosts.insertAdjacentHTML('beforeend', frontCard);
        i++;
    });
}