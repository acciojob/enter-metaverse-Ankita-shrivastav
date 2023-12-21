//your JS code here. If required.
// const status=getElementById("status");
const enterBtn = document.getElementById("enterBtn");
function meta(){
	document.getElementById("status").innerHTML = '<h1>Entered Metaverse</h1>'
}

enterBtn.addEventListener("click",meta)