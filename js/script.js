var copyTranBtn = document.getElementById("copyTranBtn");
var copyTranBtn2 = document.getElementById("copyTranBtn2");
var copyTranBtn3 = document.getElementById("copyTranBtn3");

function copyAlert() {
  alert("تم نسخ النص");
}

copyTranBtn.onclick = copyAlert;
copyTranBtn2.onclick = copyAlert;
copyTranBtn3.onclick = copyAlert;

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))