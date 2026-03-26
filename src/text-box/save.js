import { useBlockProps, RichText, getColorClassName } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( { attributes } ) {
	const { content, alignment, backgroundColor, textColor, customBackgroundColor, customTextColor } = attributes;
	const backgroundColorClass = getColorClassName( 'background-color', backgroundColor );
	const textColorClass = getColorClassName( 'color', textColor );
	const classes = classnames( `text-box text-box-align-${ alignment }`, {
		[ textColorClass ]: textColorClass,
		[ backgroundColorClass ]: backgroundColorClass,
	} );

	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: classes,
				style: {
						backgroundColor: backgroundColor ? undefined : customBackgroundColor,
						color: textColor ? undefined : customTextColor,
					}
			} ) }
			tagName="p"
			value={ content }
		/>
	);
}
