//object bio
var bio = {
    "name": "Niharika Chaudhary",
    "role": "Web-Developer",
    "contacts": {
        "mobile": "+91-9779573916",
        "email": "<a href='mailto:chaudharyniharika17@gmail.com'>Niharika Chaudhary</a>",
        "github": "<a href='https://github.com/nikkie95'>nikkie95</a>",
        "twitter": "<a href='https://twitter.com/Niharikanickie'>Niharikanickie</a>",
        "location": "Panchkula,Haryana"
    },

    "welcomeMessage": "An investment in knowledge pays the best interest.",
    "skills": [
        "C", "C++", "HTML", "CSS", "JavaScript", "Core JAVA", "PL-SQL"

    ],
    "biopic": "images/nikki.jpg"

};
// display function : bio object
bio.display = function() {
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));



    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }


};


bio.display();
// education object
var education = {
    "schools": [{
        "name": "Chitkara University",
        "location": "Rajpura, Punjab",
        "degree": "B.E",
        "majors": ["Computer-Science, Website Designing"],
        "dates": "2014",
        "url": "http://www.chitkara.edu.in/"

    }],

    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://www.udacity.com"
    }]

};
// display function : education object
education.display = function() {
    //schools
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);


        var formattedName = HTMLschoolName.replace("%data%", school.name);

        $(".education-entry:last").append(formattedName);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

        $(".education-entry:last").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedDegree);
        school.majors.forEach(function(major) {
            var formattedMajors = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedMajors);
        });
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl = HTMLschoolURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedUrl);




        //online Courses
        education.onlineCourses.forEach(function(onlineCourse) {

            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);

            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

            $(".education-entry:last").append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formattedUrl);
        });

    });
};
education.display();
// work object
var work = {
    "jobs": [{
            "employer": "Umeed",
            "title": "Co-ordinator",
            "location": "New-Delhi",
            "dates": "2016",
            "description": "An NGO for under-privileged children."
        },
        {
            "employer": "Core",
            "title": " Finance-Head",
            "location": "Rajpura,Punjab",
            "dates": "2017",
            "description": "Organising annual fests of universities."
        }
    ]
};
// display function : work object
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

    });
};

work.display();


// project object
var projects = {
    "projects": [

        {
            "title": "Building a portfolio site",
            "dates": "2017",
            "description": "Making a design mockup for a portfolio-site",
            "images": ["images/portfolio.jpg"]

        },
        {
            "title": "Making an animal card",
            "dates": "2016",
            "description": "Designing a bio-card for an animal",
            "images": ["images/lioncard.jpg"]

        },
        {
            "title": "Making a home-town app",
            "dates": "2015",
            "description": "Designing an outlook of an home-town app",
            "images": ["images/times.jpg"]

        },
        {
            "title": "Making peach ice-cream",
            "dates": "2014",
            "description": "Designing a recipe to go in a recipe blog",
            "images": ["images/peach.jpg"]

        }
    ]
};
// display function : project object
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLworkTitle.replace("%data%", project.title);

        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

projects.display();

//adding map
$('#mapDiv').append(googleMap);