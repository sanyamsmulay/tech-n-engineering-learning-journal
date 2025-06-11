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

### #36- Building a system image for Mecha Comet      
####### Tue Jun 10 02:07:07 PM IST 2025 #######     

- [https://linuxcontainers.org/distrobuilder/docs/latest/tutorials/use/](https://linuxcontainers.org/distrobuilder/docs/latest/tutorials/use/)
	- [https://linuxcontainers.org/distrobuilder/docs/latest/](https://linuxcontainers.org/distrobuilder/docs/latest/) 

&nbsp;   
&nbsp;   
&nbsp;	


### #37- Super light weight inter-process-communication      
####### Wed May 28 01:18:33 PM IST 2025 #######     

- [Zmq](https://zguide.zeromq.org/docs/chapter1/)
- has built-in most of the messaging patterns covered 
- sockets, pub-sub, request-reply, push-pull, etc
- 

&nbsp;   
&nbsp;   
&nbsp;	



### #38- remote desktop setup home network to public networks       
####### Wed May 28 01:18:33 PM IST 2025 #######     

- servers list:
	- [https://help.ubuntu.com/community/VNC/Servers](https://help.ubuntu.com/community/VNC/Servers)
- RDP
	- 
- VNC
	- 

&nbsp;   
&nbsp;   
&nbsp;	

### #39- using VPN to access home network via a public server       
####### Wed May 28 01:18:33 PM IST 2025 #######     


- setup a private network with wireguard
	- can be done with openvpn as well
	- but seems like CPU usage is higher for open VPN
- best blog so far on this topic:
	- [https://www.qovery.com/blog/build-your-own-network-with-linux-and-wireguard/](https://www.qovery.com/blog/build-your-own-network-with-linux-and-wireguard/)
	- Don't need the last part and I think it is not a good idea, security wise
	- should not forward traffic to local server unless hardened 
- types of VPN setups
	- site-to-site vs remote-access
	- [https://www.fortinet.com/resources/cyberglossary/remote-access-vpn](https://www.fortinet.com/resources/cyberglossary/remote-access-vpn)
- honourable mentions:
	- [https://blog.kronis.dev/blog/how-to-publicly-access-your-homelab-behind-nat](https://blog.kronis.dev/blog/how-to-publicly-access-your-homelab-behind-nat) 


&nbsp;   
&nbsp;   
&nbsp;	


### #40- Weird but useful data structures       
####### Wed May 28 01:18:33 PM IST 2025 #######     

- ok not weird.
	- special usecase data structures
	- inclusive language
- [https://www.youtube.com/watch?v=6fnmXX8RK0s](https://www.youtube.com/watch?v=6fnmXX8RK0s)


&nbsp;   
&nbsp;   
&nbsp;	


### #41- getting a blog ready for a non-tech user       
####### Sat May 10 02:46:37 PM IST 2025 #######     

- Ghost
	- uses mysql
	- too opinionated 
- Python / Django + some postgres or even Sqlite
	- django-cms
	- mezzanine
	- wagtail
- Mezzanine 
	- [https://www.youtube.com/watch?v=3I5nrcsy7RI](https://www.youtube.com/watch?v=3I5nrcsy7RI)
	- turns out, has a simple starter for blogs,
	- will try mezzanine before wagtail
	- dev experience
		- ####### Fri May 23 06:02:28 PM IST 2025 #######
		- python version lagging behind
		- not compatible with python3.12
		- install and run are not user friendly
		- I think they should add a container environment for development and usage for better dev experience
- Wagtail
	- for coders: 
	- [https://www.youtube.com/watch?v=mbUFWkZAm8w](https://www.youtube.com/watch?v=mbUFWkZAm8w)
	- [https://docs.wagtail.org/en/stable/getting_started/the_zen_of_wagtail.html](https://docs.wagtail.org/en/stable/getting_started/the_zen_of_wagtail.html)
	- [create a blog with wagtail](https://www.youtube.com/watch?v=3aVvAGj1joo)
	- [starter template](https://github.com/pupattan/wagtail-blog-simple)
	- Demo: [https://github.com/wagtail/bakerydemo](https://github.com/wagtail/bakerydemo)
		- overkill for a blog
		- is a very good starter for a generic website
	- Trying wagtail:
		- ####### Fri May 23 06:11:56 PM IST 2025 #######
		- the news app starter is great starting point for a blog
		- works well with the latest python tools
		- started using it regularly
		- the news-template is a good  starting point for almost anything:
			- [https://github.com/wagtail/news-template](https://github.com/wagtail/news-template)
			- very good for blog
		- good documentation available
			- [https://docs.wagtail.org/en/stable/advanced_topics/third_party_tutorials.html](https://docs.wagtail.org/en/stable/advanced_topics/third_party_tutorials.html)
			- [https://docs.wagtail.org/en/stable/deployment/under_the_hood.html](https://docs.wagtail.org/en/stable/deployment/under_the_hood.html)
		- honourable mentions:
			- Too old: [https://gitlab.com/thelabnyc/wagtail_blog](https://gitlab.com/thelabnyc/wagtail_blog)
			- [https://github.com/neon-jungle/wagtailnews](https://github.com/neon-jungle/wagtailnews)
			- [https://github.com/wagtail/wagtail-live](https://github.com/wagtail/wagtail-live)
		- ecosystem:
			- [https://github.com/springload/awesome-wagtail?tab=readme-ov-file#bloggingnews](https://github.com/springload/awesome-wagtail?tab=readme-ov-file#bloggingnews)
			- 
- django-cms:
	- looks great as of now
	- will try this first 
		- ####### Thu May 15 05:21:01 PM IST 2025 #######
		- scratch that
	- [https://djangocms-blog.readthedocs.io/en/latest/index.html](https://djangocms-blog.readthedocs.io/en/latest/index.html)
	- seems like the one starter to try
	- but seems like there are no starter templates / projects / databases
- Bloggy
	- Seems like a small effort by an individual
	- but good platform in general

- Odoo
	- also provides a blog app for django
	- but has limited features.
	
&nbsp;   
- Nodejs options:

-x-x-x-

- options: [javascript blogging tool with wiswag editor](https://www.reddit.com/r/node/comments/2h4931/whats_a_good_nodejs_based_blogging_platform/)
- very old post though (11 years)

- did not find anything simple and worthwhile 
- vibe code it may be ?
- 


&nbsp;   
&nbsp;   
&nbsp;	

### #41- Postgres, wal2json, pg2k4j saga       
####### Sat May 10 01:19:49 PM IST 2025 #######     

- So the story is that a Disney library, pg2k4k can be used for maintaining real-time replication of a postgers database to build a real time index.
- Basically converting database updates into an event-based system.
- Very handy setup
- Uses replication slots to read write-ahead-logs, converts them to JSON, publishes to AWS Kinesis and then these events can be used to build an event based system which, processes all the database updates (full CRUD)

- Issue:
	- It has not been maintained since 5 years. 
	- Plus there are some issues with the library. 
	- Example: SSL is difficult to be implemented with the JDBC version the the library has.
	- The library uses the wal2JSON format-1 which is very unsuitable for large updates:
		- since it clubs all the updates into one large JSON for transactions.
		- Format 2 could also be used which writes like a JSON-L, and each event is one line.
			- The only downside is that transaction information has to be processed slightly differently as compared to format 1.

- some learnings when exploring this issue:
	- [https://www.crunchydata.com/blog/postgres-wal-files-and-sequuence-numbers](https://www.crunchydata.com/blog/postgres-wal-files-and-sequuence-numbers)
	- 

&nbsp;   
&nbsp;   
&nbsp;	

### #42- SDLC Primer       
####### Thu May  1 04:51:12 PM IST 2025 #######     

- [https://medium.productcoalition.com/a-comprehensive-guide-to-the-software-development-life-cycle-sdlc-15b7892e1d44](https://medium.productcoalition.com/a-comprehensive-guide-to-the-software-development-life-cycle-sdlc-15b7892e1d44)
- [https://raygun.com/blog/software-development-life-cycle/#sdlc-infographic-modal](https://raygun.com/blog/software-development-life-cycle/#sdlc-infographic-modal)

&nbsp;   
&nbsp;   
&nbsp;	

### #43- AI code generation challenges in real life workflows       
####### Thu May  1 04:51:12 PM IST 2025 #######     

- [https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html)

&nbsp;   
&nbsp;   
&nbsp;	

### #44- Running Windows 10/11 on a VM in Linux      
####### Tue Apr  1 05:13:52 PM IST 2025 #######     

- I want to run Prepare3D on the Windows instance
- Options:
- KVM and QEMU 
	- [https://nmanzi.com/posts/windows-guest-on-linux-mint/](https://nmanzi.com/posts/windows-guest-on-linux-mint/)
	- I am expecting that this will not work well, at Prepare3D and graphics acceleration level
	- But trying it first
	- This is a better guide for KVM installation.
		- [https://phoenixnap.com/kb/ubuntu-install-kvm](https://phoenixnap.com/kb/ubuntu-install-kvm)
	- [https://github.com/quickemu-project/quickemu](https://github.com/quickemu-project/quickemu)
- using virtual box
	- [https://itsfoss.com/install-windows-10-virtualbox-linux/](https://itsfoss.com/install-windows-10-virtualbox-linux/)
	- This is a very interesting way of a doing this, using the existing windows drive for the virtual box drive.
	- [https://opensource.com/article/21/1/virtualbox-windows-linux](https://opensource.com/article/21/1/virtualbox-windows-linux)
	- very straight forward
	- just add the windows drive to the virtual box drive
	- windows 11
		- [https://blogs.oracle.com/virtualization/post/install-microsoft-windows-11-on-virtualbox](https://blogs.oracle.com/virtualization/post/install-microsoft-windows-11-on-virtualbox)
- Using incus:
	- [https://blog.simos.info/how-to-run-a-windows-virtual-machine-on-incus-on-linux/](https://blog.simos.info/how-to-run-a-windows-virtual-machine-on-incus-on-linux/)
	- LXD - community alternative 
- The windows downloaded itself is taking so long that I think I will end up installing all the available options.

&nbsp;   
&nbsp;   
&nbsp;	

### #45- Using paraquet file format for large datasets with SQLite     
####### Tue Apr  1 05:13:52 PM IST 2025 #######     

- [https://tech.marksblogg.com/billion-nyc-taxi-rides-sqlite-parquet-hdfs.html](https://tech.marksblogg.com/billion-nyc-taxi-rides-sqlite-parquet-hdfs.html)
- very well written, great comparison
- a very good experiment 

- a good pros and cons with paarquet and rdbms
- frequent writes and updates become a problem with Paraquet
- [https://stackoverflow.com/questions/57994758/why-parquet-over-some-rdbms-like-postgres](https://stackoverflow.com/questions/57994758/why-parquet-over-some-rdbms-like-postgres)

&nbsp;   
&nbsp;   
&nbsp;

### #46- Mobbin - design inspiration          
####### Sat Mar 15 03:06:40 PM IST 2025 #######     

- 

&nbsp;   
&nbsp;   
&nbsp;

### #47- Jira to Excel, Google sheets Integration          
####### Fri Mar 14 04:05:38 PM IST 2025 #######     

- Only tool that seemed promising and worth the effort for trying out
	- [https://unito.io/blog/how-to-integrate-google-sheets-and-jira/](https://unito.io/blog/how-to-integrate-google-sheets-and-jira/)

&nbsp;   
&nbsp;   
&nbsp;

### #48- AI tools for code generation         
####### Fri Mar 14 12:33:37 PM IST 2025 #######     

- From text to front end / product
	- Lovable [https://lovable.dev/](https://lovable.dev/)
		- [Demo](https://www.youtube.com/watch?v=N7elVVD7crw)
	- Banani: 
		- Text to UI
		- [https://www.figma.com/community/plugin/1362707561583059094/ai-design-copilot-text-to-ui-generator](https://www.figma.com/community/plugin/1362707561583059094/ai-design-copilot-text-to-ui-generator)
	- Gallelio AI:
		- Text to UI and front-end code - HTML+Tailwind
		- [https://www.usegalileo.ai/explore](https://www.usegalileo.ai/explore)
	- Visily
		- text, image, sketch  to click through prototype
		- [https://www.visily.ai/ai-prototype-generator](https://www.visily.ai/ai-prototype-generator)
		- code generation not available
	- UIZard
		- [https://uizard.io/](https://uizard.io/)
		- same as Visily
	- UXPilot
		- 
	- Codia AI
		- wireframe to code
	- Wiregen 
		- text to wireframe 
- Code generators / AI pair programmers
	- Claude Sonnet:
	- OpenAI
	- Github Co-pilot
	- AmazonQ
	- Gemini
		- canvas
		- 
	- Replit
		- demo for a real life app
		- [https://www.youtube.com/watch?v=n5oBmmBkW6A](https://www.youtube.com/watch?v=n5oBmmBkW6A)
	- Zencoder
	- CodeComplete 
	- Cursor
		- IDE
		- capabilities / tips: [https://www.youtube.com/shorts/Kr4MGyPXS_0](https://www.youtube.com/shorts/Kr4MGyPXS_0)
	- list: [https://www.stepsize.com/blog/best-ai-tools-for-software-developers](https://www.stepsize.com/blog/best-ai-tools-for-software-developers)
	- list: [https://www.pluralsight.com/resources/blog/software-development/generative-ai-code-generation-tools](https://www.pluralsight.com/resources/blog/software-development/generative-ai-code-generation-tools)
	- list with rating: [https://www.pragmaticcoders.com/resources/ai-developer-tools](https://www.pragmaticcoders.com/resources/ai-developer-tools)
	- CodyAI 
		- seems like it has a VS code plugin
	- Tabnine
		- the most secure
		- focus on auto-complete
	- Mutable AI
		- also, seems to have a VS code plugin
	- Codium AI:
		- Windsurf IDE and code generation
	- PearAI
		- code editor, IDE with integrated AI
	- NinjaTech
		- IDE with integration for most AI code generators
	- Keploy
		- for test writing
		- [https://keploy.io/blog/community/best-free-ai-code-generators](https://keploy.io/blog/community/best-free-ai-code-generators)
	- Mintlify Writed:
		- for writing documentation
	- Grit.io:
		- technical debt - 
		- tech migration 
		- dependency migration
	- WhatTheDiff
		- code review
	- Bugasura
		- bug tracking
		- identification / similarity detection
	
- Comparison for working on a fresh project:
	- [https://medium.com/@xinranma/i-tested-4-ai-tools-to-generate-ui-from-the-same-prompt-0d2113736cce](https://medium.com/@xinranma/i-tested-4-ai-tools-to-generate-ui-from-the-same-prompt-0d2113736cce)
	- Bolt vs. Cursor vs. Replit vs Lovable:
		- [https://www.youtube.com/watch?v=Ojk51mNOUow](https://www.youtube.com/watch?v=Ojk51mNOUow)
		- ranked by user control on code
		- how technical you need to be to comfortably use a tool
	- Cursor vs. Windsurf vs. Lovable vs. v0 vs. Bolt vs. Replit
		- creating a linktree app:
		- [https://www.youtube.com/watch?v=HSnJrXWETfM](https://www.youtube.com/watch?v=HSnJrXWETfM)
	- Bolt (#1), Cursor (#2), Windsrf (#3), Aid (#4), and Replit (#5)
		- [https://www.youtube.com/watch?v=WVhJSUtGbYM](https://www.youtube.com/watch?v=WVhJSUtGbYM)
- Pricing comparison - 
	- Cursor vs lovable vs vercel vs windsurf
	- [https://www.youtube.com/watch?v=XcVj8zzK4ss](https://www.youtube.com/watch?v=XcVj8zzK4ss)
- Comparing for working on a existing project
	- Cursor vs Claude:
		- [https://www.youtube.com/watch?v=usDE1z2z_MA](https://www.youtube.com/watch?v=usDE1z2z_MA) 
	
- Trae
	- IDE that integrates all 
	- seems to neatly tie everything together
	- 
- Ninja Code AI
	- 
- Demos:
	- [https://designwithai.substack.com/p/how-i-built-an-seo-tool-with-ai](https://designwithai.substack.com/p/how-i-built-an-seo-tool-with-ai)
	- [https://designwithai.substack.com/p/how-i-built-a-tool-from-scratch-with-ai](https://designwithai.substack.com/p/how-i-built-a-tool-from-scratch-with-ai)
	
- Notebook LM
	- get query your knowledge-base
	
- Neovim
	- Avante Video - [https://www.youtube.com/watch?v=pVlxaHYJIYM](https://www.youtube.com/watch?v=pVlxaHYJIYM)
	- Copilot-cmp - https://github.com/zbirenbaum/copilot...
	- Nithin's Blog - https://nithinbekal.com/posts/copilot...
	- Code Companion - https://github.com/olimorris/codecomp...
	- MCPHub - https://github.com/ravitemer/mcphub.n...
	- Comment.nvim - https://github.com/numToStr/Comment.nvim
	- Noice - https://github.com/folke/noice.nvim
	- Neoscroll - https://github.com/karb94/neoscroll.nvim


####### Sun Mar 16 01:04:30 AM IST 2025 #######
- Final try out:
	- VSCode - as editor
		- AI as a plugin:
			- Codeium
		- Amazon Q plugin - VS Code
		- Amazon Q CLI plugin
		- opinion: not great, very much seems like last generation tech as compared to Cursor/Windsurf
	- Replit
		- 
	- Cursor
		- 
		- tips and tricks and feature showcase : [https://www.youtube.com/shorts/Fqi58225Uqg](https://www.youtube.com/shorts/Fqi58225Uqg)
			- YOLO mode (agent)
			- with claude-sonnet 3.5
		- 
			
	- Calude Code
		- [https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview)
	- Windsurf
		- 
	- Zencoder
		- VS Code plugin exists
		- good features: context aware completion, internet access for API docs etc, multi-mode engagement - chat, search etc..
	- Code GPT
		- VS code extension 
		- various agents from the marketplace that can be used
		- wrapper on top - mostly builds the prompt for various models from the code base
		- cons 
	- UI generators
		- Lovable
		- 

####### Sun Mar 30 11:57:37 AM IST 2025 #######
Comparing prompts for code gen / editing
- problem at hand: 
	- Library for streaming changes from postgres to AWS Kinesis:
	- https://github.com/disneystreaming/pg2k4j.git
	- lacking the functionality to handle large change sets generated in transactions
- prompts to try:
	- very open ended
		- create a custom parser to generate a stream of slotMessage objects with changeList objects with a maximum of 10 objects in the list 
		
	
	- specific and procedural
		- convert the output of the getslotmessage function in streamReaderKinesisWriter file to a stream of type SlotMessages
		- in the getslotmessage function process the bytebuffer msg - using the jackson library 
	
	- try highlighting and instructing
		- process bytebuffer function - pass byte buffer msg directly to getslotmessage function
		- 
	- test generation
		- generate data for inserting 108 entries into one of the test tables in the project and check if slot messages with 10 changes get emitted to kinesis
&nbsp;   
&nbsp;   
&nbsp;

### #49- Model training with LORA and ollama       
####### Tue Feb 18 03:52:33 AM IST 2025 #######     

- 
- [https://www.youtube.com/watch?v=pxhkDaKzBaY](https://www.youtube.com/watch?v=pxhkDaKzBaY)

&nbsp;   
&nbsp;   
&nbsp;

### #50- get all columns of a postgres table       
####### Sat Feb 15 11:46:28 PM IST 2025 #######     

- Tested below, works
- [https://dba.stackexchange.com/a/22368](https://dba.stackexchange.com/a/22368)

&nbsp;   
&nbsp;   
&nbsp;

### #52- PDF merging in linux       
####### Sat Feb 15 10:26:18 PM IST 2025 #######     

- CLI: pdfunite
	- super simple
	- mostly included with distros
- [https://www.omglinux.com/merge-pdf-files-on-linux/](https://www.omglinux.com/merge-pdf-files-on-linux/)

&nbsp;   
&nbsp;   
&nbsp;

### #53- Run models with Ollama       
####### Thu Feb 13 01:52:03 PM IST 2025 #######     

- Ollama 
	- [https://github.com/ollama/ollama](https://github.com/ollama/ollama)
	- running models on Raspberry Pi [https://www.youtube.com/watch?v=Y2ldwg8xsgE](https://www.youtube.com/watch?v=Y2ldwg8xsgE)
- Raspberry Pi running LLMs with OLLMA
	- [https://www.youtube.com/watch?v=Y2ldwg8xsgE](https://www.youtube.com/watch?v=Y2ldwg8xsgE)
- Agents with Ollama
	- [https://github.com/premthomas/Ollama-and-Agents?tab=readme-ov-file](https://github.com/premthomas/Ollama-and-Agents?tab=readme-ov-file)
		- crewai - tools, Agent, Task, Crew
		- langchain - tools 
	- [https://www.digitalocean.com/community/tutorials/local-ai-agents-with-langgraph-and-ollama](https://www.digitalocean.com/community/tutorials/local-ai-agents-with-langgraph-and-ollama)
		- lang graph 
		- nvidia-smi
	- [https://www.youtube.com/watch?v=pxhkDaKzBaY](https://www.youtube.com/watch?v=pxhkDaKzBaY)
		- ollama 
		- langflow
- GUI competitors:
	- [https://lmstudio.ai/docs](https://lmstudio.ai/docs)
- 

&nbsp;   
&nbsp;   
&nbsp;

### #55- Ionic app development - without any framework      
####### Thu Feb 13 01:52:03 PM IST 2025 #######     

- Sample implementation:
- [https://github.com/dolthead/ionic6-sans-framework/blob/main/index.html](https://github.com/dolthead/ionic6-sans-framework/blob/main/index.html)
	- issue: app build is not configured
	- TO TRY: may be start with a framework starter(say, react) and strip it down to the minimum requirements and insert the above examples

&nbsp;   
&nbsp;   
&nbsp;

### #56- Android Emulator on Linux as a container      
####### Wed Feb 12 08:31:27 PM IST 2025 #######     

- Open source:
- [https://waydro.id/](https://waydro.id/)
- Repo: [https://github.com/waydroid/waydroid](https://github.com/waydroid/waydroid)
- Licensing is slightly complicated, due to various components needed to make it work
- but an awesome project none the less

&nbsp;   
&nbsp;   
&nbsp;

### #57- Build web UI for ML models user testing      
####### Sun Feb  9 05:02:34 PM IST 2025 #######     

- [https://github.com/gradio-app/gradio](https://github.com/gradio-app/gradio)

&nbsp;   
&nbsp;   
&nbsp;

### #58- Google Chrome extension samples      
####### Mon Feb  3 10:49:42 PM IST 2025 #######     

-  [https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api-samples/tabs/inspector](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api-samples/tabs/inspector)
- Very good sample library.
- It can be a starter for all sorts of plugins

&nbsp;   
&nbsp;   
&nbsp;

### #59- A primer on sftp / ftp      
####### Fri Jan 24 02:40:49 PM IST 2025 #######     

- [https://linuxize.com/post/how-to-use-linux-sftp-command-to-transfer-files/](https://linuxize.com/post/how-to-use-linux-sftp-command-to-transfer-files/)
- [https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server)
	- digital ocean tutorials are really very good
	- all the generally useful stuff in one page
- [https://filezilla-project.org/](https://filezilla-project.org/)
	- good GUI product, used it a while back
	- does the job
	- fairly stable
- ftp has some funny business about using two ports, very interested in knowing the thought process behind this design decision
	- [https://www.geeksforgeeks.org/linux-sftp-command-with-example/](https://www.geeksforgeeks.org/linux-sftp-command-with-example/)

&nbsp;   
&nbsp;   
&nbsp;

### #60- AWS Transfer Family - a well made product      
####### Thu Jan 23 09:05:07 PM IST 2025 #######     


- addresses all the pain points so well
- [https://aws.amazon.com/blogs/aws/new-aws-transfer-for-sftp-fully-managed-sftp-service-for-amazon-s3/](https://aws.amazon.com/blogs/aws/new-aws-transfer-for-sftp-fully-managed-sftp-service-for-amazon-s3/)

&nbsp;   
&nbsp;   
&nbsp;

### #61- Gatsby get sitemap styling     
####### Sun Jan 19 04:25:10 PM IST 2025 #######     

- [https://www.felixparadis.com/posts/pretty-sitemaps-with-gatsby-plugin-sitemap-and-xsl-stylesheets/](https://www.felixparadis.com/posts/pretty-sitemaps-with-gatsby-plugin-sitemap-and-xsl-stylesheets/)	

&nbsp;   
&nbsp;   
&nbsp;

### #62- Web Assembly     
####### Sat Jan 18 01:49:10 PM IST 2025 #######     

- Web assembly from various languages:
	- [https://webassembly.org/getting-started/developers-guide/](https://webassembly.org/getting-started/developers-guide/)
- most convenient for someone from javascript background:
	- [https://www.assemblyscript.org/](https://www.assemblyscript.org/)
	- [https://www.assemblyscript.org/introduction.html#from-a-webassembly-perspective](https://www.assemblyscript.org/introduction.html#from-a-webassembly-perspective)
	- [https://webassembly.org/docs/use-cases/](https://webassembly.org/docs/use-cases/)
	

&nbsp;   
&nbsp;   
&nbsp;

### #63- Chrome Plugin/Extension     
####### Sat Jan 18 01:49:54 PM IST 2025 #######     

- [https://developer.chrome.com/docs/extensions/get-started](https://developer.chrome.com/docs/extensions/get-started)
- Chrome tabs and windows API:
	- [https://developer.chrome.com/docs/extensions/get-started/tutorial/popup-tabs-manager](https://developer.chrome.com/docs/extensions/get-started/tutorial/popup-tabs-manager)
	- [https://developer.chrome.com/docs/extensions/reference/api/tabs#method-query](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-query)
	- [https://dev.to/rimutaka/chrome-extension-with-rust-and-wasm-by-example-5cbh](https://dev.to/rimutaka/chrome-extension-with-rust-and-wasm-by-example-5cbh)
	- [https://stackoverflow.com/questions/49611290/using-webassembly-in-chrome-extension](https://stackoverflow.com/questions/49611290/using-webassembly-in-chrome-extension)
	- 
- Web Assembly for Chrome Extension
	- [https://github.com/inflatablegrade/Extension-with-WASM](https://github.com/inflatablegrade/Extension-with-WASM)

&nbsp;   
&nbsp;   
&nbsp;

### #64- Tips for managing white spaces HTML, CSS     
####### Sun Jan 12 05:36:21 PM IST 2025 #######     

- [https://www.dhiwise.com/post/react-line-break-techniques-for-better-text-formatting](https://www.dhiwise.com/post/react-line-break-techniques-for-better-text-formatting)
- white-space styling property !
- very well thought feature

&nbsp;   
&nbsp;   
&nbsp;

### #65- SSL certificates with Let's Encrypt     
####### Mon Dec 30 07:15:02 PM IST 2024 #######     

- install certbot as a snap / apt package
- generate the certificates for ngnix
- add to your site
- setup automated refresh in 90 days
- Links:
	- [https://letsencrypt.org/getting-started/](https://letsencrypt.org/getting-started/)
	- [https://certbot.eff.org/instructions?ws=nginx&os=snap](https://certbot.eff.org/instructions?ws=nginx&os=snap)

&nbsp;   
&nbsp;   
&nbsp;

### #66- ERD generation for postgres db     
####### Wed Dec 25 08:44:37 AM IST 2024 #######     

- pgAdmin4 has a good tool for ERD generation
- [https://www.enterprisedb.com/blog/create-erd-pgadmin-4#section-1](https://www.enterprisedb.com/blog/create-erd-pgadmin-4#section-1)
- [https://www.pgadmin.org/docs/pgadmin4/latest/erd_tool.html](https://www.pgadmin.org/docs/pgadmin4/latest/erd_tool.html)
- works well
- bit slow and can do better with picking up description of each field from the db
- postgres should have filed meta-data like description

&nbsp;   
&nbsp;   
&nbsp;

### #66- SIEM solution candidates     
####### Sat Dec 21 06:12:55 PM IST 2024 #######     

- Sumo Logic
	- [https://www.sumologic.com/pricing/](https://www.sumologic.com/pricing/)
- Open  source - self hosted
	- [https://github.com/aws-samples/siem-on-amazon-opensearch-service](https://github.com/aws-samples/siem-on-amazon-opensearch-service)
- AWS recommended:
	-  [https://aws.amazon.com/marketplace/solutions/security/siem?aws-marketplace-cards.sort-by=item.additionalFields.sortOrder&aws-marketplace-cards.sort-order=asc](https://aws.amazon.com/marketplace/solutions/security/siem?aws-marketplace-cards.sort-by=item.additionalFields.sortOrder&aws-marketplace-cards.sort-order=asc)
- Most are 1k USD per month in general
	- Sumo Logic is the most modular
- Comparisons:
	- [https://www.cyberlands.io/newrelicvsarcsight](https://www.cyberlands.io/newrelicvsarcsight)


&nbsp;   
&nbsp;   
&nbsp;

### #67- note taking - Obsidian         
####### Mon Oct 28 11:27:49 PM IST 2024 #######     

- [https://www.youtube.com/watch?v=5ht8NYkU9wQ](https://www.youtube.com/watch?v=5ht8NYkU9wQ)
- TODO: explore once
- although not so different from what I am doing currently
- [https://www.youtube.com/watch?v=DgKI4hZ4EEI](https://www.youtube.com/watch?v=DgKI4hZ4EEI)

&nbsp;   
&nbsp;   
&nbsp;

### #68- grex command - get regex to cover all inputs         
####### Mon Oct 28 11:27:49 PM IST 2024 #######     

- grex
- [https://www.youtube.com/shorts/_3aj2tRpQz4](https://www.youtube.com/shorts/_3aj2tRpQz4)

&nbsp;   
&nbsp;   
&nbsp;

### #69- get postges running queries         
####### Wed Oct 23 04:53:00 PM IST 2024 #######     

- [https://repost.aws/knowledge-center/rds-postgresql-running-queries](https://repost.aws/knowledge-center/rds-postgresql-running-queries)
You can also modify this command to view the list of running queries. The queries are ordered by when the connections were established:

```SELECT * FROM pg_stat_activity ORDER BY backend_start;```
If the xact_start column value is null, then there's no transaction opened in that session:

```SELECT * FROM pg_stat_activity ORDER BY xact_start;```
Or, view the same list of running queries ordered by when the last query started:

```SELECT * FROM pg_stat_activity ORDER BY query_start;```


&nbsp;   
&nbsp;   
&nbsp;

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

&nbsp;   
&nbsp;   
&nbsp;

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

&nbsp;   
&nbsp;   
&nbsp;

### #73- sqlite data browsers options     
####### Sat Oct 12 05:52:28 PM IST 2024 #######     

- [https://github.com/pawelsalawa/sqlitestudio](https://github.com/pawelsalawa/sqlitestudio)
- [https://sqlitebrowser.org/](https://sqlitebrowser.org/)
	- has better search than other options

&nbsp;   
&nbsp;   
&nbsp;

### #74- django data migration from one database to another      
####### Fri Oct 11 08:09:25 PM IST 2024 #######     

- django-admin (manage.py)
- dumpdata and loaddata pair
- best to output as jsonl for large datasets
	- can be processed line by line as each line represents a row in the db 

&nbsp;   
&nbsp;   
&nbsp;

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
####### Fri Mar 14 02:13:35 PM IST 2025 #######
- part 2 of the above article:
	- [https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-part-2](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-part-2)

####### Fri Mar 14 02:07:14 PM IST 2025 #######
- every non-programmer leader's wet dream:
	- measure developer productivity
	- [https://getaugur.ai/](https://getaugur.ai/)
	
- I remember reading somewhere: that the 7th circle in hell reserved for Agile creators 
	- then a good discussion about
	- Agile works well with low motivation, low ownership and low context teams
	- and it is a horrible idea for opposite kind of teams, it is just managers making themselves feel better
	- I remember it to be a forum discussion somewhere
	- TODO: find the forum discussion / article /  or whatever it was
- Good cartoon for developer hell: [https://toggl.com/blog/seven-levels-developer-hell](https://toggl.com/blog/seven-levels-developer-hell)
- Another good humorous take on this hell for programmers: 
	- [https://medium.com/@alexdh359/agiles-inferno-navigating-the-nine-circles-of-transformation-turmoil-1b97d2cc52ed](https://medium.com/@alexdh359/agiles-inferno-navigating-the-nine-circles-of-transformation-turmoil-1b97d2cc52ed)
	
- general bottlenecks I have observed
	- a complete requirements brief 
		- when is brief complete ?
		- no scenario undefined - UI, transition, error message, edge-case
		- all questions answered 
	- architecture brief - this is an internal issues
	- stuck deployments 
	- writing good quality documentation

&nbsp;   
&nbsp;   
&nbsp;

### #84- docker to run gui applications       
####### Tue Jun 25 10:58:37 PM IST 2024 #######     

- good to know that it is possible now
- [https://medium.com/geekculture/run-a-gui-software-inside-a-docker-container-dce61771f9](https://medium.com/geekculture/run-a-gui-software-inside-a-docker-container-dce61771f9)

- seems like there is a lot of curiosity about this:
[https://www.google.com/search?q=docker+gui+with+wayland&oq=docker+gui+with+wayland](https://www.google.com/search?q=docker+gui+with+wayland&oq=docker+gui+with+wayland)

- on wayland 
[https://unix.stackexchange.com/questions/330366/how-can-i-run-a-graphical-application-in-a-container-under-wayland](https://unix.stackexchange.com/questions/330366/how-can-i-run-a-graphical-application-in-a-container-under-wayland)

- run a VNC server in docker and expose the GUI - very clever
[https://stackoverflow.com/questions/16296753/can-you-run-gui-applications-in-a-linux-docker-container](https://stackoverflow.com/questions/16296753/can-you-run-gui-applications-in-a-linux-docker-container)

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
- list [https://www.geeksforgeeks.org/docker-alternatives/](https://www.geeksforgeeks.org/docker-alternatives/)
- need OCI 
	- builders: buildah, oci-builder, buildkit
		- buildah - build OCI compliant containers with any language from scratch
		- [https://devtodevops.com/podman-build-vs-buildah/](https://devtodevops.com/podman-build-vs-buildah/)
		- docker build uses buildkit from version 23 [https://github.com/moby/buildkit](https://github.com/moby/buildkit)
	- container registry: 
	- runtime env: runc, runc, crun, runv 
	- deployment/orchestration: podman, kubernetes, openTofu
	- podman vs docker: [https://devtodevops.com/podman-vs-docker/](https://devtodevops.com/podman-vs-docker/)
	- buildah example: [https://www.linode.com/docs/guides/using-buildah-oci-images/](https://www.linode.com/docs/guides/using-buildah-oci-images/)
	- buildah example: [https://www.dbi-services.com/blog/creating-a-customized-postgresql-container-using-buildah/](https://www.dbi-services.com/blog/creating-a-customized-postgresql-container-using-buildah/)
	- buildah example: [https://opensource.com/article/22/2/build-your-own-container-linux-buildah](https://opensource.com/article/22/2/build-your-own-container-linux-buildah)
	- podaman: [https://docs.podman.io/en/latest/Introduction.html](https://docs.podman.io/en/latest/Introduction.html)
	- container terminology: [https://developers.redhat.com/blog/2018/02/22/container-terminology-practical-introduction#basic_vocabulary](https://developers.redhat.com/blog/2018/02/22/container-terminology-practical-introduction#basic_vocabulary)
	- CRI-O vs docker
	- Containerd vs docker
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
- ZeroVM: [https://www.zerovm.org/principles.html](https://www.zerovm.org/principles.html)
	- a good candidate to try out
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
- puppet - chef - ansible [https://www.veritis.com/blog/chef-vs-puppet-vs-ansible-comparison-of-devops-management-tools/](https://www.veritis.com/blog/chef-vs-puppet-vs-ansible-comparison-of-devops-management-tools/) 
- pulumi - terraform
	- [https://medium.com/datamindedbe/pulumi-vs-terraform-choosing-your-iac-tool-6d17b5222545](https://medium.com/datamindedbe/pulumi-vs-terraform-choosing-your-iac-tool-6d17b5222545)
- OpenTofu: [https://opentofu.org/docs/intro/](https://opentofu.org/docs/intro/)
	- [https://www.pulumi.com/docs/iac/concepts/vs/opentofu/](https://www.pulumi.com/docs/iac/concepts/vs/opentofu/)
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
- [https://itsfoss.com/macos-linux-vm/](https://itsfoss.com/macos-linux-vm/)
	- seems to be pretty simple
- Made possible with:
	- [https://github.com/quickemu-project/quickemu](https://github.com/quickemu-project/quickemu)
	- 

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

