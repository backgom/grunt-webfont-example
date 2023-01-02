module.exports = function (grunt) {
  grunt.initConfig({
    webfont: {
      icons: {
        src: "svg/*.svg",
        dest: "build/fonts",
        options: {
          //   types: ["woff"],
          embed: false,
          templateOptions: {
            baseClass: "d-icon",
            classPrefix: "d",
          },
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-webfont");

  grunt.registerTask("default", ["webfont"]);
};
