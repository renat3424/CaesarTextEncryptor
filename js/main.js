let menubt=document.getElementById("menubt");
let aside=document.querySelector("aside");

let main=document.querySelector(".main");
let encript=document.getElementById("encrypt");
let sidebar=document.querySelector(".sidebar");
let nav=document.querySelector("nav");
let encoding=document.querySelector(".encoding");
let radiobuttons=document.querySelector(".radiobuttons");
let back=document.getElementById("back");
let saveqs=document.getElementById("saveqs");
let output=document.getElementById("output");
let shiftfield=document.getElementById("shiftfield");
let saver=document.getElementById("saver");
let decrypt=document.getElementById("decrypt");
let saveform=document.querySelector(".saveform");
let key=document.getElementById("key");
let keys=document.querySelector(".keys");
let deleting=document.querySelector(".deleting");
let open=document.getElementById("open");
let backkey=document.querySelector(".backkey");
let backdel=document.querySelector(".backdel");
let backdecr=document.getElementById("backdecr");
let okdecr=document.getElementById("okdecr");
let decrypting=document.querySelector(".decrypting");
let fieldshift=document.getElementById("fieldshift");
let justifyleft=document.getElementById("justifyLeft");
let justifycenter=document.getElementById("justifyCenter");
let o=document.getElementById("o");
let copy=document.getElementById("copy");
let dd=document.getElementById("del");
let bold=document.getElementById("bold");
let italic=document.getElementById("italic");
let underline=document.getElementById("underline");
let selectAll=document.getElementById("selectAll");


var edit=function(){

document.execCommand(this.id, false, null);

}

menubt.addEventListener('click', Menu);
encript.addEventListener('click', Encript);
radiobuttons.addEventListener('click', Radiobuttons);
back.addEventListener('click', Back);
saveqs.addEventListener('click', Saveqs);
decrypt.addEventListener('click', Decrypt);
saver.addEventListener('click', Saver);
open.addEventListener('click', Open);
backkey.addEventListener('click', Backkey);
backdel.addEventListener('click', Backdel);
backdecr.addEventListener('click', Backdecr);
okdecr.addEventListener('click', Okdecr);
justifyleft.addEventListener('click', edit);
justifycenter.addEventListener('click', edit);

copy.addEventListener('click', edit);
selectAll.addEventListener('click', edit);
underline.addEventListener('click', edit);
bold.addEventListener('click', edit);
italic.addEventListener('click', edit);
dd.addEventListener('click', Dd);
let del=document.getElementById("delete");
del.addEventListener('click', Delete);
o.addEventListener('click', O);




function numb(decimal, ar) {

    let r=ar.length-1;

     if (decimal<=r && decimal>=0) {

           return decimal;
     }

    if (decimal>r) {

    	 return numb(decimal-r-1, ar);
    }else if(decimal<0){

    	 return numb(r+decimal+1, ar);
    }


}


function algo(text, shift, alph) {

    let a1=alph.map(function (e) {
    	return e.toUpperCase();
    });

   
    let res="";
    for (let i = 0; i < text.length; i++) {
    	
                let c=text[i];

                if (alph.includes(c)) {

                     res=res+alph[numb(Number(alph.indexOf(c))+Number(shift), alph)];

                }else if(a1.includes(c)){

                      res=res+a1[numb(Number(a1.indexOf(c))+Number(shift), a1)];

                }else{


                	res=res+c;
                }
              
    }

          return res;
}





function Menu() {
	

	if (menubt.checked) {
       
        
        main.firstElementChild.style.width="100%";
        aside.style.width="0%";
         
	}else{

       
       main.firstElementChild.style.width="70%";
       aside.style.width="30%";

	}
}

function Encript() {

		if (encoding.children[0]!==radiobuttons) {
encoding.insertBefore(radiobuttons, encoding.firstElementChild);
saveqs.removeEventListener('click', Ok);
	saveqs.addEventListener('click', Saveqs);
}
	sidebar.style.display="none";
	encoding.style.display="contents";

}

function Radiobuttons() {
		if (radiobuttons.children[0].checked) {
       
        radiobuttons.children[1].style.background="#6b6b6b";
        radiobuttons.children[3].style.background="#1a1818";
         
	}

	  if (radiobuttons.children[2].checked){

      radiobuttons.children[3].style.background="#6b6b6b";
        radiobuttons.children[1].style.background="#1a1818";

	}

}


function Back() {
    
     let parent=back.parentNode.parentNode;
     let childNodes=parent.parentNode.children;
    let child_index;
   for (let i = 0; i<childNodes.length;  i++) {
   	   if (parent===childNodes[i]) {

   	   	  child_index=i;
   	   }
   }

   let par=parent.parentNode.children[child_index-1];

   parent.style.display="none";
	par.style.display="contents";



}

function Save() {
	encoding.style.display="none";
	saveform.style.display="contents";
}
function Saveqs() {

	
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
if (output.textContent==="") {
         alert("You have no text!");
         return;
}

if (shiftfield.value==="") {

	alert("Enter shift!");
	return;
}
let text=output.textContent;
let shift=shiftfield.value;
		if (radiobuttons.children[0].checked) {
             output.textContent="";
             shiftfield.value="";
             output.textContent=algo(text, shift, arr_ru);
             
         
	}else if(radiobuttons.children[2].checked){

         output.textContent="";
             shiftfield.value="";
      output.textContent=algo(text, shift, arr_en);
      

	}else{
           alert("Choose language!");
           return;
	}

	if(confirm("Save current data?")){

             Save();
             output.contentEditable="false";
	}


}


