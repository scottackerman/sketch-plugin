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
	typeSizesLabelList = [
							'Tiny (12px)',
							'Small (14px)',
							'Normal (16px)',
							'Medium-CW (18px)',
							'Medium (20px)',
							'Large-CW (24px)',
							'Large (32px)',
							'X-Large (48px)',
							'XX-Large (64px)'
						],
	typeSizesLayerLabelList = 	[
									'tiny',
									'small',
									'normal',
									'medium-cw',
									'medium',
									'large-cw',
									'large',
									'x-large',
									'xx-large'
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
								['Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light', 'Regular', 'Semibold'],
								['Light'],
								['Thin'],
								['Thin']
							]
						],
	fontWeightsListLayerSuffix = 	[
										[
											['', 'sb'],
											['', 'sb'],
											['lt', '', 'sb'],
											['lt', '', 'sb'],
											['lt', '', 'sb'],
											['lt', '', 'sb'],
											[''],
											[''],
											['']
										],
										[
											['', 'sb'],
											['', 'sb'],
											['', 'sb'],
											['lt', '', 'sb'],
											['lt', '', 'sb'],
											['lt', '', 'sb'],
											[''],
											[''],
											['']
										]
									],
	layerNameToStylesList = [
								{
									'name': '[p tiny]',
									'style': {
										'font': fontsList[1] + ' Regular',
										'size': typeSizesList[0],
										'height': lineHeightsList[0]
									}
								},
								{
									'name': '[p tiny sb]',
									'style': {
										'font': fontsList[1] + ' Semibold',
										'size': typeSizesList[0],
										'height': lineHeightsList[0]
									}
								},
								{
									'name': '[o tiny]',
									'style': {
										'font': fontsList[0],
										'size': typeSizesList[0],
										'height': lineHeightsList[0]
									}
								},
								{
									'name': '[o tiny sb]',
									'style': {
										'font': fontsList[0] + ' Semibold',
										'size': typeSizesList[0],
										'height': lineHeightsList[0]
									}
								},
								{
									'name': '[p small]',
									'style': {
										'font': fontsList[1] + ' Regular',
										'size': typeSizesList[1],
										'height': lineHeightsList[1]
									}
								},
								{
									'name': '[p small sb]',
									'style': {
										'font': fontsList[1] + ' Semibold',
										'size': typeSizesList[1],
										'height': lineHeightsList[1]
									}
								},
								{
									'name': '[o small]',
									'style': {
										'font': fontsList[0],
										'size': typeSizesList[1],
										'height': lineHeightsList[1]
									}
								},
								{
									'name': '[o small sb]',
									'style': {
										'font': fontsList[0] + ' Semibold',
										'size': typeSizesList[1],
										'height': lineHeightsList[1]
									}
								},
								{
									'name': '[p normal]',
									'style': {
										'font': fontsList[1] + ' Regular',
										'size': typeSizesList[2],
										'height': lineHeightsList[2]
									}
								},
								{
									'name': '[p normal lt]',
									'style': {
										'font': fontsList[1] + ' Light',
										'size': typeSizesList[2],
										'height': lineHeightsList[2]
									}
								},
								{
									'name': '[p normal sb]',
									'style': {
										'font': fontsList[1] + ' Semibold',
										'size': typeSizesList[2],
										'height': lineHeightsList[2]
									}
								},
								{
									'name': '[o normal]',
									'style': {
										'font': fontsList[0],
										'size': typeSizesList[2],
										'height': lineHeightsList[2]
									}
								},
								{
									'name': '[o normal lt]',
									'style': {
										'font': fontsList[0] + ' Light',
										'size': typeSizesList[2],
										'height': lineHeightsList[2]
									}
								},
								{
									'name': '[o normal sb]',
									'style': {
										'font': fontsList[0] + ' Semibold',
										'size': typeSizesList[2],
										'height': lineHeightsList[2]
									}
								},
								{
									'name': '[p medium-cw]',
									'style': {
										'font': fontsList[1] + ' Regular',
										'size': typeSizesList[3],
										'height': lineHeightsList[3]
									}
								},
								{
									'name': '[p medium-cw lt]',
									'style': {
										'font': fontsList[1] + ' Light',
										'size': typeSizesList[3],
										'height': lineHeightsList[3]
									}
								},
								{
									'name': '[p medium-cw sb]',
									'style': {
										'font': fontsList[1] + ' Semibold',
										'size': typeSizesList[3],
										'height': lineHeightsList[3]
									}
								},
								{
									'name': '[o medium-cw]',
									'style': {
										'font': fontsList[0],
										'size': typeSizesList[3],
										'height': lineHeightsList[3]
									}
								},
								{
									'name': '[o medium-cw lt]',
									'style': {
										'font': fontsList[0] + ' Light',
										'size': typeSizesList[3],
										'height': lineHeightsList[3]
									}
								},
								{
									'name': '[o medium-cw sb]',
									'style': {
										'font': fontsList[0] + ' Semibold',
										'size': typeSizesList[3],
										'height': lineHeightsList[3]
									}
								},
								{
									'name': '[p medium]',
									'style': {
										'font': fontsList[1] + ' Regular',
										'size': typeSizesList[4],
										'height': lineHeightsList[4]
									}
								},
								{
									'name': '[p medium lt]',
									'style': {
										'font': fontsList[1] + ' Light',
										'size': typeSizesList[4],
										'height': lineHeightsList[4]
									}
								},
								{
									'name': '[p medium sb]',
									'style': {
										'font': fontsList[1] + ' Semibold',
										'size': typeSizesList[4],
										'height': lineHeightsList[4]
									}
								},
								{
									'name': '[o medium]',
									'style': {
										'font': fontsList[0],
										'size': typeSizesList[4],
										'height': lineHeightsList[4]
									}
								},
								{
									'name': '[o medium lt]',
									'style': {
										'font': fontsList[0] + ' Light',
										'size': typeSizesList[4],
										'height': lineHeightsList[4]
									}
								},
								{
									'name': '[o medium sb]',
									'style': {
										'font': fontsList[0] + ' Semibold',
										'size': typeSizesList[4],
										'height': lineHeightsList[4]
									}
								},
								{
									'name': '[p large-cw]',
									'style': {
										'font': fontsList[1] + ' Regular',
										'size': typeSizesList[5],
										'height': lineHeightsList[5]
									}
								},
								{
									'name': '[p large-cw lt]',
									'style': {
										'font': fontsList[1] + ' Light',
										'size': typeSizesList[5],
										'height': lineHeightsList[5]
									}
								},
								{
									'name': '[p large-cw sb]',
									'style': {
										'font': fontsList[1] + ' Semibold',
										'size': typeSizesList[5],
										'height': lineHeightsList[5]
									}
								},
								{
									'name': '[o large-cw]',
									'style': {
										'font': fontsList[0],
										'size': typeSizesList[5],
										'height': lineHeightsList[5]
									}
								},
								{
									'name': '[o large-cw lt]',
									'style': {
										'font': fontsList[0] + ' Light',
										'size': typeSizesList[5],
										'height': lineHeightsList[5]
									}
								},
								{
									'name': '[o large-cw sb]',
									'style': {
										'font': fontsList[0] + ' Semibold',
										'size': typeSizesList[5],
										'height': lineHeightsList[5]
									}
								},
								{
									'name': '[p large]',
									'style': {
										'font': fontsList[1] + ' Light',
										'size': typeSizesList[6],
										'height': lineHeightsList[6]
									}
								},
								{
									'name': '[o large]',
									'style': {
										'font': fontsList[0] + ' Light',
										'size': typeSizesList[6],
										'height': lineHeightsList[6]
									}
								},
								{
									'name': '[p x-large]',
									'style': {
										'font': fontsList[1] + ' Thin',
										'size': typeSizesList[7],
										'height': lineHeightsList[7]
									}
								},
								{
									'name': '[o x-large]',
									'style': {
										'font': fontsList[0] + ' ExtraLight',
										'size': typeSizesList[7],
										'height': lineHeightsList[7]
									}
								},
								{
									'name': '[p xx-large]',
									'style': {
										'font': fontsList[1] + ' Thin',
										'size': typeSizesList[8],
										'height': lineHeightsList[8]
									}
								},
								{
									'name': '[o xx-large]',
									'style': {
										'font': fontsList[0] + ' ExtraLight',
										'size': typeSizesList[8],
										'height': lineHeightsList[8]
									}
								}
							],
	cancelButtonText = 'Cancel',
	updateButtonText = 'Update Selections',
	cancelledMessage = 'Style updates cancelled.',
	updatedMessagePrefix = 'Updated selected text elements to ',
	updatedMessageSuffix = ', size ',
	updateSelectionsTriggerId = 1000,
	selectElementRectange = NSMakeRect(20, 20, 300, 25);
	// alert_title = 'WTF ARE YOU DOING??',
	// alert_content = 'Ogo is watching you.. are you sure you want to make that change??',
	// message_content = 'You have changed the formatting of a design system element. Somewhere, you\'ve made a puppy cry. For real.',
	 

