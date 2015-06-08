var bio = {
	"name" : "Татьяна",
	"role" : "web-developer",
	"contacts" : {
		"mobile" : "+79234112018",
		"email" : "twest1087@gmail.com",
		"github" : "twesttt",
		"location" : "Russia, Tomsk"
	},
	"welcomMessage" : "Hi everybody!",
	"skills" : ["diagnostic", "JS", "HTML5/CSS3", "Github"],
	"bioPic" : "images/me.jpg"
};

var education = {
	"schools": [
		{
			"name": "Tomsk State Univercity of Control System and Radioelectronics",
			"city": "Tomsk",
			"degree": "specialist",
			"majors" : "Applied IT in Economics",
			"dates": 2009,
			"url": "tusur.ru"
		}
	],
	"onlineCourses": [
		{
			"title": "Nanadegree web-development",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Avantel",
			"title": "engeneer",
			"dates": "Septermber 2013 - nowdays",
			"description": "Configure VOIP"
		},
		{
			"employer": "Avantel",
			"title": "support",
			"dates": "December 2010 - Septermber 2013",
			"description": "Help for customers"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Portfolio1",
			"dates": "2015",
			"description": "Portfolio Site",
			"images": [
				"img1.png", "img2.png"
			]
		}
	]
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);

};

// $("#header").append(HTMLskillsStart);
// for (i in bio.skills) {
// 	$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]))
// };

function displayWork(){
	for( job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
};

// $("#main").append(work["position"]);
// $("#main").append(education.name);
displayWork();



