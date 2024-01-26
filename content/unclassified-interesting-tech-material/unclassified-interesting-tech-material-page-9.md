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






### #0- snap vs flatpak    
####### Mon Jan 22 11:23:57 PM IST 2024 #######     


- [https://itsfoss.com/flatpak-vs-snap/](https://itsfoss.com/flatpak-vs-snap/)
- good balanced comparison
- [https://www.reddit.com/r/linuxmasterrace/comments/u4te9z/flatpak_or_snap/](https://www.reddit.com/r/linuxmasterrace/comments/u4te9z/flatpak_or_snap/)
	- good discussion from users that maintain both kind of packages
	

&nbsp;   
&nbsp;   
&nbsp;

### #1- some new ideas about reducing the clutter of frameworks    
####### Fri Jan 19 01:14:00 PM IST 2024 #######     


- [https://dev.to/paulgordon/after-using-rawjs-im-never-touching-react-again-or-any-framework-vanilla-javascript-is-the-future-3ac1](https://dev.to/paulgordon/after-using-rawjs-im-never-touching-react-again-or-any-framework-vanilla-javascript-is-the-future-3ac1)
- the ideas are good
- but sensationalising can work for a non-thinking audience in the long term
	- but serves as click bait and rage comments from people who use their head 
- but some of the ideas are good
	- use DOM as the state store
	- lifecycle can be tied to the element's lifecycle
	

&nbsp;   
&nbsp;   
&nbsp;

### #2- check if grub is installed on a device linux    
####### Thu Jan 18 07:32:08 PM IST 2024 #######     


- `file -s` or `dd` - first few bytes of the drive
- [https://serverfault.com/questions/61400/how-do-i-tell-if-grub-is-installed-on-a-device](https://serverfault.com/questions/61400/how-do-i-tell-if-grub-is-installed-on-a-device)
- GRUB on AWS linux instance
	- [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/grub.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/grub.html)

&nbsp;   
&nbsp;   
&nbsp;

### #3- python for infra and config management     
####### Mon Jan 15 09:06:18 PM IST 2024 #######     


- [https://medium.com/@etherservices.mohandgm/python-and-infrastructure-as-code-accelerating-devops-practices-b924f0148e50](https://medium.com/@etherservices.mohandgm/python-and-infrastructure-as-code-accelerating-devops-practices-b924f0148e50)
- [https://github.com/pulumi/pulumi](https://github.com/pulumi/pulumi)

&nbsp;   
&nbsp;   
&nbsp;

### #4- aws s3 - misc     
####### Mon Jan 15 03:21:24 PM IST 2024 #######     


- size not matching 
	-  [https://stackoverflow.com/questions/57201659/s3-bucket-size-differs-while-using-console-and-cli](https://stackoverflow.com/questions/57201659/s3-bucket-size-differs-while-using-console-and-cli) 
- more objects in the bucket than before after deleting files
	- [https://repost.aws/knowledge-center/s3-console-metric-discrepancy](https://repost.aws/knowledge-center/s3-console-metric-discrepancy)
	
	- 

&nbsp;   
&nbsp;   
&nbsp;

### #4- rsync over ssh - adding ssh options     
####### Mon Jan 15 03:21:24 PM IST 2024 #######     


- rsync --> `-e` flag
	- Example: `rsync -Pav -e "ssh -i $HOME/.ssh/somekey" username@hostname:/from/dir/ /to/dir/`
	- [https://unix.stackexchange.com/a/127355](https://unix.stackexchange.com/a/127355)
- using ssh configs can also help do this if this is usual command you execute 

&nbsp;   
&nbsp;   
&nbsp;

### #5- ubuntu 23.10 bug - audio device selector pop-up not working     
####### Mon Jan 15 03:21:24 PM IST 2024 #######     


- working manually from cli
	- `gdbus call --session --dest org.gnome.Shell.AudioDeviceSelection --object-path /org/gnome/Shell/AudioDeviceSelection --method org.gnome.Shell.AudioDeviceSelection.Open "['HEADPHONES', 'HEADSET', 'MICROPHONE']"`
- not working as an auto-popup when a headphone is plugged in
- TODO: find a solution
	- could be an issue with my hardware
	- 

&nbsp;   
&nbsp;   
&nbsp;

### #6- Zig Programming Language     
####### Sat Jan 13 09:27:28 PM IST 2024 #######     


- Zig Lang intro
	- [https://www.youtube.com/watch?v=zFELcHTki9U](https://www.youtube.com/watch?v=zFELcHTki9U)
	- above assembly, below C
	- simpler than rust
	- reads like python
	- safety built-in


&nbsp;   
&nbsp;   
&nbsp;

### #7- terminal based editors to try              
####### Thu Jan 11 09:20:21 PM IST 2024 #######     


- neovim + kickstart.nvim = instant IDE
	- [https://www.youtube.com/watch?v=stqUbv-5u2s](https://www.youtube.com/watch?v=stqUbv-5u2s)
	- the video title is click bait, it is in favour of neovim mostly: [https://www.youtube.com/watch?v=Ric2wHzPfcM](https://www.youtube.com/watch?v=Ric2wHzPfcM)
	- 
- tmux + neovim --> want to try
- 


&nbsp;   
&nbsp;   
&nbsp;

### #8- nixos - docker and flatpak applied to linux os distro              
####### Thu Jan 11 09:20:21 PM IST 2024 #######     


- [https://www.youtube.com/watch?v=BVDNByTMOp0](https://www.youtube.com/watch?v=BVDNByTMOp0)
- single configuration file for complete OS state
- versioning of the system changes 
- 

&nbsp;   
&nbsp;   
&nbsp;

### #9- shout out to Json.stringiyfy             
10.01.2024     


- the pretty printing options are amazing and very handy
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

&nbsp;   
&nbsp;   
&nbsp;

### #10- package managers, flatpak, apt, snap            
10.01.2024     


- [https://itsfoss.com/what-is-flatpak/?ref=learnubuntu.com](https://itsfoss.com/what-is-flatpak/?ref=learnubuntu.com)
- 


&nbsp;   
&nbsp;   
&nbsp;

### #11- ubuntu 23.10 - fresh install bullets            
08.01.2024     

- may be can make a system image with these pre-installed tools I generally use
	- or a script to install all of them in one shot
- remember to disable secure boot before making config changes for dual boot
	- can dual boot with secure boot but currently not worth the effort
- install:
	- git
	- nvm - wget script and run
		- store script locally, help if reinstall is required
	- through snap / app store - vlc, gimp, vscode, inkscape, obs-studio, 
	remmina, slack, zoom
	- through flatpak - chrome
		- deb file install, snap version - not working, no error logs in terminal even
	- copy ssh from old pc
	- geany, geany-plugin-treebrowser, 
		- set keyboard shortcut for open last closed file - overwrite a symbol lookup shortcut
		- spell check - apt install geany-plugin-spellcheck
	- python3-venv - apt
	- docker - using docker apt repos; 
		- docker compose via pip failed
		- docker adding own user to docker group for permissions
			- [https://stackoverflow.com/questions/47854463/docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socke](https://stackoverflow.com/questions/47854463/docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socke)
			- `newgrp docker` --> no need to restart machine 
	- gnome-browser-connector + workspace matrix
		- `gnome-extensions prefs wsmatrix@martin.zurowietz.de`
		- connector works but fails when trying to communicate the success of the installation
		- also I guess needs a restart for the permissions to propagate
	- zsh, oh-my-zsh 
		- zsh - apt install 
		- oh-my-zsh -> script install
		 
	- system monitor widget - gnome 
		- has some pre-req packages that need installation
		- (https://extensions.gnome.org/away/https%253A%252F%252Fgithub.com%252Fparadoxxxzero%252Fgnome-shell-system-monitor-applet)[https://extensions.gnome.org/away/https%253A%252F%252Fgithub.com%252Fparadoxxxzero%252Fgnome-shell-system-monitor-applet]
		- not working
		- TODO: need to get an alternate - or move to a terminal based ticker
	- alt-tab 
		- for multiple monitor management of alt+tab switcher preview
	- time stamp banner print shortcut
		- ydotool - apt install, needs restart
	- grub config
		- remember last and use that to login next time (helps with update restarts)
		- GRUB_DEFAULT=saved
		- GRUB_SAVEDEFAULT=true
	- java, gradle 
		- java: apt install
		- gradle: manual install (https://gradle.org/install/)[https://gradle.org/install/]


&nbsp;   
&nbsp;   
&nbsp;

### #12- grafana and related ecosystem            
####### Thursday 04 January 2024 06:49:45 PM IST #######     


- Grafna - visualisation and querying
	- [https://grafana.com/](https://grafana.com/)
- Loki - store similar to Prometheus for logs 
- promtail - similar to logstash
- grafana agent - inspired by terraform
- many log stores supported - like cloud watch, etc. there are lots
- good plugin ecosystem 
- 


&nbsp;   
&nbsp;   
&nbsp;

### #13- deploying single page applications - to load routes            
####### Thursday 04 January 2024 05:42:27 PM IST #######     


- of-course the feature should be available in the library
- the trick is to get the single page application router to take over


&nbsp;   
&nbsp;   
&nbsp;

### #14- angular 17 - goodies            
####### Thursday 04 January 2024 05:27:39 PM IST #######    


- [https://www.youtube.com/watch?v=gShezTqbRyE](https://www.youtube.com/watch?v=gShezTqbRyE)
- standalone components
	- can be shifted to incrementally 
- signals - simplified rxjs
	- no subscribe and unsubscribe 

&nbsp;   
&nbsp;   
&nbsp;

### #14- remote desktop for windows - rust-desk            
####### Monday 01 January 2024 05:17:29 PM IST #######    


- Rust Desk - good open source utility 
- runs well on windows
	- so good for sharing a windows desktop with linux

&nbsp;   
&nbsp;   
&nbsp;

### #15- convert fat32 to NTFS and resize fat32            
####### Monday 01 January 2024 05:17:29 PM IST #######    


- windows convert utility
- handy with good performance
- `convert <Drive>: /FS:NTFS`
	- [https://superuser.com/questions/538220/linux-convert-fat32-to-ntfs-without-loss-data](https://superuser.com/questions/538220/linux-convert-fat32-to-ntfs-without-loss-data)
	- [https://askubuntu.com/questions/303091/convert-fat32-partition-to-ntfs-without-data-loss](https://askubuntu.com/questions/303091/convert-fat32-partition-to-ntfs-without-data-loss)
- resize fat32
	- disks failed
	- windows does not have a fat resize tool
- [https://askubuntu.com/questions/962829/resizing-fat32-partition-in-command-line-without-losing-data](https://askubuntu.com/questions/962829/resizing-fat32-partition-in-command-line-without-losing-data)
	- did not work, errored out for my case
- [https://answers.microsoft.com/en-us/windows/forum/all/how-many-files-can-a-folder-hold/25368d4b-83e3-47b3-b7a3-a0fb8c7286a7](https://answers.microsoft.com/en-us/windows/forum/all/how-many-files-can-a-folder-hold/25368d4b-83e3-47b3-b7a3-a0fb8c7286a7)
	- file and folder limitations for FAT32 and NTFS

&nbsp;   
&nbsp;   
&nbsp;

### #16- ubuntu - gnome-remote-desktop - not working with wayland           
####### Saturday 30 December 2023 01:10:08 PM IST #######    


- works fine if switching to xorg
- TODO: find out how to make it work with wayland
	- connection is successful
	- mouse and keyboard works
	- screen is black, screenshot also captures a black screen

&nbsp;   
&nbsp;   
&nbsp;

### #17- ubuntu - easy switch between xorg and wayland           
####### Saturday 30 December 2023 01:10:08 PM IST #######    


- [https://askubuntu.com/questions/961304/how-do-you-switch-from-wayland-back-to-xorg-in-ubuntu-17-10](https://askubuntu.com/questions/961304/how-do-you-switch-from-wayland-back-to-xorg-in-ubuntu-17-10)
- there is a small gear icon that appears after the user for login is selected and password field appears
- ![sample image for what the grear icon looks like](https://i.stack.imgur.com/6FtxL.jpg)

&nbsp;   
&nbsp;   
&nbsp;

### #18- flatpack - how to clean uninstall           
####### Saturday 30 December 2023 12:45:17 AM IST #######    


- [https://discourse.flathub.org/t/how-to-completely-uninstall-any-flatpak-app-on-ubuntu/709](https://discourse.flathub.org/t/how-to-completely-uninstall-any-flatpak-app-on-ubuntu/709)
- seems to have a docker like approach for storing binaries
- so the unused common part is left out as cache - may need to deleted to reclaim disc space
- framework feels very neat

&nbsp;   
&nbsp;   
&nbsp;

### #19- arangodb migrations to higher version           
####### Wednesday 13 December 2023 08:45:05 PM IST #######    


- suggested to go to highest patch version then to the next minor version
	-  3.6.9 => 3.6.13 => 3.7.10
	- what the heck ?!?
- [https://github.com/arangodb/arangodb/issues/14138#issuecomment-831718441](https://github.com/arangodb/arangodb/issues/14138#issuecomment-831718441)

&nbsp;   
&nbsp;   
&nbsp;

### #19- chkdsk run from linux          
####### Tuesday 21 November 2023 07:39:04 PM IST #######    


- NTFS / FAT file system going bad in a system crash is a common occurrence.
- trying to run chkdsk without having to boot into windows
- TODO: find a way / build a way\
- very limited options as per the internet:
	- [https://superuser.com/questions/853699/chkdsk-f-r-alternative-in-ubuntu-linux](https://superuser.com/questions/853699/chkdsk-f-r-alternative-in-ubuntu-linux)
	- if source code is open may be we can build and pack of linux 

&nbsp;   
&nbsp;   
&nbsp;

### #20- fsck cannot be run from grub          
####### Monday 20 November 2023 08:39:51 PM IST #######    


- there should be an options to run fsck from grub 
	- it is generally the most common problem 
- TODO: find out if there is a way unmount the root `/` partition from grub menu
- also, well ttys with `ctrl + alt + 1,2,3,4` in ubuntu is super helpful as well

&nbsp;   
&nbsp;   
&nbsp;

### #21- why nvidea, why you no stable with linux ?         
####### Monday 20 November 2023 05:27:41 PM IST #######    


- at boot screen gets stuck after the output of fdisk
	- `dev/<disc-id>: clean ....`
	- boot does not proceed after this

- [https://askubuntu.com/a/974910](https://askubuntu.com/a/974910)
- don't know the root cause, it may very well be the linux kernel as well

&nbsp;   
&nbsp;   
&nbsp;

### #22- redirecting outputs of bash file descriptors         
####### Monday 20 November 2023 04:42:18 PM IST #######    

- 1 - std-io, 2 - std-err and 3 - console
- my favourite: 
	- log to file and to console at the same time:
	- `exec 3>&1 1>>${LOG_FILE} 2>&1`
- look: [https://stackoverflow.com/a/18462920](https://stackoverflow.com/a/18462920)

&nbsp;   
&nbsp;   
&nbsp;

### #22- vfat and ext4 file size difference        
####### Monday 20 November 2023 04:42:18 PM IST #######    

- block size supported is very different - so for smaller files --> vfat will take more space
- The du command measures file size in blocks, not bytes. Since vfat and ext4 use completely different block sizes, a size change of 2x or even 8x would not be even slightly surprising.

ext4 typically uses 4k blocks but both ext4 and vfat use a variable block size set when the disk is formatted. vfat supports logical block sizes between 512b and 32k; ext4 supports block sizes between 1k and 4k.

If it is an old disk, it could be 512b blocks or maybe 2k, depending on disk size and properties. If you have a lot of files that are below 2k, each of those could double in size on copy to a 4k block size ext4.

- taken from: [https://unix.stackexchange.com/a/693819](https://unix.stackexchange.com/a/693819)

&nbsp;   
&nbsp;   
&nbsp;

### #23- linux find command - filter the errors        
####### Monday 20 November 2023 04:42:18 PM IST #######    

- it just takes a long time realize that the stream on the console is a combination of error and std-io
	
- ignore all errors:
	- `find . 2>/dev/null > files_and_folders`
	- This hides not just the Permission denied errors, of course, but all error messages.

- If you really want to keep other possible errors, such as too many hops on a symlink, but not the permission denied ones, then you'd probably have to take a flying guess that you don't have many files called 'permission denied' and try:
	- `find . 2>&1 | grep -v 'Permission denied' > files_and_folders`
- If you strictly want to filter just standard error, you can use the more elaborate construction:
	- `find . 2>&1 > files_and_folders | grep -v 'Permission denied' >&2`
- taken from: [https://stackoverflow.com/a/762360](https://stackoverflow.com/a/762360)

- handy pattern for concatenating stdio and error or any other streams too 

&nbsp;   
&nbsp;   
&nbsp;

### #24- AWS cli s3 sync - stupid shenanigans        
####### Friday 17 November 2023 11:24:01 PM IST #######    

- s3 bucket allows for linux characters - with is a super set of windows characters 
	- so syncing to a FAT or NTFS file system can fail
- [https://github.com/aws/aws-cli/issues/4543](https://github.com/aws/aws-cli/issues/4543)
- [https://stackoverflow.com/questions/57786113/errno-22-when-downloading-multiple-files-from-s3-bucket-sub-folder/58576473#58576473](https://stackoverflow.com/questions/57786113/errno-22-when-downloading-multiple-files-from-s3-bucket-sub-folder/58576473#58576473)
- possible solutions 
	- exclude the files / directories with the forbidden characters
	- or transform the filename to replace the forbidded characters with an allowed character

- no space left on device error 28
	- initiated a command from a nvme / ssd directory
	- downloaded parts were getting stored on a temp in the ssd
	- the write speeds to the long term storage (rotating drive) was slow
	- temp gets full and errors start popping up !!
	- come-on AWS devs you can do better than this
	- solution 1 - either throttle manually estimating disk write speeds
	- solution 2 - run from the ultimate destination folder
	- did not see the issue online anywhere.
	
- syncing a large file > 4GB etc
	- split it into chunks 
	- [https://unix.stackexchange.com/questions/1588/break-a-large-file-into-smaller-pieces](https://unix.stackexchange.com/questions/1588/break-a-large-file-into-smaller-pieces)
	- rebuild the original file

&nbsp;   
&nbsp;   
&nbsp;

### #25- scrum is a cancer - but effective for managing inexperienced teams        
####### Friday 17 November 2023 11:24:01 PM IST #######    

- [https://devops.com/scrum-cancer-linux-6-5-richixbw/](https://devops.com/scrum-cancer-linux-6-5-richixbw/)
- agree with the article

&nbsp;   
&nbsp;   
&nbsp;

### #26- get the command associated with an alias in bash        
####### Friday 17 November 2023 10:33:38 PM IST #######    

- `type <alias-command>`
- [https://askubuntu.com/a/103524](https://askubuntu.com/a/103524)

&nbsp;   
&nbsp;   
&nbsp;

### #27- django env - loading environment variables       
####### Friday 13 October 2023 01:40:25 PM IST #######    

- don't know why this is not included in django
- with the batteries included philosophy
- [https://codinggear.blog/django-environment-variables/#google_vignette](https://codinggear.blog/django-environment-variables/#google_vignette)

&nbsp;   
&nbsp;   
&nbsp;

### #28- vue3 and bootstrap re-usable elements       
####### Saturday 30 September 2023 11:26:34 PM IST #######    

- generic html and css starters 
	- [https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp](https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp)
	- 

&nbsp;   
&nbsp;   
&nbsp;
 
### #29- migrating to vue3 - setting up bootstrap-vue with vue compat       
####### Saturday 30 September 2023 11:26:34 PM IST #######    

- the confusion is real with this one :P  
- Literally start from here:
[https://bootstrap-vue.org/vue3#prerequisites](https://bootstrap-vue.org/vue3#prerequisites)
	- install vue from a template with vite (`npm create vue@latest`)
	- follow the migration guideline as applicable 
		- [https://v3-migration.vuejs.org/migration-build.html](https://v3-migration.vuejs.org/migration-build.html)
		- here that only means:
		- install vue compat
		- alias it 
		- and set vue to mode: 2
	- use bootstrap-vue latest  '^2.23.0'    
	- use bootstrap '~4.0.0'   
	- follow getting started of bootstrap vue then

&nbsp;   
&nbsp;   
&nbsp;
 
### #30- django auth considerations - session, token, CSRF, XSS       
####### Wednesday 20 september 2023 09:06:25 AM IST #######    

- with django rest
	- [https://www.django-rest-framework.org/api-guide/authentication/](https://www.django-rest-framework.org/api-guide/authentication/)
- session vs token; CSRF, XSS
	- [https://testdriven.io/blog/django-spa-auth/](https://testdriven.io/blog/django-spa-auth/)
- where to store token
	-  [https://web.archive.org/web/20230428094039/https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage](https://web.archive.org/web/20230428094039/https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
- preventing csrf
	- [https://portswigger.net/web-security/csrf/preventing](https://portswigger.net/web-security/csrf/preventing)
- 

&nbsp;   
&nbsp;   
&nbsp;
 
### #30- django gunicorn nginx - logging       
####### Wednesday 20 september 2023 09:06:25 AM IST #######    

- well written article
	- [https://mattsegal.dev/django-gunicorn-nginx-logging.html](https://mattsegal.dev/django-gunicorn-nginx-logging.html)

&nbsp;   
&nbsp;   
&nbsp;
 
### #30- nginx proxy_pass to socket file linux       
####### Wednesday 20 september 2023 09:06:25 AM IST #######    

- cannot directly proxy pass to a unix socket and add a trailing slash
	- quoting from: [https://dev.to/vearutop/using-nginx-as-a-proxy-to-multiple-unix-sockets-3c7a](https://dev.to/vearutop/using-nginx-as-a-proxy-to-multiple-unix-sockets-3c7a)
	- `however it has an unwanted limitation that you can not add trailing / to proxy_pass. And this means that URL will be passed as is, e.g. soc1 will receive /soc1/foo instead of /foo.`
- this absolutely stupid
```
server {
    listen 80 default;

    location /soc1/ {
        proxy_pass http://soc1/;
    }
    location /soc2/ {
        proxy_pass http://soc2/;
    }
}

upstream soc1 {
    server unix:/home/ubuntu/soc1;
}

upstream soc2 {
    server unix:/home/ubuntu/soc2;
}
```

- the comment `AARGH THE TRAILING SLASH`
	-  [https://serverfault.com/questions/562756/how-to-remove-the-path-with-an-nginx-proxy-pass#comment976713_562850](https://serverfault.com/questions/562756/how-to-remove-the-path-with-an-nginx-proxy-pass#comment976713_562850)

&nbsp;   
&nbsp;   
&nbsp;
 
### #30- python syntax is so slick       
####### Saturday 16 September 2023 09:53:16 AM IST #######    

- start of day 
```python
datetime.combine(date, time, tz)

from datetime import datetime, time

start_of_day = datetime.combine(datetime.now(), time.min)
print(start_of_day) # 2023-02-10 00:00:00


end_of_day = datetime.combine(datetime.now(), time.max)
print(start_of_day) # 2023-02-10 23:59:59.999999


```
- end of day

- source:
	- [https://how.wtf/how-to-get-start-or-end-of-a-day-in-python.html](https://how.wtf/how-to-get-start-or-end-of-a-day-in-python.html)

-x-x-x-
+ getting a key from a dict nested at multiple levels
```python
example_dict.get('key1', {}).get('key2')
```
+ source:
	+ [https://stackoverflow.com/a/25833661](https://stackoverflow.com/a/25833661)
	
-x-x-x-
- good sets example:
	- source: [https://www.digitalocean.com/community/tutorials/get-unique-values-from-a-list-in-python](https://www.digitalocean.com/community/tutorials/get-unique-values-from-a-list-in-python)
-x-x-x-
+ ipython: %cpaste
-x-x-x-
- 

&nbsp;   
&nbsp;   
&nbsp;
 
### #31- vue dashboard templates       
####### Wednesday 13 September 2023 04:57:50 PM IST #######    

lists:
- [https://vuejsexamples.com/tag/dashboard-tag/](https://vuejsexamples.com/tag/dashboard-tag/)
- [https://vuejs.org/ecosystem/themes.html](https://vuejs.org/ecosystem/themes.html)
- [https://medium.com/@appseed.us/vue-dashboards-open-source-templates-to-start-fast-f60d67277e9b](https://medium.com/@appseed.us/vue-dashboards-open-source-templates-to-start-fast-f60d67277e9b)

templates:
- [https://vuejsexamples.com/administrative-and-analytical-data-dashboard-built-in-vue-js/](https://vuejsexamples.com/administrative-and-analytical-data-dashboard-built-in-vue-js/)
- [https://demos.creative-tim.com/vue-paper-dashboard/?_ga=2.177235045.1723538522.1694604114-1540783205.1694604114#/](https://demos.creative-tim.com/vue-paper-dashboard/?_ga=2.177235045.1723538522.1694604114-1540783205.1694604114#/)
- [https://demos.wrappixel.com/free-admin-templates/vuejs/xtreme-vuejs-free/main/#/starterkit](https://demos.wrappixel.com/free-admin-templates/vuejs/xtreme-vuejs-free/main/#/starterkit)
- [https://coreui.io/product/free-vue-admin-template/](https://coreui.io/product/free-vue-admin-template/)
- [https://github.com/efthakhar/invextry?ref=vuejsexamples.com](https://github.com/efthakhar/invextry?ref=vuejsexamples.com)
- [https://github.com/zuramai/mazer](https://github.com/zuramai/mazer)
- [https://github.com/efthakhar/invextry?ref=vuejsexamples.com](https://github.com/efthakhar/invextry?ref=vuejsexamples.com)
- [https://dashboardpack.com/live-demo-preview/?livedemo=1881](https://dashboardpack.com/live-demo-preview/?livedemo=1881)	
- [https://primevue.org/datatable/](https://primevue.org/datatable/) - this is a very good library
-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #31.4 - gitea installation tips and tricks       
####### Tuesday 12 September 2023 02:30:03 PM IST #######    

- install as binary
	- [https://docs.gitea.com/installation/install-from-binary](https://docs.gitea.com/installation/install-from-binary)
	- gives more control
	- follow steps till below command can be run
		- `GITEA_WORK_DIR=/var/lib/gitea/ /usr/local/bin/gitea web -c /etc/gitea/app.ini`
		- 
	
- TODO: deploy with socket file listener and activation
- run as service on linux:    
(https://docs.gitea.com/installation/linux-service)[https://docs.gitea.com/installation/linux-service]
	- try the command as the user created for this (git in this case)
	- start and enable
	- sample service file:    
	[https://github.com/go-gitea/gitea/blob/release/v1.20/contrib/systemd/gitea.service](https://github.com/go-gitea/gitea/blob/release/v1.20/contrib/systemd/gitea.service)

- not recommended to deploy as sub-path
	- [https://docs.gitea.com/administration/reverse-proxies#general-sub-path-configuration](https://docs.gitea.com/administration/reverse-proxies#general-sub-path-configuration)
- so deploy as sub-domain
	- with nginx as reverse proxy 
	[https://docs.gitea.com/administration/reverse-proxies#nginx](https://docs.gitea.com/administration/reverse-proxies#nginx)
	
- if config.ini is not found 
	- `/etc/gitea/app.ini`
	- first load of the web page presents a settings page
	- configure the required options + create admin user
	- else - the file can be added manually and the required options set manually
	- and the admin user needs to be created via the cli
		- [https://docs.gitea.com/administration/command-line](https://docs.gitea.com/administration/command-line)

- once config.ini is created to revert to strict permissions for `/etc/gitea/config.ini` file and path
	- [https://docs.gitea.com/installation/install-from-binary#create-required-directory-structure](https://docs.gitea.com/installation/install-from-binary#create-required-directory-structure)

- if not set with web setup use the starter below
	- [https://github.com/go-gitea/gitea/blob/main/custom/conf/app.example.ini](https://github.com/go-gitea/gitea/blob/main/custom/conf/app.example.ini)

- backup philosophy --> take home directory backup and all data is preserved
	- symlink `/var/lib/gitea` --> `~/other_deployments/gitea/gitea-working-dir`
	- add operating main user say `myuser` to group say `git` created for running gitea

- backup
	- [https://docs.gitea.com/administration/backup-and-restore#backup-command-dump](https://docs.gitea.com/administration/backup-and-restore#backup-command-dump)
	- along with other folders in var/lib; create --> /var/lib/gitea/backup with similar permissions as data
	- `sudo su - git -s /bin/bash -c "cd /var/lib/gitea/backups && /usr/local/bin/gitea dump -c /etc/gitea/app.ini"`


+ also helpful:
	+ [https://blog.inedo.com/self-hosted/gitea/](https://blog.inedo.com/self-hosted/gitea/)
-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #31.5 - best way to give nginx access to your folders        
####### Sunday 10 September 2023 01:30:16 PM IST #######    

- [https://stackoverflow.com/a/46083622](https://stackoverflow.com/a/46083622)
- quoting
```bash
Since Nginx is handling the static files directly, it needs access to the appropriate directories. We need to give it executable permissions for our home directory.

The safest way to do this is to add the Nginx user to our own user group. We can then add the executable permission to the group owners of our home directory, giving just enough access for Nginx to serve the files:

CentOS / Fedora

  sudo usermod -a -G your_user nginx

  chmod 710 /home/your_user 
Set SELinux to globally permissive mode, run:

sudo setenforce 0

for more info, please visit https://www.nginx.com/blog/using-nginx-plus-with-selinux/

Ubuntu / Debian

  sudo usermod -a -G your_user www-data

  sudo chown -R :www-data /path/to/your/static/folder
```

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;

### #32 - keep awake        
###### Friday 08 September 2023 12:35:01 AM IST #######    

- brilliant python utility
- [https://bazaar.launchpad.net/~ferncasado/keep.awake/trunk/files/head:/v4](https://bazaar.launchpad.net/~ferncasado/keep.awake/trunk/files/head:/v4)
- why not on github ?
- [https://launchpad.net/keep.awake](https://launchpad.net/keep.awake)
- where it started: [https://askubuntu.com/questions/576525/is-there-any-way-to-make-ubuntu-not-to-suspend-while-a-download-in-progress](https://askubuntu.com/questions/576525/is-there-any-way-to-make-ubuntu-not-to-suspend-while-a-download-in-progress)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp; 
 
### #33 - md5 util linux        
####### Tuesday 05 September 2023 09:11:19 PM IST #######    

- md5 utility linux
- [https://www.tecmint.com/generate-verify-check-files-md5-checksum-linux/](https://www.tecmint.com/generate-verify-check-files-md5-checksum-linux/)
- compare files without actually comparing files

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #34 - vs code - switch side in diff/compare editor        
####### Thursday 31 August 2023 10:39:57 PM IST #######    

- workbench.action.compareEditor.focusOtherSide
- diffEditor.switchSide
- TODO: 
	- issue: cusrsor moves to its previous state in the target buffer
	- [https://stackoverflow.com/a/70631020](https://stackoverflow.com/a/70631020)
	- move the cursor to viewport center


-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #35 - bash - get paths relative to executing file        
####### Thursday 31 August 2023 10:08:48 PM IST #######    

- TLDR: `BASH_SOURCE[0]`   
- - if symlink handling required: `readlink`
- details:  [https://stackoverflow.com/questions/24112727/relative-paths-based-on-file-location-instead-of-current-working-directory](https://stackoverflow.com/questions/24112727/relative-paths-based-on-file-location-instead-of-current-working-directory)


-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #36 - bash edit a file in-place - don't do it        
####### Thursday 31 August 2023 08:02:26 PM IST #######    

- not a good idea
- produce an intermediate file (anyway good for testing, debugging and good for restoring the original)
- clean-up afterwards

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #37 - restore a arangodb database without its indices and generate them in the background        
####### Thursday 31 August 2023 08:02:26 PM IST #######    

- output redirection in bash 
	- detailed article
	- [https://thoughtbot.com/blog/input-output-redirection-in-the-shell](https://thoughtbot.com/blog/input-output-redirection-in-the-shell)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #37 - restore a arangodb database without its indices and generate them in the background        
####### Thursday 31 August 2023 08:02:26 PM IST #######    

```bash
#!/bin/bash

# get a  backup of the structure files
find ./ -name "*.structure.json" -exec bash -c "cat {} > {}.bkp;" \;

# debug
## find ./ -name "*.structure.json.bkp" -exec bash -c "echo {} | sed -r 's/.bkp//g';" \;

# read from backup remove indexes key from the structure files and overwrite
find ./ -name "*.structure.json.bkp" | awk '{print "cat " $1 " | jq --compact-output \"setpath([\\\"indexes\\\"]; [])\" > $(echo \"" $1 "\" | sed -r \"s/.bkp//g\")"}' | bash -x
sync;

```

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #38 - find --exec -- is not a complete bash environment        
####### Thursday 31 August 2023 08:02:26 PM IST #######    

- I wasted a few hours with this
- everything that works with bash (on a terminal / command line) will not 
work with `find --exec` since it is not a full fledged bash environment 
	- Eg. completions / executions of back quoted expressions etc
	- command substitution definitely does not work `$(<expression>)`
	- [https://stackoverflow.com/questions/42845148/sed-not-working-properly-inside-finds-exec](https://stackoverflow.com/questions/42845148/sed-not-working-properly-inside-finds-exec)
	- [https://unix.stackexchange.com/questions/587308/sed-command-does-not-work-with-find-exec](https://unix.stackexchange.com/questions/587308/sed-command-does-not-work-with-find-exec)
- rather use `| bash -x`

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #39 - jq tips and tricks        
####### Thursday 31 August 2023 07:30:07 PM IST #######    

- online jq editor and tester
	- [https://jqplay.org/](https://jqplay.org/)
- docs
	- [https://jqlang.github.io/jq/manual/v1.6/](https://jqlang.github.io/jq/manual/v1.6/)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #40 - grep tips and tricks        
####### Thursday 31 August 2023 07:23:04 PM IST #######    

- exclude, include
	- `grep pattern -r --include=\*.cpp --include=\*.h rootdir`
	- The syntax for `--exclude` is identical.
	- [https://stackoverflow.com/a/221929](https://stackoverflow.com/a/221929)
	
- exclude-dir
	- `grep -rI --exclude-dir="\.svn" "pattern" *`
	- same stackoverflow thread as above
- exclude binary -> -I
	- example above


-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #41 - Generating UML / ER diagram from JSON/swagger        
####### Monday 28 August 2023 02:20:56 PM IST #######    

- python library: 
	- [https://github.com/nlohmann/swagger_to_uml](https://github.com/nlohmann/swagger_to_uml)
- nodejs library: 
	- [https://github.com/nrekretep/pikturr](https://github.com/nrekretep/pikturr)
- plantuml - mostly the base for all diagramming and graphing tools:
	- [https://github.com/plantuml/plantuml](https://github.com/plantuml/plantuml)


-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #42 - javascript doc-strings        
####### Sunday 27 August 2023 08:33:32 PM IST #######    

- how to write doc-strings for a function / class    
[https://dev.to/stephencweiss/write-your-own-javascript-contracts-and-docstrings-42ho](https://dev.to/stephencweiss/write-your-own-javascript-contracts-and-docstrings-42ho)

- TLDR;
```
There’s // for a single line comment.

There’s /* */ for single or multi-line comment.

Lastly, there’s /** */. This is a description. I think of it as Javascript’s equivalent to Python’s docstring.
```

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #43 - tools for handling sqlite databases       
####### Sunday 27 August 2023 06:56:59 AM IST #######    

- cpp based gui - written in qt
[https://github.com/sqlitebrowser/sqlitebrowser#ubuntu-and-derivatives](https://github.com/sqlitebrowser/sqlitebrowser#ubuntu-and-derivatives)

- web + php based (like phpmyadmin)    
[https://github.com/phpLiteAdmin/pla](https://github.com/phpLiteAdmin/pla) 


-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #44 - google picked up a url for a variable in `<script>` not sure how       
####### Sunday 27 August 2023 06:56:59 AM IST #######    

- not sure how this happened but google picked up url from code like below:    
inside a script tag in the html
```javascript
const appDomain = "https://application.com";
const apiUrl = appDomain+"/lead/api/init-signup";
```

- only good test found so far:    
[https://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157](https://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #45 - wordpress which folder to used for custom js / css       
####### Thursday 24 August 2023 07:37:32 PM IST #######    

- generally accepted    
`/wp-content/uploads/<your-project>-scripts/<script-name>.js` 

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;
 
### #46 - python module discovery       
####### Tuesday 22 August 2023 01:05:07 PM IST #######    

- set the path to add the parent directory of the module you'd be expecting
	- path can be set in bash 
	- or in python with `sys` library 
- `__init__.py` file in the directory
- all the .py files in the folder will be visible to python and can be imported
- practical example checkout next point for a practical example    
 

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;

### #47 - django tips      
####### Sunday 20 August 2023 03:59:42 PM IST #######    

- django transactions management    
[https://docs.djangoproject.com/en/4.2/topics/db/transactions/#django.db.transaction.atomic](https://docs.djangoproject.com/en/4.2/topics/db/transactions/#django.db.transaction.atomic)    
as decorator and context manager

- need a utility like get_or_create_object --> where only the object gets created and not saved in the db

- using django models in a script    
```python
# load the environment before the rest of the code
import os
import sys

# setup the django environment
import django
from pathlib import Path
# import os # already imported
# add django project dir to path
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_project.settings')
django.setup()
```
[https://stackoverflow.com/a/19426755](https://stackoverflow.com/a/19426755)    
the entire thread is useful:     
[https://stackoverflow.com/questions/16853649/how-to-execute-a-python-script-from-the-django-shell](https://stackoverflow.com/questions/16853649/how-to-execute-a-python-script-from-the-django-shell)


- another way of running a django script
```python
$ ./manage.py shell < myscript.py
You could also do:

$ ./manage.py shell
...
>>> execfile('myscript.py')
For python3 you would need to use

>>> exec(open('myscript.py').read())
```

- these tasks could be also done as django management commands below, but I wanted a way of using django without making it into a webapp    
basically, another project using django as a library, and not a django project using others as a library    
[https://docs.djangoproject.com/en/dev/howto/custom-management-commands/](https://docs.djangoproject.com/en/dev/howto/custom-management-commands/)


- squash migrations    
not working very well for migrations that use --> runpython; dunno why :(


- django configuration management    
[https://django-configurations.readthedocs.io/en/0.2.1/](https://django-configurations.readthedocs.io/en/0.2.1/)
	- interesting design, allows a lot of flexibility

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #47 - autofill job applications     
####### Monday 14 August 2023 02:12:55 PM IST #######    

- Simplify    
[https://simplify.jobs/autofill](https://simplify.jobs/autofill)
- TealHq    
[https://www.tealhq.com/how-it-works](https://www.tealhq.com/how-it-works)
- Kumquat    
[https://chrome.google.com/webstore/detail/kumquat/mkjkimankkfhefaabddppkhbobffaadp?hl=en](https://chrome.google.com/webstore/detail/kumquat/mkjkimankkfhefaabddppkhbobffaadp?hl=en)    
[https://github.com/rpeng220/kaleidoscope](https://github.com/rpeng220/kaleidoscope)    
[https://www.reddit.com/r/berkeley/comments/ly5bce/i_made_a_chrome_extension_that_autofills_job_apps/](https://www.reddit.com/r/berkeley/comments/ly5bce/i_made_a_chrome_extension_that_autofills_job_apps/)

- I am trying to make a plugin for auto-filling workday forms for job applications
	- 

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #48 - getting data out of linkedin    
####### Monday 14 August 2023 02:12:55 PM IST #######    

- nice plugin    
[https://github.com/joshuatz/linkedin-to-jsonresume](https://github.com/joshuatz/linkedin-to-jsonresume)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #49 - automating a react form - from outside react    
####### Monday 14 August 2023 12:04:26 PM IST #######    

- setting the value for the input and firing events has not worked    
(most stackoverflow suggestions)

- Planning to try react testing libraries
	- [https://github.com/testing-library/react-testing-library](https://github.com/testing-library/react-testing-library)

- noting on the internet worked:
	- finally the below method worked
	- select the input element in the html inspector 
	- store the element as a global variable
	- find the '__reactProps' variable for the dom element
	- `Object.keys(containerEle).find(key => key.includes('__reactProps'));`
	- there will be onBlur, onChange, onFocus, onKeyPress,... etc implemented on the input element
	- goto the definition of these functions in order of most likely (as listed above)
		- find the event that has the `.setState({data})` lines
		- and understand the input data required for the function to setState correctly.
		- one way to observe that is to add break points and trigger the functions as a user
	- **IMP** events fired on the element have been buffered by react in the latest versions
	

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #50 - django - create initial data for a model / table     
####### Thursday 10 August 2023 04:03:17 AM IST #######


- TLDR;    
migrations --> operations --> runPython

- detailed thread and docs    
[https://stackoverflow.com/questions/39739439/how-to-define-default-data-for-django-models](https://stackoverflow.com/questions/39739439/how-to-define-default-data-for-django-models)    
[https://docs.djangoproject.com/en/3.2/topics/migrations/#data-migrations](https://docs.djangoproject.com/en/3.2/topics/migrations/#data-migrations)    
[https://docs.djangoproject.com/en/3.2/ref/migration-operations/#django.db.migrations.operations.RunPython](https://docs.djangoproject.com/en/3.2/ref/migration-operations/#django.db.migrations.operations.RunPython)

- example:
```python
# initial warehouses
initial_warehouses = [
    {
        "name": "External Purchase",
        "code": "PURCHASE",
        "location": "virtual"
    },
    {
        "name": "External Sale",
        "code": "SALE",
        "location": "virtual"
    },
    {
        "name": "Suspense head",
        "code": "SUSPENSE",
        "location": "virtual"
    },
]

def create_default_warehouses(apps, schema_editor):
    Warehouse = apps.get_model('inventory', 'Warehouse')
    for wh_data in initial_warehouses:
        new_wh = Warehouse(**wh_data)
        new_wh.save()
```

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #51 - proposed structure for a django application - for early stage development     
####### Thursday 10 August 2023 02:20:45 AM IST #######


- layer 1 - urls and views
	- urls routing - keep this generally stable - design around crud for principle entities
	- example for principle entities - user, roles 
	- basically the nodes of a UML diagram for the project, or the entity relationship diagram
- layer 2 - library / glue layer
	- each app to use function based views to reply to requests
	- each installed app to have a lib --> with functions that call on models to generate responses
	- allows for the underlying models to change without changing the response structure
- layer 3 - models / db calls
	- is the most dynamic layer at the initial stages
	- can change a lot wit compatibility changes happening at the lib (layer 2) level

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #52 - django models - warehouse and inventory management     
####### Thursday 10 August 2023 02:14:32 AM IST #######   


- greater wms    
[https://github.com/GreaterWMS/GreaterWMS](https://github.com/GreaterWMS/GreaterWMS)
- oodo    
[https://github.com/odoo/odoo](https://github.com/odoo/odoo)
	- much more than an inventory management system
	- a general 

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #53 - pythonic mysql connector     
####### Thursday 10 August 2023 01:31:33 AM IST #######   


- good docs and good api
- [https://github.com/PyMySQL/PyMySQL](https://github.com/PyMySQL/PyMySQL)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #54 - amazon seller / vendor api     
####### Thursday 10 August 2023 01:31:33 AM IST #######   


- creating an oauth app and getting access    
[https://developer-docs.amazon.com/sp-api/docs](https://developer-docs.amazon.com/sp-api/docs)
	- uses AWS components - deliberate attempt to get AWS accounts created
	- auth precedure is complicated - but does provide granularity of access
		- one good way of confirming auth - try to make requests to sandbox
		- [https://deltologic.com/blog/how-to-connect-to-amazon-sp-api-and-make-requests](https://deltologic.com/blog/how-to-connect-to-amazon-sp-api-and-make-requests)
		- common auth pitfalls: [https://developer-docs.amazon.com/sp-api-blog/docs/troubleshooting-selling-partner-api-authorization-errors#access-to-requested-resource-is-denied](https://developer-docs.amazon.com/sp-api-blog/docs/troubleshooting-selling-partner-api-authorization-errors#access-to-requested-resource-is-denied)
	- sandbox is well documented
	- schema is well documented    
	Eg. (https://github.com/amzn/selling-partner-api-models/blob/main/models/orders-api-model/ordersV0.json#L26)[https://github.com/amzn/selling-partner-api-models/blob/main/models/orders-api-model/ordersV0.json#L26]
	- the api request and response structures documented very well 
	- api versions documented well
	- common use-cases: [https://developer-docs.amazon.com/sp-api-blog/docs/prepare-your-sp-api-application-for-holiday-shoppers](https://developer-docs.amazon.com/sp-api-blog/docs/prepare-your-sp-api-application-for-holiday-shoppers)
- python wrapper to interact with the api    
[https://github.com/saleweaver/python-amazon-sp-api](https://github.com/saleweaver/python-amazon-sp-api)
	- very well built
	- good design for abstracting out the complexities of the seller api
	- retries, rate limits, pagination handled very well 
	- the config system is a bit screwed up 
		- path to config file is hard coded :D weird

- TODO: generate a UML / ER diagram for the api
	- look for swagger --> UML

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #55 - python set environment variable in code     
####### Thursday 10 August 2023 01:31:33 AM IST #######   


- TLDR;     
```python
import os

# Set environment variables
os.environ['API_USER'] = 'username'

# os has other useful features for handling environment variables
```
[https://able.bio/rhett/how-to-set-and-get-environment-variables-in-python--274rgt5](https://able.bio/rhett/how-to-set-and-get-environment-variables-in-python--274rgt5)

- with multi threading / sub-processes    
[https://stackoverflow.com/questions/8365394/set-environment-variable-in-python-script](https://stackoverflow.com/questions/8365394/set-environment-variable-in-python-script)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #56 - code generators, AI auto-complete to try in 2023     
####### Thursday 10 August 2023 01:31:53 AM IST #######   

- TODO: try
- git hub co-pilot
- cogram
- Sonar Cube
- chat-gpt
[https://www.youtube.com/watch?v=iO1mwxPNP5A](https://www.youtube.com/watch?v=iO1mwxPNP5A)
	- chat-gpt custom pseudo-code language to write react apps 
	- 

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #57 - git and multiple keys ssh for each project     
####### Tuesday 08 August 2023 06:39:32 AM IST #######   

- git can take ssh keys from a ssh config
- so all the variations supported by ssh config can be used by git    
[https://stackoverflow.com/questions/4565700/how-to-specify-the-private-ssh-key-to-use-when-executing-shell-command-on-git](https://stackoverflow.com/questions/4565700/how-to-specify-the-private-ssh-key-to-use-when-executing-shell-command-on-git)
- checking ssh access to git shell   
[https://support.atlassian.com/bitbucket-cloud/docs/set-up-personal-ssh-keys-on-linux/#Check-that-your-SSH-authentication-works](https://support.atlassian.com/bitbucket-cloud/docs/set-up-personal-ssh-keys-on-linux/#Check-that-your-SSH-authentication-works)

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


### #58 - git and file permissions / modes     
####### Tuesday 08 August 2023 06:39:32 AM IST #######   

- interesting discussion
- useful for ntfs mounted on linux
- bash on windows..     
[https://stackoverflow.com/questions/1580596/how-do-i-make-git-ignore-file-mode-chmod-changes](https://stackoverflow.com/questions/1580596/how-do-i-make-git-ignore-file-mode-chmod-changes)
- TLDR; 
```bash
git config core.fileMode false
```

-x-x-x-
&nbsp;   
&nbsp;   
&nbsp;


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
  - original question: [https://stackoverflow.com/questions/56869952/what-is-ec2-other-filter-in-cost-explorer-dashboard-mean](https://stackoverflow.com/questions/56869952/what-is-ec2-other-filter-in-cost-explorer-dashboard-mean)

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

- when two single page applications need to be combined
	- [https://stackoverflow.com/questions/50810022/cant-get-two-single-page-applications-to-run-together-on-one-server-using-nginx](https://stackoverflow.com/questions/50810022/cant-get-two-single-page-applications-to-run-together-on-one-server-using-nginx)

- some links for vue specific case
	- [https://stackoverflow.com/questions/49072584/vue-router-nginx-and-direct-link](https://stackoverflow.com/questions/49072584/vue-router-nginx-and-direct-link)
	

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
- ####### Sat Jan 13 09:34:52 PM IST 2024 ####### 
 - free and open source:
	- [Emerge](https://github.com/glato/emerge)
		- sounds like it have everything needed in this regard
	- [Pyan](https://github.com/davidfraser/pyan)
		- only for python
	- [Code2Flow](https://github.com/scottrogowski/code2flow)
		- for dynamically typed language
		- works for Javascript, Ruby, Php, Python
	- [CodeFlower](https://www.redotheweb.com/CodeFlower/)
		- not exactly code visualization
		- only file-tree as a graph
	- dependency visualization
		- [Bazle](https://blog.bazel.build/2015/06/17/visualize-your-build.html)
			- multi-language builder
		- [Maven Degraph](https://github.com/ferstl/depgraph-maven-plugin)
		- Python: [Pip dep tree](https://pypi.org/project/pipdeptree/)
	- [App Map](https://appmap.io/pricing) - Freemium
	- [Grapple - code as Google Maps city](https://marketplace.visualstudio.com/items?itemName=grappl.grappl)
		- only code composition, no interrelationships  
	- [Github repo-visualization](https://githubnext.com/projects/repo-visualization/)
		- only code composition, no interrelationships  
	- [Sourcetrail](https://github.com/CoatiSoftware/Sourcetrail)
		- not in active development
		- users say that it still works alright
	- [Graph Buddy](https://plugins.jetbrains.com/plugin/13467-graph-buddy)
		- Java, Scala
	- [Doxygen](https://www.doxygen.nl/manual/features.html)
		- a documentation tool
		- has a diagrams feature built-in
	- [Codevis](https://invent.kde.org/sdk/codevis)
		- for c++
	- 
 - paid:
	- [Code See](https://www.codesee.io/shipping-code-faster)
	- [Code Map. app](https://codemap.app/pricing)
	- [Embold](https://embold.io/)
	- [Understand by SciTools](https://scitools.com/pricing)
		- so expensive - that pricing is a contact us form :D
		- but the writeup is super friendly 
	- [Sourcegraph](https://about.sourcegraph.com/pricing)
		- not really code visualization, code editor + search + LLM for code analysis QnA
	- [Code Scene](https://codescene.com/)
		- important significant features:
		- cost of change 
		- developer on-boarding and off-boarding
		- free for open source projects 
	
	 - 
- source mentions:
	- [https://hashdork.com/greatest-code-visualization-tools-for-developers/](https://hashdork.com/greatest-code-visualization-tools-for-developers/)
	- [https://lmy.medium.com/7-tools-for-visualizing-a-codebase-41b7cddb1a14](https://lmy.medium.com/7-tools-for-visualizing-a-codebase-41b7cddb1a14)
	
- some desired features that were not seen in any of them
	- git blame conversion --> knowledge and off-boarding of developer
		- answers the question - how much of this code base is maintained by a single developer
		- we can go back say last 6 months of code diffs and build the knowledge / influence map of a developer on a project
		- git diff conversion for fan-out / fan-in based files location maps and dependency maps
- which one I am going to try first
	- emerge - seems the most complete of all
	- will try to contribute if required - hopefully
	- 
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

- [tmux demo youtube link](https://www.youtube.com/watch?v=DzNmUNvnB04)
- other terminal and shell options:
	- pretzo 
	- the console used by the chip igniter program presenter - Matt Venn
		- loved the one he used in the analog design tool introduction video
		- TODO: find out the name and theme
	- fish-shell
	- anti-gen
	- 

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
 
