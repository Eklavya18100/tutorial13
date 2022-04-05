
let Top=document.getElementById('top');
let nails=document.getElementById('nails');
let shuffle=document.getElementById('shuffle');
var a=[0,1,2,3];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }

 function generateImg(){
     a=shuffleArray(a);
    nails.innerHTML='';
    a.forEach((ele)=>{
        
        nails.innerHTML+=`<img src="${ele+1}nail.jpg" alt="n1"/>`;
    })
    Array.from(nails.children).forEach((ele,index)=>{
        if(index!=4){
        ele.addEventListener('mouseover',()=>{
            Top.innerHTML=`<img src="${a[index]+1}big.jpg" alt="b2" />`;
        
        })
    }
    })
 }

 generateImg();