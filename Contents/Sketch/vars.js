var nothing_selected = 'You haven\'t selected anything',
	no_layers_text = 'There are no text layers selected',
	no_layers_matched = 'No matches found',
	some_layers_text = 'Some selections not updated',
	some_layers_detail_text = 'Some of the selected layers are either not text or are not named to the style guide specs.',
	rename_layers_text = 'Please ensure your selected text layers match the names for the CreditWise design system style guide.'
	create_layers_text = 'Please select at least one text layer and name it to the CreditWise size style guide specs.',
	select_something = 'Please select something.',
	select_text = 'Please select a text element.',
	selected_non_text = 'The element(s) you have selected are either groups or not text layers.'
	name_layers_prompt = 'Please enter the name for your layers.',
	rename_no_matches = 'None of your text layers match names for the CreditWise design system style guide.'
	rename_no_text = 'Please create at least one text layer and name it to the CreditWise size style guide specs.',
	layers_were_updated = ' layers were updated.',
	textObjectClass = 'MSTextLayer',
	panelImage = 'cw_icon.png',
	panelHeader = 'CreditWise Design System Text Selector',
	panelSubHeader = 'Please choose the options for your text below:',
	fontSelectionTitle = 'Select Font',
	sizeSelectionTitle = 'Select Size',
	weightSelectionTitle = 'Select Weight',
	fontsList = ['Optimist', 'Proxima Nova'],
	typeSizesList = [12, 14, 16, 18, 20, 24, 32, 48, 64],
	lineHeightsList = [18, 21, 24, 27, 30, 36, 40, 64, 76],
	typeSizesLayerLabelList = 	[
									'Tiny',
									'Small',
									'Normal',
									'Medium-CW',
									'Medium',
									'Large-CW',
									'Large',
									'X-Large',
									'XX-Large'
								],
	fontWeightsList = 	[
							[
								['Regular', 'Semibold'],
								['Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light'],
								['ExtraLight'],
								['ExtraLight']
							],
							[
								['Regular', 'Semibold'],
								['Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light'],
								['Thin'],
								['Thin']
							]
						],
	cancelButtonText = 'Cancel',
	updateButtonText = 'Update Selections',
	cancelledMessage = 'Style updates cancelled.',
	updatedMessagePrefix = 'Updated selected text elements to ',
	updatedMessageSuffix = ', size ',
	updateSelectionsTriggerId = 1000,
	selectElementRectange = NSMakeRect(20, 20, 300, 25),
	cwStyleguideJson = [];