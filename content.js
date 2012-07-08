window.document.addEventListener("DOMContentLoaded",function(){
	console.log("domready");
});
window.addEventListener("load",function(){
	console.log("load");
});
var start=new Date(),
data=[],
index=0,
end,
speed=50,

interval=setInterval(function(){
	end=new Date();
	
	//console.log(end-start);
	data.push([speed/1000*index++,end-start]);
	start=end;
},speed);

setTimeout(function(){
	clearInterval(interval);
	var wrapper=document.createElement("div");
  wrapper.setAttribute("style","width:300px;height:100px; position:fixed;bottom:0; right:0; background-color:white;");
  var container=document.createElement("div");
  container.setAttribute("style","width:100%;height:100px;");
  wrapper.appendChild(container);
  window.document.body.appendChild(wrapper);
	Flotr.draw(container,[data],
 		{
 		   xaxis: {
 		     minorTickFreq: 4
 		   }, 
 		   grid: {
 		     minorVerticalLines: true
 		   },
			 mouse:{
					track:true
			 }
 		 }
					
	);
},16*1000);

