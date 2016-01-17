var w = window.innerWidth;
var h = window.innerHeight;
var bgColor = "#2ECCFA"; 
var game = new Phaser.Game(w,h,Phaser.CANVAS,'canvas',{preload:preload,create:create,update:update,render:render});
var orange = "#FF7519";
var debug=false;
var hero;
var cursors;
var tree1;
var plant1;
var ct1,ct2,ct3,ct4;
var bulletTime = 0;
var ctext,pythontext,javatext,jstext;
var birds;
var bubble;
var style_white = { font:"24px Roboto", fill:"#FFF",align:"center" };
var style_roboto = { font:"24px Roboto", fill:"#FFF",align:"center" }
var shakti;
var shakti_cup;
var shakti2;
var football;
var text;
var spoj_url="http://www.spoj.com/users/prateek27/";
var hackerearth_url="https://www.hackerearth.com/users/prateekrishu1/";
var codechef_url="https://www.codechef.com/users/prateek27";
var github_url="https://github.com/prateek27";
var facebook_url="https://www.facebook.com/prateek.narang.756";
var linkedin_url="https://in.linkedin.com/pub/prateek-narang/9a/8b3/10";
var resume_url="http://www.prateeknarang.com/resume.pdf";
var website_url="http://www.prateeknarang.com";
var gmail_url="";
var inst_text;
var bug;
var bug_tween;
var bug_killed = false;
var cloud_moving1;
var cloud_moving2;
var base5 = 15100;
var base6 = 17500+1400;
var base7 =19500+1400;
var platformLength = base7+2000;
var cupTweenDone=false;
var cupTweenSecondDone=false;
var delay =0;
var starting_point=100;
var back_btn;
var touch;
var direction = "left";
var explosion_count = 0;
var max_explosion_count=5;
function preload(){
	 
	text = game.add.text(w/2, h/2, "Loading...",{ font:"80px Roboto",fill: '#ffffff' });
	text.anchor.setTo(0.5,0.5);
	game.load.image('download','assets/download2.png');
	game.load.image('publication','assets/publication.png');
	game.load.image('ground','assets/ground.png');
	game.load.image('back','assets/back64.png');
	game.load.image('grass','assets/grass.png');
	game.load.image('brick','assets/brick.png');
	game.load.image('tree1','assets/tree-bright-e.png');
	game.load.image('plant1','assets/plant-lotus.png');
	game.load.image('cloud','assets/cloud.png');
	game.load.image('birds','assets/birds.png');
	game.load.image('school','assets/school.png');
	game.load.image('mainbanner','assets/interactive-resume.png');
	game.load.image('building','assets/building.png');
	game.load.image('hometown','assets/hometown.png');
	game.load.image('hill','assets/mountain.png');
	game.load.image('treeS','assets/tree-dark-d.png');
	game.load.atlasJSONHash('prateek','assets/hero_running.png','assets/hero_running.json');
	game.load.atlasJSONHash('waterAtlas','assets/water_corrected.png','assets/water_running.json');
	game.load.atlasJSONHash('waterAtlas2','assets/water_orange.png','assets/water_running.json');
	game.load.image('dtu','assets/dtu.png');
	game.load.image('level','assets/sign.png');
	game.load.image('cocotree','assets/coco.png');
	game.load.image('python','assets/python_white.png');
	game.load.image('css','assets/cssn.png');
	game.load.image('js','assets/js.png');
	game.load.image('html','assets/html5.png');
	game.load.image('night','assets/night.jpg');
	//game.load.image('jquery','assets/jquery_white.png');
	game.load.image('developer','assets/fullstackS.png');
	//game.load.image('phaser','assets/phaserLogo.png');
	game.load.image('android','assets/android.png');

	game.load.image('frog','assets/frog.png');
	game.load.image('sandiskPd','assets/sandiskPd.png');
	game.load.image('sandiskLogo','assets/sandiskLogo.png');
	game.load.image('instaLogo','assets/instalabs.png');
	game.load.image('hackerearthLogo','assets/hackerearthlogo.png');
	game.load.image('campk12Logo','assets/campk12.png');
	game.load.image('cbLogo','assets/cb.png');
	game.load.image('corel','assets/corel.png');
	game.load.image('psbubble','assets/psbubble.png');
	game.load.image('games','assets/games.png');
	game.load.image('gamershq','assets/gamershq.png');
	//game.load.image('photoshop','assets/pslogo.png');
	game.load.image('bits','assets/0s1s.png');
	game.load.image('harddrive','assets/harddrive.png');
	game.load.image('hospital','assets/hospital_kalp.png');
	game.load.image('ambulance','assets/ambulance2.png');
	game.load.image('otherprojects','assets/other.png');
	//game.load.image('best','assets/best_cartoonist.png');
	game.load.image('bullet','assets/bullet.png');
	game.load.image('pipe','assets/pipe.png');
	game.load.image('cup','assets/cup.png');
	game.load.image('google','assets/google.png');
	game.load.image('csi','assets/csi.png');
	game.load.image('gaana','assets/gaanalogo.png');
	game.load.image('shephertz','assets/shephertz.png');
	game.load.image('codelhi','assets/codelhi.png');
	game.load.image('pshaktiman','assets/pshaktiman.png');
	game.load.image('chai','assets/cpc.png');
	game.load.image('football','assets/football.png');
	game.load.image('gmail','assets/gmail.png');
	game.load.image('facebook','assets/fb.png');
	game.load.image('linkedin','assets/linkedin.png');
	game.load.image('ladder','assets/ladder.png');
	game.load.image('yoga','assets/yoga.png');
	game.load.image('swach_bharat','assets/swach_bharat.png');
	game.load.image('github','assets/github.png');	
	game.load.image('codechef','assets/codechef.png');
	game.load.image('spoj','assets/spojlogo.png');
	game.load.image('algae','assets/algae-b.png');
	game.load.image('blogLogo','assets/icon_small.png');
	game.load.image('bug','assets/bug.png');
	game.load.image('flag','assets/flag.png');
	game.load.image('squarebrick','assets/brick_small.png');
	game.load.image('questionbrick','assets/question_block_small.png');
	game.load.image('question_hide','assets/question_block_plain_small.png');
	game.load.image('icpc','assets/icpc.jpg');
	game.load.atlasJSONHash('grari','assets/grari_map.png','assets/grari_map.json');
	game.load.atlasJSONHash('coin_moving','assets/coin-sprite.png','assets/coin-sprite-map.json');
	game.load.atlasJSONHash('digital_india','assets/digital_india.png','assets/digital_india.json');	
	game.load.image('waterBubble', 'assets/bubble256.png');
	game.load.image('sun', 'assets/sun.png');
	//game.load.image('waterBubble', 'assets/bubble256.png');
	game.load.atlasXML('seacreatures', 'assets/seacreatures.png', 'assets/seacreatures.xml');
   // game.load.image('undersea', 'assets/undersea.jpg');
	game.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);
	//game.load.image('ground','assets/ground.png');

}

