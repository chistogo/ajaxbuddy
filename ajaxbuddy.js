"use strict";

var ajaxbuddy = new function() {
    this.submitForm = function(e,successCallback,failedCallback) {
    
        e.preventDefault()

        var data=""
        for(var i=0;i<e.target.children.length;i++){
            if(e.target.children[i].name && e.target.children[i].value && data ==""){
                data += encodeURIComponent(e.target.children[i].name)+"="+encodeURIComponent(e.target.children[i].value);
            }
            else if(e.target.children[i].name && e.target.children[i].value && data !=""){
                data += "&"+encodeURIComponent(e.target.children[i].name)+"="+encodeURIComponent(e.target.children[i].value);
            }
        }

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if(this.status == 200) {
                    successCallback(this)
                }else{
                    failedCallback(this)
                }
            }
        };

        if(e.target.method == "get"){
            xhttp.open(e.target.method, e.target.action+"?"+data, true);
            //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send();//body
        }else{
            xhttp.open(e.target.method, e.target.action, true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(data);//body
        }
    }

}
