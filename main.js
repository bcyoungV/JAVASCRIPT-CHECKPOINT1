
function B(){
    document.getElementById("textarea1").style.fontWeight="bold";
}
function I(){
    document.getElementById("textarea1").style.fontStyle="italic";
}

function U(){
    document.getElementById("textarea1").style.textDecoration="underline";
}

var x=document.getElementById("textarea1");
function px()
{
    x.style.fontSize=document.getElementById("select").value;
}
function font()
{
    x.style.fontFamily=document.getElementById("fs").value;
}

