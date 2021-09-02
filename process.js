function setpos(obj,px,py,scalx,scaly){


	let items = document.getElementById(obj);

	items.style.height = scaly+"px";
		items.style.width = scalx+"px";
		
	let xxx =  window.innerWidth / (100/px) ;
	let yyy = window.innerHeight / (100 / py);
	let xr =  xxx - (scalx / 2);
	let yr =  yyy - (scaly / 2);
	console.log(xr+","+yr+" position of "+"'"+obj+"'" );
	console.log(items.style.height,items.style.width );
	 items.style.position = "absolute";
	items.style.top = yr+"px";
	items.style.left = xr+"px";
	
};
function ref(obj) {
	let a = document.getElementById(obj);
	return a;	
};
let lvl = 1;
let xp = 0;
let xpgoal = 10;
let clicks = 0;
let price = 5;
let clickp = 0;
let potato = 10000;
let gainer = 0;
let pricer = 15
let leveler = 1;
document.bgColor = "lightblue";
/*gscreen is the max size of the block(responisve size)*/
let gscreen = Math.min(window.innerHeight,window.innerWidth) / (100/40);


let maxw = window.innerWidth / (100/90);
let maxh = window.innerHeight / (100/15);


/*gain xp by click*/
document.onclick = function click() {
	xp+=gainer;
	xp++;
	size = Math.min(gscreen*(xp/xpgoal),gscreen);	
	setpos("block",50,50,size,size);
	setpos("barholder",50,10,maxw,maxh);
	setpos("buying",10,30,gscreen/2,gscreen/2);
	let size2 = maxw*(xp/xpgoal);
	setpos("xpholder",45,7.5,Math.min(maxw,maxw*(xp/xpgoal)),maxh);
	lvlcheck();
	canbuy();
};
/*possible if level up*/
function lvlcheck() {
	ref("xpholder").style.fontSize = Math.min((gscreen/4),maxw*(xp/xpgoal))+"px";
	if (xp > xpgoal){
	ref("xpholder").innerHTML = "level up !!!";		
	} else {
	ref("xpholder").innerHTML = "lvl:"+lvl+" "+xp+"/"+xpgoal;	
	};
};
/*click to level up*/
ref("xpholder").onclick = function iflvl() {
	if (xp > xpgoal){
		setpos("block",50,50,size,size);
	setpos("barholder",50,10,maxw,maxh);
	setpos("buying",10,30,gscreen/2,gscreen/2);
			setpos("xpholder",45,7.5,Math.min(maxw,maxw*(xp/xpgoal)),maxh);
		lvl++;
		xp-=xpgoal;
		clicks++;
		xpgoal+=15;
		if (lvl > 7){xpgoal+=20};
	};
};

/*clicking is how much free cash you will earn*/
function clicking() {
		
	setpos("barholder",50,10,maxw,maxh);
	setpos("buying",10,30,gscreen/2,gscreen/2);
		setpos("buys",10,60,gscreen/2,gscreen/2);
	
	
xp+=clicks;
lvlcheck();	
setTimeout(clicking,1000);
	
};
clicking();
 function canbuy() {
	if (xp > price){
		ref("buying").innerHTML = "buy"+price;
		ref("buys").innerHTML = "buy"+pricer;
			ref("block").innerHTML = xp;
			
	} else {
		ref("buying").innerHTML = price;
		ref("buys").innerHTML = "buy"+pricer;
		ref("block").innerHTML = xp;
	};
	
	
};
ref("buying").onclick = function bought() {
	if (xp > price){xp-=price; clickp++; clicks++; price = clickp*10};
};
ref("buys").onclick = function boughting() {
	if (xp > pricer){xp-=pricer; leveler++; gainer++; pricer = leveler*25};
};