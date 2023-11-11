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
];

loadFromLocalStorage();



function noFunction() {
  alert("Aktuell keine Funktion! Danke für dein Verständnis! :)");
}

function render() {
  let content = document.getElementById("card-container");
  content.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    content.innerHTML += card(i);

    let comments = document.getElementById(`comments${i}`);

    for (let j = 0; j < post["comments"].length; j++) {
      const comment = post["comments"][j];
      comments.innerHTML += `<div class="text-white-14 padding-tb-8 flex"><span><b>${post.namePost}</b>  ${comment}</span></div>`;
    }

    if (post["liked"]) {
      document.getElementById(`like${i}`).classList.add("like-active");
    } else {
      document.getElementById(`like${i}`).classList.add("like-icon");
    }

    if (post["saved"]) {
      document.getElementById(`saved${i}`).classList.add("saved-active");
    } else {
      document.getElementById(`saved${i}`).classList.add("saved");
    }
  }
}

function card(i) {
  let post = posts[i];
  return /*html*/ `
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
                  <div id="like${i}" onclick="likeCheck(${i})" class="like-icon"></div>
                  <img
                    src="./img/icons/comment.png"
                    alt="comment"
                    class="card-icon-bottom pointer"
                    onclick="noFunction()"
                  />
                  <img
                    src="./img/icons/messages.png"
                    alt="share"
                    class="card-icon-bottom-24"
                    onclick="noFunction()"
                  />
                </div>
                <div id="saved${i}" onclick="saved(${i})" class="saved"></div>
              </div>
              <div class="pointer padding-tb-8">
                <div class="text-white-14-bold padding-tb-8">Gefällt ${post["likes"]} Mal</div>
                <div class="flex">
                  <span class="text-white-14"><b>${post.name}</b> ${post.headline}</span>
                  
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
          
        `;
}

function likeCheck(i) {
  let like = posts[i].likes;
  let liked = posts[i].liked;
  let likedIcon = document.getElementById(`like${i}`);

  if (!liked) {
    like++;
    posts[i].liked = true;
    likedIcon.classList.remove("like-icon");
    likedIcon.classList.add("like-active");
  } else {
    like--;
    posts[i].likes = like;
    posts[i].liked = false;
    likedIcon.classList.remove("like-active");
    likedIcon.classList.add("like-icon");
  }

  posts[i].likes = like;
  saveToLocalStorage();
  render();
}

function saved(i) {
  let isTrue = posts[i].saved;
  let savedIcon = document.getElementById(`saved${i}`);

  if (!isTrue) {
    posts[i].saved = true;
    savedIcon.classList.remove("saved");
    savedIcon.classList.add("saved-active");
  } else {
    posts[i].saved = false;
    savedIcon.classList.add("saved");
    savedIcon.classList.remove("saved-active");
  }
  saveToLocalStorage();
  render();
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
  saveToLocalStorage();
  render();
}

function saveToLocalStorage() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function loadFromLocalStorage() {
  let storageAsText = localStorage.getItem("posts");

  if (storageAsText) {
    posts = JSON.parse(storageAsText);
  }
}
