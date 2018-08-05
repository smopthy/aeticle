
##### Object note 


##### 查看屬性
1.   
```Object.keys(obj) 
   var obj = {
   key1 : 2 , 
   ket2 : 3  
   }
   Object.keys(obj)==> 
```
2.創造新的Object

``` 
     let pokemon = new Object() ; 
``` let pTYPE = {
    name = "Gary " , 
    age = "32"
    }
    
    let pokemon = new Obejct() 
    pokemon["effective"]="strong"
    pokemon["weight]=25.5
    pokemon["height"]=0.99
    pokemon.type = pTYPE 
    pTYPE["APPLE"] = ["paly", "joy" , " fragemnence"]
````

3. JavaScript Iteration for of loop versus for loop
for loop
```  let apple= ["friut" , "vegitable" , "vitamine-C"]
      
     for(let i = 0 ; i < apple.length ; i++){
            console.log(apple[i]);
     }
     
     for(let i = 0 ; i < apple.length ; i+2){
            console.log(apple[i]);
     } // let u can skip 2 
 ````
for of loop 

```for (let val of apple)
   console.log(val); 
````  
4. How for..of works with Symbol.Iterator() 
symbol.Iterator()
``` let apple= ["friut" , "vegitable" , "vitamine-C"] 
var myIterator = apple[Symbol.Iterator()]
     
     myIterator.next() 
     // {value : "firut" , Done ; flase}
         myIterator.next() 
     // {value : "vegitable" ,Done ; flase}
          myIterator.next() 
     // {value : "vitaminw-C" , Done ; flase}
          myIterator.next() 
     // {value : undefintely Done ; ture}
 ```
 5. Using for..in Iteration to Inspect JS Object Keys 
 PS the object can't not be for loop 
 
 	var apple = {
		name : "friut" , 
		like : "vegitable" ,
		type :  "vitamine-C"  }

	for (let val in apple){
		console.log(val) 
      }

	for (let val in apple){
		console.log(apple[val])
	 }
 6. Working with JS Object keys() and values() Functions 
 
```let pType = { 
   name : "Gary" ,
   age : 45 , 
   effectiveAgaist : ["Dark" , "Psychic" , "Grass"] 
}
   let apple = Object.keys(pType) 
   let banana = Obejtc.values(pType)
   console.log(apple)
   console.log(banana)
````


    
