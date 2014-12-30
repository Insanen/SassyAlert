/*************************************
		|\/|. _|- _   ~/.| 
		|  ||_\|_(/_|`/_||<
--------------------------------------
>>> BROUGHT TO YOU BY INSANEN.COM  <<<
--------------------------------------
**************************************/

module.exports = function(grunt) {

  /*     _ _      __   
   *	//\/\ister//_ik   
   * ---------------------------------
   * Load all our Grunt Tasks & Plugins
   * matchdep will help us to do the iteration 
   * over the dependencies GRUNT-*.
   */
  
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /*     _ _      __   
   *	//\/\ister//_ik   
   * ---------------------------------
   *  Project Configuration starts here
   */
   
  grunt.initConfig({

    compass: {
	
  /*     _ _      __   
   *	//\/\ister//_ik   
   * ---------------------------------
   *  You could also have a “dist” object in  which you would output compressed CSS, 
   *  or output the CSS to a different folder.
   *  ex) compass:dev or compass:dist. 
   *  
   *  We are using compass:dev for this configuration.
   */
		  
      dev: {
        options: {
	          
	          /*     _ _      __   
			   *	//\/\ister//_ik   
			   * ---------------------------------
			   *  For my project configuration im using dev to look for a file called config.rb
			   *  Remember, we could also add additional target files in here, append them as separate objects.
			   * config : 'config.rb', 'config2.rb', 'config3.rb',
			   */
			   
          config: 'config.rb',
          force: true
        }
      }
    },
  
  watch: {
		       /*     _ _      __   
				*	 //\/\ister//_ik   
				* ---------------------------------
		        * Please make sure to point files: to the path of your scss files location
		        */
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['compass:dev']
      },
		       /*     _ _      __   
				*	 //\/\ister//_ik   
				* ---------------------------------
		        * watch and see if our javascript files have change, or new 
		        * packages have being installed. 
		        */
        js: {
        files: ['javascripts/custom.js', 'javascripts/*.js'],
        tasks: ['uglify']
      },
	  			/*    _ _      __   
		  		 *	 //\/\ister//_ik   
		  		 * ---------------------------------
		  		 * watch our files for changes, and reload. 
		  		 */
		  		 
      livereload: {
        files: ['config.rb','*.php', 'stylesheets/*.css', 'img/*', 'sass/*.scss'],
        options: {
          livereload: true
        }
      },
    }

  });
  
			  /*     _ _      __   
			   *	//\/\ister//_ik   
			   * ---------------------------------
			   * This function takes the name of the tasks you’d like to register, along with an array 
			   * (or single string). The default task to run compass and compile our SaSSy
			   */
			   
  grunt.registerTask('default', 'compass');
  
  
}