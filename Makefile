build:
	yarn build
	zip -r release.zip icon128.png  icon48.png dist _locales icon32.png manifest.json
.PHONY: build
