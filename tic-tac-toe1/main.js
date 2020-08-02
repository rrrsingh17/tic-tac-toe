let sign='x';
let dis1=document.getElementById('turn');
let win=document.getElementById('winner');
let elem=0;
function printer(number)
{
    let location=document.getElementById('r'+number);
    console.log(location);
    if(location.innerHTML=='')
    {
    location.innerHTML=sign;
    winner();
    checkSign();
    dis1.innerHTML=sign+ " turn ";
}}
function checkSign()
{
if(sign=='x')
    sign='o'
else
    sign='x'
}
function data(a)
{
return document.getElementById('r'+a).innerHTML;
}
function moves(a,b,c,move)
{
if(data(a)==move && data(b)==move && data(c)==move)
return true;
else
return false;
}
function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}
function winner()
{
console.log(sign);
elem=elem+1;
if(moves(1,2,3,sign)||moves(4,5,6,sign)||moves(7,8,9,sign)||moves(1,4,7,sign)||moves(2,5,8,sign)||moves(3,6,9,sign)||
        moves(1,5,9,sign)||moves(7,5,3,sign))
        {
        console.log(sign);
        win.innerHTML=sign+ " Winner";

        for(let i=1;i<=9;i++)
        {
        document.getElementById("r"+i).innerHTML="";
        }

        }
{
if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
   getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
   getbox(7)!=""&& getbox(8)!=""&& getbox(9)!="")
{
 win.innerHTML="Match Tie";

}
}
}