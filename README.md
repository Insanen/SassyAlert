simple-watcher-task-runner-for-compass
======================================
Quick Task Runner for SaSS using Grunt, The purpose of this snippet is to Run Grunt Watch and see changes made to the core files, instead of using the command compass watch, it will watch and compile if any changes are made. 

We mainly used this Set-up for Insanen Solutions Projects and has a tool for all our developers. Feel free to use it, if it makes your life easier. Any implementations feel free to send it!

nick.r@insanen.com



SETUP GRUNT
=====================================
Installation docs straigth from official site.
http://gruntjs.com/

Installing the CLI

In order to get started, you'll want to install Grunt's command line interface (CLI) globally. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

npm install -g grunt-cli
This will put the grunt command in your system path, allowing it to be run from any directory.

Note that installing grunt-cli does not install the Grunt task runner! The job of the Grunt CLI is simple: run the version of Grunt which has been installed next to a Gruntfile. This allows multiple versions of Grunt to be installed on the same machine simultaneously.

How the CLI works
Each time grunt is run, it looks for a locally installed Grunt using node's require() system. Because of this, you can run grunt from any subfolder in your project.

If a locally installed Grunt is found, the CLI loads the local installation of the Grunt library, applies the configuration from your Gruntfile, and executes any tasks you've requested for it to run. To really understand what is happening, read the code.

Working with an existing Grunt project
Assuming that the Grunt CLI has been installed and that the project has already been configured with a package.json and a Gruntfile, it's very easy to start working with Grunt:

Change to the project's root directory.
Install project dependencies with npm install.
Run Grunt with grunt.
That's really all there is to it. Installed Grunt tasks can be listed by running grunt --help but it's usually a good idea to start with the project's documentation.

package.json: This file is used by npm to store metadata for projects published as npm modules. You will list grunt and the Grunt plugins your project needs as devDependencies in this file.

Gruntfile: This file is named Gruntfile.js or Gruntfile.coffee and is used to configure or define tasks and load Grunt plugins. When this documentation mentions a Gruntfile it is talking about a file, which is either a Gruntfile.js or a Gruntfile.coffee.
