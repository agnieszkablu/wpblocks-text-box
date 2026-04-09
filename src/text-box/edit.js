import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss';
import classnames from 'classnames';


function Edit( props ) {

	const { attributes, setAttributes } = props;
	const { content, alignment, shadow, shadowOpacity } = attributes;

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	}

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	}

	const toggleShadow = () => {
		setAttributes( { shadow: ! shadow } );
	}

	const onChangeShadowOpacity = ( newShadowOpacity ) => {
		setAttributes( { shadowOpacity: newShadowOpacity } );
	}

	const classes = classnames( `text-box text-box-align-${ alignment }`, {
		'has-shadow': shadow,
		[ `shadow-opacity-${ shadowOpacity }` ]: shadow && shadowOpacity,
	} );



	return (
		<>
		<BlockControls
				controls={ [
					{
						icon: "admin-page",
						title: __( 'Toggle Shadow', 'text-box' ),
						onClick: toggleShadow,
						isActive: shadow
					}
				] }
			>
			<AlignmentToolbar value={ alignment } onChange={ onChangeAlignment } />
		</BlockControls>
		<InspectorControls group='styles'>
				<PanelBody title={ __( 'Shadow Settings', 'text-box' ) }>
					<RangeControl
						label={ __( 'Shadow Opacity', 'text-box' ) }
						value={ shadowOpacity }
						onChange={ onChangeShadowOpacity }
						min={ 10 }
						max={ 40 }
						step={ 10 }
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				{ ...useBlockProps( {
					className: classes,
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
