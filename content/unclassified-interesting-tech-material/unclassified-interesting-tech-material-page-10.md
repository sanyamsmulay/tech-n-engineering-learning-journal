---
title: Unclassified Interesting Tech Material - page 10
date: 2024-01-20 20:77:10
tags: [unclassified, tech]
category: software-dev
---

# Unclassified Interesting Tech Material - page 10


continued from:  
[unclassified interesting tech material page 9](/2023/05/10/unclassified-interesting-tech-material/unclassified-interesting-tech-material-page-9/)

---

## Unclassified trinkets






### #92- infra as code - options      
####### Wed Feb 28 05:30:19 PM IST 2024 #######     

- Pulumi - [https://www.pulumi.com/docs/concepts/how-pulumi-works/](https://www.pulumi.com/docs/concepts/how-pulumi-works/)
	- multi-cloud support - AWS, Azure, Google Cloud, etc


&nbsp;   
&nbsp;   
&nbsp;

### #93- get/clone all repos for an org - github      
####### Tue Feb 27 10:57:49 PM IST 2024 #######     

- Get a token from github
- Send curl request to github 
```curl 
  curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/orgs/digbicode/repos?type=all&per_page=50&page=1
```
  
- Store the json in a file
- Use the json to construct a yaml in the vcstool compatible format
- Add a virtual env for python - activate
- Install vcs with pip
- Run `vcs import < compatible.yaml` file


&nbsp;   
&nbsp;   
&nbsp;

### #94- Launch a mac from an image     
####### Wed Jan 24 07:42:13 PM IST 2024 #######     

- TODO: nothing worth note so far, find out more

&nbsp;   
&nbsp;   
&nbsp;

### #95- 12 factor app - criteria     
####### Wed Jan 24 07:42:13 PM IST 2024 #######     

- 

&nbsp;   
&nbsp;   
&nbsp;

### #96- yarn cache local packages - need a better solution     
####### Wed Jan 24 07:42:13 PM IST 2024 #######     

- source [https://medium.com/hackernoon/node-js-yarning-for-local-packages-9a7970edea7](https://medium.com/hackernoon/node-js-yarning-for-local-packages-9a7970edea7)
- development workflow:

```bash 
## add package
yarn add path/to/code/my-npm-module

## Remove the package and clean local cache
yarn remove my-npm-mdule
yarn cache clean

## Re-install it
yarn add path/to/code/my-npm-module
```

&nbsp;   
&nbsp;   
&nbsp;

### #97- Resolving spring boot properties using the AWS Parameter Store     
####### Wed Jan 24 07:42:13 PM IST 2024 #######     

- [https://rieckpil.de/resolving-spring-boot-properties-using-the-aws-parameter-store-ssm/](https://rieckpil.de/resolving-spring-boot-properties-using-the-aws-parameter-store-ssm/)
- [https://zhangran1.medium.com/spring-boot-with-aws-parameter-store-and-aws-secret-manager-a45131bf9ac8](https://zhangran1.medium.com/spring-boot-with-aws-parameter-store-and-aws-secret-manager-a45131bf9ac8)
- amazing articles both of them 

&nbsp;   
&nbsp;   
&nbsp;

### #98- git connection over ssh - debugging     
####### Wed Jan 24 07:42:13 PM IST 2024 #######     

- [https://askubuntu.com/questions/336907/really-verbose-way-to-test-git-connection-over-ssh](https://askubuntu.com/questions/336907/really-verbose-way-to-test-git-connection-over-ssh)
- good test is to test the ssh access itself
- `ssh -v`

&nbsp;   
&nbsp;   
&nbsp;

### #98- ssh file and folder permissions    
####### Wed Jan 24 07:42:13 PM IST 2024 #######     

- very well written article on the topic:
- [https://frankindev.com/2020/11/26/permissions-for-.ssh-folder-and-key-files/](https://frankindev.com/2020/11/26/permissions-for-.ssh-folder-and-key-files/)
- quoted:

```bash
sudo chmod 700 ~/.ssh
sudo chmod 644 ~/.ssh/id_example.pub
sudo chmod 600 ~/.ssh/id_example
```


&nbsp;   
&nbsp;   
&nbsp;

### #99- Black screen after logout    
####### Tue Jan 23 08:43:32 PM IST 2024 #######     

- yet to fix this on my PC: TODO
- [https://ubuntuforums.org/showthread.php?t=1665405](https://ubuntuforums.org/showthread.php?t=1665405)
	- seems like a video card driver issue
	- it tries to reuse the session instead of 
	- set the session to exit and restart
		- TODO: try this solution
	- [https://ubuntuforums.org/showthread.php?t=2194532](https://ubuntuforums.org/showthread.php?t=2194532)
	- [https://www.reddit.com/r/archlinux/comments/kydk68/blank_screen_with_blinking_cursor_after_logout/](https://www.reddit.com/r/archlinux/comments/kydk68/blank_screen_with_blinking_cursor_after_logout/)


&nbsp;   
&nbsp;   
&nbsp;


### #100- ubuntu trying out colour schemes for monitors    
####### Tue Jan 23 08:43:32 PM IST 2024 #######     


- red tint when using nvidia driver for card
	- [https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/4071](https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/4071)	
	- seems like a driver issue
	- but is fixed by finding the right colour profile for the monitor
	- [https://askubuntu.com/questions/1405904/ubuntu-22-04-shows-wrong-colors](https://askubuntu.com/questions/1405904/ubuntu-22-04-shows-wrong-colors)
	- 

&nbsp;   
&nbsp;   
&nbsp;



### #101- a scrum managers dream    
####### Sunday 14 January 2024 05:17:02 PM IST #######

- range.co [https://www.range.co/](https://www.range.co/)
    - running effective software dev team
    - scrum templates:
    - sprint planning template: [https://www.range.co/templates/sprint-planning-meeting-template](https://www.range.co/templates/sprint-planning-meeting-template)
    - scrum meeting: [https://www.range.co/templates/scrum-meeting-template](https://www.range.co/templates/scrum-meeting-template)
    - [how to use range](https://www.range.co/help/article/how-to-use-range)

&nbsp;   
&nbsp;   
&nbsp;

### #102- a very good audio-video platform implementation    
####### Sunday 14 January 2024 05:17:02 PM IST #######

- 100ms [https://www.100ms.live/](https://www.100ms.live/)
- well made platform for audio video calls
- shout out to them for making it so well
- have not tried this on scale, 
	- but with the quality of the product in general I think they should have if covered

&nbsp;   
&nbsp;   
&nbsp;