function create(){

//	game.load.onLoadStart.add(loadStart, this);
   // game.load.onFileComplete.add(fileComplete, this);
  //  game.load.onLoadComplete.add(loadComplete, this);

  //  game.stage.scale.startFullScreen();
	//	game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL; //resize your window to see the stage resize too
	//	game.stage.scale.setShowAll();
	//	game.stage.scale.refresh();
	//Add Bullets.
		
	//Add Clouds
	for(var i=0;i<20000;i+=1000){
		if(i>=6800 && i<=8100){
		game.add.sprite(i,h-680,'cloud');
		game.add.sprite(i+400,h-630+50,'cloud');
		}
		else{
		game.add.sprite(i,h-580,'cloud');
		game.add.sprite(i+400,h-630,'cloud');
		

		}
	}

	//Add night mode
	night = game.add.tileSprite(0,0,platformLength*2,h,'night');
	night.alpha = 1;
	//Add mountains


	bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);
   	
    explosions = game.add.group();

    tiles = game.add.group();
    tiles.enableBody = true;
    tiles.physicsBodyType = Phaser.Physics.ARCADE;
    tiles.createMultiple(6,'questionbrick');
    
   text.setText("");
   //touch = new Phaser.Touch();
   //game.canvas.addEventListener('touchenter', function(){ console.log("You touched here!!");}, false);

	game.stage.backgroundColor =bgColor;
	game.world.setBounds(0, 0,platformLength,h+800);

	//Add corel parachute
	corel = game.add.sprite(9000,h-600,'corel');
	game.add.tween(corel).to( { y:h-450}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);
	//game.input.onTap.add(moveforward,this);


	flag = game.add.sprite(platformLength-190,h,'flag');
	flag.scale.setTo(0.5,0.5);
	game.add.sprite(platformLength-220,h-200,'pipe');



	game.add.sprite(3060,h-350,'treeS');
	hill1=game.add.sprite(2600,h-300+400,'hill');
	
	hill2=game.add.sprite(3000,h-350+400,'hill');

	hill3=game.add.sprite(3400,h-400+400,'hill');

	

	//Add Coco Trees
	ct1  = game.add.sprite(5000,h,'cocotree');
	ct2  = game.add.sprite(5200,h,'cocotree');
	ct3  = game.add.sprite(5400,h,'cocotree');
	ct4  = game.add.sprite(5600,h,'cocotree');

	var style_white2 = { font:"30px Roboto",fill:"#fff"};
	var style_lang = { font:"30px Roboto" ,fill:"#fff"};
	//var style_lang = { font:"30px monospace" ,fill:"#fff"};

	javatext = game.add.text(5050,h-320-50,'Python\n 88.54%',style_roboto);
	pythontext=	game.add.text(5250,h-430-60,'Java\n 94.78%',style_white2);
	jstext = game.add.text(5430,h-450-50,'JavaScript\n 98.48%',style_white2);
	ctext = game.add.text(5660,h-460-50,'C/C++ \n 98.42%',style_white2);

	
	javatext.alpha = 0.2;
	pythontext.alpha = 0.2;
	jstext.alpha = 0.2;
	ctext.alpha = 0.2;
	game.add.text(5200,h-140,'LANGUAGE  ACTIVITY',style_roboto);

	//Add BrickWall
	/* This is an older brick wall  
	game.add.tileSprite(6500,h-450,2000,400,'brick');
	*/
	//Add Coin
	var mustard_style = { font: "80px Roboto", fill: "#FFF", align: "center" };
	codetext = game.add.text(6550,h-550,'C    D E =>',mustard_style);
	var moving_coin = game.add.sprite(6610,h-550,'coin_moving');
	moving_coin.scale.setTo(2,2);
	moving_coin.animations.add('run');
	moving_coin.animations.play('run',20,true);
	
	/* The newer one */
	game.add.sprite(6650,h-200,'pipe');
	new_bug = game.add.sprite(6600,h-180,'bug');
	new_bug2 = game.add.sprite(6500,h-155,'bug');
	new_bug.scale.setTo(-1,1);
	new_bug2.scale.setTo(-0.7,0.7);
	game.add.tween(new_bug).to( { x:6680}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);
	game.add.tween(new_bug2).to( { x:6600}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);

	var xcoord=6500;
	game.add.sprite(xcoord,h-450,'squarebrick');
	game.add.sprite(xcoord+119,h-450,'question_hide');
	game.add.sprite(xcoord+2*119,h-450,'squarebrick');

	var exp_index =0;
	for(xcoord = 7100;xcoord<=8200;xcoord += 2*119)
	{
		game.add.sprite(xcoord,h-450,'squarebrick');
		//game.add.sprite(xcoord+119,h-450,'question_hide');
		//game.add.sprite(xcoord+119,h-500,'kaboom');
	    
	  
		//explosions.push(temp);
		 tile = tiles.getFirstExists(false);
		 if(tile){

		 	tile.reset(xcoord+119,h-450);
		 }

		 game.add.sprite(xcoord+100,h-310,'tree1').scale.setTo(0.6,0.6);
	}
	game.add.sprite(xcoord,h-450,'squarebrick');
	game.add.sprite(xcoord+100,h-310,'tree1').scale.setTo(0.6,0.6);

   //Add Explosion object pool
   	explosions = game.add.group();
    explosions.createMultiple(6, 'kaboom');
	//explos.forEach(function(){ expl })
	

	//game.add.text(6600,h-160,'FULL STACK WEB DEVELOPER \t\t SERVER SIDE IN DJANGO\t\t GAME DEVELOPMENT\t\tANDROID\t\t  DESIGNING SKILLS >> \t\t\t\t\t PHOTOSHOP ',style_lang);	


	game.add.sprite(base5+150,h-420,'tree1').scale.setTo(0.8,0.8);
	game.add.sprite(base5+300,h-250,'treeS').scale.setTo(0.7,0.7);
	game.add.sprite(base6+250,h-420,'tree1').scale.setTo(0.8,0.8);
	game.add.sprite(base6+200,h-250,'treeS').scale.setTo(0.7,0.7);
	game.add.sprite(base6+380,h-300,'treeS').scale.setTo(0.8,0.8);


	var style = { font: "16px monospace", fill: "#fff", align: "center" };
	game.add.text(2930,h-250,"Class 10th \n 10.0/10.0 CGPA \n School Topper", style);
	game.add.text(3330,h-280,"Class 12th \n 95.2 % marks \n CBSE Board ", style);
	game.add.text(3700,h-320,"JEE Mains \n All India Rank 489 \n 13th in Punjab \n\n 1st in DTU \n(University Rank Opener)", style);
	//Add Ground and Grass
	var ground = game.add.tileSprite(0,h-100,platformLength*2,2000,'ground');
	ground.scale.setTo(0.5,0.5);

	var grass = game.add.tileSprite(0,h-100,platformLength*2,50,'grass');
	grass.scale.setTo(0.5,0.5);
	

	game.add.text(5200,h-70,'*Percentiles as calculated by HackerEarth',{font:"20px monospace",fill:"#fff"});


	var water = game.add.tileSprite(8700,h-100,800,600,'waterAtlas');
	game.add.sprite(8800,h+120,'algae').scale.setTo(1.5,1.5);
	game.add.sprite(9200,h+250,'algae');
	createBubbles();
	//game.add.tileSprite(8700,h+600-136,133*6,136,'photoshop');

	var brick2 = game.add.sprite(12750-70,h-100-36,'brick');
	brick2.scale.setTo(0.5,0.5);
	game.add.sprite(12750-70,h-100,'brick').scale.setTo(0.5,0.5);


	game.add.sprite(12750+350,h-100-36,'brick').scale.setTo(0.5,0.5);
	game.add.sprite(12750+350,h-100,'brick').scale.setTo(0.5,0.5);
	//game.add.sprite(12650,h-400,'treeS').alpha=0.8;
	game.add.sprite(12850,h-300,'treeS').scale.setTo(0.75,0.75);

	var water2 = game.add.tileSprite(12750,h-100-36+10,700,320,'waterAtlas2');
	water2.scale.setTo(0.5,0.5);
	//var water = game.add.sprite(100,300,'waterAtlas');
	water.animations.add('run');
	water.animations.play('run',2,true);
	
	water2.animations.add('run');
	water2.animations.play('run',2,true);
	
	


	//Add trees

	tree1 = game.add.sprite(130,h-100-0.75*430,'tree1');
	tree1.scale.setTo(.75,.75);
	//tree1.alpha = 0.5;	
	//Add Main Banner
	var building = game.add.sprite(500,h-600,'building');
	building.scale.setTo(0.75,0.75);
	var banner = game.add.sprite(200,h-200-235,'mainbanner');

	//Add birds
	birds = game.add.sprite(50,50,'birds');
	birds.fixedToCamera = true;
	birds.scale.setTo(0.75,0.75);
	game.add.tween(birds.cameraOffset).to( { y:100 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
	
	//Signboards
	game.add.sprite(1300,h-440,'level');
	game.add.text(1370,h-340,"Level 1");
	game.add.text(1440,h-260,"About > >");

	game.add.sprite(4700,h-440,'level');
	game.add.text(4770,h-340,"Level 2");
	game.add.text(4840,h-260,"Skills > >");

	game.add.sprite(9600,h-440,'level');
	game.add.text(9670,h-340,"Level 3");
	game.add.text(9740,h-260,"Experience",{font:"25px Arial Black"});


	game.add.sprite(11800,h-440,'level');
	game.add.text(11870,h-340,"Level 4");
	game.add.text(11940,h-260,"Projects",{font:"25px Arial Black"});


	game.add.sprite(base5+100,h-440,'level');
	game.add.text(base5+170,h-340,"Level 5");
	game.add.text(base5+240,h-260,"Achievements",{font:"25px Arial Black"});


	game.add.sprite(base6+200,h-440,'level');
	game.add.text(base6+270,h-340,"Level 6");
	game.add.text(base6+335,h-260,"Other Highlights",{font:"20px Arial Black"});


	game.add.sprite(base7,h-440,'level');
	game.add.text(base7+70,h-340,"Level 7");
	game.add.text(base7+135,h-260,"Online Profiles",{font:"20px Arial Black"});

	//-------------------Levels Finish



	
	game.add.sprite(10200,h-420,'tree1').scale.setTo(0.75,0.75);
	game.add.sprite(11570,h-420,'tree1').scale.setTo(0.75,0.75);
	//Add frog
	for(row = 1;row<=7;row++){
		for(var xcoord=10500+(row-1)*60+200;xcoord<=11200-(row-1)*60+260;xcoord+=60){
			 if(row==7){
			 	game.add.sprite(xcoord+30,h-600,'flag').scale.setTo(0.2,0.2);
			 }
			 game.add.sprite(xcoord,h-100-row*60,'squarebrick').scale.setTo(0.5,0.5);
		}
	}

	game.add.sprite(10000,h-330,'frog').scale.setTo(0.8,0.8);
	game.add.sprite(10300,h-360,'frog').scale.setTo(0.9,0.9);
	game.add.sprite(10600,h-385,'frog');
	game.add.sprite(10900,h-450,'frog').scale.setTo(1.2,1.2);
	game.add.sprite(11300,h-485,'frog').scale.setTo(1.3,1.3);

	//Add logos
	game.add.sprite(10010,h-210,'campk12Logo').scale.setTo(0.75,0.75);
	game.add.sprite(10310,h-230,'instaLogo');
	game.add.sprite(10620,h-235,'hackerearthLogo').scale.setTo(0.48,0.48);
	game.add.sprite(10970,h-280,'sandiskLogo');
	game.add.sprite(11320,h-300,'cbLogo').scale.setTo(0.6,0.6);

	//Add company texts.
	var style_ex = {font:"16px Arial",fill:orange,align:"center"};
	var style_exS = {font:"12px Arial",fill:orange,align:"center"};
	game.add.text(10080,h-210,"Camp K-12, Delhi \n Sept-Oct 2013 \n Design Instructor",style_exS);
	game.add.text(10390,h-220,"InstaLabs, Gurgaon \n June-July 2014 \n Android Developer",style_exS);
	game.add.text(10700,h-230,"HackerEarth\n March-April 2015 \n Problem Setter",style_ex); 
	game.add.text(11000,h-250,"Bangalore \n June-July 2015 \n Firmware Developer\n Intern",style_ex);
	game.add.text(11420,h-290,"Coding Blocks,Delhi \n Aug'15-Nov'15 \n C++ Course Instructor",style_ex);

	var pd = game.add.sprite(10875,h-220,'sandiskPd');
	pd.scale.setTo(1.2,1.2);
	pd.angle = -30;

	//Add projects
	game.add.sprite(12200,h-370,'games');
	game.add.text(12280,h-430,"Developed Web & Android Games\n 500-1000 Downloads \n Rated 4.8/5.0 on Google Play",style_white);

	game.add.sprite(12760,h-250,'gamershq');
	game.add.text(12750,h-380,"Developed a gaming portal \n with frontend & backend \n to host and play games",style_white);


	game.add.sprite(13400,h-210,'harddrive').scale.setTo(0.6,0.6);
	game.add.sprite(13400,h-310,'bits');
	game.add.text(13300,h-430,"Developed meta-data tracking\nstructures for large storage devices \n using Boost C++ and \n Boost Python Libraries.",style_white);

	var pd = game.add.sprite(14050-100,h-160,'sandiskPd');
	pd.scale.setTo(1.4,1.4);
	pd.angle = 90;
	game.add.text(13800-100,h-300,"Wrote Python Scripts to analyze \n fragmentation pattern \n on USB drives.",style_white);

	game.add.sprite(14100,h-370,'hospital');
	var ambu = game.add.sprite(14200,h-260,'ambulance');
	ambu.scale.setTo(0.8,0.8);
	var t = game.add.tween(ambu).to( { x:14400,}, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
	t.start();
	game.add.text(14240,h-370,"Worked in a team \nto develop Smart Hospital Management \n System for Kalpvriksh Hospital.",style_white);


	game.add.sprite(14800,h-420,'otherprojects');
	game.add.text(14850,h-450,"Other Projects",style_white);
	//Add Achivements Section
	game.add.tileSprite(base5+500,h-100-73*3,139*2,73*3,'brick');
	shakti = game.add.sprite(base5+1200,-500,'pshaktiman');
	shakti.scale.setTo(0.6,0.6);
	shakti_cup = game.add.sprite(base5+500,-500,'cup');
	shakti_cup.scale.setTo(0.5,0.5);
	game.add.text(base5+505,h-300,"Best Cartoonist Award \n\n Won several Dist Level\nCartooning,Painting \n & Quiz Competitions. ",style_white);
	
	//game.add.tileSprite(15720,h-300,100,300'brick');

	//game.add.sprite(15715,h-410,'best').scale.setTo(0.8,0.8);
	//Positon style
	var style_position = { font:"24px monospace",fill:"#fff",align:"center"};
	cup1 = game.add.sprite(base5+820+200,-280,'cup');
	cup1.scale.setTo(0.6,0.6);
	game.add.sprite(base5+1190,h-330,'google');
	game.add.text(base5+1180,h-250,"Hackathon \n 3rd Runner up\n Developed a Game\n in DART",style_position);

	
	cup2=game.add.sprite(base5+1400,-340,'cup');
	cup2.scale.setTo(0.8,0.8);
	game.add.sprite(base5+1630,h-390,'csi');
	game.add.text(base5+1580,h-250,"2nd in Spython \nGame Development\n Challenge",style_position);

	

	cup3=game.add.sprite(base5+1820,-410,'cup');
	game.add.sprite(base5+2060,h-410,'codelhi');
	game.add.text(base5+2080+50,h-310,"Hackathon",style_position);

	game.add.text(base5+2060,h-305+50,"1st in ",style_position);
	game.add.sprite(base5+2170,h-310+50,'shephertz');
	game.add.text(base5+2060,h-205+30,"1st in ",style_position);
	game.add.sprite(base5+2150,h-210+30,'gaana').scale.setTo(0.15,0.15);


	//Add grari
	grari = game.add.sprite(base5+2600,h-350,'grari');
	grari2 = game.add.sprite(base5+2520+260,h-420,'grari');
	grari.animations.add('run');
	grari.animations.play('run',2,true);
	grari2.scale.setTo(0.75,0.75);
	grari2.animations.add('run');
	grari2.animations.play('run',2,true);

	//Add digital India
	digital_india = game.add.sprite(base5+2700,h-260,'digital_india');
	digital_india.animations.add('run');
	digital_india.animations.play('run',5,true);
	game.add.text(base5+2650,h-420,"Winning Team member\n Code For India \n Google Hackathon for",{font:"30px Arial",fill:"#fff",align:"center"});
	
	cup4=game.add.sprite(base5+2420,-410,'cup');

	cup5=game.add.sprite(base5+3000,h-400,'cup');
	cup5=game.add.sprite(base5+3200,h-350,'building').scale.setTo(0.5,0.5);
	
	game.add.text(base5+3250,h-470,"Winner \nSmart City Hackathon \nat PEC (Nov'15)",{font:"30px Arial",fill:"#fff",align:"center"});

	game.add.sprite(base5+3670,h-310,'icpc');
	game.add.text(base5+3650,h-470,"Qualified for \nACM-ICPC \nChennai Regionals 2015\n(Team AIR 62) !",{font:"30px Arial",fill:"#fff",align:"center"});

	//Add other highlights
	game.add.sprite(base6+600,h-240,'chai');
	game.add.text(base6+600,h-330,"Host:Chai Pe Charcha \n with NaMO & 'Mere \nSapno Ka Bharat'.",style_white);
	shakti2 = game.add.sprite(base6+930,-500,'pshaktiman');
	shakti2.scale.setTo(0.75,0.75);
	game.add.text(base6+900,h-430,"Sports Lover",style_white);
	football=game.add.sprite(base6+900,h-200,'football');
	game.add.tween(football).to( {y:h-300 }, 400, Phaser.Easing.Back.InOut, true, 0, 400, true);

	
	game.add.sprite(base6+1200-30,h-550,'tree1');
	game.add.sprite(base6+1250+30,h-400,'treeS');
	game.add.sprite(base6+1200,h-450,'yoga');
	game.add.sprite(base6+1600,h-400,'swach_bharat');
	game.add.text(base6+1240,h-500,"Holds Yoga Session \nin DTU \n every Friday.",style_white);
	game.add.text(base6+1400+20,h-360,"Took active part in \n Swacch Bharat,Tree Plantation\n Drives in Delhi,Punjab,Karnataka.",style_white);

	
	//Add Contact Buttons
	game.add.sprite(base7+600,h-400,'ladder');
	
	var cloud_blog =game.add.sprite(base7+550,h-700+20,'sun');	
	cloud_blog.scale.setTo(1.3,1.3);
	
	game.add.button(base7+620,h-650+20,'blogLogo',openWebsite,this);
	game.add.text(base7+650,h-550+20,"Blog",{font:"40px Arial" ,fill:"#fff"});
	cloud_moving1 = game.add.sprite(base7+510,h-650,'cloud');
	cloud_moving2 = game.add.sprite(base7+510-60,h-650,'cloud');

	cloud_moving2.scale.setTo(1.3,1.3);
	cloud_moving1.scale.setTo(1.2,1.2);

	//game.add.text(20100,h-550,"www.prateeknarang.com",{font:"16px Arial",fill:"#ff0000"});

	game.add.sprite(base7+450,h-550,'cloud').scale.setTo(1.2,1.2);
	button_github = game.add.button(base7+500,h-490,'github',openGithub, this);
	button_github.scale.setTo(0.20,0.20);
	
	game.add.sprite(base7+800,h-550,'cloud').alpha=0.8;
	button_fb = game.add.button(base7+860,h-520,'facebook',openFacebook,this);
	
	var hackerearth_cloud=game.add.sprite(base7+650+30,h-350+15,'cloud');
	hackerearth_cloud.scale.setTo(1.1,1.1);

	button_hackerearth = game.add.button(base7+700+30,h-310+15,'hackerearthLogo',openHackerearth, this);
	button_hackerearth.scale.setTo(0.5,0.5);
	
	var gmail_cloud=game.add.sprite(base7+670,h-440,'cloud');
	gmail_cloud.scale.setTo(1.1,1.1);
	gmail_cloud.alpha =0.95;
	button_gmail = game.add.button(base7+720,h-400,'gmail',openGmail, this);
	button_gmail.scale.setTo(0.8,0.8)
	
	

	
	var cloud_codechef=game.add.sprite(base7+400,h-400,'cloud');
	cloud_codechef.scale.setTo(1.4,1.4);
	cloud_codechef.alpha=0.8;
	button_codechef = game.add.button(base7+430,h-330,'codechef',openCodechef, this).scale.setTo(0.6,0.6);
	
	//game.add.sprite(20150+200,h-350,'spoj').scale.setTo(0.25,0.25);
	game.add.sprite(base7+850,h-430,'cloud').scale.setTo(1.3,1.3);
	button_spoj = game.add.button(base7+890,h-350,'spoj',openSpoj, this);


	var linkedin_cloud = game.add.sprite(base7+1050-100,h-530,'cloud')
	linkedin_cloud.scale.setTo(1.2,1.2);
	linkedin_cloud.alpha =0.9;
	button_linkedin = game.add.button(base7+990,h-450,'linkedin',openLinkedIn, this);
	button_linkedin.scale.setTo(0.8,0.8);
	
	game.add.text(base7+720,h-120,"Click /Tap the Clouds to open Profiles and Publications.",style_white);
	
	game.add.button(base7+1260,h-450+20,'publication',openPublication,this);

	//scale.setTo(0.15,0.15);

	/*
	button_codechef = game.add.button(20600,h-600,'codechef',openCodechef, this);
	
	button_linkedin = game.add.button(20400,h-400,'linkedin',openLinkedIn, this);
	button_spoj = game.add.button(20200,h-600,'spoj',openSpoj, this);
	button_hackerearth = game.add.button(20000,h-600,'hackerearthLogo',openHackerearth, this);
	*/
	//Add hometown
	var hometown = game.add.sprite(1600,h-440,'hometown');

	//Add fullstack
	game.add.sprite(5900,h-360,'developer');

	//Add College building
	game.add.sprite(4300,h-480,'building').scale.setTo(0.75,0.75);
	aieee_cup=game.add.sprite(3500,-500,'cup');
	game.add.text(4300,h-120,"  Scored 80% marks in university.",style_roboto);
	
	//Add bubble
	
	bubble = game.add.sprite(9100,h+450,'psbubble');
	game.add.text(8900,h+500,"Designing Skills - Photoshop,CorelDraw",style_roboto);
	
	bubble.scale.setTo(0.5,0.5);
	bubble.alpha =0.8;

	inst_text = game.add.text(290,h-50,"Use  Arrow Keys  OR << Screen Buttons >> ",{font:"30px Arial",fill:"#fff"});
	//Add hero 
	hero = game.add.sprite(100,-200,'prateek');
	hero.animations.add('run');



//----------------------------------------Sea Creatures
    //Add under water animals
    octopus = game.add.sprite(9200, h+100, 'seacreatures');
    octopus.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    octopus.animations.play('swim');
  //  game.add.tween(octopus).to( { y:h-100},2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
    game.add.tween(octopus).to({ y: h-100 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    octopus2 = game.add.sprite(13100, h-200, 'seacreatures');
    octopus2.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    octopus2.animations.play('swim');

    crab = game.add.sprite(8750,h+420, 'seacreatures');
    crab.animations.add('swim', Phaser.Animation.generateFrameNames('crab1', 0, 25, '', 4), 30, true);
    crab.animations.play('swim');

    crab2 = game.add.sprite(12650,h-180, 'seacreatures');
    crab2.scale.setTo(0.7,0.7);
    crab2.animations.add('swim', Phaser.Animation.generateFrameNames('crab1', 0, 25, '', 4), 30, true);
    crab2.animations.play('swim');

    seahorse = game.add.sprite(9300, h+200, 'seacreatures');
    seahorse.animations.add('swim', Phaser.Animation.generateFrameNames('seahorse', 0, 5, '', 4), 30, true);
    seahorse.animations.play('swim');


    purpleFish = game.add.sprite(12950,h-80, 'seacreatures');
    purpleFish.animations.add('swim', Phaser.Animation.generateFrameNames('purpleFish', 0, 20, '', 4), 30, true);
    purpleFish.animations.play('swim');
    game.add.tween(purpleFish).to({ x:12750}, 7500, Phaser.Easing.Quadratic.InOut, true, 0, 1000, false);


    stingray = game.add.sprite(8900, h+90, 'seacreatures');

    stingray.animations.add('swim', Phaser.Animation.generateFrameNames('stingray', 0, 23, '', 4), 30, true);
    stingray.animations.play('swim');
   /* 	
    jellyfish = game.add.sprite(9100, h+20, 'seacreatures');
    jellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('blueJellyfish', 0, 32, '', 4), 30, true);
    jellyfish.animations.play('swim');
*/
    greenJellyfish = game.add.sprite(8800, h-150, 'seacreatures');
    greenJellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4), 30, true);
    greenJellyfish.animations.play('swim');
    game.add.tween(greenJellyfish).to( { y:h-100},2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);


	//Add School
	var school = game.add.sprite(2200,h-220-200,'school');
	//school.scale.setTo(1.2,1.2);

	var clg = game.add.sprite(4000,h-490,'dtu');
	clg.scale.setTo(1.2,1.2);

	
//	hero tween
	var entryTween = game.add.tween(hero);
 //	tween = game.add.tween(sprites.cursor).to( { x:100,y: 500 }, 2000, Phaser.Easing.Bounce.Out, true);
	entryTween.to({x:starting_point,y:h-245-hero.height},2000,Phaser.Easing.Bounce.Out, true);
	entryTween.start();
	
	cursors = game.input.keyboard.createCursorKeys();
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.enable(hero);
	game.physics.arcade.enable(night);
	night.body.velocity.x = -30;

	game.input.mouse.mouseWheelCallback = mouseWheel;

//Add a bug
	bug = game.add.sprite(5900,h-150,'bug');
	game.physics.arcade.enable(bug);

//	hero.body.gravity.y=10000;
	//hero.fixedToCamera = true;
	//hero.body.angularVelocity = 10;
	game.camera.follow(hero);
	game.camera.follow(hero,Phaser.Camera.FOLLOW_PLATFORMER);
	//Create Water Bubbles
	back_btn = game.add.button(10,h-94,'back');
	fwd_btn = game.add.button(w-10,h-94,'back');
	fwd_btn.scale.x *= -1;
	fwd_btn.fixedToCamera = true;
	back_btn.fixedToCamera = true;
	back_btn.alpha = 1;
	
	download_btn = game.add.button(w-150,5,'download',openResume,this);
	download_btn.fixedToCamera = true;
	game.add.text(w-120,100,"Download PDF",{font:"10px Roboto",fill:"#000"}).fixedToCamera=true;
	night_tween = game.add.tween(night);
	night_tween.to({ alpha:0}, 10000)
		//, Phaser.Easing.Quadratic.InOut, true, 0, 5000, true);
	//back_btn.onTap.add(moveBack,this);
	//Visible only for mobile screens
	if(w<=481){
		back_btn.alpha = 1;
	}
	
	explosions = game.add.group();
    explosions.createMultiple(10, 'kaboom');
   

}


function addMovingCoin(x,y,scale){
	var moving_coin = game.add.sprite(x,y,'coin_moving');
	moving_coin.scale.setTo(scale,scale);
	moving_coin.animations.add('run');
	moving_coin.animations.play('run',20,true);
	return moving_coin;
	
}


function collisionHandler(bullet,tile){
   
    
	var explosion = explosions.getFirstExists(false);
	if(explosion){
	explosion_count++;
    explosion.reset(tile.body.x-50, tile.body.y-50);
    explosion.scale.setTo(1.5,1.5);
    explosion.animations.add('kaboom');
    explosion.animations.play('kaboom', 60, false, true);
    }

    tile.kill();
    bullet.kill();

    var bv = 7275;
    var inc = 119*2;

    if(explosion_count==1){
		var css = game.add.sprite(bv,h-400,'css');
		css.scale.setTo(0.5,0.5);
		css.anchor.setTo(0.5,0.5);
		game.add.tween(css).to({y:h-550},300).start();
		game.add.tween(css.scale).to({y:0.9,x:0.9},500).start();
		var coin = addMovingCoin(bv,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}
	else if(explosion_count==2){
	var html= game.add.sprite(bv+1*inc,h-500,'html');
		html.scale.setTo(0.5,0.5);
		html.anchor.setTo(0.5,0.5);
		game.add.tween(html).to({y:h-550},300).start();
		game.add.tween(html.scale).to({y:0.9,x:0.9},500).start();
	
			var coin = addMovingCoin(bv+inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});
	

	}
	else if(explosion_count==3){
	var js= game.add.sprite(bv+2*inc,h-500,'js');
	js.scale.setTo(0.5,0.5);
	js.anchor.setTo(0.5,0.5);
	game.add.tween(js).to({y:h-550},300).start();
	game.add.tween(js.scale).to({y:0.9,x:0.9},800).start();
	
		var coin = addMovingCoin(bv+2*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});


	}

	else if(explosion_count==4){
	var py= game.add.sprite(bv+3*inc,h-500,'python');
	py.scale.setTo(0.2,0.2);
	py.anchor.setTo(0.5,0.5);
	game.add.tween(py).to({y:h-550},300).start();
	game.add.tween(py.scale).to({y:0.6,x:0.6},500).start();

		var coin = addMovingCoin(bv+3*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	
	}
	else if(explosion_count==5){
	/*
	var phaser= game.add.sprite(bv+3*inc,h-500,'phaser');
	py.scale.setTo(0.2,0.2);
	py.anchor.setTo(0.5,0.5);
	game.add.tween(py).to({y:h-550},300).start();
	game.add.tween(py.scale).to({y:0.6,x:0.6},500).start();
	*/

	var andro= game.add.sprite(bv+4*inc,h-500,'android');
	andro.scale.setTo(0.2,0.2);
	andro.anchor.setTo(0.5,0.5);
	game.add.tween(andro).to({y:h-550},300).start();
	game.add.tween(andro.scale).to({y:0.6,x:0.6},600).start();

		var coin = addMovingCoin(bv+4*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});


	}
}


function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime && direction=="right"&&explosion_count<max_explosion_count)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(hero.x+hero.width/2+50, hero.y+100);
            bullet.scale.setTo(1.5,1);
            bullet.body.velocity.y = -400;
            bulletTime = game.time.now + 200;
        }

        bullet2 = bullets.getFirstExists(false);

        if (bullet2)
        {
            //  And fire it
            bullet2.reset(hero.x+ hero.width/2+100, hero.y+100);
            bullet2.scale.setTo(1.5,1);
            bullet2.body.velocity.y = -400;
            bulletTime = game.time.now + 300;
        }
    

    }

}

