var animate,
start = new Date(),
    data = [],
    index = 0,
    end,
		speed=1000/20;

animate = (function () {
    var requestAnimationFrame;
    requestAnimationFrame = function (callback) {
        setTimeout(function () {
            callback(new Date());
        }, speed);
    };
    animate = function (duration, callback) {
        var finished, startTime, step;
        startTime = new Date();
        finished = true;
        step = function (timestemp) {
            var progress;
            progress = timestemp - startTime;
            if (progress >= duration) {
                callback(finished);
                return;
            }
            callback(progress);
            return requestAnimationFrame(step);
        };
        return requestAnimationFrame(step);
    };
    return animate;
})();

animate(10000,function(pro){
	if(pro===true){
		  var wrapper = document.createElement("div");
	    wrapper.setAttribute("style", "width:300px;height:100px; position:fixed;bottom:0; right:0; background-color:white;");
	    var container = document.createElement("div");
	    container.setAttribute("style", "width:100%;height:100px;");
	    wrapper.appendChild(container);
	    window.document.body.appendChild(wrapper);
			console.log(data);
	    Flotr.draw(container, [data], {
	        xaxis: {
	            minorTickFreq: 4
	        },
	        grid: {
	            minorVerticalLines: true
	        },
	        mouse: {
	            track: true
	        }
	    }
	
    );
	}else{
		end=new Date();
		data.push([speed/1000*index++,end-start]);
		start=end;
	}		
});


