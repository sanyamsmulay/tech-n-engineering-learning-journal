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
 
