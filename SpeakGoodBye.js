// var speakGoodBye = function (name) {
// 	var speakWord = "Good Bye";
// 	console.log(speakWord + " " + name);
// };
var speakGoodBye = {};
(function (window){

	var speakWord = "Bye Bye";
	speakGoodBye = function (name) {
		console.log(speakWord + " " + name);
	}
	window.speakGoodBye = speakGoodBye;
})(window);
