function alert(app, title, message) {
  [app displayDialog:message withTitle:title];
}

function hexColorToRGBAColor(hex, alpha) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
		red = parseInt(result[1], 16),
		green = parseInt(result[2], 16),
		blue = parseInt(result[3], 16),
		alpha = (typeof alpha !== 'undefined') ? alpha : 1;
	return NSColor.colorWithCalibratedRed_green_blue_alpha(red, green, blue, alpha)
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