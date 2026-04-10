<?php
// This file is generated. Do not modify it manually.
return array(
	'text-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpblocks/text-box',
		'version' => '0.1.0',
		'title' => 'Text Box',
		'category' => 'text',
		'description' => 'A simple text box block.',
		'keywords' => array(
			'text',
			'box',
			'paragraph'
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => true,
				'gradients' => true
			),
			'spacing' => array(
				'padding' => true
			)
		),
		'styles' => array(
			array(
				'name' => 'squared',
				'label' => 'Squared',
				'isDefault' => true
			),
			array(
				'name' => 'rounded',
				'label' => 'Rounded'
			)
		),
		'example' => array(
			'attributes' => array(
				'content' => 'This is a text box block. You can edit the content and customize the styles using the block settings.',
				'gradient' => 'linear-gradient(135deg, #f03c15, #f9a825)'
			)
		),
		'textdomain' => 'text-box',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			),
			'textAlignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'backgroundColor' => array(
				'type' => 'string'
			),
			'textColor' => array(
				'type' => 'string'
			),
			'shadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowOpacity' => array(
				'type' => 'number',
				'default' => 30
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => '#f03c15'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '20px',
							'right' => '20px',
							'bottom' => '20px',
							'left' => '20px'
						)
					)
				)
			)
		)
	)
);
