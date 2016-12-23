const placeholder = "%data%";

var model = {
	bio : {
		"name" :"Coding Fan Steve",
		"role" : "CEO",
		"contacts" : 
		{
			"email" : "codingfansteve@google.com",
			"location" : "Mountain View, CA",
			"mobile" : "12345"
		},
		"skills" : [ "coding", "management", "leadership" ]
	},

	jobs : [
		{
	 		"employer" : "LinkedIn",
	 		"title" : "Software Engineer",
	 		"location" : "Mountain View, CA",
	 		"dates" : "08/2014 - present",
	 		"description" : "Building something at LinkedIn"
	 	},
	 	{
	 		"employer" : "Ebay",
	 		"title" : "Software Engineer",
	 		"location" : "San Jose",
	 		"dates" : "04/2013 - 08/2014",
	 		"description" : "Built something at eBay"
	 	},
	 	{
	 		"employer" : "Facebook",
	 		"title" : "Intern Software Engineer",
	 		"location" : "New York City, NY",
	 		"dates" : "summer 2012",
	 		"description" : "Built something at Facebook"
	 	},
	 	{
	 		"employer" : "Oracle",
	 		"title" : "Intern Software Engineer",
	 		"location" : "Austin, TX",
	 		"dates" : "summer 2011",
	 		"description" : "Built something at Oracle"
	 	}
	],

	educations : {
		"schools" : [
			{
				"school" : "UC Berkley",
				"location" : "Berkley, CA",
				"degree" : "Ph.D.",
				"major" : "Computer Science"
			},
			{
				"school" : "MIT",
				"location" : "Cambridge, MA",
				"degree" : "BS",
				"major" : "Electrical Engineering"
			}
		],
		"Online Course" : ["Udacity"]
	},

	projects : [
		{
			"title" : "AI",
			"dates" : "1/7/2016 - present",
			"description" : "Building an AI",
			"images" : ["images/ai1.jpg"]
		},
		{
			"title" : "Search engine",
			"dates" : "3/15/2012 - 4/5/2016",
			"description" : "Built a search engine from scratch",
			"images" : ["images/se1.png", "images/se2.jpg"]
		}
	]
};

var view = {
	init : function() {
		// populate works
		octopus.getAllWorks().forEach(function(work) {		
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace(placeholder, work.employer));
			$(".work-entry:last").append(HTMLworkTitle.replace(placeholder, work.title));
			$(".work-entry:last").append(HTMLworkDates.replace(placeholder, work.dates));
			$(".work-entry:last").append(HTMLworkLocation.replace(placeholder, work.location));
			$(".work-entry:last").append(HTMLworkDescription.replace(placeholder, work.description));
		});

		// populate projects
		octopus.getAllProjects().forEach(function (project) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace(placeholder, project.title));
			$(".project-entry:last").append(HTMLprojectDates.replace(placeholder, project.dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace(placeholder, project.description));

			project.images.forEach(function (image) {
				$(".project-entry:last").append(HTMLprojectImage.replace(placeholder, image));
			});
		});

		// populate bio
		var bio = octopus.getBio();
		$("#header").append(HTMLheaderName.replace(placeholder, bio.name));

		if ("skills" in bio && bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);

			for (skill in bio.skills) {
				$("#skills").append(HTMLskills.replace(placeholder, bio.skills[skill]));
			}
		}

		// init button and map
		$("#main").append(internationalizeButton);

		$("#mapDiv").append(googleMap);
	}
};

var octopus = {
	init : function() {
		view.init();
	},

	getAllWorks : function() {
		return model.jobs;
	},

	getAllProjects : function() {
		return model.projects;
	},

	getBio : function() {
		return model.bio;
	}
};

octopus.init();

function inName(name) {
	var names = name.trim().split(" ");

	names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();

	for (var i = 1; i < names.length; i++) {
		names[i] = names[i].toUpperCase();
	}

	return names.join(" ");
}