function resetBullet (bullet) {

    //  Called if the bullet goes out of the screen
    bullet.kill();

}

function moveBack(){
	hero.x -= 80;
	hero.animations.play('run',15,true);
}
function createBubbles(){
	for (var i = 0; i < 20; i++)
    {
        var sprite = game.add.sprite(game.rnd.realInRange(8700,9400), h+400, 'waterBubble');

        sprite.scale.set(game.rnd.realInRange(0.1, 0.3));
        sprite.alpha -=0.1;

        var speed = game.rnd.between(4000, 6000);

        game.add.tween(sprite).to({ y:h-game.rnd.realInRange(100,250),}, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 300;
    }


}

function mouseWheel(event) {
		inst_text.setText("");
		if(game.input.mouse.wheelDelta>0){
			
			hero.x +=60;
			hero.animations.play('run',15,true);	
		 }
		
		else{
			hero.x -=60;
			hero.animations.play('run',15,true);		
		}

}

function moveforward(){

	inst_text.setText("");
	hero.x +=80;
	
}

function forwardButtonPressed(){
	
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true);

	if((ptr.x>=w-150 && ptr.y>=h-150&&ptr.isDown)||cursors.right.isDown||scroll>0)
	{
		if(direction =="left"){
		direction= "right";
		hero.scale.setTo(1,1);
		hero.anchor.setTo(0,0);	
		}
		return true;
	}
	else
		{
			return false;
		}

}

