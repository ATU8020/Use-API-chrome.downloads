// "matches":
// [
// 	"https://www.oxfordlearnersdictionaries.com/definition/english/*"
// ],
// 	"js":
// [
// 	"/ATU/contentScript.js"
// ]

try
{
	chrome.downloads.download({url: "https://www.oxfordlearnersdictionaries.com/media/english/fullsize/c/coa/coast/coast.png"})
}
catch (err)
{
	console.warn(err);
}