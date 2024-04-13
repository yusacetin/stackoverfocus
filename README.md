## StackOverfocus
Remove basically everything other than the question, comments, and answers from question pages on Stack Exchange sites on Google Chrome and Firefox. This is the JavaScript based reimplementation of my previous extension "StackExchange Focused" that solves the Firefox delay problem and works on both browsers identically, at least in my case.

### Installation
### Chrome
#### Install from Chrome Web Store
* Install from https://chromewebstore.google.com/detail/stackoverfocus/mjllebfkdemhjggocfimgneongmhgmce
#### Install from source
* Clone or download the files
* Run `make chrome` in the project root directory
* Make sure developer mode is enabled in Chrome
* Go to the URL [chrome://extensions](chrome://extensions)
* Click "Load unpacked" at the top left
* Select the [project root]/build/chrome/unpacked folder
### Firefox
#### Install from the Mozilla Addons Store
* Install the add-on from https://addons.mozilla.org/en-US/firefox/addon/stackoverfocus/
#### Install from source
* Clone or download the files
* Run `make firefox` in the project root directory
* Sign the file [project root]/build/firefox/stackexchange_focused_firefox.zip somehow. Firefox makes this painfully complicated.
* Go to the URL [about:addons](about:addons)
* Click the gear icon and then 'Install Add-on From File...'
* Select [project root]/build/firefox/zipped/stackexchange_focused_firefox.zip

### License
GNU General Public License version 3 or later. See LICENSE.txt for more information.
