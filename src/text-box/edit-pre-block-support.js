import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls,
	ContrastChecker,
	withColors,
	//ColorPalette,
	PanelColorSettings } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarDropdownMenu, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import './editor.scss';

function Edit( props ) {

	const { attributes, setAttributes, backgroundColor, textColor, setBackgroundColor, setTextColor } = props;
	const { content, alignment } = attributes;

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	}

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	}

	// const onBackgroundColorChange = ( newBackgroundColor ) => {
	// 	setAttributes( { backgroundColor: newBackgroundColor } );
	// }

	// const onTextColorChange = ( newTextColor ) => {
	// 	setAttributes( { textColor: newTextColor } );
	// }

	return (
			// this PanelColorSettings can be replaced by the support for color and background color in block.json
		<>
		<InspectorControls>
			<PanelColorSettings
				title={ __( 'Color settings', 'text-box' ) }
				initialOpen={ false }
				// disableCustomColors={ false } enable custom color picker
				colorSettings={[
					{
						value: backgroundColor.color,
						onChange: setBackgroundColor,
						label: __( 'Background color', 'text-box' ),
					},
					{
						value: textColor.color,
						onChange: setTextColor,
						label: __( 'Text color', 'text-box' ),
					},
				]}
			>
				<ContrastChecker
					backgroundColor={ backgroundColor.color }
					textColor={ textColor.color }
				/>
			</PanelColorSettings>
			<PanelBody title={ __( 'Inspector controls', 'text-box' ) } initialOpen={ true } icon={ 'admin-generic' }>
				<TextControl
					label={ __( 'Text', 'text-box' ) }
					value={ content }
					help={ __( 'Help text', 'text-box' ) }
					onChange={ onChangeContent }
				/>
				<ToggleControl
					label={ __( 'Toggle', 'text-box' ) }
					help={ __( 'Help text', 'text-box' ) }
					checked={ true }
					//onChange={ (value) => setAttributes( { toggle: value } ) }
				/>
				{/* <ColorPalette
					colors={ [
						{ name: 'red', color: '#f00' },
						{ name: 'green', color: '#0f0' },
						{ name: 'blue', color: '#00f' },
					] }
					value={ backgroundColor }
					onChange={ onBackgroundColorChange }
				/> */}
			</PanelBody>
		</InspectorControls>
			<BlockControls group="inline">
				<AlignmentToolbar value={ alignment } onChange={ onChangeAlignment } />
			</BlockControls>
			<BlockControls group="block">
				<p>Toolbar block</p>
			</BlockControls>
			<BlockControls group="other">
				{ content &&
					<ToolbarGroup>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={ __( 'Alignments', 'text-box' ) }
							controls={[
								{
									title: 'Align wide',
									icon: 'editor-alignwide',
									//onClick: () => setAttributes( { alignment: 'wide' } ),
								},
								{
									title: 'Justify',
									icon: 'editor-justify',
									//onClick: () => setAttributes( { alignment: 'justify' } ),
								},
							]}
						/>
					</ToolbarGroup>
				}
			</BlockControls>
			<RichText
				{ ...useBlockProps( {
					// this can be replaced by the support for color and background color in block.json
					// "supports": {
					// 	"html": false,
					// 	"color": true
					// },
					className: `text-box text-box-align-${ alignment }`,
					style: {
						backgroundColor: backgroundColor.color,
						color: textColor.color,
					}
				} ) }
				tagName="p"
				placeholder={ __( 'Write your text', 'text-box' ) }
				value={ content }
				allowedFormats={['core/bold']}
				onChange={ onChangeContent }
			/>
		</>
	);
}

export default withColors( {
	 backgroundColor: 'background-color', textColor: 'color'
} )( Edit );
