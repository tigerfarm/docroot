--------------------------------------------------------------------------------

+ List of brushes:
http://alexgorbatchev.com/SyntaxHighlighter/manual/brushes/

+ Example brush URLs:
http://agorbatchev.typepad.com/pub/sh/3_0_83/scripts/shBrushXml.js
http://agorbatchev.typepad.com/pub/sh/3_0_83/scripts/shBrushPyton.js

++ Download the brush file to my brush file directory.

++ Open the downloaded JS file, and near the bottom is a sample JavaScript call:
SyntaxHighlighter.brushes.Python = Brush;

++ Use the new brush file in my JavaScript, example:
...
<script type="text/javascript" src="../../../js/SyntaxHighlighter/shBrushPython.js"></script>
...
var brush = new SyntaxHighlighter.brushes.Python();
...

--------------------------------------------------------------------------------
eof