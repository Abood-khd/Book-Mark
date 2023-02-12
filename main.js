var inName = document.getElementById("inputname");
var inSite = document.getElementById("inputsite");
var btn = document.getElementById("submit");
var row = document.getElementById("show");
var containerInput = [];

btn.onclick = function () {
  addSite();
  display();
};
/******************************************************************************************** */
function addSite() {
  var obj = {
    name: inName.value,
    site: inSite.value,
  };

  containerInput.push(obj);

  localStorage.setItem("Data", JSON.stringify(containerInput));
  display();
  reset();
}

/********************************************************************************************* */
(function () {
  if (localStorage.getItem("Data") != null) {
    containerInput = JSON.parse(localStorage.getItem("Data"));
  }
})();
//******************************************************************************************** */
function display() {
  box = ``;

  for (var i = 0; i < containerInput.length; i++) {
    box += `
      <div class="w-50 d-flex  justify-content-between ">
        <div class="name-site ms-5 py-3">
          <h3 class="fst-italic"><a href="${containerInput[i].site}" target="_blank"></a>${containerInput[i].name}</h3>
        </div>
        <div class="button py-3 me-5">
          <button class="btn btn-primary p-2" onclick="openUrl(${i})">Visit</button>
          <button class="btn btn-danger p-2 ms-2" onclick="Delete(${i})">Delete</button>
          <button class="btn btn-success p-2 ms-2" onclick="Update(${i})">Update</button>
        </div>
       
      </div>

    `;
  }
  row.innerHTML = box;
}
display();
//******************************************************************************************** */

function Delete(index) {
  containerInput.splice(index, 1);
  localStorage.setItem("Data", JSON.stringify(containerInput));

  display();
}
//******************************************************************************************** */

function openUrl(i) {
  window.open(`${containerInput[i].site}`);
}
//******************************************************************************************** */

function reset() {
  inName.value = " ";
  inSite.value = " ";
}
//******************************************************************************************** */

function Update(i) {
  inName.value = containerInput[i].name;
  inSite.value = containerInput[i].site;

  scroll({
    top: 0,
    behavior: "smooth",
  });
}
