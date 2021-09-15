const todo = document.querySelector('input');
const list = document.getElementById('list');
const items=[];


function task(){
    const li=document.createElement('li');
    li.setAttribute('class','list-group-item')
    
     
     li.innerHTML=todo.value;
     
     todo.value="";
     const span=document.createElement('span');
        //span.innerHTML=`<button id="del"><i class="fas fa-trash-alt"></i></button><button id="upd"><i class="far fa-edit"></i></button> <button id="up"><i class="fas fa-chevron-up"></i></button id="down"> <button><i class="fas fa-chevron-down"></i></button> `
     const upd=document.createElement('button');
        const del=document.createElement('button');
        const up=document.createElement('button');
        const down=document.createElement('button');
        
        upd.innerHTML=`<i class="fas fa-edit"></i>`;
        del.innerHTML=`<i class="fas fa-trash-alt"></i>`;
        up.innerHTML=`<i class="fas fa-chevron-up"></i>`;
        down.innerHTML=`<i class="fas fa-chevron-down"></i>`;
        
        //document.body.append(span);
        //li.append(span);
        span.append(upd);
        span.append(del);
        span.append(up);
        span.append(down);
        span.setAttribute('id','sp');
        li.append(span);
        //span.style.marginRight='10%'; 
        items.push(li);
        console.log(items.indexOf(li));
        upd.addEventListener('click',()=>{
            update(li,span);
        });
        del.addEventListener('click',()=>{
            
            delt(items.indexOf(li));
            
        });

        up.addEventListener('click',()=>{
            upp(items.indexOf(li));
        }) 
        down.addEventListener('click',()=>{
            downn(items.indexOf(li));
        })
     addBtn();
     
}
function addBtn(){
    list.innerHTML="";
    items.forEach((li,index)=>{
        //console.log(li);
        //console.log(index);
        
        

        list.append(li);
        
        
       
        
    })
    
}
function update(li,span){
    li.style.display='none';
    const ipt=document.createElement('input');
    ipt.style.width='65%';
    const cancel=document.createElement('button');
    const upd2=document.createElement('button');
    cancel.innerHTML=`<i class="fas fa-window-close"></i>`;
    upd2.innerHTML=`<i class="fas fa-save"></i>`;
    li.after(ipt);
    ipt.after(upd2);
    ipt.after(cancel);
    ipt.value=li.innerText;
    cancel.addEventListener('click',()=>{
        ipt.remove();
        cancel.remove();
        upd2.remove();
        li.style.display='list-item';
    })
    upd2.addEventListener('click',()=>{
        if(ipt.value!=""){
            li.style.display='block';

            li.innerText=ipt.value;
            li.append(span);
            ipt.remove();
            cancel.remove();
            upd2.remove();
        }
        else{
            alert("Enter Something");
        }
        
    })
}

function delt(index){
    items.splice(index,1);
    
    

    addBtn();
    
}
function upp(index){
    //console.log(items[items.indexOf(li)]);
    if(index>0){
        var temp=items[index];
        items[index]=items[index-1];
        items[index-1]=temp;
    }
    addBtn();
    
    
}
function downn(index){
    if(index<items.length-1){
        var temp=items[index];
        items[index]=items[index+1];
        items[index+1]=temp;
    }
    addBtn();
}

const add = document.querySelector('#add');
 add.addEventListener('click',()=>{
     if(todo.value!="")
     task();
     else
     alert("Enter Something");
     
 })



 

