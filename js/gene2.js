var yuzuruResult = "";
var motomuResult = "";
var torihikiResult = "";
var yuzuruPerson = "";
var motomuPerson = "";

function next() {
    var selecter = "";
    var selectFlg = 0;
    var mFlag = 0;
    var list = document.getElementsByClassName("y-val");
    var listM = document.getElementsByClassName("m-mem");
    var listY = document.getElementsByClassName("y-mem");
    var nextPage = document.getElementById("nextPage").value;
    var nextHTML = "";

    if (list.length < 1) {
        list = document.getElementsByClassName("m-val");
        if (list.length < 1) {
            mFlag = 2;
            list = document.getElementsByClassName("t-val");
        }else{
            mFlag = 1;
        }
    }

    if (listM.length > -1) {
        for(let mem of listM){
            if (mem.checked) {
            motomuPerson += mem.value + " ";
            }
        }
    }

    if (listY.length > -1) {
        for(let mem of listY){
            if (mem.checked) {
                yuzuruPerson += mem.value + " ";
            }
        }
    }

    for (let item of list) {
        if (item.checked) {
            if (selectFlg == 0) {
                selecter = item.value;
                selectFlg = 1;
            }else{
                selecter += "、" +item.value;
            }
        }
    }
    
    if (nextPage == "menber-y") {
        nextHTML = "menber-y.html"
    }else if (nextPage == "menber-m") {
        if (selecter == "異種") {
            nextHTML = "goodslist.html";
        }else{
            nextHTML = "menber-m.html"
        }
    }else if (nextPage == "shurui") {
        nextHTML = "shurui.html"
    }else if (nextPage == "torihiki") {
        nextHTML = "torihiki.html"
    }else{
        nextHTML = "result.html"
    }

	var xhr = new XMLHttpRequest(),
		method = "GET",
		url = nextHTML;//読み込まれるHTMLを指定
	var box=document.getElementById("selecter");//読み込みたい位置を指定

	xhr.open(method, url, true);
	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4 && xhr.status === 200) {
			var restxt=xhr.responseText;//String型で取得
			box.innerHTML=restxt;//完了
		}
	};
	xhr.send();

    if(mFlag == 0){
        yuzuruResult += selecter + "<br>";
    }else if(mFlag == 1){
        motomuResult += selecter + "<br>";
    }else{
        torihikiResult += selecter;

        document.getElementById('yuzuru').innerHTML += yuzuruResult;
        document.getElementById('motomu').innerHTML += motomuResult;
        document.getElementById('torihiki').innerHTML +=torihikiResult;

        document.getElementById('result').style.display = 'block';

        document.getElementById('nextErea').style.display = 'none';

        document.getElementById('tweet').style.display = 'block';
    }
}
function gene() {
    var yuzuru = document.getElementById('yuzuru').innerHTML;
    var motomu = document.getElementById('motomu').innerHTML;
    var torihiki = document.getElementById('torihiki').innerHTML;

    return yuzuru.replaceAll( "<br>" , "%0D%0A" ) + '%0D%0A' + motomu.replaceAll( "<br>" , "%0D%0A" ) + torihiki.replaceAll( "<br>" , "%0D%0A" )  +"%0D%0A&hashtags=" + encodeURIComponent('日プガールズ交換');
}

function tweet() {
    var doc = gene();
    var twlink = "https://twitter.com/share?&text=" + doc + "&count=none&lang=ja";
    document.getElementById('twlink').href = twlink;
}

function search() {
    yuzuruResult = yuzuruPerson.replaceAll( "、" , "%20" );
    motomuResult = motomuPerson.replaceAll( "、" , "%20" );
    var query = yuzuruResult.replaceAll( "<br>" , "%20" ) + motomuResult.replaceAll( "<br>" , "%20" ) +"%20日プ%20交換";
    var twlink = "https://twitter.com/search?q=" + query + "&src=typed_query";
    document.getElementById('srlink').href = twlink;
}

function reset() {
    window.location.reload();
}