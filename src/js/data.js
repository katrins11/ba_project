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
    var postPage = document.getElementById("post-page");

    if(frontpage) {
        console.log("Your are on the FrontPage");
        getFrontCardInfo(snapshot);
    }
    else if(overviewPage) {
        console.log("Your are on the OverviewPage");
        getCardInfo(snapshot);
        getCarouselImg(snapshot);
    }    
    else if(postPage) {
        console.log("Your are on the PostPage");
        getPost(snapshot);
    }
});

function getCardInfo(snapshot) {
    var compName = document.getElementById("resultscontainer");

    snapshot.forEach(snap => {
        var filterItem = '',
            filterItems = '';
        for (var i = 0; i < snap.val().searchFilter.length; i++) {
            filterItem = snap.val().searchFilter[i] + " ";
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
                                    <p>'+snap.val().importantInfo.location+'</p>\
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
                                    <p>'+snap.val().importantInfo.location+'</p>\
                                </div>\
                            </div>\
                         </a>';
        companyPosts.insertAdjacentHTML('beforeend', frontCard);
        i++;
    });
};

function getCarouselImg(snapshot) {
    var carouselDiv = document.querySelector("#owlCarousel .owl-stage-outer .owl-stage");
    snapshot.forEach(snap => {
        if(snap.val().id == 4) {
            console.log(snap.val().images.length);
            
            for(var i = 0; i < snap.val().images.length; i++) {
                console.log(snap.val().images[i]);
                var carouselImg = '<div class="item">\
                                      <img src="'+snap.val().images[i]+'" alt="">\
                                   </div>';
                carouselDiv.insertAdjacentHTML('beforeend', carouselImg);
            }

        }
    });
};

//**************** INFO BOX'S *****************//

// Get specific post company id
// post data from that specifik one into post page

function getPost(snapshot) {
    var postPage = document.getElementById("post-page");
    var postID = postPage.getAttribute("data-postId");
    console.log("Post ID:", postID);

    snapshot.forEach(snap => {

        if(snap.val().id == postID){
            console.log("yes", snap.val());
            getFirstInfoboxData(snapshot);
            getSecondInfoboxData(snapshot);

            console.log(postIds);
        }

    });

}

function getFirstInfoboxData(snapshot) { 
    var infoboxData = document.getElementById("first-infobox-container");

    snapshot.forEach(snap => {

        var htmlInfobox = '<div class="info">\
                                <h3>'+snap.val().importantInfo.deadline+'</h3>\
                                <p>Deadline</p>\
                            </div>\
                            <div class="info">\
                                <h3>'+snap.val().importantInfo.duration+'</h3>\
                                <p>Duration</p>\
                            </div>\
                            <div class="info">\
                                <h3>'+snap.val().importantInfo.location+'</h3>\
                                <p>Location</p>\
                            </div>\
                            <div class="info">\
                                <h3>'+snap.val().importantInfo.date+'</h3>\
                                <p>Date</p>\
                            </div>';

        infoboxData.insertAdjacentHTML('beforeend', htmlInfobox);
    });
}

function getSecondInfoboxData(snapshot) { 
    var infoboxData = document.getElementById("second-infobox-container");

    snapshot.forEach(snap => {

        var htmlInfobox = '<div class="info">\
                                <h3>'+snap.val().infoBox.employs+'</h3>\
                                <p>Employees</p>\
                            </div>\
                            <div class="info">\
                                <h3>'+snap.val().infoBox.clients+'</h3>\
                                <p>Clients</p>\
                            </div>\
                            <div class="info">\
                                <h3>'+snap.val().infoBox.projects+'</h3>\
                                <p>Projects</p>\
                            </div>\
                            <div class="info">\
                                <h3>'+snap.val().infoBox.companyAge+'</h3>\
                                <p>Years in the field</p>\
                            </div>';

        infoboxData.insertAdjacentHTML('beforeend', htmlInfobox);
    });
}