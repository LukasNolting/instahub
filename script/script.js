let posts = [
  {
    name: "Angular",
    namePost: "User123",
    time: "4 Std.",
    location: "Kalifornien",
    likes: 1582,
    liked: false,
    saved: false,
    commentCount: 25,
    headline: "Die Angular Developer sind jetzt bei InstaHub!",
    comments: ["Angular ist ein TypeScript-basiertes Webframework."],
    image: "./img/profiles/Angular.svg",
  },
  {
    name: "GIT",
    namePost: "User123",
    time: "3 Std.",
    location: "Brooklyn",
    likes: 1878,
    liked: false,
    saved: false,
    commentCount: 85,
    headline: "Heute schon gepusht?",
    comments: ["Git ist ein Versionskontrollsystem für Entwickler."],
    image: "./img/profiles/GIT.svg",
  },
  {
    name: "JavaScript",
    namePost: "User123",
    time: "8 Std.",
    location: "Kalifornien",
    likes: 954,
    liked: false,
    saved: false,
    commentCount: 12,
    headline: "function",
    comments: ["JavaScript ist eine Web-Programmiersprache."],
    image: "./img/profiles/JavaScript.svg",
  },
  {
    name: "HTML",
    namePost: "User123",
    time: "2 Std.",
    location: "Cambridge",
    likes: 1023,
    liked: false,
    saved: false,
    commentCount: 14,
    headline: "div",
    comments: ["HTML ist die Sprache des Webs."],
    image: "./img/profiles/HTML.svg",
  },
];

function noFunction() {
  alert("Aktuell keine Funktion! Danke für dein Verständnis! :)");
}

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
              <div class="pointer padding-tb-8">
                <div class="text-white-14-bold padding-tb-8">Gefällt ${post["likes"]} Mal</div>
                <div class="flex">
                <div class="text-white-14-bold">${post.name}</div> 
                <span class="text-white-14"> ${post.headline}</span>
                </div>
              </div>
              <div class="card-comment" id="comments${i}">
              </div>
              <div class="card-comments padding-tb-8">
                <span class="text-grey-14" onclick="noFunction()">Alle ${post["commentCount"]} Kommentare ansehen</span>
              </div>
              <div class="comment-input-container padding-b-8">
                <input type="text" placeholder="Kommentieren ...." class="input-comment" id="input${i}" required/>
                <button class="button-comment padding-tb-8" onclick="addComment(${i})">Posten</button>
              </div>
            </div>
          </div>
        `;

    let comments = document.getElementById(`comments${i}`);

    for (let j = 0; j < post["comments"].length; j++) {
      const comment = post["comments"][j];
      comments.innerHTML += `<div class="text-white-14 padding-tb-8 flex"><div><b>${post.namePost}</b></div><div>${comment}</div></div>`;
    }
  }
}

function addComment(index) {
  let input = document.getElementById(`input${index}`);

  if (input.value != "") {
    posts[index]["comments"].push(input.value);
    render();
    input.value = "";
  } else {
    alert("Bitte Text eingeben!");
  }
}
