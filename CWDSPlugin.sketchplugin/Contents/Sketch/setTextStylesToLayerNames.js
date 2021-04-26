@import 'vars.js';
@import 'utils.js';

var setTextStylesToLayerNames = function(context) {

	var app = [NSApplication sharedApplication];
	var doc = context.document;
	var selection = context.selection;
	var layer;
	var layerName;
	var textLayers = 0;
	var updatedLayers = 0;

	if(selection.count() === 0){
		alert(app, nothing_selected, select_text);
	} else	{
		for(var i = 0; i < selection.count(); i++) {
			if(selection[i].class() == textObjectClass) {
				textLayers ++;
				layer = selection[i];
				layerName = layer.name();
				for(var j=0; j<layerNameToStylesList.length; j++) {
					if(layerName == layerNameToStylesList[j].name) {
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
		if(updatedLayers > 0 && selection.count() > updatedLayers) {
			alert(app, some_layers_text, some_layers_detail_text);
		} else if(textLayers === 0) {
			alert(app, no_layers_text, create_layers_text);
		} else if(updatedLayers === 0) {
			alert(app, no_layers_matched, rename_layers_text);
		} else {
			doc.showMessage(updatedLayers + ' layers were updated.');
		}
	}
}