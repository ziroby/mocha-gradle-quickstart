require("amd-loader");

require.config = {
    baseUrl: "../../main/js",
    paths: {
        "hello": "../../main/js/hello"
    },
    nodeRequire: require,
    waitSeconds: 15
  };

//require( ["some/module", "my/module", "a.js", "b.js"],
  //  function(someModule,    myModule) {
        //This function will be called when all the dependencies
        //listed above are loaded. Note that this function could
        //be called before the page is loaded.
        //This callback is optional.
 //   }
  //);
//print "10:28"

