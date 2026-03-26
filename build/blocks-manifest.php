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
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
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
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'customBackgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'customTextColor' => array(
				'type' => 'string',
				'default' => '#000000'
			)
		)
	)
);