function backButtonPressed(){
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true); 
	if((ptr.x<=150 && ptr.y>=h-150&&ptr.isDown)||cursors.left.isDown||scroll<0)
	{
		if(direction =="right"){
		direction= "left";
		//hero.anchor.setTo(1,0);
		hero.scale.setTo(-1,1);
	}
	return true;
	}
	else		
		return false;
}

function update(){

	game.physics.arcade.overlap(bullets, tiles, collisionHandler, null, this);
	var scroll = game.input.mouse.wheelDelta;

	if(hero.x>2600&&hero.x<=2650){
		moveHillsUp();
	}

	if(forwardButtonPressed()){
		inst_text.setText("");
		hero.x +=30;
		//console.log("Pointer:"+game.input.activePointer.x);
		hero.animations.play('run',15,true);
	}


	else if(backButtonPressed()){
		hero.x -=30;
	}
	else{
		hero.animations.stop('run');
	}
	
	if(hero.x<=0&&direction=="right"){
		hero.x =0;
	}
	if(hero.x <=150&&direction=="left"){
		hero.x = 150;
	}
	
	if(hero.x<=6450&& hero.x>=6200 &&hero.y == h-650 &&backButtonPressed() ){
		game.add.tween(hero).to({x:5800,y:h-300},300).start();
		hero.x=5780;
		hero.y = h-300;
		//console.log("This tween");
	}
	if(hero.x<8700 && hero.y>h &&(backButtonPressed())){
		hero.x = 8700;
		console.log("Yeh valal");
	}
	//Throw into ocean right
	if(direction =="left" &&hero.x >=9250&&hero.x<=9450&&backButtonPressed()){
		hero.y = h+300;
		hero.alpha = 0.8;
		birds.alpha =0;
	}
	if(hero.x >base5){

		night_tween.start();
	}

	if(hero.x > 8750 && hero.x <8900 && hero.y > h &&direction!='right'){
		var t =game.add.tween(hero).to({x:8800,y:h-300},1000).start();
		t.onComplete.add(function(){ hero.alpha=1; birds.alpha=1;game.camera.y -=150;})
		//console.log("Nahin Yeh Vaala")
	}

	if(hero.x>=12500&&hero.x<=12650&&(forwardButtonPressed())){
		var t = game.add.tween(hero).to({x:12800,y:h-700},100);
		t.start();
		t.onComplete.add(function(){ game.add.tween(hero).to({x:13100,y:h-300},200).start()});
	
	}

	if(hero.x >=13000&&hero.x<=13100&&(backButtonPressed())){
		var t = game.add.tween(hero).to({x:12400,y:h-600},100);
		t.start();
		t.onComplete.add(function(){ game.add.tween(hero).to({x:12400,y:h-300},200).start();});

	}



	if(hero.x > 4500){
		showPlantsFromBottom();
		moveBugLeft();
	}
	if(hero.x > 15350){
		
		game.add.tween(shakti).to({x:base5+600,y:h-610},100).start();
		game.add.tween(shakti_cup).to({x:base5+500,y:h-475},100).start();
		//console.log("Shakti cup is here");

	}
	if(hero.x > base5+800 && hero.x <=base5+900 && !cupTweenDone){
	
	cupTweenDone =true;
	
	var cupTween1 = game.add.tween(cup1);
	cupTween1.to({y:h-280},2000,Phaser.Easing.Bounce.Out, true);
	
	var cupTween2 = game.add.tween(cup2);
	cupTween2.to({y:h-340},2000,Phaser.Easing.Bounce.Out, true);
	cupTween1.start();
	cupTween2.start();

	}
	if(hero.x > base5+1600 && hero.x <=base5+1700 && !cupTweenSecondDone){
		cupTweenSecondDone=true;
	
	var cupTween3 = game.add.tween(cup3);
	cupTween3.to({y:h-410},2000,Phaser.Easing.Bounce.Out, true);
	cupTween3.start();

	var cupTween4 = game.add.tween(cup4);
	cupTween4.to({y:h-410},2000,Phaser.Easing.Bounce.Out, true);
	cupTween4.start();

	}


	if(hero.x>platformLength-350){
		hero.x = platformLength-350;
		var t = game.add.tween(flag).to({y:h-400},1000);
		t.start();
		t.onComplete.add(function(){game.add.text(platformLength-185,h-370,"Thanks for\n Visiting !",style_white);},this);
	
	}
	if(hero.x > 18000){
		
		var t =game.add.tween(shakti2).to({y:h-450},100);
		t.start();
		t.onComplete.add(bounceFootball,this);
	}

	if(hero.x > base7+500){
		game.add.tween(cloud_moving2).to({x:base7,alpha:0},5000).start();
		game.add.tween(cloud_moving1).to({x:platformLength,alpha:0},5000).start();

	}

	
	if(hero.x>5800 && hero.x <=6000 && hero.y>= h-245-hero.height-50 && direction!='left'){
		game.add.tween(hero).to({x:6500,y:h-650},100).start();
		

	}
		//bug_tween = game.add.tween(bug).to({x:6550},3000,Phaser.Easing.Linear.None)
		//bug_tween.start();
		/*
		
    var tween = game.add.tween(hero).to( { x: [ 6000, 6200, 6400, 6600 ], y: [ h-250, h-400, h-400, h-250 ] },2000, "Sine.easeInOut", true, -1, false);
    tween.interpolation(Phaser.Math.linearInterpolation);
	*/
	

	if((bug.x - hero.x)<=100){
		//game.add.tween(bug).to({x:bug.x},3000,Phaser.Easing.Linear.None).start();
		//bug_tween.pause();
		//bug.scale.setTo(1,0.2);
		//console.log(bug.x - hero.x);
		bug.body.velocity.x = 0;


		bug.scale.setTo(1,0.2);
		bug.body.y = h - 110;
		
		if(bug_killed==false){
		game.add.text(bug.x,h-200,"Oouch..!",style_roboto);
		bug_killed =true;
		}
	}
	//Throw onto Ground
	if(hero.x > 6830 && hero.x <7000 && direction=="right"){
		hero.y = h - 300;  

	}
	if(hero.x <=7000&&hero.x>6900 && direction=="left" ){
		hero.y = h - 650;

	}
	//Throw into ocean
	if(hero.x >=8600&&hero.x<=8800&&hero.y==h-300&&(forwardButtonPressed())&&direction=="right"){
		var t = game.add.tween(hero).to({x:8700,y:h+300},300).start();
		birds.alpha = 0;
		hero.alpha = 0.6;
			bubble.scale.setTo(0.5,0.5);
			bubble.anchor.setTo(0.5, 0.5);
			animateBubble();
		

		//t.onComplete.add(function(){
			//var t = game.add.tween(bubble).to({x:9100,y:h-50},300).start()},this);
			
			//bubble.anchor.setTo(bubble.width/2,bubble.height/2);
			//t.onComplete.add(animateBubble,this);
			
	}

	if(hero.x > 9250 && hero.x <9300 && hero.y > h &&direction!='left'){
		var t =game.add.tween(hero).to({x:9350,y:h-300},1000).start();
		t.onComplete.add(function(){ hero.alpha=1; birds.alpha=1;game.camera.y -=150;})
	}


	if(hero.x >=7100 && hero.x <=8200){
		fireBullet();
	}
	



}
function animateBubble(){

				bubble.scale.setTo(0.75,0.75);
				game.physics.enable(bubble,Phaser.Physics.ARCADE);
				bubble.body.angularVelocity = 100;
}
function moveBugLeft(){

	if(bug_killed===false && hero.x >=4900 ){
			bug.body.velocity.x = -200;
	}



}
function moveHillsUp(){

	var hillsTween = game.add.tween(hill1);
	hillsTween.to({y:h-300},1500);
	hillsTween.start();

	var hills2Tween = game.add.tween(hill2);
	hills2Tween.to({y:h-350},2000);
	hills2Tween.start();

	var hills3Tween = game.add.tween(hill3);
	hills3Tween.to({y:h-400},2500);
	hills3Tween.start();


	var ct = game.add.tween(aieee_cup);
	ct.to({y:h-410},5000,Phaser.Easing.Bounce.Out, true);
	ct.start();

}

