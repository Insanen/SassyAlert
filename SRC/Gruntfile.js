module.exports = function(grunt) {

  /*     _ _      __
   *	//\/\ister//_ik
   * ----------------- *
   */

  // require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project Configuration starts here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    /*
     *  You could also have a “dist” object in  which you would output compressed CSS,
     *  or output the CSS to a different folder.
     *  ex) compass:dev or compass:dist.
     *
     *  We are using compass:dev for this configuration.
     */

    compass: {
      dev: {

      /*
       *  For my project configuration im using dev to look for a file called config.rb
       *  Remember, we could also add additional target files in here, append them as separate objects.
       * config : 'config.rb', 'config2.rb', 'config3.rb',
       */

        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

     	/*
    	 *  Please make sure to point files: to the path of your scss files location
    	 */

       watch: {
         sass: {
            files: ['sass/**/*.scss'],
            tasks: ['compass:dev']
          },

	  			/*
		  		 *  watch our files for changes, and reload.
           */

       livereload: {
           files: ['config.rb','*.php', 'stylesheets/*.css', 'img/*', 'sass/*.scss'],
          options: {
              livereload: true
          }
        },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', 'compass');

};
