import { PanelBody, PanelRow } from "@wordpress/components";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	RichText,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

/**
 * Extendre colors
 * https://developer.wordpress.org/news/2023/11/01/how-to-add-custom-color-options-to-blocks/
 */

const Edit = function ({
	attributes: { customMarkerColor, titol },
	markerColor,
	setMarkerColor,
	setAttributes,
	style,
	clientId,
}) {
	// console.log(clientId);
	// console.log(style);
	const colorGradientSettings = useMultipleOriginColorsAndGradients();
	console.log(markerColor);
	const markerColorDropdown = (
		<ColorGradientSettingsDropdown
			settings={[
				{
					label: __("Marker", "devblog"),
					colorValue: markerColor.color || customMarkerColor,
					onColorChange: (value) => {
						setMarkerColor(value);

						setAttributes({
							customMarkerColor: value,
						});
					},
				},
			]}
			panelId={clientId}
			hasColorsOrGradients={false}
			disableCustomColors={false}
			__experimentalIsRenderedInSidebar
			{...colorGradientSettings}
		/>
	);

	return (
		<>
			<InspectorControls group="color">{markerColorDropdown}</InspectorControls>
			<div {...useBlockProps()}>
				<RichText
					tagName="div"
					value={titol}
					onChange={(val) => setAttributes({ titol: val })}
					placeholder={__("Heading...")}
					allowedFormats={["core/bold", "core/italic"]}
					style={{ color: markerColor.color }}
				/>
				<div>
					<InnerBlocks />
				</div>
			</div>
		</>
	);
};

export default withColors({
	markerColor: "marker-color",
})(Edit);
