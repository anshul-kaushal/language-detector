let params = new URLSearchParams(location.search);
let languageText = params.get("name");
let data = {"text": languageText}
let infoContainer = document.getElementById(`info-container`);
let rest;

fetch("https://language-detection3.p.rapidapi.com/detect-language", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-key": "098605edd0mshbc92827b73a027ap180926jsn14f96c802181",
		"x-rapidapi-host": "language-detection3.p.rapidapi.com"
	},
	"body": JSON.stringify(data)
})
.then((response) => response.json())
.then((response) => {
	({...rest} = (response))
	infoContainer.innerHTML = `
	<table class="language-table"> 
	<tbody>
	<tr>
	<th>
	Language
	</th>
	<td>
	${rest.language}
	</td>
	</tr>
	<tr>
	<th>
	Language-ISO
	</th>
	<td>
	${rest["language-iso"]}
	</td>
	</tr>
	<tr>
	<th>
	Probability
	</th>
	<td>
	${rest.probability}
	</td>
	</tr>
	</tbody>
	</table>`
})
.catch(err => {
	console.error(err);
});