import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import blockData from './block.json';

const v1 = {
	supports: {
		html: false,
		color: {
			text: true,
			background: true,
			gradients: true
		},
		spacing: {
			padding: true
		}
	},
	attributes: {
		...blockData.attributes,
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	save: ( { attributes } ) => {
		const { content, alignment, shadow, shadowOpacity } = attributes;

		const classes = classnames( `text-box text-box-align-${ alignment }`, {
			'has-shadow': shadow,
			[ `shadow-opacity-${ shadowOpacity }` ]: shadow && shadowOpacity,
		} );

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
};

export default v1;
