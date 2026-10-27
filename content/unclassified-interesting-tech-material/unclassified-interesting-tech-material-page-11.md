---
title: Unclassified Interesting Tech Material - page 11
date: 2026-06-15 11:37:10
tags: [unclassified, tech]
category: software-dev
---

# Unclassified Interesting Tech Material - page 11


continued from:  
[unclassified interesting tech material page 10](/2023/05/10/unclassified-interesting-tech-material/unclassified-interesting-tech-material-page-10/)
#### TODO - change the link when available

---

## Unclassified trinkets


### #5- ydotool - type date-time timestamp via keyboard shortcut
####### Tue Oct 27 03:00:00 PM IST 2026 #######

- ydotool --> `type` subcommand, bound to a keyboard shortcut in Wayland desktop settings
	- Shortcut name: `type date n timestamp to input`
	- Command:
	  `bash -c 'sleep 0.5 && ydotool type --delay 300 --key-delay 30 "####### $(date) #######"'`
	- Types a `####### ... #######` timestamp banner into whichever input/document has cursor focus.
- `--delay 300` sets delay before typing starts (ms), `--key-delay 30` sets per-key delay (ms) — tweak if keys get dropped
- the leading `sleep 0.5` lets the shortcut's own keypress finish before typing begins
- requires `ydotoold` daemon running (e.g. `systemctl --user enable --now ydotoold`)
- alternative: compose the shortcut via `key` subcommand or use `wtype`/`xdotool` equivalents on other setups
- [https://github.com/ReimuNotMoe/ydotool](https://github.com/ReimuNotMoe/ydotool)

&nbsp;
&nbsp;
&nbsp;

### #89- rust-desk - toggle keyboard binding between local and remote     
####### Thu Oct 15 07:07:10 PM IST 2026 #######     

- running issue, not merged yet
- [https://github.com/rustdesk/rustdesk/issues/1098](https://github.com/rustdesk/rustdesk/issues/1098)
- [https://github.com/rustdesk/rustdesk/pull/16173](https://github.com/rustdesk/rustdesk/pull/16173)
	- may be build and use this branch

&nbsp;   
&nbsp;   
&nbsp;

### #90- better deployment for AI     
####### Sat Sep 12 07:14:19 PM IST 2026 #######     

- [https://www.youtube.com/watch?v=Y5rSSvXfL4g](https://www.youtube.com/watch?v=Y5rSSvXfL4g)
	- Ollama
	- 9router
	- Headroom
	- Diffy
	- OpenHands

&nbsp;   
&nbsp;   
&nbsp;

### #91- GeoLibre - Qgis alternative     
####### Tue Sep  1 11:43:07 AM IST 2026 #######     

- [https://geolibre.app/](https://geolibre.app/)
	- TODO: explore capabilities


&nbsp;   
&nbsp;   
&nbsp;

### #92- Brownout illusion helicopter examples     
####### Mon Aug 17 02:08:30 PM IST 2026 #######     


- [https://www.youtube.com/shorts/KWWdtNQmgT4](https://www.youtube.com/shorts/KWWdtNQmgT4)
- [https://www.youtube.com/shorts/3IVhaOxBZbU](https://www.youtube.com/shorts/3IVhaOxBZbU)
	- good rising rain effect
- [https://www.youtube.com/watch?v=5yanHiNMm7s](https://www.youtube.com/watch?v=5yanHiNMm7s)
	- soft cloud effect
- [https://www.youtube.com/shorts/Hw7R0MAqx4s](https://www.youtube.com/shorts/Hw7R0MAqx4s)
	- soft cloud effect outside
- [https://www.youtube.com/shorts/MslacdsIN_8](https://www.youtube.com/shorts/MslacdsIN_8)
	- soft cloud and rising rain effect
- [https://www.youtube.com/watch?v=2lxRCx2YVk0](https://www.youtube.com/watch?v=2lxRCx2YVk0)
	- vection + brownout 
- [https://www.youtube.com/watch?v=CPLU00-EnEs](https://www.youtube.com/watch?v=CPLU00-EnEs)
	- reverse rain + soft cloud
- [https://www.youtube.com/watch?v=C3MbeCyGckQ](https://www.youtube.com/watch?v=C3MbeCyGckQ)
	- old video but: reverse rain curtain + soft cloud 
- [https://www.youtube.com/watch?v=y1u3Mp2E3a0](https://www.youtube.com/watch?v=y1u3Mp2E3a0)
	- soft cloud + upward rain

&nbsp;   
&nbsp;   
&nbsp;

### #93- GUI for embedded projects     
####### Wed Aug 12 03:10:38 PM IST 2026 #######     


- [https://lvgl.io/docs/open/8.3/intro/index.html](https://lvgl.io/docs/open/8.3/intro/index.html)
- runs almost anywhere.
- works with ZephyrOS - hence the interest

&nbsp;   
&nbsp;   
&nbsp;

### #94- Version control for Gaming projects     
####### Tue Aug 11 05:26:17 PM IST 2026 #######     


- [https://www.reddit.com/r/gamedev/comments/11e15ei/version_control_for_assets/](https://www.reddit.com/r/gamedev/comments/11e15ei/version_control_for_assets/)
- my general conclusion:
	- keep your code in git + assets in lfs
	- git + lfs --> if your assets are not going to be very big chunks or change repeatedly
		- git + lfs grows very fast for assets changing very fast
	- perfect for large projects:
		- git for code + svn for assets

	

&nbsp;   
&nbsp;   
&nbsp;

### #95- Visualization engine     
####### Sat Jul 11 02:16:45 PM IST 2026 #######     


- Vistle visualization engine:
	- [https://vistle.io/gallery/video.html](https://vistle.io/gallery/video.html)
	- repo: [https://github.com/vistle](https://github.com/vistle)
	- TODO: explore for video and animation for a fast 60-120fps render for dynamic, detailed scenery 
	

&nbsp;   
&nbsp;   
&nbsp;

### #96- Flat spins     
####### Sun Jun 21 01:19:01 PM IST 2026 #######     


- Good examples:
	- Pilot POV: [https://www.instagram.com/reels/DOymQWwgP8S/](https://www.instagram.com/reels/DOymQWwgP8S/)
	- On an RC: 3rd person POV + controls video
		- [https://www.youtube.com/watch?v=ao1W0fMfhfo](https://www.youtube.com/watch?v=ao1W0fMfhfo)
	- Pilot POV: [https://www.youtube.com/shorts/so--z-BONys](https://www.youtube.com/shorts/so--z-BONys)
	

&nbsp;   
&nbsp;   
&nbsp;

### #97- Ethercat     
####### Sun Jun 21 01:19:01 PM IST 2026 #######     


- TODO: write a good summary for my ethercat knowledge 
- Open Source options:
	- SOEM, SOES
	- 
	

&nbsp;   
&nbsp;   
&nbsp;

### #98- handwriting to text on linux    
####### Sun Jun 21 01:19:01 PM IST 2026 #######     


- Inkput
	- [https://github.com/s12wu/inkput](https://github.com/s12wu/inkput)
	- python wrapper 
	- seems easy to setup
	- TODO: try this
- Native handwriting keyboard for linux
	- [https://github.com/BigIskander/Handwriting-keyboard-for-Linux](https://github.com/BigIskander/Handwriting-keyboard-for-Linux)
	- uses Google Input tools as default
	- can run with a local model too, but needs setup 
	

&nbsp;   
&nbsp;   
&nbsp;

### #99- virtual / emulated routers    
####### Mon Jun 15 11:38:33 AM IST 2026 #######     


- 
- [https://github.com/vrnetlab/vrnetlab](https://github.com/vrnetlab/vrnetlab)
	

&nbsp;   
&nbsp;   
&nbsp;

### #100- snap vs flatpak    
####### Mon Jan 22 11:23:57 PM IST 2024 #######     


- [https://itsfoss.com/flatpak-vs-snap/](https://itsfoss.com/flatpak-vs-snap/)
- good balanced comparison
- [https://www.reddit.com/r/linuxmasterrace/comments/u4te9z/flatpak_or_snap/](https://www.reddit.com/r/linuxmasterrace/comments/u4te9z/flatpak_or_snap/)
	- good discussion from users that maintain both kind of packages
	

&nbsp;   
&nbsp;   
&nbsp;

