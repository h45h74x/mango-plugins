var chapter;
var currentPage;

function listChapters(query) {

	var response = mango.post("https://httpbin.org/anything", "Test Body", {"Header1" : "Value1", "Header2" : "Value2"});
	//var response = mango.get("https://httpbin.org/anything", ["User-Agent", "key1", "header2", "key2"]);
	mango.raise("| response: " + JSON.stringify(response));

	mango.raise("listChapters");
}

function selectChapter(id) {
	mango.raise("selectChapter");
}

function nextPage() {
	mango.raise("nextPage");
}
