
function zero()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn0').innerHTML;
}
function one()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn1').innerHTML;
}
function sum()
{
    document.getElementById('res').innerHTML+=document.getElementById('btnSum').innerHTML;
}
function eql()
{
    var k=document.getElementById('res');
    if(k.innerHTML.includes('+'))
    {
        var p=k.innerHTML.indexOf('+');
        var first=k.innerHTML.slice(0,p);
        var second=k.innerHTML.slice(p+1,);
        first=base_convert(first,2,10);
        second=base_convert(second,2,10);
        var res=parseInt(first)+parseInt(second);
        res=base_convert(res,10,2)
        k.innerHTML=res;

    }
    else if(k.innerHTML.includes('-'))
    {
        var p=k.innerHTML.indexOf('-');
        var first=k.innerHTML.slice(0,p);
        var second=k.innerHTML.slice(p+1,);
        first=base_convert(first,2,10);
        second=base_convert(second,2,10);
        var res=parseInt(first)-parseInt(second);
        res=base_convert(res,10,2)
        k.innerHTML=res;

    }
    else if(k.innerHTML.includes('*'))
    {
        var p=k.innerHTML.indexOf('*');
        var first=k.innerHTML.slice(0,p);
        var second=k.innerHTML.slice(p+1,);
        first=base_convert(first,2,10);
        second=base_convert(second,2,10);
        var res=parseInt(first)*parseInt(second);
        res=base_convert(res,10,2)
        k.innerHTML=res;

    }
    else if(k.innerHTML.includes('/'))
    {
        var p=k.innerHTML.indexOf('/');
        var first=k.innerHTML.slice(0,p);
        var second=k.innerHTML.slice(p+1,);
        first=base_convert(first,2,10);
        second=base_convert(second,2,10);
        var res=parseInt(first)/parseInt(second);
        res=parseInt(res);
        res=base_convert(res,10,2)
        k.innerHTML=res;

    }
}
function clr()
{
    document.getElementById('res').innerHTML=null;
}
function sub()
{
    document.getElementById('res').innerHTML+=document.getElementById('btnSub').innerHTML;
}
function mul()
{
    document.getElementById('res').innerHTML+=document.getElementById('btnMul').innerHTML;
}
function div()
{
    document.getElementById('res').innerHTML+=document.getElementById('btnDiv').innerHTML;
}
function base_convert(number,initbase,changebase)
{
    return parseInt(number+'',initbase).toString(changebase);
}