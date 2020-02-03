<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<style type="text/css">
    @import url('https://fonts.googleapis.com/css?family=Times New Roman&display=swap');
	body{
		color:white;
		font-family: Times New Roman;
	}
	div.form_div {
		position: relative;
		width: 680px;
		height: 220px;
		background-color: #00A831;
		text-align: center;
		margin: 0 auto;
		border-radius: 10px;
	}
	h1{
		padding-top: 5px;
		font-weight: lighter;
		font-style: italic;
	}
	.p1{
		position: absolute;
		top: 40px;
		left: 40px;
		text-align: left;
		width: 340px;
		height: 80px;
		border-right:3px solid white;
		line-height: 25px;
		font-weight: bold;
	}
	.p2{
		position: absolute;
		top: 40px;
		right: 70px;
		text-align: left;
		font-weight: bold;
	}
	.p3{
		position: absolute;
		bottom: 10px;
		margin-left:35%;

	}
	div#result {
		width: 300px;
		background-color: #F0EFF1;
		border-color:#A19FA1 ;
		border-width: 2px;
		text-align: center;
		margin: 20px auto;
		color: black;
	}
	div#result2 {
		width: 300px;
		background-color: #F0EFF1;
		border-color:#A19FA1 ;
		border-width: 2px;
		text-align: center;
		margin: 20px auto;
		color: black;
	}
	div#card{
		background-color: #30CDF6;
		border: 4px solid;
		width: 450px;
		height: 300px;
		margin: auto auto;
		position: relative;
		border-radius: 10px;
	}
	#card ul{
		list-style-type:none;
		margin-top: 6px;
		line-height: 32px;
		}
	#card ul li:nth-child(1){
		font-size: 28px;
		font-weight: bold;
		margin-left: -15px;
		margin-bottom:  -5px;
		margin-top: 20px;
		}
	#card ul li:nth-child(3){
		font-size: 18px;
		margin-left: -15px;
		margin-bottom:  -17px;
		margin-top: -25px;
		}
	#card ul li:nth-child(5){
		font-size: 70px;
		margin-left: -15px;
		margin-bottom:  -16px;
		margin-top:13px;
		font-weight: bold;
		}
	#card ul li:nth-child(5) img{
		vertical-align:top; 
		width: 13px;
		height: 13px;
		margin-left: 0px;
		margin-top: -10px;
	}
	#card ul li:nth-child(5) p{
		font-size: 37px;
		display: inline;
	}
	#card ul li:nth-child(7){
		font-size:28px;
		font-weight: bold;
		margin-left: -15px;
		margin-bottom:  -18px;
		}
	img{
		width: 25px;
		height: 25px;
	}
	#card table{
		position: absolute;
		margin-left: 5px;
		margin-top: -10px;
	}
	#card table td{
		width: 65px;
		text-align: center;
		font-weight: bold;
	}
	div#result_table{
		margin: 20px auto;
		color:white;
		width: 770px;
	}
	table.result_table{
		border: solid #319FC8 2px;
		border-collapse: collapse;
		margin: auto auto;
		background-color: #97CAF0;
		width: 770px;
	}
	table.result_table th, .result_table td{
		border: solid #319FC8 2px;
		text-align: center;
		font-weight: bold;
	}
	table.result_table img{
		width:40px;
		height: 40px;
	}
	h2{
		color: black;
		margin-top: 20px;
		text-align: center;
		font-size: xx-large;
	}
	div#detail_card{
		background-color: #9FD1DB;
		width: 514px;
		height: 431px;
		margin: 18px auto;
		position: relative;
		border-radius: 10px;
	}
	#detail_card ul{
		position: absolute;
		top: 35px;
		list-style-type: none;
		float: left;
		font-size: 24px;
		font-weight: bold;
	}
	#detail_card li:nth-child(1){
		font-size: 34px;
		font-weight: bold;
	}
	#detail_card li:nth-child(2){
		font-size: 100px;
		font-weight: bold;
	}
	#detail_card ul li:nth-child(2) img{
		vertical-align:top; 
		width: 13px;
		height: 13px;
		margin-left: 0;
		margin-top: 20px;
	}
	#detail_card ul li:nth-child(2) p{
		font-size: 70px;
		display: inline;
	}
	#detail_card img.bigIcon{
		width: 190px;
		height: 190px;
		float: right;
		position: absolute;
		top: 10px;
		right:15px;
	}
	#detail_card table.detail_table{
		position: absolute;
		bottom: 17px;
		right :100px;
	}
	#detail_card .detail_table td{
		text-align: right;
		font-weight: bold;
		font-size: 20px;
	}
	#detail_card .detail_table td+td{
		text-align: left;
		font-weight: bold;
		font-size: 25px;
	}
	#detail_card span{
		font-size: 16px;
	}
	#Chart_div{
		text-align: center;
		margin: auto;
	}
	#Chart_div #lineChart{
		width:750px;
		margin: auto;
	}

	</style> 
