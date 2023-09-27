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

    var frasta = document.getElementsByName('card');
    for(let i = 0; i < frasta.length; i++){
        var a = Number(frasta[i].value);
        All += 1100*a;
    }

    var photo = document.getElementsByName('photo');
    for(let i = 0; i < photo.length; i++){
        var a = Number(photo[i].value);
        All += 800*a;
    }

    var filedxtn = document.getElementsByName('film');
    for(let i = 0; i < filedxtn.length; i++){
        var a = Number(filedxtn[i].value);
        All += 600*a;
    }

    var memo = document.getElementsByName('memo');
    for(let i = 0; i < memo.length; i++){
        var a = Number(memo[i].value);
        All += 1000*a;
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
