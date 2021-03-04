Websites
-
[Pixlr](https://pixlr.com/editor/) - flagsbig.png editor

[ImageOnline](https://imageonline.co/) - Image Resizer & Corner Rounder

[Base-64](https://www.base64-image.de/) - Image Css Line Converter


# Steps
Resize and Round Corners
-
To Resize I used ImageOnline (website above), same goes for the Corner Rounding.

`
Corner Rounded To: 10px,
Resize to: 80w x 60h
`

Update flagsbig.png w/ Exact x,y Coordinates
-
To Update the flagsbig.png I used Pixlr (website above). 
I loaded in the flagsbig.png along with the new flag and added

`
+84 from the flag on the left x's coordinate,
+64 from the flag on the top y's coordinate
`

Once I was done with that, I uploaded to the terminal.
I added the new flag, with the coordinates from flagsbig.png to Textures.js.
`
flag_#: [x, y, w, h,]];
`
Update Iso Protocol w/ Country Name, Iso, And Flag Number
-
I found the iso code with a google seach and added it to flags.ts.
`
#:'<code>'
&
'<code>':'<name of country>'
`
Update Css Url
-
I got the Css url using Base 64(link above) and added it to flags.css.
`
} flag.etc.etc
     background-image: Url <"css line here">
}
`
