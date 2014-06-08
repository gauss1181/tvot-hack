(function () {

	var debouncePositionNotes = debounce(function () {
			preview.positionNotes();
			preview.showNotes();
		}, 400),
		menuElement = null,
		previewMenu = {
			menuElement: null,

			isOpen: isOpen,
			toggle: toggle,
			open: open,
			close: close,
			debouncePositionNotes: debouncePositionNotes,

			width: 0
		},
		menuWidthValue = 300,
		iFrame = null,
		iFrameWindow = null;

	function isOpen () {
		return !menuElement.classList.contains('closed');
	}

	function toggle () {
		menuElement.classList.toggle('closed');
		previewMenu.width = isOpen()? menuWidthValue: 0;

		preview.hideNotes();
		debouncePositionNotes();

		preview.setAvailableRect();

		try {
			preview.scaleFrame();
		}
		catch (e) {}
	}

	// fluid.util._ is not available in external preview
	function debounce (func, wait, immediate) {
		var timeout, args, context, timestamp, result;
		return function() {
			context = this;
			args = arguments;
			timestamp = new Date();
			var later = function() {
				var last = (new Date()) - timestamp;
				if (last < wait) {
					timeout = setTimeout(later, wait - last);
				} else {
					timeout = null;
					if (!immediate) result = func.apply(context, args);
				}
			};
			var callNow = immediate && !timeout;
			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
			if (callNow) result = func.apply(context, args);
			return result;
		};
	};


// Menu events
document.addEventListener('DOMContentLoaded', function () {
	menuElement = previewMenu.menuElement = document.getElementById('previewMenu');
	// only try to add events if the preview Menu exists
	if (!menuElement) { return; }

	iFrame = document.getElementById('previewPage');
	iFrameWindow = iFrame.contentWindow;


	if (iFrame) {
		iFrame.addEventListener('load', function () {
			iFrameWindow = iFrame.contentWindow;

			if (menuElement.querySelector('#previewShowLinks').checked) {
				iFrameWindow.document.body.classList.add('highlight-links');
			}
		});
	}

	document.getElementById('restartPreview').addEventListener('click', function (event) {
		if (iFrameWindow && iFrameWindow.preview) {
			iFrameWindow.preview.restart();
		}
	});

	function sliderInput (event, ui) {
		iFrame.style.transition = 'all 0.3s';

		iFrame.style.webkitTransform = iFrame.style.mozTransform = iFrame.style.transform =
			'scale(' + ui.value + ')';

		iFrameWindow.preview.useZoomSlider = true;

		preview.pageScale = ui.value;

		preview.hideNotes();
		debouncePositionNotes();
	}
	function slideStart (event, ui) {
		$('#previewPage').addClass('user-scaling');
	}
	function slideStop (event, ui) {
		$('#previewPage').removeClass('user-scaling');
	}

	$('#previewZoomSlider').slider({
		range: 'min',
		min: 0.05,
		max: 4,
		step: 0.01,

		start: slideStart,
		slide: sliderInput,
		change: slideStop,
		stop: slideStop
	});

	document.getElementById('previewShowLinks').addEventListener('change', function (event) {
		if (iFrameWindow) {
			if (event.target.checked) {
				iFrameWindow.document.body.classList.add('highlight-links');
			}
			else {
				iFrameWindow.document.body.classList.remove('highlight-links');
			}
		}
	});

	document.getElementById('previewShowNotes').addEventListener('change', function (event) {
		if (event.target.checked) {
			preview.getNotesElement().style.display = '';
			preview.positionNotes();
		}
		else {
			preview.getNotesElement().style.display = 'none';
		}
	});

	document.getElementById('previewBestFit').addEventListener('click', function (event) {
		//stop using the slider value
		iFrameWindow.preview.useZoomSlider = false;

		preview.hideNotes();
		debouncePositionNotes();

		// recalculate zoom
		preview.scaleFrame();

		$('#previewZoomSlider').slider('value', preview.currentFrameScale);
	});

	document.getElementById('previewFullscreen').addEventListener('click', function (event) {
		//stop using the slider value
		iFrameWindow.preview.useZoomSlider = false;

		preview.hideNotes();
		debouncePositionNotes();

		// recalculate zoom
		preview.scaleFrame(undefined, undefined, true);

		$('#previewZoomSlider').slider('value', preview.currentFrameScale);
	});
});

window.previewMenu = previewMenu;

}());