let list={
				"B_4_6": "Sadman Rahman",
    	"B_5_6": "Minhazul Islam",
    	"B_25_4": "Kazi Farabi",
    	"B_21_1": "Nahian Al Mahi",
    	"B_23_9": "Zuhair Anjum Ashfaq",
    	"B_25_4": "Ahmed Zulkarnine",
    	"B_29_4": "Shaharaj Khandaker"
}

let names={
    								"Kazi Farabi": "Farabi",
    								"Minhazul Islam": "Minhaz",
    								"Sadman Rahman": "Sadman",
    								"Zuhair Anjum Ashfaq": "Ashfaq",
    								"Nahian Al Mahi": "Mahi",
    								"Ahmed Zulkarnine": "Zulkar",
    								"Ahmad Yusha": "Yusha",
    								"Shaharaj Khandaker": "Shaharaj"
}

var today = new Date();
var d=today.getDate();
var m=today.getMonth()+1;
var Bday="B_"+String(d)+"_"+String(m);
var Frnd=list[Bday];
var tname=names[Frnd];
console.log(Frnd)
//setAll(Frnd);

function setAll() {
    document.getElementById("birthday-boy").innerHTML=Frnd;
    document.getElementById("boy").innerHTML=names[Frnd];
}


function setGift() {
    var cont=document.getElementById("boy");
for(var i=0; i<tname.length; i++){
    var elem=document.createElement('span');
				elem.innerText=tname[i];
				cont.appendChild(elem);
}

}
