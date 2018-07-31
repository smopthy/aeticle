#### r.test() 
#### s.match(...)

```var r = /\d{3}/ 
   r.test("123") = true 
   r.test("123app") = true 
   r.test("hello") = false
```
     
     var t = /\^d{3}$/
     r.test("123app") => false  
     

問題 ：