<script type="text/javascript"> 
	var contentErr=true; 
	//check if the content of Street and City is empty. 
	function validateForm(){
		var input_form = document.getElementById("input_form");
		var xstreet= input_form.street.value;
		var ycity= input_form.city.value;
		var zstate = input_form.state.selectedIndex;
		var icheckbox =input_form.current.checked;
		if((xstreet.length==0||ycity.length==0 ||zstate==0)&&icheckbox ==false){
			document.getElementById("result").setAttribute("style","border-style: solid;");
			document.getElementById("result").innerHTML = "Please check the input address";
			if(document.getElementById('card')){document.getElementById('card').style.display= 'none';}
			if(document.getElementById('result2')){document.getElementById('result2').style.display= 'none';}
			if(document.getElementById('result_table')){document.getElementById('result_table').style.display= 'none';}
			if(document.getElementById('detail_div')){document.getElementById('detail_div').style.display= 'none';}
			if(document.getElementById('Chart_div')){document.getElementById('Chart_div').style.display= 'none';}
  		/*document.free.content.focus();*/
 			contentErr= false;
  		}
  		else{
  			document.getElementById("result").innerHTML= "";
  			document.getElementById("result").removeAttribute("style");
  			contentErr=true;}
  		return contentErr;
		}
	function show_detail(time, lat, log, street, city, state, cur){
			document.getElementById('card').style.display= 'none';
			document.getElementById('result_table').style.display= 'none';
			document.getElementById('lat').value= lat;
			document.getElementById('log').value= log;
			document.getElementById('time').value= time;
			document.getElementById('time_street').value= street;
			document.getElementById('cur').value= cur;
			if(document.getElementById('cur').value!="true"){
				document.getElementById('time_city').value= city;
			}
			document.getElementById('time_state').value= state;
			document.getElementById('time_form').submit();
		}
	function check_cur(){
		if(document.getElementById("checkbox0").checked){disable();}
		else{
			enable();
		}
	}
	function disable(){
		document.getElementById('state').value="state";
		document.getElementById('street').value="";
		document.getElementById('city').value="";
		document.getElementById('state').setAttribute("disabled", "disabled"); 
		document.getElementById('street').setAttribute("disabled", "disabled"); 
		document.getElementById('city').setAttribute("disabled", "disabled"); 
		document.getElementById('p1').setAttribute("style", "color:rgb(204, 204, 204);");
	}

	function enable(){
		document.getElementById('state').removeAttribute("disabled"); 
		document.getElementById('street').removeAttribute("disabled");
		document.getElementById('city').removeAttribute("disabled"); 
		document.getElementById('p1').setAttribute("style", "color:white");
	}
	function formReset(){
		enable();
		document.getElementById('checkbox0').checked = false;
		document.getElementById('state').value="state";
		document.getElementById('street').value="";
		document.getElementById('city').value="";
		if(document.getElementById('result')){document.getElementById('result').style.display= 'none';}
		if(document.getElementById('result2')){document.getElementById('result2').style.display= 'none';}
		if(document.getElementById('card')){document.getElementById('card').style.display= 'none';}
		if(document.getElementById('result_table')){document.getElementById('result_table').style.display= 'none';}
		if(document.getElementById('detail_div')){document.getElementById('detail_div').style.display= 'none';}
		if(document.getElementById('Chart_div')){document.getElementById('Chart_div').style.display= 'none';}
	}
