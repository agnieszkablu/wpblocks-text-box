import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarDropdownMenu, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { content, alignment } = attributes;

	const onChangeContent = ( value ) => {
		setAttributes( { content: value } );
	}

	const onChangeAlignment = ( value ) => {
		setAttributes( { alignment: value } );
	}

	return (
		<>
		<InspectorControls>
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
					className: `text-box text-box-align-${ alignment }`
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
