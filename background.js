try
{
	console.clear();

	chrome.contextMenus.create({title: "Function: Click to download image",id:"contextMenu"})

	chrome.contextMenus.onClicked.addListener(async function (info, tab) {
		const downloadId = await chrome.downloads.download({url: "https://www.oxfordlearnersdictionaries.com/media/english/fullsize/c/coa/coast/coast.png"});
		console.log('downloadId:', downloadId);
	});
}
catch (err)
{
	console.warn(err);
}
