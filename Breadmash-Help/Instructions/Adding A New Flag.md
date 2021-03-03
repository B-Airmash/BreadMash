_MAIN_STEPS_
1.Upload A Picture-----------|
2.Round Corners 11px---------|---> (https://imageonline.co/)
3.Resize 80w x 60h-----------|
4.get css data url (https://www.base64-image.de/)
5.get iso code 


_PROCESS_OF_IT_ALL_
#update css url 
-Add new CSS line of exact flag number in src/assets/flags.css
-Paste CSS Data URL from the base 64 in src/assets/flags.css 
[e.g.]
___________________________________________________________|                                                       
}                                                          |
                                                           |
.flag.flag-example {                                       |
    background-image: url("paste here")                    |
}                                                          |
___________________________________________________________|
-[MAKE SURE TO ADD " AT THE FRONT & END]


#update flagsbig.png w/ exact x,y coordinates (x,y) (+84,+64)
-downloaded the file already Edited and uploaded it to the terminal upload page(https://vm4b.eastus.cloudapp.azure.com/upload/) 
-did this command: cd~/uploads
-this command: ls -al or ll for short
-did the command: mv (flagbig.png) ~/airmash-frontend/src/assets/flagsbig.png


#update iso protocol w/ country name, iso, and flag number 
[e.g.]
_______________________|
'#': 'iso',            |
'iso' : 'country name' |
_______________________|


#Update airmash in refugees/airmash-frontend/src/js/textures.js
[e.g.]
_____________|
#[x,y,w,h]], |
_____________|


#hit npm run build all repos (clones) and delete screen and re-setup (ab-server)

MISSION COMPLETE!!
