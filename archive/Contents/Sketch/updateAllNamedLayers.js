@import 'vars.js';
@import 'utils.js';

var app;
var doc;
var page;
var layer;
var selection;
var textLayers = 0;
var updatedLayers = 0;
var app = [NSApplication sharedApplication];

function onSetUp(context) {
	doc = context.document;
	page = [doc currentPage];
}

function updateLayers() {
	layers = [page children];
	for (var i = 0; i < [layers count]; i++) {

		if([layers objectAtIndex:i].class() == textObjectClass) {
			textLayers ++;
			layer = [layers objectAtIndex:i];
			for(var j=0; j<layerNameToStylesList.length; j++) {
				if(layer.name().indexOf(layerNameToStylesList[j].name) != -1) {
					var textFont = NSFont.fontWithName_size_(layerNameToStylesList[j].style.font, layerNameToStylesList[j].style.size);
					layer.setIsEditingText(true);
					layer.addAttribute_value(NSFontAttributeName, textFont);
					layer.setLineHeight(layerNameToStylesList[j].style.height);
					layer.setIsEditingText(false);
					updatedLayers++;
				}
			}
		}
	}
	if(textLayers === 0) {
		alert(app, no_layers_text, rename_no_text);
	} else if(updatedLayers === 0) {
		alert(app, no_layers_matched, rename_no_matches);
	} else {
		doc.showMessage(updatedLayers + layers_were_updated);
	}
}

function textChanged(context) {
	selection = context.actionContext.oldSelection;
	layer = selection[0];
	if(layer.class() == textObjectClass) {
		for(var j=0; j<layerNameToStylesList.length; j++) {
			if(layer.name().indexOf(layerNameToStylesList[j].name) != -1) {
				var textFont = NSFont.fontWithName_size_(layerNameToStylesList[j].style.font, layerNameToStylesList[j].style.size);
				layer.setIsEditingText(true);
				layer.addAttribute_value(NSFontAttributeName, textFont);
				layer.setLineHeight(layerNameToStylesList[j].style.height);
				layer.setIsEditingText(false);
			}
		}
	}
}