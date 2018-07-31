#### r.test() 
#### s.match(...)


關於 .test() 
```var r = /\d{3}/ 
   r.test("123") = true 
   r.test("123app") = true 
   r.test("hello") = false
```
     
     var t = /\^d{3}$/
     r.test("123app") => false  
     

關於 .match()  

```` var r="unicorns and rainbow and cupcakes "
     var s = /unicorn/
     s.match(r) = “unicorn"
````     
     
match 還要注意兩個flag的標記

   g = > global 
   i = > case insensitive 
 
```` var r = /[a-z]+/g 
     var s = "unicorns and rainbow and cupcakes"
     s.match(r) ＝＝＝
     ["unicorns", "and", "rainbow", "and", "cupcakes"]  
     
     
     var s = "unicorns and rainbow And Cupcakes"
     var r = /\b[a-z]\+b/gi
     s.match(r) 
     
     ["unicorns", "and", "rainbow", "And", "Cupcakes"]   
````









     
     
     
