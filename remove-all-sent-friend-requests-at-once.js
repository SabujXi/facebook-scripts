var es = document.querySelectorAll('button[value="Undo"]');
function doo(){
    for (var ei=0; ei < es.length; ei++){
        var e = es[ei];
        e.click();
        var btnoks = document.querySelectorAll('button[value="Ok"]')
        if (btnoks.length > 0){
            btnoks[0].click();
        }
        if (ei == es.length - 1){
                    es = document.querySelectorAll('button[value="Undo"]');
                            window.scrollBy(0, 500);
                    setTimeout(function(){doo()}, 5000);
                }
    }
}

doo();
