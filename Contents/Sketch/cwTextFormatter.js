@import 'library.cocoascript';
@import 'vars.js';
@import 'utils.js';

function cwTextFormatter(context) {
	var app = [NSApplication sharedApplication];
    var doc = context.document;
    var selection = context.selection;
    var font;
    var size;
    var modal;
    var layer;
    var weight = null;
    var fontIndex = 0;
    var sizeIndex = 0;
    var weightIndex = 0;

    if(selection.count() == 0){
		alert(app, nothing_selected, select_text);
	} else {
        if(selection.firstObject().class() == textObjectClass) {
			modal = createTypeSelectionPanel();
			processModalButtonHit(modal.runModal());
		} else {
			alert(app, select_text, selected_non_text);
		}
	}

    function processModalButtonHit(triggerId) {
        if (triggerId === updateSelectionsTriggerId) {
        	updateTextStyles();
        }
    }

    function processFontSelect() {
        fontIndex = [[font selectedCell] tag];
        processSizeSelect();
    }

    function processSizeSelect() {
        sizeIndex = [size indexOfSelectedItem];
        var newItems = fontWeightsList[fontIndex][sizeIndex];
        [weight removeAllItems];
        [weight addItemsWithTitles: newItems];
        [weight selectItemAtIndex: 0];
    }

    function processWeightSelect() {
        weightIndex = [weight indexOfSelectedItem];
    }

    function createTypeSelectionPanel() {
        var userInterface = COSAlertWindow.new();
        // Logo on panel
        userInterface.setIcon(NSImage.alloc().initByReferencingFile(context.plugin.urlForResourceNamed(panelImage).path()));
        // Header and subheader text
        userInterface.setMessageText(panelHeader);
        userInterface.setInformativeText(panelSubHeader);
        // Font Radio Button Selector
        userInterface.addTextLabelWithValue(fontSelectionTitle);
        font = createRadioButtons(fontsList, fontIndex);
        [font setCOSJSTargetFunction:processFontSelect];
        userInterface.addAccessoryView(font);
        // Size Dropdown Selector
        userInterface.addTextLabelWithValue(sizeSelectionTitle);
        size = Library.createSelect(typeSizesLabelList, 0, selectElementRectange);
        [size setCOSJSTargetFunction:processSizeSelect];
        userInterface.addAccessoryView(size);
        // Weight Dropdown Selector
        userInterface.addTextLabelWithValue(weightSelectionTitle);
        weight = Library.createSelect(fontWeightsList[fontIndex][sizeIndex], 0, selectElementRectange);
        [weight setCOSJSTargetFunction:processWeightSelect];
        userInterface.addAccessoryView(weight);
        // Update and cancel buttons
        userInterface.addButtonWithTitle(updateButtonText);
        userInterface.addButtonWithTitle(cancelButtonText);

        return userInterface;
    }

    function updateTextStyles() {
        var fontNameAndWeight = fontsList[fontIndex] + ' ' + fontWeightsList[fontIndex][sizeIndex][weightIndex];
        var layerName;
        var textFont;
        fontNameAndWeight = stripRegularFromOptimist(fontNameAndWeight);
        layerName = fontNameAndWeight.charAt(0).toLowerCase() + ' ' + typeSizesLayerLabelList[sizeIndex].toLowerCase();
        if(fontWeightsList[fontIndex][sizeIndex][weightIndex] === 'Light') {
            layerName += ' lt';
        } else if(fontWeightsList[fontIndex][sizeIndex][weightIndex] === 'Semibold') {
            layerName += ' sb';
        }
        for(var i = 0; i < selection.count(); i++) {
            if(selection[i].class() == textObjectClass) {
                layer = selection[i];
                var newLayerName = layer.name().replace(/[ ]?\[[a-z\- ]+\]/i, '');
                layer.setName(newLayerName + ' [' + layerName + ']');
                styleTextLayer(layer, fontNameAndWeight, typeSizesList[sizeIndex], lineHeightsList[sizeIndex]);
            }
        }
        doc.showMessage(updatedMessagePrefix + fontNameAndWeight + updatedMessageSuffix + typeSizesList[sizeIndex]);
    }
}