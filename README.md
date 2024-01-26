# My technology and engineering learning journal


### build steps

- install yarn globally or locally in 'parent directory' say: `projects`
	- `npm install yarn`
- `mkdir base_gatsby_blog_github_theme; cd $_`
- clone plugin project [https://github.com/sanyamsmulay/gatsby-theme-replica](https://github.com/sanyamsmulay/gatsby-theme-replica)
	- inside the plugin project run `yarn install`
- clone this project
	- inside: run `yarn install`
	- to get a development version: `yarn develop`
	
### TODO:


- take care of warning in the theme project
	- `####### Fri Jan 26 05:33:04 PM IST 2024 #######`

+ table of contents - remove sticky position - hopefully from the child project and not the theme libray project

+ links without text associated, render with font-colour black, change to blue

- orchestrate a better workflow than this for local development:
  - connect-deps is promising
  - currently need to run yarn pack --> then run yarn add path to tar.gz
  - package.json has a relative path to the theme:
    <!-- ./../../base_gatsby_blog_github_theme/gatsby-theme-replica/gatsby-theme-replica/gatsby-theme-replica-v0.0.1.tgz -->
- workflow for testing an update is even worse:
  - need to delete the yarn cache for the plugin as well 
  - yarn does not update the code since the md5 for the project does not match for the same version :(
    and skips updating the code for the theme in the node_modules of this dependency
  - also need to clear it from yarn lock --> to manage integrity conflicts :(
  - so the command
  rm -rf node_modules/gatsby-theme-replica ~/.cache/yarn/v6/npm-gatsby-theme-replica-0.0.1-e582f510ce1ad6b15eaa1800a677f4dddb8e7121 node_modules .cache && 
  yarn cache clean && 
  

+ publish with a better name: **_gatsby-theme-github-replica_**

  
### Credits

- theme: [updated version of gatsby-theme-replica](https://github.com/sanyamsmulay/gatsby-theme-replica)
  - yet to be published, but latest
  - fork of: [gatsby-theme-replica](https://github.com/sabrinaluo/gatsby-theme-replica)
    - the original is 3 years old now with no change
    - I suggest that people start with my version
