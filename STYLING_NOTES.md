# Notes

## Branding
> ![Brand Palette](/docs/images/colour_palette.png)

|Component/UI element|Original Style|My Style|
|--|--|--|
| chat landing page icons | rgba(115, 118, 225, 1) | rgba(58, 12, 163, 1) Zaffre (dark purple) |
| button border | #018dc4 | #7209b7ff; Grape (light purple) |
| button background | rgb(0 120 212) light blue | rgb(58 12 163) |
| button text-shadow | rgba(15,73,168,0.66) dark blue | rgba(58, 12, 163, 0.66) Dark brand colour |

[Coolors pallet](https://coolors.co/palette/f72585-7209b7-3a0ca3-4361ee-4cc9f0)

```css
/* CSS HEX */
--rose: #f72585ff;
--grape: #7209b7ff;
--zaffre: #3a0ca3ff;
--neon-blue: #4361eeff;
--vivid-sky-blue: #4cc9f0ff;

/* CSS HSL */
--rose: hsla(333, 93%, 56%, 1);
--grape: hsla(276, 91%, 38%, 1);
--zaffre: hsla(258, 86%, 34%, 1);
--neon-blue: hsla(229, 83%, 60%, 1);
--vivid-sky-blue: hsla(194, 85%, 62%, 1);

/* SCSS HEX */
$rose: #f72585ff;
$grape: #7209b7ff;
$zaffre: #3a0ca3ff;
$neon-blue: #4361eeff;
$vivid-sky-blue: #4cc9f0ff;

/* SCSS HSL */
$rose: hsla(333, 93%, 56%, 1);
$grape: hsla(276, 91%, 38%, 1);
$zaffre: hsla(258, 86%, 34%, 1);
$neon-blue: hsla(229, 83%, 60%, 1);
$vivid-sky-blue: hsla(194, 85%, 62%, 1);

/* SCSS RGB */
$rose: rgba(247, 37, 133, 1);
$grape: rgba(114, 9, 183, 1);
$zaffre: rgba(58, 12, 163, 1);
$neon-blue: rgba(67, 97, 238, 1);
$vivid-sky-blue: rgba(76, 201, 240, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #f72585ff, #7209b7ff, #3a0ca3ff, #4361eeff, #4cc9f0ff);
$gradient-right: linear-gradient(90deg, #f72585ff, #7209b7ff, #3a0ca3ff, #4361eeff, #4cc9f0ff);
$gradient-bottom: linear-gradient(180deg, #f72585ff, #7209b7ff, #3a0ca3ff, #4361eeff, #4cc9f0ff);
$gradient-left: linear-gradient(270deg, #f72585ff, #7209b7ff, #3a0ca3ff, #4361eeff, #4cc9f0ff);
$gradient-top-right: linear-gradient(45deg, #f72585ff, #7209b7ff, #3a0ca3ff, #4361eeff, #4cc9f0ff);
$gradient-bottom-right: linear-gradient(135deg, #f72585ff, #7209b7ff, #3a0ca3ff, #4361eeff, #4cc9f0ff);
$gradient-top-left: linear-gradient(225deg, #f72585ff, #7209b7ff, #3a0ca3ff, #4361eeff, #4cc9f0ff);
$gradient-bottom-left: linear-gradient(315deg, #f72585ff, #7209b7ff, #3a0ca3ff, #4361eeff, #4cc9f0ff);
$gradient-radial: radial-gradient(#f72585ff, #7209b7ff, #3a0ca3ff, #4361eeff, #4cc9f0ff);```