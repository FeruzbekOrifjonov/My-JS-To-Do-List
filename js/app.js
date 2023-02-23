
let list=document.querySelector('.form-control');

let submit=document.querySelector('.submit-btn');

let ul=document.querySelector('.list-group');

let clear=document.querySelector('.form-control').value="";

submit.addEventListener("click",showItem);

document.addEventListener("keypress",function(e){
    switch(e.key){
        case 'Enter':
            showItem()
            break;
        default:
            break;
    }
})
ul.addEventListener('click',delItem);


function showItem(e){
    // e.preventDefault();
    if(list.value==""){
        alert("Enter Value !");
    }
    else{
    let li=document.createElement("li");
    
    let button= document.createElement("button");
    
    button.className='btn btn-danger btn-sm float-end delete';
    button.appendChild(document.createTextNode("X"));

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(list.value));

    ul.appendChild(li);
    li.appendChild(button);

    list.value=clear;
    }

}

function delItem(e){
    if(e.target.classList.contains('delete')){

        if(confirm('Are you sure to delete?')){
        
            let element=e.target.parentElement;
        
            element.style.display='none';
    }
    }
}