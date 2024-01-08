<div <?php echo get_block_wrapper_attributes(); ?>>
	<details>
		<summary class="<?php echo (isset($attributes['markerColor'])) ? "has-text-color has-".$attributes['markerColor']."-color" : ""; ?>"><?php echo $attributes['titol'] ?> <?php if(isset($attributes['markerColor'])) {echo $attributes['markerColor'];} ?></summary>
		<div><?php echo $content ?></div>
	</details>
</div>
