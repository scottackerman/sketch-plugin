@import 'vars.js';

var typeSizesLabelList = [
                            typeSizesLayerLabelList[0] + ' (' + typeSizesList[0] + 'px)',
                            typeSizesLayerLabelList[1] + ' (' + typeSizesList[1] + 'px)',
                            typeSizesLayerLabelList[2] + ' (' + typeSizesList[2] + 'px)',
                            typeSizesLayerLabelList[3] + ' (' + typeSizesList[3] + 'px)',
                            typeSizesLayerLabelList[4] + ' (' + typeSizesList[4] + 'px)',
                            typeSizesLayerLabelList[5] + ' (' + typeSizesList[5] + 'px)',
                            typeSizesLayerLabelList[6] + ' (' + typeSizesList[6] + 'px)',
                            typeSizesLayerLabelList[7] + ' (' + typeSizesList[7] + 'px)',
                            typeSizesLayerLabelList[8] + ' (' + typeSizesList[8] + 'px)'
                        ];

function buildCwStyleguideJson() {
    for(var i=0; i<fontWeightsList.length; i++) {
        for(var j=0; j<fontWeightsList[i].length; j++) {
            for(var k=0; k<fontWeightsList[i][j].length; k++) {
                var layerSuffix = '';
                if(fontWeightsList[i][j][k] === 'Light') {
                    layerSuffix = ' lt';
                } else if(fontWeightsList[i][j][k] === 'Semibold') {
                    layerSuffix = ' sb';
                }
                var name = '[' + fontsList[i].charAt(0).toLowerCase() + ' ' + typeSizesLayerLabelList[j].toLowerCase() + layerSuffix + ']';
                var fontName = fontsList[i] + ' ' + fontWeightsList[i][j][k];
                var obj = {};
                obj.name = name;
                obj.style = {};
                obj.style.font = fontName;
                obj.style.size = typeSizesList[j];
                obj.style.height = lineHeightsList[j];
                cwStyleguideJson.push(obj);
            }
        }
    }
}

buildCwStyleguideJson();


function alert(app, title, message) {
  [app displayDialog:message withTitle:title];
}

// Ackerman bug.. Sketch doesn't seem to like 'Optimist Regular' but
// does fine with just 'Optimist', Proxima Nova has no such issue
function stripRegularFromOptimist(str) {
    if(str === 'Optimist Regular') {
        str = 'Optimist';
    }
    return str;
}

function styleTextLayer(layer, typeface, size, lineHeight) {
    layer.setIsEditingText(true);
    typeface = stripRegularFromOptimist(typeface);
    var typeNameAndSize = NSFont.fontWithName_size_(typeface, size);
    layer.addAttribute_value(NSFontAttributeName, typeNameAndSize);
    layer.setLineHeight(lineHeight);
    layer.setIsEditingText(false);
}

function createRadioButtons(options, selectedItem) {
    // Work out how many rows and columns we need for the options
    var rows = Math.ceil(options.length / 2);
    var columns = ((options.length < 2) ? 1 : 2);
    // And which row and column contains the selected item
    var selectedRow = Math.floor(selectedItem / 2);
    var selectedColumn = selectedItem - (selectedRow * 2);
    // Make a prototype cell
    var buttonCell = [[NSButtonCell alloc] init];
        [buttonCell setButtonType:NSRadioButton]
    // And the matrix to contain the cells in Radio mode
    var buttonMatrix = [[NSMatrix alloc] initWithFrame: NSMakeRect(20.0, 20.0, 300.0, rows * 25) mode:NSRadioModeMatrix prototype:buttonCell numberOfRows:rows numberOfColumns:columns];
        [buttonMatrix setCellSize: NSMakeSize(140, 20)];
    // Add the options as cells
    for (i = 0; i < options.length; i++) {
        [[[buttonMatrix cells] objectAtIndex: i] setTitle: options[i]];
        [[[buttonMatrix cells] objectAtIndex: i] setTag: i];
    }
    // If there's an odd number of cells, hide the last one or it displays "Button".  There must be something i've missed that it displays "Button" in the first place!
    if (rows*columns > options.length) {
      [[[buttonMatrix cells] objectAtIndex:(options.length)] setTransparent: true];
      [[[buttonMatrix cells] objectAtIndex:(options.length)] setEnabled: false];
    }
    // Select the default one
    [buttonMatrix selectCellAtRow: selectedRow column: selectedColumn]
    // Return the matrix so we can display it
    return buttonMatrix;
}