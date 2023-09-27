$('input[type="number"]').bind('input', function () { 
    
    var All = 0;

    var stars = document.getElementsByClassName('form-control');
    
    var Allnum = 0;
    for(let i = 0; i < stars.length; i++){
        Allnum += Number(stars[i].value);
    }
    
    var acsta = document.getElementsByName('acsta');
    for(let i = 0; i < acsta.length; i++){
        var a = Number(acsta[i].value);
        All += 1000*a;
    }

    var cacba = document.getElementsByName('cacba');
    for(let i = 0; i < cacba.length; i++){
        var a = Number(cacba[i].value);
        All += 500*a;
    }

    var frasta = document.getElementsByName('frasta');
    for(let i = 0; i < frasta.length; i++){
        var a = Number(frasta[i].value);
        All += 990*a;
    }

    var photo = document.getElementsByName('photo');
    for(let i = 0; i < photo.length; i++){
        var a = Number(photo[i].value);
        All += 1000*a;
    }

    var filedxtn = document.getElementsByName('filedxtn');
    for(let i = 0; i < filedxtn.length; i++){
        var a = Number(filedxtn[i].value);
        All += 500*a;
    }

    var fileokubo = document.getElementsByName('fileokubo');
    for(let i = 0; i < fileokubo.length; i++){
        var a = Number(fileokubo[i].value);
        All += 500*a;
    }

    var filetanaka = document.getElementsByName('filetanaka');
    for(let i = 0; i < filetanaka.length; i++){
        var a = Number(filetanaka[i].value);
        All += 500*a;
    }

    var filetaniguchi = document.getElementsByName('filetaniguchi');
    for(let i = 0; i < filetaniguchi.length; i++){
        var a = Number(filetaniguchi[i].value);
        All += 500*a;
    }

    var fileterao = document.getElementsByName('fileterao');
    for(let i = 0; i < fileterao.length; i++){
        var a = Number(fileterao[i].value);
        All += 500*a;
    }

    var filehiramoto = document.getElementsByName('filehiramoto');
    for(let i = 0; i < filehiramoto.length; i++){
        var a = Number(filehiramoto[i].value);
        All += 500*a;
    }

    var filefukuda = document.getElementsByName('filefukuda');
    for(let i = 0; i < filefukuda.length; i++){
        var a = Number(filefukuda[i].value);
        All += 500*a;
    }

    var charmokubo = document.getElementsByName('charmokubo');
    for(let i = 0; i < charmokubo.length; i++){
        var a = Number(charmokubo[i].value);
        All += 600*a;
    }

    var charmtanaka = document.getElementsByName('charmtanaka');
    for(let i = 0; i < charmtanaka.length; i++){
        var a = Number(charmtanaka[i].value);
        All += 600*a;
    }

    var charmtaniguchi = document.getElementsByName('charmtaniguchi');
    for(let i = 0; i < charmtaniguchi.length; i++){
        var a = Number(charmtaniguchi[i].value);
        All += 600*a;
    }

    var charmterao = document.getElementsByName('charmterao');
    for(let i = 0; i < charmterao.length; i++){
        var a = Number(charmterao[i].value);
        All += 600*a;
    }

    var charmhiramoto = document.getElementsByName('charmhiramoto');
    for(let i = 0; i < charmhiramoto.length; i++){
        var a = Number(charmhiramoto[i].value);
        All += 600*a;
    }

    var charmfukuda = document.getElementsByName('charmfukuda');
    for(let i = 0; i < charmfukuda.length; i++){
        var a = Number(charmfukuda[i].value);
        All += 600*a;
    }

    var porchi = document.getElementsByName('porchi');
    for(let i = 0; i < porchi.length; i++){
        var a = Number(porchi[i].value);
        All += 1200*a;
    }

    var memo = document.getElementsByName('memo');
    for(let i = 0; i < memo.length; i++){
        var a = Number(memo[i].value);
        All += 700*a;
    }

    var wappen = document.getElementsByName('wappen');
    for(let i = 0; i < wappen.length; i++){
        var a = Number(wappen[i].value);
        All += 800*a;
    }

    document.getElementById("result-erea").innerHTML = "<h3 class='text-white'>合計" + Allnum + "点</h3>" + "<h3 class='text-white'>" + All + "円</h3>";
    document.getElementById("result").innerHTML = "<h3 class='dxtn'>合計" + Allnum + "点</h3>" + "<h3 class='dxtn'>" + All + "円</h3>";
});

function capture() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        //document.body.appendChild(canvas)
        var imgData = canvas.toDataURL();
        document.getElementById("sshot").href = imgData;
        document.getElementById("imgmk").innerHTML = "画像を再作成";
    });
}