function showPlantsFromBottom(){

	var plantsTween = game.add.tween(ct1);
	plantsTween.to({y:h-300},300);
	plantsTween.start();

	var plantsTween2 = game.add.tween(ct2);
	plantsTween2.to({y:h-400},300);
	plantsTween2.start();

	
	var plantsTween3 = game.add.tween(ct3);
	plantsTween3.to({y:h-420},300);
	plantsTween3.start();

	
	var plantsTween4 = game.add.tween(ct4);
	plantsTween4.to({y:h-420},300);
	plantsTween4.start();
	plantsTween4.onComplete.add(fadeText,this);

}


function bounceFootball(){


}
function bouncePrateek(){
// var bounceTween = 
}

function fadeText(){

	 game.add.tween(jstext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(ctext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(pythontext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(javatext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
}

function render(){
	
	if(debug)
		{game.debug.spriteInfo(hero,32,32);}
}

function loadStart() {

	text.anchor.setTo(0.5,0.5);
	text.setText("Loading ...");

	console.log("File complete...");

	console.log("Called Log Start !");
}

//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
	//game.add.sprite(w/2,h/2,'loader');
	console.log("File complete...");

	text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

/*	var newImage = game.add.image(x, y, cacheKey);

	newImage.scale.set(0.3);

	x += newImage.width + 20;

	if (x > 700)
	{
		x = 32;
		y += 332;
	}*/

	//text.setText("Loading...");

}

function loadComplete() {

	text.setText("Load Complete");

}

function openGithub(){
 var win = window.open(github_url);
 win.focus();
}
function openCodechef(){
 var win = window.open(codechef_url);
 win.focus();
}
function openLinkedIn(){
 var win = window.open(linkedin_url);
 win.focus();
}

function openFacebook(){
 var win = window.open(facebook_url);
 win.focus();
}

function openHackerearth(){
 var win = window.open(hackerearth_url);
 win.focus();
}


function openWebsite(){
 var win = window.open(website_url);
 win.focus();
}

function openResume(){
 var win = window.open(resume_url);
 win.focus();
}

function openGmail(){
 var win = window.open("mailto:prateeknarang111@gmail.com");
 win.focus();
}

function openSpoj(){
 var win = window.open(spoj_url);
 win.focus();
}
function openPublication(){
 var win = window.open("http://www.ijcaonline.org/research/volume127/number2/bindal-2015-ijca-906322.pdf");
 win.focus();
}



