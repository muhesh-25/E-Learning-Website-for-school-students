function Intern(title, image) {
	this.title = title;
	this.image = image;
}

const games = [
	new Intern(
		"Front-End Developer - Internship",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDXGksUTXd8DdhvIm1hmEv5ymdPMm8YNe-EA&usqp=CAU"
	),

	new Intern(
		"Back-End Developer - Internship",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDXGksUTXd8DdhvIm1hmEv5ymdPMm8YNe-EA&usqp=CAU"
	),
	new Intern(
		"Full Stack Developer - Internship",
		"https://images-platform.99static.com/XzzJBjIObP5KhDx9MUfD0ulacXo=/500x500/top/smart/99designs-contests-attachments/28/28810/attachment_28810462"
	),
	new Intern(
		"Chatbot Developer - Internship",
		"https://dcassetcdn.com/design_img/2779177/591638/591638_15209895_2779177_eb4b7a2a_thumbnail.png"
	),
	new Intern(
		"Python Developer - Internship",
		"https://i.pinimg.com/564x/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg"
	),
	new Intern(
		"UI Developer - Internship",
		"https://learnui.design/blog/img/logo/luid.png"
	),
];

const place = document.querySelector(".intern");

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
