@import 'vars.js';
@import 'utils.js';

var setTextStylesToLayerNames = function(context) {
	var app = [NSApplication sharedApplication];
	var doc = context.document;
	var selection = context.selection;
	var layer;
	var userInput;
	var layerName;
	var textLayers = 0;
	var updatedLayers = 0;

	if(selection.count() === 0){
		alert(app, nothing_selected, select_text);
	} else	{
		userInput = '[' + context.api().getStringFromUser(name_layers_prompt, '') + ']';
		if (userInput == nil) {
			return;
		}
		for(var i = 0; i < selection.count(); i++) {
			if(selection[i].class() == textObjectClass) {
				textLayers ++;
				layer = selection[i];
				layerName = layer.name().replace(/[ ]?\[[a-z\- ]+\]/i, '') + ' ' + userInput;
				for(var j=0; j<cwStyleguideJson.length; j++) {
					if(layerName.indexOf(cwStyleguideJson[j].name) != -1) {
						layer.setName(layerName);
						styleTextLayer(layer, cwStyleguideJson[j].style.font, cwStyleguideJson[j].style.size, cwStyleguideJson[j].style.height);
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
			doc.showMessage(updatedLayers + layers_were_updated);
		}
	}
}