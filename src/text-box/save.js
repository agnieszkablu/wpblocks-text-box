import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( { attributes } ) {
	const { content, alignment } = attributes;

	const classes = classnames( `text-box text-box-align-${ alignment }` );

	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: classes,
			} ) }
			tagName="p"
			value={ content }
		/>
	);
}