</script>
</head>
<body>

	<div class=form_div>
		<h1>Weather Search</h1>
		<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" id="input_form" onSubmit="return validateForm()" >
			<p class="p1" id="p1">
				Street <input type="text" id="street" name="street" value="<?php checkInput('street') ?>"><br />
				City&nbsp&nbsp <input type="text" id="city" name="city" value="<?php  checkInput('city')?>"><br />
				State 
				<select name="state" id="state">
					<option value ="state" <?php checkOption("state")?>>State</option>
					<option disabled="" style="color: #000001;">------------------------------------</option>
					<option value ="AL" <?php checkOption("AL") ?>>Alabama</option>
					<option value ="AK" <?php checkOption( "AK") ?>>Alaska</option>
					<option value ="AZ" <?php checkOption( "AZ") ?>>Arizona</option>
					<option value ="AR" <?php checkOption( "AR") ?>>Arkansas</option>
					<option value ="CA" <?php checkOption( "CA") ?>>California</option>
					<option value ="CO" <?php checkOption( "CO") ?>>Colorado</option>
					<option value ="CT" <?php checkOption( "CT") ?>>Connecticut</option>
					<option value ="DE" <?php checkOption( "DE") ?>>Delaware</option>
					<option value ="DC" <?php checkOption( "DC") ?>>District Of Columbia</option>
					<option value ="FL" <?php checkOption( "FL") ?>>Florida</option>
					<option value ="GA" <?php checkOption( "GA") ?>>Georgia</option>
					<option value ="HI" <?php checkOption( "HI") ?>>Hawaii</option>
					<option value ="ID" <?php checkOption( "ID") ?>>Idaho</option>
					<option value ="IL" <?php checkOption( "IL") ?>>Illinois</option>
					<option value ="IN" <?php checkOption( "IN") ?>>Indiana</option>
					<option value ="IA" <?php checkOption( "IA") ?>>Iowa</option>
					<option value ="KS" <?php checkOption( "KS") ?>>Kansas</option>
					<option value ="KY" <?php checkOption( "KY") ?>>Kentucky</option>
					<option value ="LA" <?php checkOption( "LA") ?>>Louisiana</option>
					<option value ="ME" <?php checkOption( "ME") ?>>Maine</option>
					<option value ="MD" <?php checkOption( "MD") ?>>Maryland</option>
					<option value ="MA" <?php checkOption( "MA") ?>>Massachusetts</option>
					<option value ="MI" <?php checkOption( "MI") ?>>Michigan</option>
					<option value ="MN" <?php checkOption( "MN") ?>>Minnesota</option>
					<option value ="MS" <?php checkOption( "MS") ?>>Mississippi</option>
					<option value ="MO" <?php checkOption( "MO") ?>>Missouri</option>
					<option value ="MT" <?php checkOption( "MT") ?>>Montana</option>
					<option value ="NE" <?php checkOption( "NE") ?>>Nebraska</option>
					<option value ="NV" <?php checkOption( "NV") ?>>Nevada</option>
					<option value ="NH" <?php checkOption( "NH") ?>>New Hampshire</option>
					<option value ="NJ" <?php checkOption( "NJ") ?>>New Jersey</option>
					<option value ="NM" <?php checkOption( "NM") ?>>New Mexico</option>
					<option value ="NY" <?php checkOption( "NY") ?>>New York</option>
					<option value ="NC" <?php checkOption( "NC") ?>>North Carolina</option>
					<option value ="ND" <?php checkOption( "ND") ?>>North Dakota</option>
					<option value ="OH" <?php checkOption( "OH") ?>>Ohio</option>
					<option value ="OK" <?php checkOption( "OK") ?>>Oklahoma</option>
					<option value ="OR" <?php checkOption( "OR") ?>>Oregon</option>
					<option value ="PA" <?php checkOption( "PA") ?>>Pennsylvania</option>
					<option value ="RI" <?php checkOption( "RI") ?>>Rhode Island</option>
					<option value ="SC" <?php checkOption( "SC") ?>>South Carolina</option>
					<option value ="SD" <?php checkOption( "SD") ?>>South Dakota</option>
					<option value ="TN" <?php checkOption( "TN") ?>>Tennessee</option>
					<option value ="TX" <?php checkOption( "TX") ?>>Texas</option>
					<option value ="UT" <?php checkOption( "UT") ?>>Utah</option>
					<option value ="VT" <?php checkOption( "VT") ?>>Vermont</option>
					<option value ="VA" <?php checkOption( "VA") ?>>Virginia</option>
					<option value ="WA" <?php checkOption( "WA") ?>>Washington</option>
					<option value ="WV" <?php checkOption( "WV") ?>>West Virginia</option>
					<option value ="WI" <?php checkOption( "WI") ?>>Wisconsin</option>
					<option value ="WY" <?php checkOption( "WY") ?>>Wyoming</option>
				</select><br>
			</p>
			<p class="p2">
				<input type="checkbox" id="checkbox0" name="current" value="current" <?php checkbox()?> onclick="<?php echo 'check_cur()';?>">Current Location
			</p>
			<script type="text/javascript">	check_cur();</script>
			<p class="p3"><input type="submit" name="search" value="search">
			<input type="button" name="clear" value="clear" onclick="<?php echo 'formReset()';?>">
			</p>
			<input type="hidden" id="hidden_search" name="hidden_search" value="current">
		</form>
		<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" id="time_form">
			<input type="hidden" id="time" name="time" value="">
			<input type="hidden" id="lat" name="lat" value="">
			<input type="hidden" id="log" name="log" value="">
			<input type="hidden" id="time_street" name="street" value="">
			<input type="hidden" id="time_city" name="city" value="">
			<input type="hidden" id="time_state" name="state" value="">
			<input type="hidden" id="cur" name="current" value="true">
		</form>
	</div>
	<div id="result"></div>
	<?php
		//define display_icon which could convert icon to corresponding picture's url
		function display_icon($icon){
			$icon_url="";
			if($icon=="clear-day"||$icon=="clear-night"){
				$icon_url="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-12-512.png";
			}
			else if($icon=="rain"){
				$icon_url="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-04-512.png";
			}
			else if($icon=="snow"){
				$icon_url="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-19-512.png";
			}
			else if($icon=="sleet"){
				$icon_url="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-07-512.png";
			}
			else if($icon=="wind"){
				$icon_url="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-27-512.png";
			}
			else if($icon=="fog"){
				$icon_url="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-28-512.png";
			}
			else if($icon=="cloudy"){
				$icon_url="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-01-512.png";
			}
			else if($icon=="partly-cloudy-day" || $icon=="partly-cloudy-night"){
				$icon_url="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-02-512.png";
			}
			return $icon_url;
		}
		//choose icon for detail information
		function detail_icon($icon){
			$icon_url="";
			if($icon=="clear-day"||$icon=="clear-night"){
				$icon_url="https://cdn3.iconfinder.com/data/icons/weather-344/142/sun-512.png";
			}
			else if($icon=="rain"){
				$icon_url="https://cdn3.iconfinder.com/data/icons/weather-344/142/rain-512.png";
			}
			else if($icon=="snow"){
				$icon_url="https://cdn3.iconfinder.com/data/icons/weather-344/142/snow-512.png";
			}
			else if($icon=="sleet"){
				$icon_url="https://cdn3.iconfinder.com/data/icons/weather-344/142/lightning-512.png";
			}
			else if($icon=="wind"){
				$icon_url="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_10-512.png";
			}
			else if($icon=="fog"){
				$icon_url="https://cdn3.iconfinder.com/data/icons/weather-344/142/cloudy-512.png";
			}
			else if($icon=="cloudy"){
				$icon_url="https://cdn3.iconfinder.com/data/icons/weather-344/142/cloud-512.png";
			}
			else if($icon=="partly-cloudy-day" || $icon=="partly-cloudy-night"){
				$icon_url="https://cdn3.iconfinder.com/data/icons/weather-344/142/sunny-512.png";
			}
			return $icon_url;
		}
		//display the condition of precipitation in detail information
		function detail_preci($value){
			if($value<=0.0001){return "N/A";}
			elseif ($value<=0.015) {return "Very Light";}
			elseif ($value<=0.05) {return "Light";}
			elseif ($value<=0.1) {return "Moderate";}
			elseif ($value > 01) {return "Heavy";}
			return;
		}
		
		//define variables and set the original value 
		$street = $city =$state="";
		$cur="";
		function checkInput($value){
			if(isset($_POST[$value])){ 
				echo $_POST[$value];
			}
		}
		function checkOption($value){
			if (isset($_POST[ 'state']))
			{if($_POST['state']==$value)
				echo "selected";
			}
		}
		function checkbox(){
			//if(isset($_POST['current'])||isset($_POST['cur'])){
			if(isset($_POST['current'])){
				if($_POST['current']=="current"||$_POST['current']=="true"){
					echo "checked";
				}
				}
			}
		function get_ip_address(){
			foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key){
				if (array_key_exists($key, $_SERVER) === true){
					foreach (explode(',', $_SERVER[$key]) as $ip){
						$ip = trim($ip); 

						if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false){
							return $ip;
						}
					}
				}
			}
		}

		if(isset($_POST['hidden_search'])){
			$three_input =isset($_POST['street']) && isset($_POST['city']) && isset($_POST['state']);
		if(isset($_POST['current']) || $three_input){
			if(isset($_POST['current'])){
			$ip = get_ip_address();
			$address_url = "http://ip-api.com/json/".urlencode($ip);
			$response_jsonstr_cur = file_get_contents($address_url);
			$respose_jsonobj_cur = json_decode($response_jsonstr_cur, true);
			$latitude = $respose_jsonobj_cur['lat'];
			$longitude = $respose_jsonobj_cur['lon'];
			$city = $respose_jsonobj_cur['city'];
			$cur = $_POST['current'];
		}
		else if($three_input){
				$street= $_POST['street'];
				$city = $_POST['city'];
				$state = $_POST['state'];
				$address= $street.','.$city.','.$state;
				$googleGeoUrl="https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode($address)."&key=????xxxxx";
				try{
				$response_xmlstr_geo = file_get_contents($googleGeoUrl);
				}
				catch(Exception $e){echo "alert('Address failed!')";}
				$respose_xmlobj = new SimpleXMLElement($response_xmlstr_geo);
				if($respose_xmlobj->status!="ZERO_RESULTS"){
					$latitude = $respose_xmlobj->result->geometry->location->lat[0];
					$longitude = $respose_xmlobj->result->geometry->location->lng[0];
				}
				else{
					exit("<div id=\"result2\"><p style='text-align:center; color:black'>Wrong address!</p></div><script>document.getElementById('result2').setAttribute('style','border-style: solid;');document.getElementById('result2').innerHTML = 'Please check the input address';</script>");
				}
		}
		$forecastUrl= "https://api.forecast.io/forecast/d5062d78314026eaa99e5defc672c3ae/".$latitude.",".$longitude."?exclude=minutely,hourly,alerts,flags";
		$response_jsonstr_wea = file_get_contents($forecastUrl);
		$respose_jsonobj = json_decode($response_jsonstr_wea, true);
		
		 //map the data extracted from the resulrt of Forecast.io API 
		$timezone = $respose_jsonobj['timezone'];
		$temperature = $respose_jsonobj['currently']['temperature'];
		$summary = $respose_jsonobj['currently']['summary'];
		$humidity = $respose_jsonobj['currently']['humidity'];
		$pressure = $respose_jsonobj['currently']['pressure'];
		$windSpeed = $respose_jsonobj['currently']['windSpeed'];
		$visibility = $respose_jsonobj['currently']['visibility'];
		$cloudCover = $respose_jsonobj['currently']['cloudCover'];
		$ozone = $respose_jsonobj['currently']['ozone'];


		// create a card mainly for "currently" condition
		echo "<div id='card'>";
		echo "<ul>";
		echo "<li>".$city."</li><br>";
		echo "<li>".$timezone."</li><br>";

		echo "<li>".round($temperature)."<img src='https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_shape_oval-512.png'><p>F</p></li><br>";
		echo "<li>".$summary."</li><br></ul>";
		echo "<table><tr><td><img title='Humidity' src='https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-16-512.png'></td>";
		echo "<td><img title='Pressure' src='https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-25-512.png'></td>";
		echo "<td><img title='Wind Speed' src='https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-27-512.png'></td>";
		echo "<td><img title='Visibility' src='https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-30-512.png'></td>";
		echo "<td><img title='CloudCover' src='https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-28-512.png'></td>";
		echo "<td><img title='Ozone' src='https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-24-512.png'></td></tr>";
		echo "<tr><td>".$humidity."</td>";
		echo "<td>".$pressure."</td>";
		echo "<td>".$windSpeed."</td>";
		echo "<td>".$visibility."</td>";
		echo "<td>".$cloudCover."</td>";
		echo "<td>".$ozone."</td></tr></table>";
		echo "</div>";

		// create a result table to display daily information
		echo "<div id='result_table'>";
		echo "<table class='result_table'><tr>
				<th>Date</th>
				<th>Status</th>
				<th>Summary</th>
				<th>TemperatureHigh</th>
				<th>TemperatureLow</th>
				<th>Wind Speed</th></tr>";
		$daysobj =$respose_jsonobj['daily']['data'];
		foreach ((array)$daysobj as $i){
			echo "<tr><td>".date('Y-m-d', $i['time'])."</td>";
			echo "<td><img src= ".display_icon($i['icon'])."></td>";
			echo "<td style= 'cursor:pointer;' onclick='show_detail(".$i['time'].",".$latitude.",".$longitude.",\"".$street."\",\"".$city."\",\"".$state."\",\"".$cur."\");'>".$i['summary']."</td>";
			//street, city,state, cur
			echo "<td>".$i['temperatureHigh']."</td>";
			echo "<td>".$i['temperatureLow']."</td>";
			echo "<td>".$i['windSpeed']."</td></tr>";
		}
		echo "</table></div>";
			}
		}
		

		// display details of daily weather
		
		if(isset($_POST['time']) && isset($_POST['lat']) &&isset($_POST['log'])){
			$time=$_POST['time'];
			$latitude =$_POST['lat'];
			$longitude =$_POST['log'];
			$forecastUrl= "https://api.forecast.io/forecast/d5062d78314026eaa99e5defc672c3ae/".$latitude.",".$longitude.",".$time."?exclude=minutely";
			$response_jsonstr_time = file_get_contents($forecastUrl);
			$respose_jsonobj_time = json_decode($response_jsonstr_time, true);
			$summary_t = $respose_jsonobj_time['currently']['summary'];
			$temperature_t = $respose_jsonobj_time['currently']['temperature'];
			$icon_t = $respose_jsonobj_time['currently']['icon'];
			$precipitation_t = $respose_jsonobj_time['currently']['precipIntensity'];
			$chance_t =$respose_jsonobj_time['currently']['precipProbability'];
			$windSpeed_t = $respose_jsonobj_time['currently']['windSpeed'];
			$humidity_t =$respose_jsonobj_time['currently']['humidity'];
			$visibility_t =$respose_jsonobj_time['currently']['visibility'];
			$sunrise_t =$respose_jsonobj_time['daily']['data'][0]["sunriseTime"];
			$sunset_t =$respose_jsonobj_time['daily']['data'][0]["sunsetTime"];
			$timezone_t =$respose_jsonobj_time['timezone'];
			echo "<div id='detail_div'>";
			echo "<h2>Daily Weather Detail</h2>";
			echo "<div id='detail_card'>";
			echo "<ul><li>".$summary_t."</li>";
			echo "<li>".round($temperature_t)."<img src='https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_shape_oval-512.png'><p>F</p></li>
			</ul>";
			echo "<img class='bigIcon' src= ".detail_icon($icon_t).">";
			echo "<table class='detail_table'>
			<tr><td>Precipitation: </td><td>".detail_preci($precipitation_t)."</td></tr>";
			echo "<tr><td>Chance of Rain: </td><td>".(100*$chance_t)."<span> %</span></td></tr>";
			echo "<tr><td>Wind Speed: </td><td>".$windSpeed_t."<span> mph</span></td></tr>";
			echo "<tr><td>Humidity: </td><td>".(100*$humidity_t)."<span> %</span></td></tr>";
			echo "<tr><td>Visibility: </td><td>".$visibility_t."<span> mi</span></td></tr>";
			date_default_timezone_set($timezone_t);
			echo "<tr><td>Sunrise / Sunset: </td><td>".date('g ', $sunrise_t)."<span>".date('A', $sunrise_t)."/ </span>".date('g ', $sunset_t)."<span>".date('A', $sunset_t)."</span></td></tr>";
			echo "</table></div></div>";
			$i=0;
			$arr_chart= "[";
			$arr_temp ="";
			foreach($respose_jsonobj_time['hourly']['data'] as $key){
				if(date('H', $key['time'])==0||date('H', $key['time'])<date('H', $time)){
					$arr_chart.= "[".date('H', $key['time']).",".$key['temperature']."],";
				}
				else{
					$arr_temp .= "[".date('H', $key['time']).",".$key['temperature']."],";
				}
			}
			$arr_chart= $arr_chart.$arr_temp;
			rtrim($arr_chart, ","); 
			$arr_chart.="]";

			echo "<div id='Chart_div'>
					<h2>Day's Hourly Weather</h2>
					<img id ='button_image' src='https://cdn4.iconfinder.com/data/icons/geosm-e-commerce/18/point-down-512.png' onclick= 'displayFunction()'>
					<div id='lineChart' style='display:none'></div>

				</div>";
			echo "<script type='text/javascript'>
					function displayFunction(){
						if(document.getElementById('lineChart').style.display== 'none'){
							document.getElementById('lineChart').style.display= 'block';
							window.scrollTo(0,0);
							google.charts.load('current', {packages: ['corechart', 'line']});
							google.charts.setOnLoadCallback(drawBasic);
							document.getElementById('button_image').setAttribute('src','https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandLess-512.png');
						}
						else{
							document.getElementById('lineChart').style.display= 'none';
							document.getElementById('button_image').setAttribute('src','https://cdn4.iconfinder.com/data/icons/geosm-e-commerce/18/point-down-512.png');
							window.scrollTo(0,0);
						}
					}
					function drawBasic() {
						var data = new google.visualization.DataTable();
						data.addColumn('number', 'X');
						data.addColumn('number', 'T');
						data.addRows(".$arr_chart.");
						var options = {
							hAxis: {
								title: 'Time'
							},
							vAxis: {
								textColor:'#ffffff',
								title: 'Temperature'
							},
							width:750
						};
						
						var chart = new google.visualization.LineChart(document.getElementById('lineChart'));
						chart.draw(data, options);
					
				}</script>";
		}
		
	?>



</body>
</html>
