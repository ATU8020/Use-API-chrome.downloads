try
{
	console.clear();

	chrome.contextMenus.create({title: "Function: Click to download image",id:"contextMenu"})
	chrome.contextMenus.onClicked.addListener(function (info, tab) {
		console.log("The API chrome.downloads will run as soon as you read this.");
		chrome.downloads.download({url: "https://www.oxfordlearnersdictionaries.com/media/english/fullsize/c/coa/coast/coast.png"}, function (downloadId) {
			console.log(`downloadId: ${downloadId}`)
		})
		chrome.downloads.onCreated.addListener(function (downloadItem) {
			console.log(`state: ${downloadItem.state}`);
			console.log(`startTime: ${downloadItem.startTime}`)
			console.log(`endTime: ${downloadItem.endTime}`)
		})
	})
}
catch (err)
{
	console.warn(err);
}