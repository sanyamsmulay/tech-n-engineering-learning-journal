---
title: Unclassified Interesting Tech Material - page 9
date: 2023-05-10 12:47:10
tags: [unclassified, tech]
category: software-dev
---

# Unclassified Interesting Tech Material - page 9


continued from:  
[unclassified interesting tech material page 8](https://swlearninglog.blogspot.com/2022/11/unclassified-interesting-tech-material.html)

---

## Unclassified trinkets



### #59 - changing bash prompt     
####### Saturday 05 August 2023 06:49:54 PM IST #######   

- TLDR; PS1, PS2    
[https://linuxconfig.org/bash-prompt-basics](https://linuxconfig.org/bash-prompt-basics)


-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #60 - django async    
####### Saturday 05 August 2023 06:07:07 PM IST #######   

- TODO: study in detail    
[https://docs.djangoproject.com/en/4.2/topics/async/](https://docs.djangoproject.com/en/4.2/topics/async/)


-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #61 - raison d'etre for www-data    
####### Saturday 05 August 2023 05:17:29 PM IST #######   

- A distinct group and user from root and the owner of files
- provides secure  read access without having write and ownership
- also a distinct user helps instantly connect the files to a possibly being used for a web server    
[https://askubuntu.com/a/873846](https://askubuntu.com/a/873846)    
[https://askubuntu.com/questions/873839/what-is-the-www-data-user](https://askubuntu.com/questions/873839/what-is-the-www-data-user)
 
-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #62 - Uncomplicated Fire Wall - ufw tips and tricks    
####### Saturday 05 August 2023 04:31:23 PM IST #######   

- many posts say that there is no way to know what will be blocked if you enable ufw
- not true, those are old posts, since 2019
- ufw show added     
[https://askubuntu.com/a/533664](https://askubuntu.com/a/533664)
 

- also a general primer on ufw    
[https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands#allow-ssh](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands#allow-ssh)
 
-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #63 - Google workspace - Transfer files and delete user    
####### Wednesday 02 August 2023 11:12;14 PM IST #######   

- [https://gist.github.com/sanyamsmulay/d25e43c580da6cb6705fa02843d87606](https://gist.github.com/sanyamsmulay/d25e43c580da6cb6705fa02843d87606)
 
-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #64 - Google workspace API documentation is shitty    
####### Wednesday 02 August 2023 11:12;14 PM IST #######   

- Managed to scrape information together somehow
- Enable the API -    
[https://developers.google.com/workspace/guides/enable-apis#admin-sdk-api](https://developers.google.com/workspace/guides/enable-apis#admin-sdk-api)
- create credentials to access the API     
[https://developers.google.com/workspace/guides/create-credentials](https://developers.google.com/workspace/guides/create-credentials)
- Data transfer API    
[https://developers.google.com/admin-sdk/data-transfer/v1/transfer-data](https://developers.google.com/admin-sdk/data-transfer/v1/transfer-data)    
[https://googleapis.github.io/google-api-python-client/docs/dyn/admin_datatransfer_v1.html](https://googleapis.github.io/google-api-python-client/docs/dyn/admin_datatransfer_v1.html) 
very hard to navigate    
[https://googleapis.github.io/google-api-python-client/docs/dyn/admin_datatransfer_v1.transfers.html](https://googleapis.github.io/google-api-python-client/docs/dyn/admin_datatransfer_v1.transfers.html)    
[https://googleapis.github.io/google-api-python-client/docs/dyn/admin_datatransfer_v1.applications.html](https://googleapis.github.io/google-api-python-client/docs/dyn/admin_datatransfer_v1.applications.html)
very weird structure - dunno why this is a separate entity - always return like 4 entries for each user 
- users API    
[https://developers.google.com/admin-sdk/directory/reference/rest/v1/users](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users)    
[https://googleapis.github.io/google-api-python-client/docs/dyn/admin_directory_v1.users.html#delete](https://googleapis.github.io/google-api-python-client/docs/dyn/admin_directory_v1.users.html#delete)
- some quick start code - did not have my use case     
[https://github.com/googleworkspace/python-samples/blob/main/admin_sdk/directory/quickstart.py](https://github.com/googleworkspace/python-samples/blob/main/admin_sdk/directory/quickstart.py)    
may be can contribute to this project
- some guideline on data transfer     
[https://stackoverflow.com/questions/74120744/google-workspace-admin-sdk-documentation-and-samples-for-data-transfer-api-pyt](https://stackoverflow.com/questions/74120744/google-workspace-admin-sdk-documentation-and-samples-for-data-transfer-api-pyt)     
[https://stackoverflow.com/questions/74270126/how-to-transfers-files-with-google-workspace-admin-sdk-python](https://stackoverflow.com/questions/74270126/how-to-transfers-files-with-google-workspace-admin-sdk-python)    

- how the transfer works internally     
[https://support.google.com/a/answer/1247799?sjid=9509305659967038448-AP#bulk_transfer_steps](https://support.google.com/a/answer/1247799?sjid=9509305659967038448-AP#bulk_transfer_steps)
 
-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #65 - dealing with Cumulative Layout Shift CLS   
####### Sunday 30 July 2023 10:15:14 AM IST #######   

- [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
		- good over all resource for optimizing a page
		- gives out a pictorial representation of the CLS - very helpful
- this should have worked with lighthouse in chrome - but :( 
 
-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #66 - pulumi and ansible 
####### Sunday 30 July 2023 10:15:14 AM IST #######   

- TODO: compare
	
-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #67 - doing everything from the terminal 
####### Sunday 30 July 2023 09:51:26 AM IST #######   

- neo mutt
- neo vim
	- nv chad starter config (https://www.youtube.com/watch?v=c4OyfL5o7DU)[https://www.youtube.com/watch?v=c4OyfL5o7DU]
- terijira - jira on the terminal
- timetrap
- idea - for ideas, duh !
- [https://www.youtube.com/shorts/Tjl_z_HFLi8](https://www.youtube.com/shorts/Tjl_z_HFLi8)
- neo emacs ?
	- I just find the insert mode and command mode concept annoying
	- 
- terminal based browsers
	- 
	
-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #68 - byobu - play mozart doing eye of the tiger stuff 
####### Sunday 30 July 2023 08:57:58 AM IST #######   

- [https://www.byobu.org](https://www.byobu.org)
- it is like I have been trying to find something like this for about 2 years
- mind =  blown !! completely
- built as a wrapper around screen + tmux 
- from the author and maintainer himself   
	[https://superuser.com/a/423397](https://superuser.com/a/423397)
- tmux [https://github.com/tmux/tmux](https://github.com/tmux/tmux)
- using tmux: [https://www.youtube.com/watch?v=DzNmUNvnB04](https://www.youtube.com/watch?v=DzNmUNvnB04)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #69 - Javascript - Arror functions vs Regular functions 
####### Sunday 30 July 2023 08:57:58 AM IST #######   

- [https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/](https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/)
- TLDR;
	- arrow functions: 
	- do not have arguments object
	- don't have own this binding; so the previous one in context can work
	- cannot be used and constructors
	- cannot be declared
	- cannot be used before initialization - no hoisting

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #70 - Counting files in a dir - recursive 
####### Tuesday 11 July 2023 08:24:48 PM IST #######   

- very handy trying to tally if rsync got it right

```bash

find DIR_NAME -type f | wc -l
```
- source:
[https://stackoverflow.com/a/9157162](https://stackoverflow.com/a/9157162)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #71 - AWS Cost Explorer - EC2 Other breakdown into components 
####### Wednesday 05 July 2023 01:02:13 AM IST #######

- AWS trying to make cost optimization cumbersome for devs
- [https://stackoverflow.com/a/57191286](https://stackoverflow.com/a/57191286)
  - do check out the comments as well on the post

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #72 - Nginx syntax to pass on the page rendering to the routing of the web application
####### Wednesday 05 July 2023 12:54:01 AM IST #######

- links to #73   
TODO: figure out how to reference the below link here
- also this is neat little trick with nginx   
[https://stackoverflow.com/a/43954597](https://stackoverflow.com/a/43954597)

```
location / {
  try_files $uri /index.html;
}
```

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #73 - Deploying to sub-directory was surprisingly seamless with React + webpack 
####### Wednesday 05 July 2023 12:54:01 AM IST #######

- [https://zero2603.medium.com/how-to-deploy-reactjs-app-into-subdirectory-with-webpack-58d5ce32c655](https://zero2603.medium.com/how-to-deploy-reactjs-app-into-subdirectory-with-webpack-58d5ce32c655)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #74 - Programming best practices 
####### Friday 23 June 2023 12:08:42 AM IST #######

- always good to revise best practices from time to time and compare with your experience / remind yourself to be mindful of them
- [https://www.youtube.com/watch?v=q1qKv5TBaOA](https://www.youtube.com/watch?v=q1qKv5TBaOA)
- use standards
- learn principles
- apply patterns
- adequate names
- test
- realistic time
- appropriate speed

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;



### #75 - Writing space proof code 
####### Thursday 22 June 2023 11:03:31 PM IST #######

- [https://www.youtube.com/watch?v=GWYhtksrmhE](https://www.youtube.com/watch?v=GWYhtksrmhE)
- #01 Simple Control Flow
  - no recursion, goto, setjmp, longjmp
- #02 Limit All Loops
- #03 Don't use the Heap
- #04 Limit Function Size
- #05 Practice Data Hiding
  - declare variables at the lowest possible scope
- #06 Check Return Values
- #07 Limit the Preprocessor
  - the pre-processor is a powerful obfuscation tool :D :lol
- #08 Restrict Pointers Use
  - no function pointers
  - dereference pointers one level at a time
- #09 Be Pedantic - compile in pedantic mode
- test test test
- Interaction Reminder

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;




### #76 - Code visualization - codebase as a graph or a subs-sytem like matlab 
####### Tuesday 20 June 2023 06:19:01 PM IST #######

- two things are critical in understanding a code base:
  - code flow 
  - data flow
- makes reading / following the code easy
- want to do it for Onco's codebase for visualization
- will look into the tools in this point:
  - will dedicate a full page to the process and comments on the available tools
  - link: 

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #77 - android finger print reader vulnerability
####### Friday 16 June 2023 01:15:04 PM IST #######

- [https://www.youtube.com/shorts/bJ7IPt_X8U4](https://www.youtube.com/shorts/bJ7IPt_X8U4)
- no limit on fingerprint attempts
- can try to use genetic algorithms to get finger prints of related people ?!
- may be even train a NN to get fingerprints of people related to each other ?! may be..

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #78 - React native - million times faster - by a high school kid
####### Friday 16 June 2023 01:15:04 PM IST #######

- [https://www.youtube.com/watch?v=VkezQMb1DHw](https://www.youtube.com/watch?v=VkezQMb1DHw)
- too optimized to be true ?
- okay a little bit..
- a better virtual dom implementation

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;



### #79 - String overflow vulnerabilities in C
####### Friday 16 June 2023 11:24:16 AM IST #######

- [https://www.youtube.com/watch?v=fjMrDDj47E8](https://www.youtube.com/watch?v=fjMrDDj47E8)
- what weird design choices

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;




### #80 - Github outage - 21st Oct 2018   
####### Thursday 15 June 2023 06:53:20 PM IST #######

- [https://www.youtube.com/watch?v=dsHyUgGMht0](https://www.youtube.com/watch?v=dsHyUgGMht0)
- write primary db cluster in one datacenter disconnected due to a network switch failure (east-zone)  
(manual or automatic - not clear)
- failover - was never tested / designed to be across zones 
- many processes were local to east zone
- both the db clusters had diverged now.. 
- restoring to a consistent state - was an issue

my thoughts:
- dunno why they not made the west the primary and migrated jobs and service to the primary

also,
- a good intro to github db topology and structure

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;



### #81 - Creating blank spaces in markdown    
####### Thursday 15 June 2023 01:09:09 PM IST #######

- good collection:   
[https://stackoverflow.com/a/48583859](https://stackoverflow.com/a/48583859)
- gist below:
```
# RAW
## Creates 2 Lines that CAN be selected as text
## -------------------------------------------------
### The non-breaking space ASCII character
&nbsp;
&nbsp;

### HTML <(br)/> tag
<br />
<br />

## Creates 2 Lines that CANNOT be selected as text
## -------------------------------------------------
### HTML Entity &NewLine;
&NewLine;
&NewLine;

### Backticks with a space inside followed by two spaces
`(space)`(space)(space)
`(space)`(space)(space)
#### sample:
` `  
` `

# End
```
&nbsp;   
&nbsp;   
&nbsp;



### #82 - Shell, console, terminal, terminal emulator    
####### Thursday 15 June 2023 12:00:48 PM IST #######   

- [https://www.youtube.com/watch?v=Z6_ja-c2pLc](https://www.youtube.com/watch?v=Z6_ja-c2pLc)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;   
&nbsp;   


### #81 - 60-30-10 in UI / UX design

- [https://www.youtube.com/watch?v=UWwNIMHFdW4](https://www.youtube.com/watch?v=UWwNIMHFdW4)

-x-x-x-

 

### #82 - Javascript is a shitty language - from the developer of - JSON   
I agree sir   
####### Monday 12 June 2023 09:36:09 PM IST #######

[https://www.youtube.com/watch?v=lc5Np9OqDHU](https://www.youtube.com/watch?v=lc5Np9OqDHU)

-x-x-x-

### #83 - A good explanation of prompt to image generation machine learning paradigms    
####### Wednesday 07 June 2023 11:05:32 PM IST #######

[https://www.youtube.com/watch?v=1CIpzeNxIhU](https://www.youtube.com/watch?v=1CIpzeNxIhU)

- very good explanation for how things like stable diffusion, dall-e, etc work
- I generally refrain from calling things Artificial Intelligence if to me it just seems like data science / mathematics / function discovery


-x-x-x-


### # 84 - Watch your animations in slow motion in the browser   
####### Sunday 04 June 2023 01:10:16 PM IST #######

- so cool !   
[https://blog.jim-nielsen.com/2023/slow-motion-animations-with-chrome-devtools/?utm_source=tldrnewsletter](https://blog.jim-nielsen.com/2023/slow-motion-animations-with-chrome-devtools/?utm_source=tldrnewsletter)


-x-x-x-

### #85 - Blogger has an API !   
####### Sunday 04 June 2023 12:09:18 AM IST #######

[https://developers.google.com/blogger/docs/3.0/reference](https://developers.google.com/blogger/docs/3.0/reference)    
so surprised !!


### #86 - chrome debugger and node process don't disconnect cleanly   
####### Saturday 03 June 2023 02:24:52 PM IST #######

- TODO: find a good way to do this cleanly and reliably
- 

-x-x-x



### #87 - linux - getting the temperature of various components on the motherboard   
####### Sunday 28 May 2023 08:03:08 AM IST #######

- been using lmsensors for a long time now but had not logged it
- quoted source is a very good summary

source: [https://www.cyberciti.biz/faq/how-to-check-cpu-temperature-on-ubuntu-linux/](https://www.cyberciti.biz/faq/how-to-check-cpu-temperature-on-ubuntu-linux/)

-x-x-x-
### #88 - android emulator error: device unauthorized   
####### Sunday 28 May 2023 07:59:08 AM IST #######

- to retry the authentication flow on the emulator   
`adb kill-server; adb devices`   
source: [https://stackoverflow.com/a/52278380](https://stackoverflow.com/a/52278380)

- but like in my case if you are starting your setup after a long time ~(3-4 months) then better to download a fresh emulator and studio
- mine went wonky and would not give me a chance to click on the prompt and would just close it on its own.. 
- a new installation of studio and the emulator images fixed everything 

-x-x-x-

### #89 - Install packages as per package-lock.json   
####### Sunday 28 May 2023 06:54:00 AM IST ####### 

- useful for CI / CD pipelines
- `clean-install`
- [https://docs.npmjs.com/cli/v9/commands/npm-ci](https://docs.npmjs.com/cli/v9/commands/npm-ci)

-x-x-x-


### #90 - Self hosting git  
####### Saturday 27 May 2023 05:38:48 PM IST #######

- [gogs](https://github.com/gogs/gogs)
- [gitea](https://github.com/go-gitea/gitea) - seems to be a fork of gogs
- administer git over ssh - as a linux system service    
[https://www.linuxfoundation.org/blog/blog/classic-sysadmin-how-to-run-your-own-git-server](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-how-to-run-your-own-git-server)
- gitlab community edition
- 

An exploration of why would people want to self host:
[https://www.reddit.com/r/selfhosted/comments/mnivuj/why_would_you_selfhost_git_for_personal_use/](https://www.reddit.com/r/selfhosted/comments/mnivuj/why_would_you_selfhost_git_for_personal_use/)

- my reason - for 5$ I get a repo, task management solution, blog host, builds hosting, build process host / CI / CD host.. etc ...  
all rolled into one 

-x-x-x-
+ choosing to try out [gitea](https://github.com/go-gitea/gitea) first


-x-x-x-

### #91 - Awesome self hosted   
####### Saturday 27 May 2023 05:20:24 PM IST #######

Collection of self softwares that can be self hosted:   
[https://github.com/awesome-selfhosted/awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)


### #92 - React Native Error   
\<name-of-package\>:verifyReleaseResources FAILED

- the `compileSdkVersion` and `buildToolsVersion` should match between your build.gradle and the dependency   
[https://stackoverflow.com/questions/52613089/getting-verifyreleaseresources-error-after-upgrading-react-native#comment97121385_52613927](https://stackoverflow.com/questions/52613089/getting-verifyreleaseresources-error-after-upgrading-react-native#comment97121385_52613927)


- -x-x-x-

### #93 - setting up android dev for device   
####### Thursday 25 May 2023 09:33:57 PM IST #######

+ this has gotten better over time   
+ from: [https://developer.android.com/studio/run/device](https://developer.android.com/studio/run/device)   
-x-x-x
- Each user that wants to use ADB needs to be in the `plugdev` group. If you see an error message that says you're not in the plugdev group, add yourself to it using the following command:   
- **Groups only update on login**, so you must log out for this change to take effect. When you log back in, you can use id to check that you're in the plugdev group.
``` bash
sudo usermod -aG plugdev $LOGNAME
```

- The system needs to have udev rules installed that cover the device. The android-sdk-platform-tools-common package contains a community-maintained default set of udev rules for Android devices. To install it, use the following command:
``` bash
sudo apt-get install android-sdk-platform-tools-common
```





### #94 - Cool !! workerPool implementation in Javascript   


- well maintained library !
- intuitive api  
- repo:    
[https://github.com/josdejong/workerpool](https://github.com/josdejong/workerpool)


### #95 - emulator terminated with exit code 139   
####### Thursday 18 May 2023 01:55:04 PM IST #######
- most likely the android emulator ran out of space on the internal storage
- android 11 base image with google services need 35 GB of space to run well
- update:     
####### Thursday 15 June 2023 01:16:51 PM IST #######   
the emulator was leaking memory :face_palm   
can run well will 2-3GB of space


### #96 - Android development from a terminal 
####### Thursday 18 May 2023 12:26:24 PM IST #######

- stop emulator from cli   
``` bash
adb emu kill
adb -s * emu kill
```
this one did not work for me:
adb -s emulator-5554 emu kill

TODO:   
try    
--> adb shell reboot -p   
--> telnet localhost 5554   
kill

thread:   
[https://stackoverflow.com/questions/20155376/android-stop-emulator-from-command-line](https://stackoverflow.com/questions/20155376/android-stop-emulator-from-command-line)

-x-x-x-x-x-x-x-

+ start emulator from cli



### #97 - termux is awesome: time to switch ?       
####### Saturday 13 May 2023 12:09:27 AM IST #######

[tmux demo youtube link](https://www.youtube.com/watch?v=DzNmUNvnB04)

### #98 - gatsby-plugin-mdx bug:    
####### Saturday 13 May 2023 12:07:16 AM IST #######

- by default the plugin provides github flavoured markdown + ids added to headings
- but it seems an extra '-' is added to the id
- need to trace it
- current status of the trace is that:    
  + mdx --> converts the code to md-->ast 
  + mdx --> is converted to hast
  + hast node toString is used by rehypeSlug to generate the id
  + my hunch is that this step is the culprit
  + but need lot of setup to figure this out and fix
  + but would be a major fix from gatsby and contribution point of view  
  + let's see if I get time to fix this
  + trace of this in code:    
  https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx#mdxoptions    
  https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-mdx/src/remark-mdx-html-plugin.ts#L11    
  https://github.com/syntax-tree/mdast-util-to-hast#tohasttree-options    
  https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-to-string     
  https://github.com/rehypejs/rehype-slug/blob/main/index.js#L33
  
  
  


### #99 - yarn warning   
Pattern [] is trying to unpack in the same destination "" as pattern []. This could result in non-deterministic behavior, skipping.  
####### Wednesday 10 May 2023 04:39:05 PM IST #######  

- not much chatter on the issue   
  -- only one unanswered question on stackoverflow
  https://stackoverflow.com/questions/59320366/yarn-says-pattern-is-trying-to-unpack-in-the-same-destination   
  -- some issues here and there on github    
  https://github.com/yarnpkg/yarn/issues/8735
  

- so just searched the source of yarn
https://github.com/yarnpkg/yarn/blob/158d96dce95313d9a00218302631cd263877d164/src/package-fetcher.js#L120

- hint from the source:  
  - the dependency has been added twice 
  - check:    
    + linking --> yarn, npm  
    + package.json
    + yarn why
    + package.lock / yarn.lock
    + delete node_modules and install again --> for integrity file to be deleted
    + yarn cache clean --> for the new changes to be picked up from the tgz file
    +  --> this worked for me finally
  




### #100 - Working with the IcoMoon library   
####### Wednesday 10 May 2023 01:25:30 PM IST #######   

TODO: find out an easier way to download a glyph icon.
- Not a lot of information is present about using this library
- tried to use this:
https://github.com/oblador/react-native-vector-icons#createiconsetfromicomoonconfig-fontfamily-fontfile
- but getting the `selection.json` file itselt was an uphil task due to lack of documentation on how to add new fonts / glyphs to the icoMoon app.
 
