##### input the data 

設定d3圖生成的位子，並在生成的時候嵌入node : “g” 

      var canvas = d3.select("body").append("svg")
                  .attr("height",500)
                  .attr("width",500)
                  .append("g")

設定data 

    var arr = [ 40 ,50 ,90 ]
        
擷取data併運用 

    var rect = canvas.selectAll("rect")
		 .data(arr) // input data
		 .enter() // get data
		 .append("rect")
		 .attr("width", function(d){  return d})
		 .attr("height",50)
		 .attr("y",function(d , i ) {return i * 100})
             // d 為data , i 指的是 index
 
 


