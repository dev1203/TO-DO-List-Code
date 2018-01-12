var removeSVG='<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g> <g> <path class="noFill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3 c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9 C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7 c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2 c0.6,0,1.1,0.5,1.1,1.1V7z"/> </g> <g> <g> <path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/> </g> <g> <path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z" /> </g> <g> <path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8 C14.6,17.7,14.3,18,14,18z"/> </g> </g> </g> </svg>';
var completeSVG='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><style type="text/css">.st0{fill:none}.st1{fill:#26B999}</style><rect y="0" class="st0" width="22" height="22"/> <g> <path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8 c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/> </g> </svg>';
var array=[];
var count=0;
var completed_array=[];
window.onload=function(){
    var item=JSON.parse(localStorage.getItem('Name_of_task'));
    if(item) {
        var e = item.length;
        for (var i = 0; i < e; i++) {
                additem(item[i]);
                count++;
        }
        for (var j = 0; j < e; j++) {
            array.push(item[j]);
        }
    }
    var compl=JSON.parse(localStorage.getItem('Completed'));
    if(compl){
        var e = compl.length;
        for (var i = 0; i < e; i++) {
            if(compl[i]) {
                append_completed(compl[i]);
                completed_array.push(compl[j]);
            }
        }
    }
}

function append(){

        var item=document.getElementById('first_name2').value;
        array.push(item);

        if(item){
            additem(item);
            localStorage.setItem('Name_of_task',JSON.stringify(array));
            count++;
        }
        document.getElementById('first_name2').value='';


}
function completed(){
    var completed_task=array[this.parentNode.parentNode.id];
    var to_removed=this.parentNode.parentNode;
    var remove=to_removed.parentNode;
    array.splice(to_removed.id,1);
    localStorage.setItem('Name_of_task',JSON.stringify(array));
    remove.removeChild(to_removed);
    append_completed(completed_task);
    completed_array.push(completed_task);
    console.log(completed_array);
    localStorage.setItem('Completed',JSON.stringify(completed_array));
}
function append_completed(task){

    var list=document.getElementById('comp');
    var item=document.createElement('li');
    item.innerHTML=task;

    var buttons=document.createElement('div');
    buttons.classList.add('buttons');

    var button=document.createElement('button');
    button.classList.add('remove');
    button.innerHTML=removeSVG;

    button.onclick=function(){
        var j=this.parentNode.parentNode;
        var re=j.parentNode;
        re.removeChild(item);
        completed_array.splice(j.id,1);
        localStorage.setItem('Completed',JSON.stringify(completed_array));
        count--;
    }
    buttons.appendChild(button);
    item.appendChild(buttons);
    list.insertBefore(item,list.childNodes[0]);
}
function additem(text){

    var list=document.getElementById('todo');

    var item=document.createElement('li');
    item.innerHTML=text;
    item.id=count;

    var buttons=document.createElement('div');
    buttons.classList.add('buttons');

    var button=document.createElement('button');
    button.classList.add('remove');
    button.innerHTML=removeSVG;


    var complete=document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML=completeSVG;

    button.onclick=function(){
       var j=this.parentNode.parentNode;
        var re=j.parentNode;
        re.removeChild(item);
        array.splice(j.id,1);
        localStorage.setItem('Name_of_task',JSON.stringify(array));
        count--;
        }
complete.addEventListener('click',completed);
    buttons.appendChild(button);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.insertBefore(item,list.childNodes[0]);
}
