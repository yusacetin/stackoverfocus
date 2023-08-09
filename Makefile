build_root := ./build
chrome_root := $(build_root)/chrome
firefox_root := $(build_root)/firefox

chrome_unpacked := $(chrome_root)/unpacked
chrome_zipped := $(chrome_root)/zipped

firefox_unpacked := $(firefox_root)/unpacked
firefox_zipped := $(firefox_root)/zipped

chrome_zipfile := $(chrome_zipped)/stackoverfocus_chrome.zip
firefox_zipfile := $(firefox_zipped)/stackoverfocus_firefox.zip

.PHONY: all
all: chrome firefox

.PHONY: buildroot
buildroot:
	@if [ ! -d $(build_root) ]; then mkdir $(build_root); fi;

.PHONY: chromeroot
chromeroot: buildroot
	@if [ ! -d $(chrome_root) ]; then mkdir $(chrome_root); fi;

.PHONY: firefoxroot
firefoxroot: buildroot
	@if [ ! -d $(firefox_root) ]; then mkdir $(firefox_root); fi;

.PHONY: chrome
chrome: chromeroot
	@if [ ! -d $(chrome_unpacked) ]; then mkdir $(chrome_unpacked); fi;
	@cp manifest_chrome.json $(chrome_unpacked)/manifest.json;
	@cp content_style.css $(chrome_unpacked);
	@cp content_script.js $(chrome_unpacked);
	@cp icon.png $(chrome_unpacked);
	@if [ ! -d $(chrome_zipped) ]; then mkdir $(chrome_zipped); fi;
	@zip -q -j $(chrome_zipfile) \
	$(chrome_unpacked)/manifest.json \
	$(chrome_unpacked)/icon.png \
	$(chrome_unpacked)/content_style.css \
	$(chrome_unpacked)/content_script.js;

.PHONY: firefox
firefox: firefoxroot
	@if [ ! -d $(firefox_unpacked) ]; then mkdir $(firefox_unpacked); fi;
	@cp manifest_firefox.json $(firefox_unpacked)/manifest.json;
	@cp content_style.css $(firefox_unpacked);
	@cp content_script.js $(firefox_unpacked);
	@cp icon.png $(firefox_unpacked);
	@if [ ! -d $(firefox_zipped) ]; then mkdir $(firefox_zipped); fi;
	@zip -q -j $(firefox_zipfile) \
	$(firefox_unpacked)/manifest.json \
	$(firefox_unpacked)/icon.png \
	$(firefox_unpacked)/content_style.css \
	$(firefox_unpacked)/content_script.js;

.PHONY: clean
clean:
	@if [ -d $(build_root) ]; then rm -rf $(build_root); fi;
