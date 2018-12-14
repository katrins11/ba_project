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
        popUp();
    }
    else if(overviewPage) {
        console.log("Your are on the OverviewPage");
        getCardInfo(snapshot);
        getCarouselImg(snapshot);
        popUp();
        getPost(snapshot);
        getSingleComapnyData();
        mobileFilterMenu();
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
        var htmlCard = '<a class="inline pop-up eachPost mix '+filterItems+'" data-companyid="'+snap.val().id+'">\
                            <div class="postImage">\
                                <img src="'+snap.val().images[0]+'" alt="office placholder">\
                                <div class="overlay"></div>\
                            </div>\
                            <div class="company">\
                                <h1 class="company-name card-title">'+snap.val().companyName+'</h1>\
                            </div>\
                            <div class="text">\
                                <h1 class="card-title">'+snap.val().postTitle+'</h1>\
                                <div class="info">\
                                    <p class="card-text">'+snap.val().importantInfo.deadline+'</p>\
                                    <p class="card-text">'+snap.val().importantInfo.location+'</p>\
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
                var container = document.getElementById('resultscontainer');
                var htmlNoResults = '<h1>No results found.</h1>';
                container.insertAdjacentHTML('beforeend', htmlNoResults);
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
        var frontCard = '<a class="inline pop-up eachPost" data-companyID="'+snap.val().id+'">\
                            <div class="postImage"><img src="'+snap.val().images[0]+'" alt="office placholder"></div>\
                            <div class="company">\
                                <h1 class="company-name card-title">'+snap.val().companyName+'</h1>\
                            </div>\
                            <div class="text">\
                                <h1 class="card-title">'+snap.val().postTitle+'</h1>\
                                <div class="info">\
                                    <p class="card-text">'+snap.val().importantInfo.deadline+'</p>\
                                    <p class="card-text">'+snap.val().importantInfo.location+'</p>\
                                </div>\
                            </div>\
                         </a>';
        companyPosts.insertAdjacentHTML('beforeend', frontCard);
        i++;
    });
};

//**************** OWL CAROUSEL *****************//
function getCarouselImg(snapshot, attrVal) {
    var carouselDiv = document.querySelector("#owlCarousel");
    snapshot.forEach(snap => {
        // if(snap.val().id == 4) {
        if(snap.val().id == attrVal) {
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
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            }
        }
    });
};

//**************** POST PAGE *****************//

// Get specific post company id
// post data from that specifik one into post page

function getPost(snapshot) {
    var postPage = document.getElementById("overview-page");
    var postID = postPage.getAttribute("companyid");
    var allCards = $('.eachPost');
    var attrVal;

    allCards.click(function() {
        attrVal = $(this).attr('data-companyid');
        console.log("theIdIs: ", attrVal);
        snapshot.forEach(snap => {
            if(snap.val().id == attrVal){
                getHeroData(snap);
                getFirstInfoboxData(snap);
                getSecondInfoboxData(snap);
                getTextBoxData(snap); 
                getCarouselImg(snap, attrVal);
                getContactBoxData(snap);  
            }
        });
    })
    console.log("theIdIsAgin: ", attrVal);
   

    
    
    
}

//**************** GET HERO DATA *****************//
function getHeroData(snap) { 
    var heroData = document.getElementById("hero-post-container");
    var htmlHerobox = '<img src='+snap.val().images[0]+' alt="office placholder">\
                        <div class="hero-overlay"></div>\
                        <div class="tag-line">\
                            <h1>'+snap.val().postTitle+'</h1>\
                        </div>';

    heroData.innerHTML = '';
    heroData.insertAdjacentHTML('beforeend', htmlHerobox);
}

//**************** GET FIRST INFORBOX DATA *****************//
function getFirstInfoboxData(snap) { 
    var infoboxData = document.getElementById("first-infobox-container");

    var htmlInfobox = '<div class="info">\
                            <h1 class="info-headline">'+snap.val().importantInfo.deadline+'</h1>\
                            <p class="info-text">Deadline</p>\
                        </div>\
                        <div class="info">\
                            <h1 class="info-headline">'+snap.val().importantInfo.duration+'</h1>\
                            <p class="info-text">Duration</p>\
                        </div>\
                        <div class="info">\
                            <h1 class="info-headline">'+snap.val().importantInfo.location+'</h1>\
                            <p class="info-text">Location</p>\
                        </div>\
                        <div class="info">\
                            <h1 class="info-headline">'+snap.val().importantInfo.created+'</h1>\
                            <p class="info-text">Created</p>\
                        </div>';
    infoboxData.innerHTML = '';
    infoboxData.insertAdjacentHTML('beforeend', htmlInfobox);
}

