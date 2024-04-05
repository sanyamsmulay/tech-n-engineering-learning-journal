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




### #82- postegres architecture - storage on disk     
####### Thu Apr  4 07:34:21 PM IST 2024 #######     

- general architecture:
	- [https://severalnines.com/blog/understanding-postgresql-architecture/](https://severalnines.com/blog/understanding-postgresql-architecture/) 
- how files are named:
	- [https://www.postgresql.org/docs/current/storage-file-layout.html](https://www.postgresql.org/docs/current/storage-file-layout.html)
- custom implementations for table access:
	- [https://www.postgresql.org/docs/current/tableam.html](https://www.postgresql.org/docs/current/tableam.html)

&nbsp;   
&nbsp;   
&nbsp;

### #83- s3 reduce the size of a bucket              
####### Thursday 04 April 2024 01:09:47 AM IST #######     

- reduce the number of copies in a versioned
- s3 bucket behaviour when deleting objects from a versioned bucket
	- path points to a null / delete marker
	- [https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html) 
- s3 lifecycle actions:
	- [https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html#intro-lifecycle-rules-actions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html#intro-lifecycle-rules-actions)
- tips:
	- delete versions / keep only one
	- delete incomplete / partial files


&nbsp;   
&nbsp;   
&nbsp;

### #84- reduce the size of the primary volume of the ec2 instance             
####### Thursday 04 April 2024 01:09:47 AM IST #######     


- incomplete answers
	- [https://serverfault.com/questions/1114803/decrease-size-of-ebs-volume-attached-to-ec2-instance](https://serverfault.com/questions/1114803/decrease-size-of-ebs-volume-attached-to-ec2-instance)
	- [https://medium.com/@andtrott/how-to-downsize-a-root-ebs-volume-on-aws-ec2-amazon-linux-727c00148f61](https://medium.com/@andtrott/how-to-downsize-a-root-ebs-volume-on-aws-ec2-amazon-linux-727c00148f61)
	- 
	- this does not reformat / update the grub entries for the new disk, will get stuck at boot, as reported by someone later
- this one is more likely to work
	- [https://medium.com/@m.yunan.helmy/decrease-the-size-of-ebs-volume-in-your-ec2-instance-ea326e951bce](https://medium.com/@m.yunan.helmy/decrease-the-size-of-ebs-volume-in-your-ec2-instance-ea326e951bce)
	


&nbsp;   
&nbsp;   
&nbsp;

### #85- get all open urls in firefox            
####### Thursday 04 April 2024 01:09:47 AM IST #######     


- [https://superuser.com/a/464774](https://superuser.com/a/464774)
- this actually works !! :rofl 
```


Go to Tools > Options.

In the General tab look for the Use Current Pages button in the Startup section. When you click on the Use Current Pages button, all the URLs of the pages open in different tabs are copied to the Home Page text box with a pipe delimiter. Copy the text to get all the URLs.

The keyboard shortcut to simulate clicking on the Use Current Pages button is Alt+T+O+C (tested in Firefox 14)

```


&nbsp;   
&nbsp;   
&nbsp;

### #86- fzf - terminal file viewer in lua           
####### Wed Apr  3 08:21:20 PM IST 2024 #######      

- demo: [https://www.youtube.com/watch?v=tDM3GrfE7Ns](https://www.youtube.com/watch?v=tDM3GrfE7Ns) 
- base project: [https://github.com/junegunn/fzf](https://github.com/junegunn/fzf)
- extension: [https://github.com/jdpedersen1/fzfm](https://github.com/jdpedersen1/fzfm)

&nbsp;   
&nbsp;   
&nbsp;

### #86- postgresql - postgres is a swissarmy knife of backend           
####### Wed Apr  3 08:21:20 PM IST 2024 #######      

- can do object-relational database features, table inheritance, package manager for extensions 
- can run many languages: eg. can have stored procedures that uses pandas functions
- pg_cron: expiring key-values like redis
- Notify/Listen - pub/sub
- pgmq: replace sqs
- jsonb - replace mongo
- apache age + open cypher query language - graph database
- timscaledb + grafana - for timeseries data
- full-text-search --> replace elastic search
- pgml + gpu - for LLMs
- postgrest - rest api for DB
- pg_graphql - graph api for db  
- [https://www.youtube.com/watch?v=VEWXmdjzIpQ](https://www.youtube.com/watch?v=VEWXmdjzIpQ)

&nbsp;   
&nbsp;   
&nbsp;

### #86- snakemake orchestration          
### #86- integrating sentry for php+code-igniter to catch all errors           
####### Wed Apr  3 01:10:45 AM IST 2024 #######      

- override the base exceptions class of code igniter - log to sentry there 
- [https://www.codeigniter.com/user_guide/general/errors.html#logging-exceptions](https://www.codeigniter.com/user_guide/general/errors.html#logging-exceptions)
- latest version have very good ways of doing this 

&nbsp;   
&nbsp;   
&nbsp;

### #86- snakemake orchestration          
####### Wed Apr  3 01:10:45 AM IST 2024 #######      

- tibanna: [https://tibanna.readthedocs.io/en/latest/](https://tibanna.readthedocs.io/en/latest/)
- AWS to execute snakemake directly: [https://aws.amazon.com/genomics-cli/](https://aws.amazon.com/genomics-cli/) 
- other cloud platforms: [https://snakemake.readthedocs.io/en/v7.31.1/executing/cloud.html](https://snakemake.readthedocs.io/en/v7.31.1/executing/cloud.html) 

&nbsp;   
&nbsp;   
&nbsp;

### #86- pg_restore - has confusing options - tips below          
####### Wed Apr  3 01:10:45 AM IST 2024 #######      

- `--no-privileges` and `--no-owner` to restore to empty / newly created database  
- add `--clean` and `--if-exists` add if you want to remove existing tables from database  
- no good resource found about this.. that is surprising 
- `--clean` drops a database and creates it again --> and cannot drop database that does not exist
- [https://stackoverflow.com/questions/66231815/restore-a-psql-dump-to-an-other-new-database-name-d-dbname-and-f-file-ca](https://stackoverflow.com/questions/66231815/restore-a-psql-dump-to-an-other-new-database-name-d-dbname-and-f-file-ca)
- [https://dba.stackexchange.com/questions/207993/pg-restore-into-a-new-database](https://dba.stackexchange.com/questions/207993/pg-restore-into-a-new-database)
- [https://stackoverflow.com/questions/70944174/pg-restore-restore-all-schema](https://stackoverflow.com/questions/70944174/pg-restore-restore-all-schema)
- [https://stackoverflow.com/questions/40784677/pg-restore-with-c-option-does-not-create-the-database](https://stackoverflow.com/questions/40784677/pg-restore-with-c-option-does-not-create-the-database)
- [https://dba.stackexchange.com/questions/325524/pg-restore-complains-both-if-the-database-exists-or-not-when-importing-a-backup](https://dba.stackexchange.com/questions/325524/pg-restore-complains-both-if-the-database-exists-or-not-when-importing-a-backup)
- 
- [man pages](https://www.postgresql.org/docs/current/app-pgdump.html) 

&nbsp;   
&nbsp;   
&nbsp;

### #86- misc about bash command invocation          
####### Fri Mar 29 06:06:30 PM IST 2024 #######      

- invoking a command / script in bash
	- [https://askubuntu.com/questions/601055/what-are-the-differences-between-executing-shell-scripts-using-source-file-sh](https://askubuntu.com/questions/601055/what-are-the-differences-between-executing-shell-scripts-using-source-file-sh)
- source ~/some_script
	- this is **async** --> nobody tells this upfront
	- [https://stackoverflow.com/questions/50156206/source-bash-profile-do-not-works-inside-a-bash-script](https://stackoverflow.com/questions/50156206/source-bash-profile-do-not-works-inside-a-bash-script)
	- inside the script - 

&nbsp;   
&nbsp;   
&nbsp;

### #87- Snakemake - containerize         
####### Tue Mar 26 03:53:57 PM IST 2024 #######      

- [https://snakemake.readthedocs.io/en/v8.4.8/executing/cli.html#utilities](https://snakemake.readthedocs.io/en/v8.4.8/executing/cli.html#utilities) 
- `--containerize`
	- Print a Dockerfile that provides an execution environment for the workflow, including all conda environments.
	- TODO: try it out

&nbsp;   
&nbsp;   
&nbsp;

### #88- Snakemake - Jobs status management         
####### Tue Mar 26 03:53:57 PM IST 2024 #######      

- issue: no jobs getting processed after an hour of snakemake runnning on an aws ec2 instance
- logs seem to stop abruptly, indicating that the thread went to sleep 
- not clear if snakemake uses `slurm`internally for job-queue management
- so possibly related threads:
	- [https://github.com/Snakemake-Profiles/generic/issues/1](https://github.com/Snakemake-Profiles/generic/issues/1)
	- local process vs cluster process:[https://stackoverflow.com/questions/76484162/is-there-a-way-to-know-what-jobs-are-currently-running-in-a-snakemake-workflow](https://stackoverflow.com/questions/76484162/is-there-a-way-to-know-what-jobs-are-currently-running-in-a-snakemake-workflow)
	- Monitoring in snakemake: [https://snakemake.readthedocs.io/en/stable/executing/monitoring.html](https://snakemake.readthedocs.io/en/stable/executing/monitoring.html)
		- introduced late in the api, available in latest versions
		- may or may not be reliable
	- [https://github.com/snakemake/snakemake/issues/1248](https://github.com/snakemake/snakemake/issues/1248)
	- [https://github.com/snakemake/snakemake/issues/759](https://github.com/snakemake/snakemake/issues/759)
	- [https://stackoverflow.com/questions/66122961/select-jobs-to-execute-runs-literally-forever](https://stackoverflow.com/questions/66122961/select-jobs-to-execute-runs-literally-forever)
	- [https://unix.stackexchange.com/questions/36195/how-to-know-reason-of-a-process-going-to-sleep-state-and-wake-it-up](https://unix.stackexchange.com/questions/36195/how-to-know-reason-of-a-process-going-to-sleep-state-and-wake-it-up)
	- [https://github.com/snakemake/snakemake/issues/2091](https://github.com/snakemake/snakemake/issues/2091)
	- seems like there is no real solution: [https://www.biostars.org/p/9471383/](https://www.biostars.org/p/9471383/)
- proposed solution:
	- custom status script
	- [https://stackoverflow.com/questions/64808326/snakemake-does-not-recognise-job-failure-due-to-timeout-with-error-code-11](https://stackoverflow.com/questions/64808326/snakemake-does-not-recognise-job-failure-due-to-timeout-with-error-code-11)
	- [https://github.com/jaicher/snakemake-qsub/blob/master/%7B%7Bcookiecutter.profile_name%7D%7D/qsub-status.py#L287](https://github.com/jaicher/snakemake-qsub/blob/master/%7B%7Bcookiecutter.profile_name%7D%7D/qsub-status.py#L287)
	- uses `qstat`  
	- don't know if it will be effective or not
	
- solution:
	- turns out, we were looking in the wrong direction
	- the process went to sleep as the bash session that invoked the command disconnected
	- so just run it inside a screen :D 
	- dumb stuff

to try:
 - timeouts
 - job status scripts 
 - verbose logging
 - check where the thread is sleeping
 - 

&nbsp;   
&nbsp;   
&nbsp;

### #89- Forum software open source         
####### Wed Mar 20 07:48:14 PM IST 2024 #######      

- List:
	- [https://opensourcelist.github.io/products/forum.html](https://opensourcelist.github.io/products/forum.html)
- python-flask
	- [https://github.com/flaskbb/flaskbb](https://github.com/flaskbb/flaskbb)
- Misago (django) 
	- [https://github.com/rafalp/Misago/tree/main](https://github.com/rafalp/Misago/tree/main)
- NodeBB (nodejs)
	- [https://nodebb.org/](https://nodebb.org/)
- List:
	- [https://itsfoss.com/open-source-forum-software/](https://itsfoss.com/open-source-forum-software/)
- Discourse (RoR)
	- [https://github.com/discourse/discourse](https://github.com/discourse/discourse)
- List:
	- [https://medevel.com/12-forums-os/](https://medevel.com/12-forums-os/)

&nbsp;   
&nbsp;   
&nbsp;

### #90- AWS cli and boto - shout-out        
####### Wed Mar 13 08:23:25 PM IST 2024 #######      

- very well managed and designed by the AWS team
	- [cli](https://awscli.amazonaws.com/v2/documentation/api/latest/index.html)
	- [boto python](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html)
		- why is it called boto ? - after the boto dolphin in the Amazon forest
	- mostly can interact with any AWS system !

&nbsp;   
&nbsp;   
&nbsp;

### #91- Data Visualization tools -       
####### Wed Mar  6 11:58:58 AM IST 2024 #######     

- Open Search (Kibana) 
	- [https://opensearch.org/](https://opensearch.org/)
- Mix-panel can be used for business intelligence visualization.
	- [https://mixpanel.com/blog/analytics-uses-business-data-warehouse/](https://mixpanel.com/blog/analytics-uses-business-data-warehouse/)
- Quicksight:
	- [https://aws.amazon.com/quicksight/q/](https://aws.amazon.com/quicksight/q/)
	- sample dashboards: [https://aws.amazon.com/quicksight/gallery/](https://aws.amazon.com/quicksight/gallery/)
- grafana:
	- [https://grafana.com/blog/2022/05/31/grafana-for-business-intelligence-how-grafana-labs-uses-dashboards-for-more-than-observability-data/](https://grafana.com/blog/2022/05/31/grafana-for-business-intelligence-how-grafana-labs-uses-dashboards-for-more-than-observability-data/)
	- public dashboards you can play around with: [https://play.grafana.org/dashboards](https://play.grafana.org/dashboards)

&nbsp;   
&nbsp;   
&nbsp;

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

- TODO: list here

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

