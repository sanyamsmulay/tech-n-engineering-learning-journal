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


### number 87
linux - getting the temperature of various components on the motherboard   
####### Sunday 28 May 2023 08:03:08 AM IST #######

- been using lmsensors for a long time now but had not logged it
- quoted source is a very good summary

source: [https://www.cyberciti.biz/faq/how-to-check-cpu-temperature-on-ubuntu-linux/](https://www.cyberciti.biz/faq/how-to-check-cpu-temperature-on-ubuntu-linux/)

-x-x-x-
### number 88
android emulator error: device unauthorized   
####### Sunday 28 May 2023 07:59:08 AM IST #######

- to retry the authentication flow on the emulator   
`adb kill-server; adb devices`   
source: [https://stackoverflow.com/a/52278380](https://stackoverflow.com/a/52278380)

- but like in my case if you are starting your setup after a long time ~(3-4 months) then better to download a fresh emulator and studio
- mine went wonky and would not give me a chance to click on the prompt and would just close it on its own.. 
- a new installation of studio and the emulator images fixed everything 

-x-x-x-

### number 89
Install packages as per package-lock.json   
####### Sunday 28 May 2023 06:54:00 AM IST ####### 

- useful for CI / CD pipelines
- `clean-install`
- [https://docs.npmjs.com/cli/v9/commands/npm-ci](https://docs.npmjs.com/cli/v9/commands/npm-ci)

-x-x-x-


### number 90
Self hosting git  
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

### number 91
Awesome self hosted   
####### Saturday 27 May 2023 05:20:24 PM IST #######

Collection of self softwares that can be self hosted:   
[https://github.com/awesome-selfhosted/awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)


### number 92
React Native Error   
\<name-of-package\>:verifyReleaseResources FAILED

- the `compileSdkVersion` and `buildToolsVersion` should match between your build.gradle and the dependency   
[https://stackoverflow.com/questions/52613089/getting-verifyreleaseresources-error-after-upgrading-react-native#comment97121385_52613927](https://stackoverflow.com/questions/52613089/getting-verifyreleaseresources-error-after-upgrading-react-native#comment97121385_52613927)


- -x-x-x-

### number 93
setting up android dev for device   
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





### number 94   
Cool !! workerPool implementation in Javascript   


- well maintained library !
- intuitive api  

[https://github.com/josdejong/workerpool](https://github.com/josdejong/workerpool)


### number 95   
emulator terminated with exit code 139   
####### Thursday 18 May 2023 01:55:04 PM IST #######
- most likely the android emulator ran out of space on the internal storage
- android 11 base image with google services need 35 GB of space to run well


### number 96
Android development from a terminal 
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



### number 97      
termux is awesome: time to switch ?       
####### Saturday 13 May 2023 12:09:27 AM IST #######

[tmux demo youtube link](https://www.youtube.com/watch?v=DzNmUNvnB04)

### number 98   
gatsby-plugin-mdx bug:    
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
  
  
  


### number 99.
yarn warning   
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
  




### number 100.
Working with the IcoMoon library   
####### Wednesday 10 May 2023 01:25:30 PM IST #######   

TODO: find out an easier way to download a glyph icon.
- Not a lot of information is present about using this library
- tried to use this:
https://github.com/oblador/react-native-vector-icons#createiconsetfromicomoonconfig-fontfamily-fontfile
- but getting the `selection.json` file itselt was an uphil task due to lack of documentation on how to add new fonts / glyphs to the icoMoon app.
 
