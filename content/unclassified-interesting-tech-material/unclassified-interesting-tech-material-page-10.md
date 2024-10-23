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


### #70- disk and network stats on terminal linux      
####### Wed Oct 23 04:53:00 PM IST 2024 #######     

- `iotop` for disk usage stats
- `iftop` for network usage stats
	- `nethogs` never tried it yet

### #71- find running processes in a terminal      
####### Sat Oct 12 05:52:28 PM IST 2024 #######     

- useful to check before trying to close a terminal
- [https://askubuntu.com/a/808615](https://askubuntu.com/a/808615)
- `ps T`


### #72- configure promtail      
####### Sat Oct 19 12:46:14 PM IST 2024 #######     

- promtail config:
	- [https://grafana.com/docs/loki/latest/send-data/promtail/configuration/](https://grafana.com/docs/loki/latest/send-data/promtail/configuration/)
- running promtail 
	- [https://grafana.com/docs/loki/latest/send-data/promtail/cloud/ec2/](https://grafana.com/docs/loki/latest/send-data/promtail/cloud/ec2/)
- only I personally prefer to run it as a service in the user space
- so my recommended process is:
	- download the executable - (go!)
		- zip from the github builds
		- unzip
	- make executable for the user running the application
	- add a config file
		- have a wait for 30 seconds
		- ExecStartPre=/usr/bin/sleep 30
		- to allow for other services to start logging
	- dry-run
	- if all works out well
	- set it up as a service

### #73- sqlite data browsers options     
####### Sat Oct 12 05:52:28 PM IST 2024 #######     

- [https://github.com/pawelsalawa/sqlitestudio](https://github.com/pawelsalawa/sqlitestudio)
- [https://sqlitebrowser.org/](https://sqlitebrowser.org/)
	- has better search than other options


### #74- django data migration from one database to another      
####### Fri Oct 11 08:09:25 PM IST 2024 #######     

- django-admin (manage.py)
- dumpdata and loaddata pair
- best to output as jsonl for large datasets
	- can be processed line by line as each line represents a row in the db 


### #75- buildah - getting started      
####### Fri Oct 11 05:57:12 PM IST 2024 #######     

- create a base ubuntu image
	- [https://www.dbi-services.com/blog/creating-a-customized-postgresql-container-using-buildah/](https://www.dbi-services.com/blog/creating-a-customized-postgresql-container-using-buildah/)
- use the above container as the base container for rest of the images

### #76- podman - post installation      
####### Fri Oct 11 05:57:12 PM IST 2024 #######     

- need to add registries for search `[registries.search]`
- [https://gist.github.com/isomorphisms/3114ab86960656a729a6b4653001aae2](https://gist.github.com/isomorphisms/3114ab86960656a729a6b4653001aae2)
- like above
- should have been a part of the install instructions
- more details if the registries have auth:
	- [https://devtodevops.com/podman-add-registry/](https://devtodevops.com/podman-add-registry/)
- TODO: try below
	- [https://stackoverflow.com/a/51116615](https://stackoverflow.com/a/51116615)
- issues:
	- unable to view or edit content from userspace outside the container:
	- [https://podman.io/blogs/2018/10/03/podman-remove-content-homedir.html](https://podman.io/blogs/2018/10/03/podman-remove-content-homedir.html)
	- 

&nbsp;   
&nbsp;   
&nbsp;

### #77- psql tips and tricks     
####### Fri Oct 11 05:57:12 PM IST 2024 #######     

- running commands via psql
- if the string is very long/complex in bash `psql -c 'SQL COMMANDS;'`
- `echo $LONG_QUERY_STR | psql`

&nbsp;   
&nbsp;   
&nbsp;

### #78- very large line in a file     
####### Thu Oct 10 08:55:49 PM IST 2024 #######     

- best so far `less -S`
- able to handle a file with 2GB data in 1 line

&nbsp;   
&nbsp;   
&nbsp;

### #79- battery percentage for connected bluetooth device     
####### Tue Sep  3 04:29:18 PM IST 2024 #######     

- [https://askubuntu.com/questions/1117563/check-bluetooth-headphones-battery-status-in-linux](https://askubuntu.com/questions/1117563/check-bluetooth-headphones-battery-status-in-linux)
- was an issue earlier, glad to see this fixed
- solved by default

&nbsp;   
&nbsp;   
&nbsp;

### #80- battery percentage for connected bluetooth device     
####### Tue Sep  3 04:29:18 PM IST 2024 #######     

- [https://askubuntu.com/questions/1117563/check-bluetooth-headphones-battery-status-in-linux](https://askubuntu.com/questions/1117563/check-bluetooth-headphones-battery-status-in-linux)
- was an issue earlier, glad to see this fixed
- solved by default

&nbsp;   
&nbsp;   
&nbsp;

### #81- almost like Onco's chatbot - Swiggy's dynamic UI framework         
####### Tue Sep  3 04:29:18 PM IST 2024 #######     

- [https://bytes.swiggy.com/a-deep-dive-into-dynamic-widget-swiggys-server-driven-ui-system-92cdc3b16ec6](https://bytes.swiggy.com/a-deep-dive-into-dynamic-widget-swiggys-server-driven-ui-system-92cdc3b16ec6)

&nbsp;   
&nbsp;   
&nbsp;

### #82- remove script tags and contents from html         
####### Tue Aug 27 02:32:23 PM IST 2024 #######     

- [https://stackoverflow.com/questions/6659351/removing-all-script-tags-from-html-with-js-regular-expression](https://stackoverflow.com/questions/6659351/removing-all-script-tags-from-html-with-js-regular-expression)
```
/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi
```

&nbsp;   
&nbsp;   
&nbsp;

### #83- measuring developer productivity        
####### Fri Jul  5 08:40:19 PM IST 2024 #######     

- What to measure really ?
- Effort > Output > Outcome > Impact cycle
	- getting measurements early on is easier (Effort, Output)
	- but that changes behaviour - mostly to game the system
	- these cannot be measured in isolation
	- but attribution of impact is hard

- [https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity)

&nbsp;   
&nbsp;   
&nbsp;

### #84- docker to run gui applications       
####### Tue Jun 25 10:58:37 PM IST 2024 #######     

- good to know that it is possible now
- [https://medium.com/geekculture/run-a-gui-software-inside-a-docker-container-dce61771f9](https://medium.com/geekculture/run-a-gui-software-inside-a-docker-container-dce61771f9)

- seems like there is a lot of curiosity about this:
[https://www.google.com/search?q=docker+gui+with+wayland&oq=docker+gui+with+wayland](https://www.google.com/search?q=docker+gui+with+wayland&oq=docker+gui+with+wayland)

&nbsp;   
&nbsp;   
&nbsp;

### #85- java build tip       
####### Tue Jun 25 06:16:07 PM IST 2024 #######     

- if build errors have mention missing classes that are not remotely related to your project
- likely cause is gradle / java version mismatch

&nbsp;   
&nbsp;   
&nbsp;

### #88- virtual env for php dependencies management       
####### Thu Jun 13 03:45:43 PM IST 2024 #######     

- [https://github.com/virtphp/virtphp](https://github.com/virtphp/virtphp)
	- approx 500 stars, worth trying out
- requirements / dependencies for a project:
	- [https://getcomposer.org/doc/01-basic-usage.md](https://getcomposer.org/doc/01-basic-usage.md)

&nbsp;   
&nbsp;   
&nbsp;

### #89- open vpn on ubuntu 23.10 mantic minotaur       
####### Wed May 15 02:23:25 AM IST 2024 #######     

- the openvpn3 package for this package source does not work
- fixed in the next version for noble numbat 
- ssh through open vpn  
[https://superuser.com/questions/1103158/how-to-configure-ssh-to-connect-through-an-openvpn](https://superuser.com/questions/1103158/how-to-configure-ssh-to-connect-through-an-openvpn)
- so this one works:
[https://openvpn.net/cloud-docs/tutorials/configuration-tutorials/connectors/operating-systems/linux/tutorial--learn-to-install-and-control-the-openvpn-3-client.html](https://openvpn.net/cloud-docs/tutorials/configuration-tutorials/connectors/operating-systems/linux/tutorial--learn-to-install-and-control-the-openvpn-3-client.html) 
- for improving speeds
[https://openvpn.net/as-docs/openvpn-dco.html](https://openvpn.net/as-docs/openvpn-dco.html)
	- linux kernel module dedicated to vpn performance improvement
	
- 


&nbsp;   
&nbsp;   
&nbsp;

### #70- python hot-reload       
####### Wed May 15 02:23:25 AM IST 2024 #######     

- jurigged - did not work as expected
	- [https://github.com/breuleux/jurigged](https://github.com/breuleux/jurigged)
- py-hot-reload
	- []()
- watchdog / watchmedo
	- [https://pypi.org/project/watchdog/](https://pypi.org/project/watchdog/)
	- not able to filter events, say, only modified events

&nbsp;   
&nbsp;   
&nbsp;

### #71- serverless native       
####### Sun May  5 03:16:08 PM IST 2024 #######     

- [https://aws.github.io/chalice/index.html](https://aws.github.io/chalice/index.html)
- write and deploy directly to AWS serverless
- I don't get the motivation for this though, TODO: find out

&nbsp;   
&nbsp;   
&nbsp;

### #72- mock AWS services for testing       
####### Sun May  5 03:16:08 PM IST 2024 #######     

- [https://docs.getmoto.org/en/latest/index.html](https://docs.getmoto.org/en/latest/index.html)

&nbsp;   
&nbsp;   
&nbsp;

### #73- AWS - observability and monitoring       
####### Sun May  5 03:16:08 PM IST 2024 #######     

- [https://aws-observability.github.io/observability-best-practices/guides/ec2/ec2-monitoring/#unified-cloudwatch-agent](https://aws-observability.github.io/observability-best-practices/guides/ec2/ec2-monitoring/#unified-cloudwatch-agent)
- [https://docs.aws.amazon.com/wellarchitected/latest/management-and-governance-guide/observability.html](https://docs.aws.amazon.com/wellarchitected/latest/management-and-governance-guide/observability.html)
- [https://aws.amazon.com/marketplace/solutions/devops/observability-and-monitoring](https://aws.amazon.com/marketplace/solutions/devops/observability-and-monitoring)
- [https://docs.aws.amazon.com/whitepapers/latest/aws-caf-operations-perspective/observability.html](https://docs.aws.amazon.com/whitepapers/latest/aws-caf-operations-perspective/observability.html)
- [https://docs.aws.amazon.com/wellarchitected/latest/management-and-governance-guide/aws-observability-tools.html](https://docs.aws.amazon.com/wellarchitected/latest/management-and-governance-guide/aws-observability-tools.html)


&nbsp;   
&nbsp;   
&nbsp;

### #74- reattaching a process to terminal       
####### Sun Apr 28 05:41:49 PM IST 2024 #######     

- reptyr 
	- does not work in every case
	- [https://github.com/nelhage/reptyr](https://github.com/nelhage/reptyr)
- [https://www.baeldung.com/linux/running-process-reattach#:~:text=Reattach%20Using%20reptyr,to%20the%20process%20by%20reconnecting.](https://www.baeldung.com/linux/running-process-reattach#:~:text=Reattach%20Using%20reptyr,to%20the%20process%20by%20reconnecting.)
	- TODO: try out again, did not work the first time
- [https://stackoverflow.com/questions/715751/attach-to-a-processes-output-for-viewing](https://stackoverflow.com/questions/715751/attach-to-a-processes-output-for-viewing)
- [https://www.baeldung.com/linux/attach-terminal-detached-process](https://www.baeldung.com/linux/attach-terminal-detached-process)
- [https://unix.stackexchange.com/questions/31824/how-do-i-attach-a-terminal-to-a-detached-process](https://unix.stackexchange.com/questions/31824/how-do-i-attach-a-terminal-to-a-detached-process) 
- 
- nothing conclusive yet

&nbsp;   
&nbsp;   
&nbsp;

### #75- docker / virtual machines / containers alternates       
####### Sun Apr 28 05:41:49 PM IST 2024 #######     

- list: [https://www.cloudzero.com/blog/docker-alternatives/](https://www.cloudzero.com/blog/docker-alternatives/)
	- TODO: explore
- list: [https://spacelift.io/blog/docker-alternatives](https://spacelift.io/blog/docker-alternatives)
	- TODO: explore
- need OCI 
	- builders: buildah, oci-builder
		- buildah - build OCI compliant containers with any language from scratch
		- [https://devtodevops.com/podman-build-vs-buildah/](https://devtodevops.com/podman-build-vs-buildah/)
		- 
	- container registry: 
	- runtime env: runc, containerd, 
	- deployment/orchestration: podman, kubernetes, openTofu
	- podman vs docker: [https://devtodevops.com/podman-vs-docker/](https://devtodevops.com/podman-vs-docker/)
	- buildah example: [https://www.linode.com/docs/guides/using-buildah-oci-images/](https://www.linode.com/docs/guides/using-buildah-oci-images/)
	- buildah example: [https://www.dbi-services.com/blog/creating-a-customized-postgresql-container-using-buildah/](https://www.dbi-services.com/blog/creating-a-customized-postgresql-container-using-buildah/)
	- buildah example: [https://opensource.com/article/22/2/build-your-own-container-linux-buildah](https://opensource.com/article/22/2/build-your-own-container-linux-buildah)
	- podaman: [https://docs.podman.io/en/latest/Introduction.html](https://docs.podman.io/en/latest/Introduction.html)
	- container terminology: [https://developers.redhat.com/blog/2018/02/22/container-terminology-practical-introduction#basic_vocabulary](https://developers.redhat.com/blog/2018/02/22/container-terminology-practical-introduction#basic_vocabulary)
	- 
- qemu/kvm, libvirt --> combo
- LXC: [https://linuxcontainers.org/](https://linuxcontainers.org/)
- containers from scratch:
	-[https://medium.com/inside-sumup/containers-from-scratch-part-1-b719effd1e0a](https://medium.com/inside-sumup/containers-from-scratch-part-1-b719effd1e0a)
	- namespaces, userspaces, cgroups 	
- [https://earthly.dev/blog/docker-vs-buildah-vs-kaniko/](https://earthly.dev/blog/docker-vs-buildah-vs-kaniko/)
- self hosted container registry:
	- [https://www.reddit.com/r/selfhosted/comments/x6ftf1/self_hosted_container_registry/](https://www.reddit.com/r/selfhosted/comments/x6ftf1/self_hosted_container_registry/)
	- gitea: [https://gitea.com/actions/upload-artifact#number-of-artifacts](https://gitea.com/actions/upload-artifact#number-of-artifacts)
	- gitlab - on-prem
	- docker - [https://hub.docker.com/_/registry](https://hub.docker.com/_/registry)
- 

&nbsp;   
&nbsp;   
&nbsp;

### #76- adding a volume to ec2 instance       
####### Sun Apr 28 12:45:14 PM IST 2024 #######     

- [https://docs.aws.amazon.com/ebs/latest/userguide/ebs-using-volumes.html](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-using-volumes.html)
- device name patterns on linux aws instances:
	- [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html)
	- [https://docs.aws.amazon.com/ebs/latest/userguide/nvme-ebs-volumes.html](https://docs.aws.amazon.com/ebs/latest/userguide/nvme-ebs-volumes.html)
- 

&nbsp;   
&nbsp;   
&nbsp;

### #77- state-space as attention alternate in LLMs       
####### Sun Apr 28 12:45:14 PM IST 2024 #######     

- [https://www.datacamp.com/tutorial/introduction-to-the-mamba-llm-architecture](https://www.datacamp.com/tutorial/introduction-to-the-mamba-llm-architecture)
- seems promising


&nbsp;   
&nbsp;   
&nbsp;

### #77- passwordless sudo      
####### Sun Apr 28 12:45:14 PM IST 2024 #######     

- general sudo user creation 
- [https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu)
```
sudo adduser <username>
sudo adduser <username> sudo

```
- [https://timonweb.com/devops/how-to-enable-passwordless-sudo-for-a-specific-user-in-linux/](https://timonweb.com/devops/how-to-enable-passwordless-sudo-for-a-specific-user-in-linux/)
```
#Edit sudoers file: 
sudo nano /etc/sudoers
#Find a line which contains includedir /etc/sudoers.d
#Below that line add: 
username ALL=(ALL) NOPASSWD: ALL
#where username is your passwordless sudo username; Save your changes
```

&nbsp;   
&nbsp;   
&nbsp;

### #78- GPU Monitors      
####### Fri Apr 26 12:04:46 AM IST 2024 #######     

- Great thread: 
	- [https://askubuntu.com/questions/387594/how-to-measure-gpu-usage](https://askubuntu.com/questions/387594/how-to-measure-gpu-usage)
- nvidia-smi - decent experience 
- intel-gpu-tools - decent experience
- conky - general cpu + gpu monitor
- nvtop 
- general monitoring tool: [Glances](https://github.com/nicolargo/glances)
- for other platforms:
- [https://www.cyberciti.biz/open-source/command-line-hacks/linux-gpu-monitoring-and-diagnostic-commands/](https://www.cyberciti.biz/open-source/command-line-hacks/linux-gpu-monitoring-and-diagnostic-commands/)
- gpustat 
- nvitop - python

&nbsp;   
&nbsp;   
&nbsp;

### #79- Process Managers      
####### Mon Apr 22 05:26:42 PM IST 2024 #######     

- pm2 
- supervisor
	- [https://michael.stapelberg.ch/posts/2024-01-17-systemd-indefinite-service-restarts/](https://michael.stapelberg.ch/posts/2024-01-17-systemd-indefinite-service-restarts/)
- systemd
	- [https://systemd.io/](https://systemd.io/)
	- [https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files](https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files)
- some scripts:
	- [https://smarden.org/runit/](https://smarden.org/runit/)
	- [http://www.fefe.de/minit/](http://www.fefe.de/minit/)
- c++
	- [https://mmonit.com/monit/](https://mmonit.com/monit/)
	- source: [https://bitbucket.org/tildeslash/monit/src/master/](https://bitbucket.org/tildeslash/monit/src/master/)
	- this is the first one I would like to  try
	- 
- just bash:
	- [https://stackoverflow.com/a/697064](https://stackoverflow.com/a/697064)
	- 
	```
	until myserver; do
    echo "Server 'myserver' crashed with exit code $?.  Respawning.." >&2
    sleep 1
	done
	```
	
	Or to be able to stop it:
	```
	trap 'kill $(jobs -p)' EXIT; until myserver & wait; do
		echo "ldap proxy crashed with exit code $?. Respawning.." >&2
		sleep 1
	done
	```
	- 
	```
	crontab -e
	```
	Then add a rule to start your monitor script:
	```
	@reboot /usr/local/bin/myservermonitor
	```

&nbsp;   
&nbsp;   
&nbsp;

### #80- screen to run a long running command      
####### Tue Apr 16 04:06:34 PM IST 2024 #######     

- [https://superuser.com/questions/454907/how-to-execute-a-command-in-screen-and-detach](https://superuser.com/questions/454907/how-to-execute-a-command-in-screen-and-detach)
- complete thread is interesting
- [https://superuser.com/a/454909](https://superuser.com/a/454909)
- [https://superuser.com/a/1142911](https://superuser.com/a/1142911)
```
screen -dm sleep 10

To run multiple commands, try:
screen -dm bash -c "sleep 10; myscript.sh"

Please note that when a program terminates, screen (per default) kills the window that contained it.
If you don't want your session to get killed after script is finished, add exec sh at the end, e.g.:

screen -dm bash -c 'sleep 5; exec sh'

To list all your sessions, try:
screen -list

In order to start new session in background with name 'sleepy'
screen -S sleepy -dm sleep 60

In order to kill 'sleepy' session
screen -S sleepy -X quit   
```

&nbsp;   
&nbsp;   
&nbsp;

### #81- video compression basics      
####### Tue Apr 16 02:02:24 PM IST 2024 #######     

- [https://www.youtube.com/watch?v=QoZ8pccsYo4](https://www.youtube.com/watch?v=QoZ8pccsYo4)
- intra-frame 
	- remove information not visible to the naked eye
- inter-frame
	- express the next frame as a diff - saves a lot when most of the frame does not change
- frame by frame compression
- block motion estimation
- 

&nbsp;   
&nbsp;   
&nbsp;

### #81- columnar databases      
####### Mon Apr  8 08:45:39 PM IST 2024 #######     

- [https://www.youtube.com/watch?v=8KGVFB3kVHQ](https://www.youtube.com/watch?v=8KGVFB3kVHQ)
- good indexing and aggregation and some specifics of data analytics
- always goes back to my quote:
	- store data with retrieval in mind :)

&nbsp;   
&nbsp;   
&nbsp;

### #81- neural networks      
####### Mon Apr  8 07:23:27 PM IST 2024 #######     

- [https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- gpt, trasnformers and attention
	- [https://www.youtube.com/watch?v=wjZofJX0v4M](https://www.youtube.com/watch?v=wjZofJX0v4M)

&nbsp;   
&nbsp;   
&nbsp;

### #81- what does linux OS do when it runs out of memory      
####### Mon Apr  8 06:17:21 PM IST 2024 #######     

- [https://www.youtube.com/watch?v=Cm3-6cOwICU](https://www.youtube.com/watch?v=Cm3-6cOwICU)
- processes killed by law:
	- process memory / process runtime
	- processes taking up memory very fast are killed
	- good to know when you want to deal with large memory processes

&nbsp;   
&nbsp;   
&nbsp;

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

### #86- integrating sentry for php+code-igniter to catch all errors           
####### Wed Apr  3 01:10:45 AM IST 2024 #######      

- override the base exceptions class of code igniter - log to sentry there 
- [https://www.codeigniter.com/user_guide/general/errors.html#logging-exceptions](https://www.codeigniter.com/user_guide/general/errors.html#logging-exceptions)
- latest version have very good ways of doing this 
- a good example of overriding the base exception class for sending email  [https://github.com/mikedfunk/CodeIgniter-Email-PHP-Errors/blob/master/application/core/MY_Exceptions.php](https://github.com/mikedfunk/CodeIgniter-Email-PHP-Errors/blob/master/application/core/MY_Exceptions.php)
- Custom class example:[https://www.codeigniter.com/user_guide/general/errors.html#custom-exception-handlers](https://www.codeigniter.com/user_guide/general/errors.html#custom-exception-handlers)
- logging exceptions example by overriding base exception class: [https://www.codeigniter.com/user_guide/general/errors.html#logging-exceptions](https://www.codeigniter.com/user_guide/general/errors.html#logging-exceptions)
- logging: [https://codeigniter4.github.io/CodeIgniter4/general/logging.html](https://codeigniter4.github.io/CodeIgniter4/general/logging.html)
- code igniter architecture: [https://codeigniter.com/userguide3/overview/appflow.html](https://codeigniter.com/userguide3/overview/appflow.html)
- general example for extending base classes: [https://codeigniter4.github.io/CodeIgniter4/extending/core_classes.html#extending-core-classes](https://codeigniter4.github.io/CodeIgniter4/extending/core_classes.html#extending-core-classes)


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
- bash command in interactive mode:
	- if you need the .bashrc to setup the environment and then execute a script 
	- start an interactive session:    
	```bash -i </path/to/script-file``` 
	- [https://stackoverflow.com/a/74250010](https://stackoverflow.com/a/74250010)
	- OR:
	- If you add the -i option to your hashbang(s) it will specify that the script runs in interactive mode
	- [https://unix.stackexchange.com/a/569447](https://unix.stackexchange.com/a/569447)
	- ` #!/bin/bash -i ` 
	- sequentially running bash scripts:
	- [https://stackoverflow.com/questions/58526460/sequentially-run-multiple-bash-scripts](https://stackoverflow.com/questions/58526460/sequentially-run-multiple-bash-scripts)
- bash script accept arguments:
	- very good starter: 
	- [https://www.baeldung.com/linux/use-command-line-arguments-in-bash-script](https://www.baeldung.com/linux/use-command-line-arguments-in-bash-script)
	- 

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
	- and detach from the screen: [https://superuser.com/a/1548574](https://superuser.com/a/1548574)
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
	- [aws simple systems manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html)
		- good for system maintenance tasks
		- can scale to thousands of agents in ec2 machines
		- runs as an agent on an instance
	

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
- Looker studio
- 

&nbsp;   
&nbsp;   
&nbsp;

### #92- infrastructure as code - options      
####### Wed Feb 28 05:30:19 PM IST 2024 #######     

- Pulumi - [https://www.pulumi.com/docs/concepts/how-pulumi-works/](https://www.pulumi.com/docs/concepts/how-pulumi-works/)
	- multi-cloud support - AWS, Azure, Google Cloud, etc
- Troposphere [https://github.com/cloudtools/troposphere](https://github.com/cloudtools/troposphere) 
	- from config to aws cloud formation json 
- Ansible: [https://github.com/ansible/ansible](https://github.com/ansible/ansible)
- Terraform: [https://github.com/hashicorp/terraform](https://github.com/hashicorp/terraform)
- Spectre: [https://docs.sceptre-project.org/latest/](https://docs.sceptre-project.org/latest/)
	- config ---> cloud formation 
- Cloud Formation: [https://aws.amazon.com/cloudformation/](https://aws.amazon.com/cloudformation/)
	- AWS native tool for infra as code
- puppet - checf - ansible [https://www.veritis.com/blog/chef-vs-puppet-vs-ansible-comparison-of-devops-management-tools/](https://www.veritis.com/blog/chef-vs-puppet-vs-ansible-comparison-of-devops-management-tools/) 
- pulumi - terraform
	- [https://medium.com/datamindedbe/pulumi-vs-terraform-choosing-your-iac-tool-6d17b5222545](https://medium.com/datamindedbe/pulumi-vs-terraform-choosing-your-iac-tool-6d17b5222545)
- 

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

