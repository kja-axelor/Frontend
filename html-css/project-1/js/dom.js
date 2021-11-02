console.log("html dom is added");

let apps = document.getElementById("apps");
apps.innerHTML = `<li>Netflix</li>
                  <li>Amazon Prime</li>
                  <li>Hotstar</li> `;
apps.style.fontSize = "30px";