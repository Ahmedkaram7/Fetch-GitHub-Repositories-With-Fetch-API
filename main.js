let input = document.querySelector(".get-repos input");
let btn = document.getElementById("btn");
let showData = document.querySelector(".show-data");

function fetchRepos(UserName) {
  let urlGithubRepos = "https://api.github.com/users/";
  fetch(urlGithubRepos + UserName + "/repos")
    .then((result) => {
      // console.log(result);
      let data = result.json();
      return data;
    })
    .then((data) => {
      // console.log(data);
      showData.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        let UserName = data[i].name;
        // console.log(data);
        let span = document.createElement("span");
        span.innerHTML = UserName;
        showData.appendChild(span);

        //create button to show visit repos
        let visit = document.createElement("button");
        // visit.innerHTML = `visit`;
        visit.id = "visit";
        span.appendChild(visit);

        let links = document.createElement("a");
        links.innerHTML = "visit";
        links.setAttribute("target", "_blank");
        links.setAttribute("href", `${data[i].html_url}`);
        links.id = "links-btn";
        visit.appendChild(links);
      }
    });
}

function inputData() {
  // console.log("Error");
  if (input.value === "") {
    // console.log("Error");
    alert("Must Enter UserName");
  } else {
    let value = input.value;
    // console.log(UserName);
    fetchRepos(value);
  }
  input.value = "";
}

btn.addEventListener("click", inputData);
