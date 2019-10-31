
    		const container = popmotion.styler(document.querySelector('.container'));
	

	popmotion.tween({ 
    	from: { 
        	scale: -1,
		opacity: 0,
		y:-200,
		x: -500
   	 	},
   	 to: { 
    	    	scale: 1,
		opacity: 1,
		y:00,
		x:00
    		},
    	duration: 1000
	}).start(container.set);
