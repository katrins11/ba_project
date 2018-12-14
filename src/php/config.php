<?php 
    // echo basename($_SERVER['PHP_SELF']);

    /* *** *** HealinBanner *** *** */
    if(basename($_SERVER['PHP_SELF']) == 'index.php') {
        $headlineBannerH1 = 'We connect candidates to companies';
        $headlineBannerP = 'We have an internship that boosts your career - no matter what level you are at.'; 
        $headlineBannerImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';   
    }
    else if(basename($_SERVER['PHP_SELF']) == 'guide.php') {
        $headlineBannerH1 = 'Is it time to start thinking about internship applications?';
        $headlineBannerP = 'When starting to think about application for internship there are many things you need to thingk about. '; 
        $headlineBannerImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';   
    }
    else if(basename($_SERVER['PHP_SELF']) == 'about.php') {
        $headlineBannerH1 = 'Is it time to start thinking about internship applications?';
        $headlineBannerP = 'We have an internship that boosts your career - no matter what level you are at.'; 
        $headlineBannerImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';   
    }
    else {
        $headlineBannerH1 = 'Headline missing';
        $headlineBannerP = 'Text missing'; 
        $headlineBannerImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';   
    }

    /* *** *** cta *** *** */
    $ctaHeader = 'See more oppotunities';

    /* *** *** cta-guide *** *** */
    $ctaGuideHeader = 'Application Guide';
    $ctaGuideText = 'Are you unsure how to write a good application? Follow these 8 steps from application to internship';

    /* *** *** footerInfo *** *** */
    $footerMail = 'mail@mail.com';
    $footerNumber = '+45 60 60 60 60';
    $footerLocation = 'Lygten 37, 1400 Copenhagen';

    /* *** *** Frontpage Text *** *** */
    $frontPageTextHeadline = 'What is Web Intern?';
    $frontPageTextText = 'Missing Text';
    $frontPageTextHeadlineReadMore = 'Read more about Web Intern';

    /* *** *** FrontPost *** *** */
    $frontPostsHeadline = 'Reacently added internships!';
    
    /* *** *** HeroBanner *** *** */
    $heroBannerHeadline = 'Start your future now';
    
    /* *** *** FrontPost *** *** */
    $infoBoxHeadline = 'Company statistics';
      
    /* *** *** Post Contact *** *** */
    $postContactHeadlineOne = 'Interested?';
    $postContactHeadlineTwo = 'Contact';

    /* *** *** Post Text *** *** */
    $postTextHeadlineOne = 'The Internship';
    $postTextHeadlineTwo = 'Your profile';
    $postTextHeadlineThree = 'Tasks & tools';
    
    /* *** *** Search *** *** */
    $filterHeadline = 'Filter';
         
    /* *** *** AboutPage *** *** */
    $aboutPageHeadline = 'Who we are.';

    /* *** *** Guide *** *** */
    $guideHeadlineStep1 = 'What do you want to do?';
    $guideTextStep1 = 'Missing';
    $guideHeadlineStep2 = 'Company List';
    $guideTextStep2 = 'Missing';
    $guideHeadlineStep3 = 'Your CV';
    $guideTextStep3 = 'It is very important to be able to present a valuable CV which best describes you as an employee. It is therefore worthwhile to work hard to have a good CV because you have the possibility of an interesting internship while a poor CV is working against you and preventing you from succeeding. <br><br>The CV should provide information about you as a staff member, and when making it, you need to follow some basic rules for making CVs.';
    $guideHeadlineStep4 = 'Your personal page';
    $guideTextStep4 = 'Missing \ ';
    $guideHeadlineStep5 = 'Social media';
    $guideTextStep5 = 'With your application process, you need to consider how you appear on social media, because the company that you send your application to will most likely look you up to get a better idea of you as a person. So take a minute to go over your linkedIn, facebook, Instagram and try to google your name and see what comes up. Also make sure that the email address you are using gives a good picture of you, along with the answering machine in your phone. It\'s also good from the begining to plan how you will search for internships as well as how you will manage your application data.';
    $guideHeadlineStep6 = 'Cover Letter';
    $guideTextStep6 = 'The introduction letter is very important in the application process, because there the employer gets the first feel of you as a employee. The letter must therefore be engaging and trigger your employer\'s interest at getting you in for the first review. <br><br>With this letter, you should get the attention of a boss so that you can be invited to an interview for your internship and get an opportunity to introduce you even better. Therefore, it is very important to also consider all presentation and grammar, and you should always get someone to read the message before sending it out to a company. <br><br>Be sure to direct the recipient\'s attention to you and your strengths, but not to items that are not relevant to the job, for example. information about family history, family or pets or write reflections on how the company can adapt to you.<br><br>To facilitate the job search, you may want to create a form for a promotional letter that you can use again if applications are more than one, but you always have to change their content and customize each one to the company you are applying for.';
    $guideHeadlineStep7 = 'Before Interview';
    $guideTextStep7 = 'When going in to a internship interview you will have the opportunity to show your strengths, skills and knowledge. You need to use it well to captivate your interviewers and have a greater change of landing the internship. <br><br> Most often, it is an HR manager and / or head of department  who advises candidates to interview. The purpose is to see how the applicant is, whether he meets the criteria set and whether he/she fits to the employee/company group. People often get anxious to attend a internship interview and there is nothing abnormal about it, but you can significantly reduce your anxiety by preparing yourself. A good way to prepare yourself is to:<br><br><strong>- Get acquainted with the company,</strong><br><strong> - Prepare what you\'re going to say,</strong><br><strong>- Choose a suitable outfit,</strong><br><strong>- Show interest.</strong>';
    $guideHeadlineStep8 = 'After Interview';
    $guideTextStep8 = 'Missing';
?>