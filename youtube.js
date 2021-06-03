//On the subscriptions menu on the left, click on the ICON of the channel to go directly to Uploads, as some channels are difficult to navigate.
youtubeChannelUploads.js application/javascript
(function() {
	setTimeout(()=>{
		const el = document.querySelector('ytd-guide-section-renderer.ytd-guide-renderer.style-scope:nth-of-type(2)');
		el.firstElementChild.firstElementChild.setAttribute("style", "color:aqua; text-align: center;");
		el.lastElementChild.addEventListener('click', e=>{
			if (e.target.nodeName == 'IMG'){
		        location.href = e.target.parentNode.parentNode.parentNode.href +"/videos?view=0&sort=dd&shelf_id=1";
		        e.preventDefault();
		        e.stopImmediatePropagation();
		    } else {
		    	return;
		    }
		},false
		);
	},2500);
})();
