document.querySelector(".portal-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("nebula").value;
  const pass = document.getElementById("quantum").value;

  if (user === "saabir" && pass === "teach") {
    alert("Welcome Saabir 🚀");
  } else {
    alert("Invalid credentials ❌");
  }
});