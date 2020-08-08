// var helloSpeaker = function (name) {
// 	var speakWord = "Hello ";
// 	console.log(speakWord + " " + name);
// };
var helloSpeaker = {};
(function (window){

	var speakWord = "Hello";
	helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);