//**************** GET SECOND INFORBOX DATA *****************//
function getSecondInfoboxData(snap) { 
    var infoboxData = document.getElementById("second-infobox-container");

    var htmlInfobox = '<div class="info">\
                            <h1 class="info-headline">'+snap.val().statisticInfo.employees+'</h1>\
                            <p class="info-text">Employees</p>\
                        </div>\
                        <div class="info">\
                            <h1 class="info-headline">'+snap.val().statisticInfo.clients+'</h1>\
                            <p class="info-text">Clients</p>\
                        </div>\
                        <div class="info">\
                            <h1 class="info-headline">'+snap.val().statisticInfo.projects+'</h1>\
                            <p class="info-text">Projects</p>\
                        </div>\
                        <div class="info">\
                            <h1 class="info-headline">'+snap.val().statisticInfo.companyAge+'</h1>\
                            <p class="info-text">Years in the field</p>\
                        </div>';
    infoboxData.innerHTML = '';
    infoboxData.insertAdjacentHTML('beforeend', htmlInfobox);
}

//**************** GET TEXT DATA *****************//
function getTextBoxData(snap) { 
    // LOGO
    var postLogo = document.getElementById("post-logo");
    var htmlPostLogo = '<img src='+snap.val().logo+' alt="logo placholder">';
    postLogo.innerHTML = '';
    postLogo.insertAdjacentHTML('beforeend', htmlPostLogo);

    // ABOUT
    var aboutUsText = document.getElementById("about-us");
    var htmlAboutUs = '<p>'+snap.val().internshipText.aboutUs+'</p>';
    aboutUsText.innerHTML = '';
    aboutUsText.insertAdjacentHTML('beforeend', htmlAboutUs);

    // INTRODUCTION
    var introductionText = document.getElementById("introduction");
    var htmlIntroduction = '<p>'+snap.val().internshipText.introduction+'</p>';
    introductionText.innerHTML = '';
    introductionText.insertAdjacentHTML('beforeend', htmlIntroduction);

    // YOUR PROFILE
    var yourProfileText = document.getElementById("your-profile");
    var htmlYourProfile = '<p>'+snap.val().internshipText.yourProfile+'</p>';
    yourProfileText.innerHTML = '';
    yourProfileText.insertAdjacentHTML('beforeend', htmlYourProfile);

    // TOOLS & TASKS
    var toolsTasksText = document.getElementById("tasks-tools");
    var htmlToolsTasks;
    var finalHtmlToolsTasks;
    for(var i = 0; i < snap.val().internshipText.toolsTasks.length; i++) {
        htmlToolsTasks = '<li>'+snap.val().internshipText.toolsTasks[i]+'</li>';
        finalHtmlToolsTasks += htmlToolsTasks;
        console.log("each: ", finalHtmlToolsTasks);
    }
    console.log("final: ", finalHtmlToolsTasks);
    toolsTasksText.innerHTML = '';
    toolsTasksText.insertAdjacentHTML('beforeend', finalHtmlToolsTasks);
}

//**************** GET CONTACT DATA *****************//
function getContactBoxData(snap) { 
    // GET INTERESTED TEXT
    var interestedText = document.getElementById("interested");
    var htmlInterested = '<p>'+snap.val().contact.interested+'</p>';
    interestedText.insertAdjacentHTML('beforeend', htmlInterested);

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
                                <li>\
                                    <img src="assets/web.svg" alt="">\
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
    contactInfoText.innerHTML = '';
    contactInfoText.insertAdjacentHTML('beforeend', htmlContactInfo);
}


//**************** POP-UP MODAL *****************//
function popUp() { 
    var eachPost = document.getElementsByClassName("inline");
    
    for (var i = 0; i < eachPost.length; i++) {
        eachPost[i].addEventListener('click', function(e){

            // MODAAL 
            $('.inline').modaal({
                content_source: '#inline'
            });

        });
    }
}

//**************** MOBILE - OPEN FILTER MENU *****************//

function mobileFilterMenu() { 
    var showFilterMenu = document.getElementById("showFilterMenu");
    var hideFilterMenu = document.getElementsByClassName("filter-btn--close")[0];

    showFilterMenu.onclick = function() { 
        console.log('filter click');
        var filterContainer = document.getElementById("filter-container");
        filterContainer.classList.add('active');
    }

    hideFilterMenu.onclick = function() { 
        console.log('close click');
        var filterContainer = document.getElementById("filter-container");
        filterContainer.classList.remove('active');

    }

}
