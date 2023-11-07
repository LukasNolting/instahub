let posts = [
  {
    name: "Angular",
    time: "4 Std.",
    location: "Kalifornien",
    likes: 1582,
    commentCount: 25,
    headline: "Die Angular Developer sind jetzt bei InstaHub!",
    comments: [
      "Angular ist ein TypeScript-basiertes Webframework.",
      "Angular ist ein Frontend-Framework für die Entwicklung von Webanwendungen.",
      "Angular ist ein leistungsstarkes Webentwicklungsframework.",
    ],
    image: "./img/profiles/Angular.svg",
  },
  {
    name: "GIT",
    time: "3 Std.",
    location: "Brooklyn",
    likes: 1878,
    commentCount: 85,
    headline: "Heute schon gepusht?",
    comments: [
      "Git ist ein Versionskontrollsystem für Entwickler.",
      "Git ist ein Entwicklungs-Tool zur Versionskontrolle.",
      "Git ist ein Versionsverwaltungssystem.",
    ],
    image: "./img/profiles/GIT.svg",
  },
  {
    name: "JavaScript",
    time: "8 Std.",
    location: "Kalifornien",
    likes: 954,
    commentCount: 12,
    headline:
      "Warum mag JavaScript keine Beziehungen? Weil es immer 'null' bedeutet!",
    comments: [
      "JavaScript ist eine Web-Programmiersprache.",
      "JavaScript ist eine Browser-Programmiersprache.",
      "JavaScript ist eine gängige Web-Scripting-Sprache.",
    ],
    image: "./img/profiles/JavaScript.svg",
  },
  {
    name: "HTML",
    time: "2 Std.",
    location: "Cambridge",
    likes: 1023,
    commentCount: 14,
    headline:
      "Warum ist HTML so unaufgeregt? Weil es nur 'Tag's über Tags spricht!",
    comments: [
      "HTML ist die Sprache des Webs.",
      "HTML ist die Basis für Webseiten.",
      "HTML strukturiert das Web.",
    ],
    image: "./img/profiles/HTML.svg",
  },
];

function noFunction() {
  alert("Aktuell keine Funktion! Danke für dein Verständnis! :)");
}

// FUNCTIONS CARD
// `
//         <div class="card">
//             <h2>${land["name"]}</h2>

//             <div id="landcontent${i}"></div>
//             <input id="input${i}"><button onclick="addComment(${i})">OK</button>
//         </div>
//     `;

function render() {
  let content = document.getElementById("card-container");
  content.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    content.innerHTML += /*html*/ `
        <div class="card">
              <div class="card-head">
                <img
                  src=${post["image"]}
                  class="profile-img module-border-wrap-32 pointer"
                  onclick="noFunction()"
                />
                <div class="card-head-text">
                  <div>
                    <a
                      href="#"
                      onclick="noFunction()"
                      class="text-white-14-bold"
                      >${post["name"]}</a
                    >
                    <span class="text-grey-12-bold">•</span>
                    <span class="text-grey-12-bold">${post["time"]}</span>
                  </div>
                  <div>
                    <a href="#" onclick="noFunction()" class="text-white-12"
                      >${post["location"]}</a
                    >
                  </div>
                </div>
                <a href="#" onclick="noFunction()"
                  ><img
                    src="./img/icons/dots-horizontal.png"
                    alt="dots-horizontal"
                    class="card-icon"
                  />
                </a>
              </div>

              <img
                src=${post["image"]}
                alt="img"
                class="card-img"
              />

              <div class="icons-card-bottom">
                <div class="card-icon-bottom-left">
                  <img
                    src="./img/icons/Heart.png"
                    alt="heart"
                    class="card-icon-bottom"
                  />
                  <img
                    src="./img/icons/heart-red.png"
                    alt="heart"
                    class="card-icon-bottom d-none"
                  />
                  <img
                    src="./img/icons/comment.png"
                    alt="comment"
                    class="card-icon-bottom"
                    onclick="noFunction()"
                  />
                  <img
                    src="./img/icons/messages.png"
                    alt="share"
                    class="card-icon-bottom-24"
                    onclick="noFunction()"
                  />
                </div>
                <img
                  src="./img/icons/save.png"
                  alt="save"
                  class="card-icon-bottom-36"
                />
              </div>
              <div class="padding-tb-8 pointer">
                <span class="text-white-14-bold">Gefällt ${post["likes"]} Mal</span>
              </div>
              <div class="card-comment" id="comments">
                <span class="text-white-14-bold margin-r-4 pointer">${post["name"]}</span>
                <span class="text-white-14">Test</span>
              </div>
              <div class="card-comments padding-tb-8">
                <span class="text-grey-14" onclick="noFunction()">Alle ${post["commentCount"]} Kommentare ansehen</span>
              </div>
              <div class="comment-input-container padding-b-8">
                <input type="text" placeholder="Kommentieren ...." class="input-comment" />
                <button class="button-comment padding-tb-8">Posten</button>
              </div>
            </div>
          </div>
        `;

    let comments = document.getElementById(`comments${i}`);

    for (let j = 0; j < post["comments"].length; j++) {
      const comment = post["comments"][j];
      comments.innerHTML += `<div>${comment}</div>`;
    }
  }
  render();
}

function addComment(index) {
  let input = document.getElementById(`input${index}`);
  posts[index]["comments"].push(input.value);
  render();
  input.value = "";
}
