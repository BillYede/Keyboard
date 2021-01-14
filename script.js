const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.getElementById('body');

//Dark Mode
darkModeSwitch.addEventListener('click', () => {
  let currentBodyClass = body.className;

  if (body.className === "lightMode") {
    body.className = "darkMode";
  } else if (currentBodyClass === "darkMode") {
    body.className = "lightMode";
  }
});

let currentBodyClass = body.classList;

if (currentBodyClass.contains("lightMode")) {
  currentBodyClass.add('darkMode');
  currentBodyClass.remove('lightMode');
} else if (currentBodyClass.contains("darkMode")) {
  currentBodyClass.add('lightMode');
  currentBodyClass.remove('darkMode');
}