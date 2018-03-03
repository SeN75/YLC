window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
$('#navbar').addClass("b")		
	} else {
		document.getElementById("navbar").style.top = "-120px";
	}
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("navbar2").style.top = "0";
	} else {
		document.getElementById("navbar2").style.top = "-120px";
	}
}
