//**************** FIREBASE *****************//
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

function gotData(snapshot) {
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
        popUp();
        getPost(snapshot);
        getSingleComapnyData();
    }    
    else if(postPage) {
        console.log("Your are on the PostPage");
        // getPost(snapshot);
    }    
}

function errData(err) {
    console.log("ERROR", err);
}

//**************** SEARCH & CARDS *****************//
function getCardInfo(snapshot) {
    var compName = document.getElementById("resultscontainer");

    snapshot.forEach(snap => {
        var filterItem = '',
            filterItems = '';
        for (var i = 0; i < snap.val().searchFilter.length; i++) {
            filterItem = snap.val().searchFilter[i] + " ";
            filterItems += filterItem;
        }
        var htmlCard = '<a id="popUp" class="pop-up eachPost mix '+filterItems+'" data-companyID="'+snap.val().id+'">\
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

    /* *** search *** */
    let filterInput = document.getElementById('filter-input');
    filterInput.addEventListener('keyup', function() {
        // Get value of input
        let filterValue = document.getElementById('filter-input').value.toLowerCase();
        // Get names from list
        let Allposts = document.getElementById('resultscontainer');
        // Get each item from list
        let postItem = Allposts.querySelectorAll('.eachPost');
        // Loop through list
        for(let i = 0;i < postItem.length;i++){
            let a = postItem[i];
            // If matched
            if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
                postItem[i].style.display = '';
            }
            else {
                postItem[i].style.display = 'none'; 
            }
        }
    });
    /* *** Filtering *** */
    var mixer = mixitup(compName);
};

//**************** CARD DATA *****************//
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

//**************** OWL CAROUSEL *****************//
function getCarouselImg(snapshot) {
    var carouselDiv = document.querySelector("#owlCarousel");
    snapshot.forEach(snap => {
        if(snap.val().id == 4) {
            //console.log("length is: ", snap.val().images.length);
            
            for(var i = 0; i < snap.val().images.length; i++) {
                //console.log(snap.val().images[i]);
                var carouselImg = '<div class="item">\
                                      <img src="'+snap.val().images[i]+'" alt="">\
                                   </div>';
                //console.log("each image: ", carouselImg);
                $(carouselDiv).append(carouselImg);
                // carouselDiv.insertAdjacentHTML('beforeend', carouselImg);
            }

        }
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        nav: true,
        margin: 40,
        autoWidth: true,
        responsive:{
            600:{
                items: 3
            }
        }
    });
};

//**************** POST PAGE *****************//

// Get specific post company id
// post data from that specifik one into post page

function getPost(snapshot) {
    var postPage = document.getElementById("overview-page");
    var postID = postPage.getAttribute("data-overviewId");
    //console.log("Post ID:", postID);

    snapshot.forEach(snap => {

        if(snap.val().id == postID){
            getHeroData(snap);
            getFirstInfoboxData(snap);
            getSecondInfoboxData(snap);
            getTextBoxData(snap); 
            getContactBoxData(snap);  
        }
    });
}

//**************** GET HERO DATA *****************//
function getHeroData(snap) { 
    var heroData = document.getElementById("hero-post-container");

    var htmlHerobox = '<img src='+snap.val().images[0]+' alt="office placholder">\
                        <div class="hero-overlay"></div>\
                        <div class="tag-line">\
                            <h1>'+snap.val().postTitle+'</h1>\
                        </div>';

    heroData.insertAdjacentHTML('beforeend', htmlHerobox);
}

//**************** GET FIRST INFORBOX DATA *****************//
function getFirstInfoboxData(snap) { 
    var infoboxData = document.getElementById("first-infobox-container");

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
                            <h3>'+snap.val().importantInfo.created+'</h3>\
                            <p>Created</p>\
                        </div>';

    infoboxData.insertAdjacentHTML('beforeend', htmlInfobox);
}

//**************** GET SECOND INFORBOX DATA *****************//
function getSecondInfoboxData(snap) { 
    var infoboxData = document.getElementById("second-infobox-container");

    var htmlInfobox = '<div class="info">\
                            <h3>'+snap.val().statisticInfo.employees+'</h3>\
                            <p>Employees</p>\
                        </div>\
                        <div class="info">\
                            <h3>'+snap.val().statisticInfo.clients+'</h3>\
                            <p>Clients</p>\
                        </div>\
                        <div class="info">\
                            <h3>'+snap.val().statisticInfo.projects+'</h3>\
                            <p>Projects</p>\
                        </div>\
                        <div class="info">\
                            <h3>'+snap.val().statisticInfo.companyAge+'</h3>\
                            <p>Years in the field</p>\
                        </div>';

    infoboxData.insertAdjacentHTML('beforeend', htmlInfobox);
}

//**************** GET TEXT DATA *****************//
function getTextBoxData(snap) { 
    // LOGO
    var postLogo = document.getElementById("post-logo");
    var htmlPostLogo = '<img src='+snap.val().logo+' alt="logo placholder">';
    postLogo.insertAdjacentHTML('beforeend', htmlPostLogo);

    // ABOUT
    var aboutUsText = document.getElementById("about-us");
    var htmlAboutUs = '<p>'+snap.val().internshipText.aboutUs+'</p>';
    aboutUsText.insertAdjacentHTML('beforeend', htmlAboutUs);

    // INTRODUCTION
    var introductionText = document.getElementById("introduction");
    var htmlIntroduction = '<p>'+snap.val().internshipText.introduction+'</p>';
    introductionText.insertAdjacentHTML('beforeend', htmlIntroduction);

    // YOUR PROFILE
    var yourProfileText = document.getElementById("your-profile");
    var htmlYourProfile = '<p>'+snap.val().internshipText.yourProfile+'</p>';
    yourProfileText.insertAdjacentHTML('beforeend', htmlYourProfile);

    // TOOLS & TASKS
    var toolsTasksText = document.getElementById("tasks-tools");

    for(var i = 0; i < snap.val().internshipText.toolsTasks.length; i++) {
        var htmlToolsTasks = '<li>'+snap.val().internshipText.toolsTasks[i]+'</li>';
        toolsTasksText.insertAdjacentHTML('beforeend', htmlToolsTasks);
    }
}

//**************** GET CONTACT DATA *****************//
function getContactBoxData(snap) { 
    // GET INTERESTED TEXT
    var interestedText = document.getElementById("interested");
    var htmlInterested = '<p>'+snap.val().contact.interested+'</p>';
    interestedText.insertAdjacentHTML('beforeend', htmlInterested);

    // GET CONTACT LIST
    var contactInfoText = document.getElementById("contact");
    var htmlContactInfo = '<ul>\
                                <li>\
                                    <img src="assets/mail.svg" alt="">\
                                    <span>'+snap.val().contact.contactInfo.email+'</span>\
                                </li>\
                                <li>\
                                    <img src="assets/call.svg" alt="">\
                                    <span>'+snap.val().contact.contactInfo.phoneNumber+'</span>\
                                </li>\
                                <li>\
                                    <img src="assets/location.svg" alt="">\
                                    <span>'+snap.val().contact.contactInfo.address+'</span>\
                                </li>\
                            </ul>\
                            <ul>\
                                <li>\
                                    <a href="'+snap.val().contact.contactInfo.facebook+'" class="fa fa-facebook">\
                                        <img src="assets/facebook.svg" alt="">\
                                        <span>Facebook</span>\
                                    </a>\
                                </li>\
                                <li>\
                                    <a href="'+snap.val().contact.contactInfo.instagram+'" class="fa fa-facebook">\
                                        <img src="assets/instagram.svg" alt="">\
                                        <span>Instagram</span>\
                                    </a>\
                                </li>\
                                <li>\
                                    <a href="'+snap.val().contact.contactInfo.linkedIn+'" class="fa fa-facebook">\
                                        <img src="assets/linkedin.svg" alt="">\
                                        <span>LinkedIn</span>\
                                    </a>\
                                </li>\
                            </ul>';
    contactInfoText.insertAdjacentHTML('beforeend', htmlContactInfo);
}
//**************** GET DATA FROM SINGLE POST *****************//
function getSingleComapnyData(snapshot) {
    // GET ID OF COMPANY ON CLICK OF CARD
    //PASS THAT ID TO FUCTIONS THAT GET DATA FOR THE POP UP MODAL
    // var eachPost = document.getElementsByClassName("eachPost");
    
    // for (var i = 0; i < eachPost.length; i++) {
    //     eachPost[i].addEventListener('click', function(){
    //         console.log('click');
    //         // var companyId = eachPost[i].getAttribute('data-companyID')[i];
    //         // console.log('companyId:', companyId);
    //     });
    // }

    // var popUp = document.getElementById("popUp");
    // popUp.addEventListener("click", function(){
    //     var companyId = popUp.getAttribute('data-companyID');
    //     console.log('companyId:', companyId);
    // });
 }


//**************** POP-UP MODAL *****************//
function popUp() { 
    var modal = document.getElementById('pop-up-modal');
    var cardClick = document.getElementById("popUp");
    var spanClose = document.getElementsByClassName("close")[0];
    var btnClose = document.getElementsByClassName("btn-close")[0];
    var body = document.querySelector('body');
    var navbar = document.getElementById("header");
    var eachPost = document.getElementsByClassName("eachPost");
    //console.log(body);
    
    for (var i = 0; i < eachPost.length; i++) {
        eachPost[i].addEventListener('click', function(){
            console.log('click');
            modal.style.display = "block";
            body.style.position = "fixed";

            // PUT ON STICKY NAV WHEN MODAL OPEN
            // if(navbar.contains.classList("sticky")){
            //     console.log('hello');
            //     //navbar.classList.add("sticky");
            // }  

            // var companyId = eachPost[i].getAttribute('data-companyID')[i];
            // console.log('companyId:', companyId);
        });
    }

    spanClose.onclick = function() {
        modal.style.display = "none";
        body.style.position = "relative";
    }

    btnClose.onclick = function() {
        modal.style.display = "none";
        body.style.position = "relative";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "relative";
        }
    }
}
