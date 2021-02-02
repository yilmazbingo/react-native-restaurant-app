const path = require("path");
module.exports = {
  /* general options */

  resolver: {
    extraNodeModules: {
      axios: path.resolve(__dirname, "./node_modules/axios/index.js"),
    },
  },
  transformer: {
    /* transformer options */
  },
  serializer: {
    /* serializer options */
  },
  server: {
    /* server options */
  },
};
