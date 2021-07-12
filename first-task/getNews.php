<?php
$newsList = $modx->runSnippet('pdoResources', array(
                  'parents'	=> '54',
                  'includeTVs' => 'preview_image',
                  'prepareTVs' => '1',
                  'includeContent' => '1',
                  'tpl' => 'tplNews',
                  ));
echo $newsList;