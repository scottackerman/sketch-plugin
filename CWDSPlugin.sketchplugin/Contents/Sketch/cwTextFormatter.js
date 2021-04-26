@import 'library.cocoascript';
@import 'vars.js';
@import 'utils.js';

function cwTextFormatter(context) {

	var app = [NSApplication sharedApplication];
    var doc = context.document;
    var selection = context.selection;
    var font;
    var size;
    var weight = null;
    var modal;
    var fontIndex = 0;
    var sizeIndex = 0;
    var weightIndex = 0;

    if(selection.count() == 0){
		alert(app, nothing_selected, select_text);
	} else	{
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
        processSizeSelect()
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
        userInterface.addTextLabelWithValue(fontSelectionTitle)
        font = createRadioButtons(fontsList, fontIndex)
        [font setCOSJSTargetFunction:processFontSelect]
        userInterface.addAccessoryView(font)

        // Size Dropdown Selector
        userInterface.addTextLabelWithValue(sizeSelectionTitle);
        size = Library.createSelect(typeSizesLabelList, 0, selectElementRectange);
        [size setCOSJSTargetFunction:processSizeSelect]
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
        // Ackerman bug.. Sketch doesn't seem to like 'Optimist Regular' but
        // does fine with just 'Optimist', Proxima Nova has no such issue
        if(fontNameAndWeight === 'Optimist Regular') {
            fontNameAndWeight = 'Optimist';
        }
    	for(var i = 0; i < selection.count(); i++) {
			if(selection[i].class() == textObjectClass) {
				textLayer = selection[i];
                var textFont = NSFont.fontWithName_size_(fontNameAndWeight, typeSizesList[sizeIndex]);
				textLayer.setIsEditingText(true);
				textLayer.addAttribute_value(NSFontAttributeName, textFont);
                textLayer.setLineHeight(lineHeightsList[sizeIndex]);
				textLayer.setIsEditingText(false);
			}
		}
        doc.showMessage(updatedMessagePrefix + fontNameAndWeight + updatedMessageSuffix + typeSizesList[sizeIndex]);
    }
}
