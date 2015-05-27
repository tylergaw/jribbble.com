.PHONY: css

css:
	node-sass -w ./css/scss -o ./css --output-style compressed
