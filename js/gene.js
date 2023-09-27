function yuzuru() {
    document.getElementById('yuzuru').innerHTML = "【譲】"
    
    var yv = document.getElementsByClassName('y-val')

    for(let y of yv){
        if (y.checked) {
            document.getElementById('yuzuru').innerHTML += y.value + '<br>';
        }
    }
    
    var ym =  document.getElementsByClassName('y-member')

    for (let m of ym) {
        if(m.checked){
            document.getElementById('yuzuru').innerHTML += m.value + '<br>'; 
        }
    }
}

function motomu() {
    document.getElementById('motomu').innerHTML = "【求】";

    var mv = document.getElementsByClassName('m-val')

    for(let m of mv){
        if (m.checked) {
            document.getElementById('motomu').innerHTML += m.value + '<br>';
        }
    }
    
    var mm = document.getElementsByClassName('m-member')

    for (let m of mm) {
        if (m.checked) {
            document.getElementById('motomu').innerHTML += m.value + '<br>';    
        }
    }
}

function torihiki() {
    var th = document.getElementsByClassName('th')
    document.getElementById('torihiki').innerHTML = "【取引方法】";

    for (let m of th) {
        if (m.checked) {
            document.getElementById('torihiki').innerHTML += m.value + '<br>';    
        }
    }
}

function gene() {
    var yuzuru = document.getElementById('yuzuru').innerHTML;
    var motomu = document.getElementById('motomu').innerHTML;
    var torihiki = document.getElementById('torihiki').innerHTML;

    return yuzuru.replaceAll( "<br>" , "%0D%0A" ) + '%0D%0A' + motomu.replaceAll( "<br>" , "%0D%0A" ) + torihiki.replaceAll( "<br>" , "%0D%0A" )  +"&hashtags=" + encodeURIComponent('DXTEEN交換');
}

function tweet() {
    var doc = gene();
    var twlink = "https://twitter.com/share?&text=" + doc + "&count=none&lang=ja";
    document.getElementById('twlink').href = twlink;
}

$('input[type="checkbox"]').bind('input', function () { 
    yuzuru();
    motomu();
    torihiki();
    tweet();
    document.getElementById('tweet').disabled = false;
})

function capture() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        //document.body.appendChild(canvas)
        var imgData = canvas.toDataURL();
        document.getElementById("sshot").href = imgData;
        document.getElementById("imgmk").innerHTML = "画像を再作成";
    });
}