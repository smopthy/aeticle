<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>again</title>

	<script src="libraries/d3.js"></script>
<!-- 	<script src="ddd.js"></script> -->
	<style></style>
</head>
<body>

	<script type="text/javascript">
		//create the canvas 
		var canvas = d3.select("body")
						.append("svg")
						.attr("width" , 600)
						.attr("height" ,1200);
		//append canvas to the line 	
		var circle = canvas.append("circle")
						.attr("cx" , 250)
						.attr("cy" , 250) 
						.attr("r"  , 40)
						.attr("fill" , "red");
		//append canvas to the line 						
		var rect =  canvas.append("rect")
						.attr("width" , 10)
						.attr("height", 30);
		//append canvas to the line 				
		var line = canvas.append("line")
						.attr("x1" , 0 )
						.attr("y1" , 20)
						.attr("x2" , 10)
						.attr("y2" , 40)
						.attr("stroke" , "green")
						.attr("strokeweight" , 5 )


	</script>
</body>
</html>
