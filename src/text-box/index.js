import { registerBlockType, createBlock } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';

registerBlockType( metadata.name, {
	icon: {
		src: (<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z'/></svg>),
		background: '#f03',
		foreground: '#fff',
	},
	edit: Edit,
	save,
	variations: [
		{
			name: 'text-box/with-shadow',
			title: __( 'Text Box with Shadow', 'text-box' ),
			icon: 'wordpress',
			description: __( 'A text box with a shadow effect.', 'text-box' ),
			attributes: {
				gradient: 'accent-to-primary',
				shadow: true,
				shadowOpacity: 30,
			},
		},
	],
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( { content, align } ) => {
					return createBlock( 'wpblocks/text-box', {
						content,
						alignment: align,
					} );
				},
			},
			{
				type: 'enter',
				regExp: /textbox/i,
				transform: () => {
					return createBlock( 'wpblocks/text-box', {
						shadow: true
					} );
				}
			},
			{
				type: 'prefix',
				prefix: 'textbox',
				transform: () => {
					return createBlock( 'wpblocks/text-box', {
						gradient: 'accent-to-primary',
					} );
				}
			}
		],
		to : [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				isMatch: ( { content}) => {
					return !! content;
				},
				transform: ( { content, alignment } ) => {
					return createBlock( 'core/paragraph', {
						content,
						align: alignment,
					} );
				}
			}
		]
	},
} );
