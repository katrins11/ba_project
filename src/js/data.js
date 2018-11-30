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
    var frontpage = document.getElementById("front-page");
    var overviewPage = document.getElementById("overview-page");
    if(frontpage) {
        console.log("frontpage");
        getFrontCardInfo(snapshot);
    }
    else if(overviewPage) {
        console.log("overviewPage");
        getCardInfo(snapshot);
    }    
});

function getCardInfo(snapshot) {
    var htmlCards = "";
    var compName = document.getElementById("resultscontainer");

    snapshot.forEach(snap => {
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

function getFrontCardInfo(snapshot) {
    var numberOfPosts = '';
    var frontCards = '';
    var companyPosts = document.getElementById("frontPagePosts");
    var i = 0;

    if( screen.width >= 1500 ){
        numberOfPosts = 4;
        console.log("numberOfPosts: ", numberOfPosts);
    }
    else if(screen.width >= 1030) {
        numberOfPosts = 3;
        console.log("numberOfPosts: ", numberOfPosts);
    }
    else if(screen.width >= 500) {
        numberOfPosts = 2;
        console.log("numberOfPosts: ", numberOfPosts);
    }
    else {
        numberOfPosts = 1;
        console.log("numberOfPosts: ", numberOfPosts);
    }

    snapshot.forEach(snap => {
        console.log("i", i);
        console.log("numberOfPosts: ", numberOfPosts);
        if(i >= numberOfPosts) {
            console.log('done');
            return;
        }
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
        // frontCards = frontCard; 
        companyPosts.insertAdjacentHTML('beforeend', frontCard)
        // companyPosts.innerHTML = frontCards;
        i++;
    });
}

