import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import './editor.scss';

function Edit( props ) {

	const { attributes, setAttributes } = props;
	const { content, alignment } = attributes;

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	}

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	}

	return (
		<>
			<BlockControls group="inline">
				<AlignmentToolbar value={ alignment } onChange={ onChangeAlignment } />
			</BlockControls>

			<RichText
				{ ...useBlockProps( {
					className: `text-box text-box-align-${ alignment }`,
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

export default Edit;