function Decrypt() {
	if (encoding.children[0]===radiobuttons) {
encoding.removeChild(radiobuttons);
saveqs.removeEventListener('click', Saveqs);
	saveqs.addEventListener('click', Ok);
}
sidebar.style.display="none";
	encoding.style.display="contents";

	
    
}


function Ok(){

let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
if (!radiobuttons.children[0].checked && !radiobuttons.children[2].checked) {

 alert("You did not encrypt this text yet!");

}

if (output.textContent==="") {
         alert("You have no text!");
}

if (shiftfield.value==="") {

	alert("Enter shift!");
}
let text=output.textContent;
let shift=-shiftfield.value;
		if (radiobuttons.children[0].checked) {
             output.textContent="";
             shiftfield.value="";
             output.textContent=algo(text, shift, arr_ru);
         
	}else if(radiobuttons.children[2].checked){

         output.textContent="";
             shiftfield.value="";
      output.textContent=algo(text, shift, arr_en);

	}


}



function Saver() {
	if (key.value==="") {

		 alert("Enter name!");
		 return;
	}
    
    let q;
     if (radiobuttons.children[0].checked) {
           
           q="R"+key.value;


     }else if (radiobuttons.children[2].checked) {
            q="E"+key.value;

     }
    
      if (localStorage.getItem(q)===null) {

      	try{
    localStorage.setItem(q, output.textContent);
}catch(e){
      
       if (e.code==22) {

       	 alert("Your storage is full, delete something!");
           output.contentEditable="true";
      sidebar.style.display="contents";
	saveform.style.display="none";

		 return;

       }
         alert("Smt unknown happened!");
         output.contentEditable="true";
      sidebar.style.display="contents";
	saveform.style.display="none";

		 return;
}
}else{

	  alert("Element with such name already exist!!");
	  output.contentEditable="true";
      sidebar.style.display="contents";
	saveform.style.display="none";

		 return;
} 
    output.contentEditable="true";
      sidebar.style.display="contents";
	saveform.style.display="none";

}

let fd=0;

function Open() {
        if (fd!==localStorage.length) {
        	
		              while(keys.firstElementChild.firstElementChild!==backkey){

                      keys.removeChild(keys.firstElementChild);

            }
        
	for (let i = 0; i < localStorage.length; i++) {
		let q=localStorage.key(i);
		q=q.substr(1);

		let btn=document.createElement("BUTTON");
		let li=document.createElement("li");
		btn.classList.add("stored");
		btn.textContent=q;
		btn.id=i+10;
		btn.onclick=texter;
		li.appendChild(btn);
		keys.insertBefore(li, keys.firstElementChild);
        fd=localStorage.length;
		
	}}
	sidebar.style.display="none";
	keys.style.display="contents";

}

let key1="";
let text1="";
let lang1="";

texter=function(){


      let str=document.getElementById(this.id).textContent;
       let str1="R"+str;
       let str2="E"+str;

	if (localStorage.getItem(str1)!==null) {
         
		
		key1=str1;
		text1=localStorage.getItem(str1);
		lang1="R";

	}else{
         
       
        key1=str2;
		text1=localStorage.getItem(str2);
		lang1="E";

	}

    keys.style.display="none";
	decrypting.style.display="contents";




}







let df=0;
function Delete() {
        if (df!==localStorage.length) {
        	
            while(deleting.firstElementChild.firstElementChild!==backdel){

                      deleting.removeChild(deleting.firstElementChild);

            }
        	
	for (let i = 0; i < localStorage.length; i++) {
		let q=localStorage.key(i);
		q=q.substr(1);
        let btn=document.createElement("BUTTON");
		let li=document.createElement("li");
		btn.classList.add("delbut");
		btn.textContent=q;
		btn.id=i;
		btn.onclick=reply_click;
		li.appendChild(btn);
		deleting.insertBefore(li, deleting.firstElementChild);
        df=localStorage.length;
   
 
	
	}}
	sidebar.style.display="none";
	deleting.style.display="contents";

}
 reply_click=function() {
	
       let str=document.getElementById(this.id).textContent;
       let str1="R"+str;
       let str2="E"+str;

	if (localStorage.getItem(str1)!==null) {
         
		localStorage.removeItem(str1);
		deleting.removeChild(document.getElementById(this.id).parentNode);
		df=localStorage.length;
	}else{
         
        localStorage.removeItem(str2);
        deleting.removeChild(document.getElementById(this.id).parentNode);
        df=localStorage.length;

	}

}

function Backkey(){

    
sidebar.style.display="contents";
	keys.style.display="none";

}

function Backdel(){

    
sidebar.style.display="contents";
	deleting.style.display="none";

}


function Backdecr(){

         key1="";
		text1="";
		lang1="";
   keys.style.display="contents";
	decrypting.style.display="none";


}


function Okdecr(){

       let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];





if (fieldshift.value==="") {

	alert("Enter shift!");
}
let text=text1;
let shift=-fieldshift.value;
		if (lang1=="R") {
             output.textContent="";
             fieldshift.value="";
             output.textContent=algo(text, shift, arr_ru);
         
	}else if(lang1=="E"){

         output.textContent="";
             fieldshift.value="";
      output.textContent=algo(text, shift, arr_en);

	}
        key1="";
		text1="";
		lang1="";
		 keys.style.display="contents";
	decrypting.style.display="none";

}



function Dd(argument) {
document.execCommand("delete", false, null);	
}
function Paste(argument) {

 document.execCommand("paste");
}

function readFile(){

  const reader=new FileReader();
  reader.onload=function(){
               output.textContent="";
               output.textContent=reader.result;
  }
  reader.readAsText(this.files[0]);
  

}
function O(){


  let In = document.createElement("input");
  In.type="file";
  In.addEventListener("change", readFile, false);
  In.click();

  
}


