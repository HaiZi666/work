<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="css/player.css"/>
		<script type="text/javascript" src="js/jquery.js" ></script>
	</head>
	<body>
		<div class="playertop">
			<div class="playerleft">
				<div class="cdin">
					<div class="cdout">
						<img src="imgs/img.jpg"/>
					</div>
					
				</div>
				<div class="playerrod">
					<img src="imgs/cd_tou.png"/>
				</div>			
				
			</div>
			
			<div class="playerright">
				<div class="songname">
					<h1>演员</h1>	
					 <span id="author">
					 	薛之谦
					 </span>
					 <span id="Album">
					 	专辑：绅士
					 </span>
				</div>
				<div class="control">
					<div class="controlleft">
						<span id="pre">
						   &#xe501;
						</span>
						<span id="stop">
							&#xe61a;
						</span>
						<span id="play">
							&#xe62f;
						</span>
						<span id="next">
							&#xe64c;
						</span>
					</div>
					
					
					
					
					<div class="controlright">
						<span id="order">
							&#xe672;
						</span>
						<span id="loop">
							&#xe624;
						</span>
						<span id="volume">
							&#xe771;
						</span>
					</div>
					
					
				</div>
				<div class="time">
					<i class="hour1">00</i>:<i class="min1">00</i>/<i class="hour2">04</i>:<i class="min2">30</i>
					<p class="progres-bar"></p>
				</div>
				
			</div>
			
			
		</div>
		
		<div class="playerbottom">
			<ul>
				<li>
					<h1>认真的雪</h1>
					<b>薛之谦</b>
					<span id="">
						专辑：绅士
					</span>
				</li>
				<li>
					<h1>绅士</h1>
					<b>薛之谦</b>
					<span id="">
						专辑：绅士
					</span>
				</li>
				<li>
					<h1>演员</h1>
					<b>薛之谦</b>
					<span id="">
						专辑：绅士
					</span>
				</li>
				<li>
					<h1>丑八怪</h1>
					<b>薛之谦</b>
					<span id="">
						专辑：绅士
					</span>
				</li>
			</ul>
		</div>
		
		
        <audio src="music/演员 - 薛之谦.mp3" type="audio/mp3" >
        	
	    </audio>
		
	</body>
	
	<script type="text/javascript">
		
		var stop=$("#stop");
		stop.click(function(){
			stop.css("display","none");
			$("#play").css("display","inline");
			$("")
			
			
			
			
			
			
		})
		
		var play=$("#play");
		play.click(function(){
			play.css("display","none");
			$("#stop").css("display","inline");
			
			
			
			
			
			
			
		})
		
		
		
		
	</script>
	
	
	
	
	
	
	
	
	
	
	
	
	
</html>
