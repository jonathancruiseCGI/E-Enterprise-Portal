<?php
/**
 * @file
 * block--system--main.tpl.php
 */
?>
<nav class="nav secondary-nav">
<?php if ($block->subject): ?>
  <h2 class="element-invisible"><?php print $block->subject; ?></h2>
<?php endif;?>
<?php
$logged_as = "<li class='menu-item username'>Logged in as: ".$variables['user']->name."</li></ul>";
print str_replace('</ul>', $logged_as, $content);
?>
</nav>
