const visit = require("unist-util-visit");
const path = require("path");

const renderAudioTag = (url, options) => {
  const audioNode = `
		<audio
			src=${url}
			preload="${options.preload}"
			${options.muted ? "muted" : ""}
			${options.autoplay ? "autoplay" : ""}
			${options.loop ? "loop" : ""}
			${options.controls ? "controls" : ""}
      		width="${options.width}"
		></audio>
	`;

  return audioNode;
};

// module.exports = addAudio;

module.exports = function (options) {
  const transformer = this.data("transformer");

  return async function transform(tree, file, callback) {
    if (!transformer) return callback();
    if (!file.path) return callback();

    visit(tree, "inlineCode", (node) => {
      const { value } = node;
      const matches = value.match(/audio:?\s(.*)+/);
	  
        const url = matches[1].trim();
        node.type = "html";
        node.value = path;
        //node.value = path.dirname(file.path) + "/" + url;
        //node.value = renderAudioTag(url, options);
      }
    });
  };
};
