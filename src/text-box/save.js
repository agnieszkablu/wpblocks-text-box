import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { content, alignment } = attributes;

	return (
		<RichText.Content
			{ ...useBlockProps.save( { className: `text-box text-box-align-${ alignment }` } ) }
			tagName="p"
			value={ content }
		/>
	);
}
