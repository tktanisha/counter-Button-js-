 //fetching the number in the ui
 const countValue=document.querySelector('#counter'); 

  function increment(){
    let value=parseInt(countValue.innerText);//countValue ke andr jitni bhi value thi vo phle nikal li but this we will get in string format so parsing it in integer
    value=value+1;
    countValue.innerText=value;//updating and setting the value
 }
function decrement(){
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
    
 };