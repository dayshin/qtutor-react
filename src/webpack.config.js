{
	modules: {
		loaders: [{ test: /\.html$/, loader: "html" }];
	}
	scripts: {
		build: "webpack --mode production";
	  };
}
