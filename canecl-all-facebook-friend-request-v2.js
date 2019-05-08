/*
Go to: https://m.facebook.com/friends/center/requests/outgoing/#friends_center_main
Open developer console (F12 on chrome)
Copy this script, paste, execute (press enter)
Look at the log messages.

*/

var total_fnd_requests = 0;

function get_all_cancel_buttons(){
    return document.querySelectorAll('button[value="Cancel"]');
}

function get_ok_prompt_buttons(){
    return document.querySelectorAll('button[value="OK"]');
}

function cancel_ok_buttons(){
    var oks = get_ok_prompt_buttons();
    for (var i=0; i < oks.length; i++){
        oks[i].click();
    }
}

function cancel_request(btn, inc){
    if (inc == undefined || inc == null){
        inc = 1;
    }
    setTimeout(function(){
        btn.click();
        cancel_ok_buttons();
    }, 50 * inc);
}

function cancel_requests(){
    var btns = get_all_cancel_buttons();
    if(btns.length == 0){
        console.log('All done');
        return;
    }else{
        total_fnd_requests += btns.length;
        console.log('Cancelling: ' + btns.length + ' requests');
        console.log('Total requests: ' + total_fnd_requests + ' cancelling running.');
    }
    
    for(var i = 0; i < btns.length; i++){
        cancel_request(btns[i], i+1);
    }
    
    window.scrollBy(0, 500);
    setTimeout(function(){
        cancel_requests();
    }, 5000);    
}

cancel_requests();
