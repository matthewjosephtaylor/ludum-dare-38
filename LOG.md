# LOG

2017-04-23T18:02:49-05:00
- Website hosted via github!
- Almost two hours of time left for polishing.
	- feels good to know that I will have 'something' finished, and can really only go forward from here.

2017-04-23T17:27:57-05:00
- time for major coding over.
- Game works.
	- is not nearly as polished as I would hope for but I finished it and it is playable! :)
- Now just need to get it hosted, then will worry about final tweaks.

2017-04-23T16:20:31-05:00
- crisis averted wrt the automove select.
- really feeling a bit of time pressure, but in a fun way :)

2017-04-23T16:02:40-05:00
- Had to do a hard reset while messing with the automove select functionality. No errors, game objects seemed to exist but nothing on scree. Total nightmare.

2017-04-23T15:17:57-05:00
- Game is functional!
- Now it is going to be all about polish as we head into the home stretch...

2017-04-23T13:02:34-05:00
- We can now select and move rows back and forth!

2017-04-23T12:11:51-05:00
- getting bogged down in the details of creating a UI...surely there is a better way...
	- It might be that drag-n-drop goes away...

2017-04-23T11:31:33-05:00
- Reorganizing code to think about it more clearly

2017-04-23T10:29:58-05:00
- Forced to move to yarn version of pixi.js from CDN to easily obtain plugin code. 

2017-04-23T10:10:10-05:00
- Nothing more fun than example code that assumes you have a 'plugin' for the library you are trying to learn installed but never tells you.


2017-04-23T09:41:45-05:00
- home stretch.
- starting off a bit rough, just getting back into the same motions
	- literally, I didn't hit 'shift-refresh' to clear cache and spent a few minutes wondering why my changes weren't being applied.



2017-04-22T22:56:38-05:00
- Going to call it a night.
- I think the basic mechanics of the game are now worked out in my mind.
- Tomorrow will be concentrating making a good user experience since the mechanics are straight-forward.
	- squash the d-n-d 'mouse jump' bug
	- make the drop slots 'click' into place
	- highlight associations
	- might need different avatar generator (think it is coming up with dupes)
	- sounds would be neat
	- points system
	- generally make it more 'wow' :)

2017-04-22T21:13:28-05:00
- The academic paper on color inspired me to use faces!
	- Perfectly fits with the theme.
	- One of those 'well of course' brilliant moments that I was only able to get to by being randomly hit by it. Need to save this as an example of how 'inspiration' relates to randomly linking existing ideas.

2017-04-22T20:55:56-05:00
- Interesting problem color-palette size.
	- Difficult to distinguish subtle color changes.
	- Random palettes are right out :)
	- Hopefully this will be a solved problem wrt maps and I can steal existing large-but-easily-to-distinguish pallets. To Google!

2017-04-22T20:31:06-05:00
- Interesting how the difficulty scales with regards to small changes in the number of blockValues.

2017-04-22T20:02:59-05:00
- Played my first game!
	- all manual, just moving shapes around the playing area but finally got a sense of how the game will play

2017-04-22T18:44:32-05:00
- fighting with the mouse position on drag-n-drop (why is that always a challenge?)
- Getting close to at least seeing what this game idea is going to look like.
	- Will allow me to visually 'feel' the game which I think will help quite a bit.

2017-04-22T17:20:49-05:00
- Found an OK functional/stream library but it is a bit weak :(
	- Glad I spent the time doing the research but disappointed with the outcome.
- Making progress on the game. So far no roadblocks.

2017-04-22T16:35:48-05:00
- making good progress on pixi.js. Seems to be a reasonable library.
- finding myself wanting a nice functional library so I can do maps and filters and stuff over a stream.

2017-04-22T15:18:39-05:00
- pixi.js tutorials here I come!
- Plan is to not get too bogged down on learning pixi.js and focus on getting just enough to complete the game. In effect, practicing this style of minimal-learning is the 'real game' for me and more or less the point of participating in the ludum dare. 


2017-04-22T14:47:50-05:00
- Looks like pixi.js is going to be easier to get something up quickly
	- DnD not baked into in three.js from examples I'm seeing.
	- bye-bye 3d (for now) :)



2017-04-22T14:01:26-05:00
- Got fswatch working, no more manual builds

2017-04-22T12:47:46-05:00
- Taken a moment to relax and refocus after battling with webpack
- Finally ready to get started with the actual programming tasks. :)
- First up: learn how to do basic rendered object->mouse manipulation in three.js (raycasting)

2017-04-22T12:38:58-05:00
- Wow. finally got a good working webpack. Holy fuck that was way harder than it needed to be.

2017-04-22T12:02:22-05:00
- whatever moron decided that the `entry` property in `webpack.config.js`  _must_ be proceded by a `./` or else it is interpreted as a 'module entry' that will be resolved in `node_modules` know that you have caused endless hours of frustration and confusion. Also webpack should display errors by default instead of hiding them behind crap like `--display-error-details` (WTF?). Also the error for this isn't helpful at all...GRRR.....

2017-04-22T11:48:57-05:00
- wow. really frustrated at how hard it is to get webpack up and running

2017-04-22T11:00:27-05:00
- Basic three.js tutorial
	https://dinosaurscode.xyz/tutorials/2016/07/15/three-js-tutorial-for-beginners/

2017-04-22T10:11:25-05:00
- Going to start with three.js 
	- I'm enchanted by the prospect of upgrading to 3d for this project or using cool 3d effects.

2017-04-22T09:58:54-05:00
- narrowing down graphics engines
	- three.js
		- bit inspired by the ascii demo...maybe just do ascii, who needs fancy graphics?
			- https://threejs.org/examples/#canvas_ascii_effect
	- pixie.js

2017-04-22T09:50:06-05:00
- Settled on the network-effect idea.
- Think I'm going to go straight javascript/html instead of Unity to begin.