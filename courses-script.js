function Course(title, image) {
	this.title = title;
	this.image = image;
}

const games = [
	new Course(
		"End-to-End Machine Learning with TensorFlow on GCP",
		"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/85/1f9930bd3f11e8a00b63e9f285be45/adv-ml-gcp-3x.png?auto=format%2Ccompress&dpr=1"
	),

	new Course(
		"Essential Google Cloud Infrastructure: Foundation",
		"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/30/30378059d211e7b6a10f0c1f673917/Configuration-Management-on-GCP.jpg?auto=format%2Ccompress&dpr=1"
	),
	new Course(
		"Architecting with Google Kubernetes Engine: Foundations",
		"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/8b/0b59e567f6458f9ee45244bda95782/Container-Engine.png?auto=format%2Ccompress&dpr=1"
	),
	new Course(
		"Programming for Everybody (Getting Started with Python)",
		"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/08/33f720502a11e59e72391aa537f5c9/pythonlearn_thumbnail_1x1.png?auto=format%2Ccompress&dpr=1"
	),
	new Course(
		"Introduction to HTML5",
		"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/32/b88140502611e5bf374909c194f0db/introhtml_thumnail_1x1.png?auto=format%2Ccompress&dpr=1"
	),
	new Course(
		"DevOps Culture and Mindset",
		"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/c7/0b4870cd8511e89ba6fff833dd3995/GettyImages-697539241_square.jpg?auto=format%2Ccompress&dpr=1"
	)

];

const place = document.querySelector(".courses");

games.forEach((game) => {
	const data = `
				<div class="card">
					<div class="content">
					<h2>${game.title}</h2>
					</div>
					<div class="image">
						<img
							src="${game.image}"
							alt="AC Origins"
						/>
					</div>
				</div>`;
	place.innerHTML += data;
});
