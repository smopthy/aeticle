##### meta char 


[\ , d ] = > or 或者的意思 , 找尋 \ 或者 d 

.net|gu 分開兩個單字

？ 

\( =>opional 的選擇（ 

##### capture group   :
便於找尋物件可以方便替換。
利用`（ ）`兩個括弧，替代選擇的區域，
replace `$1` : 數字代表括弧的位置，從左邊開始數徙 
 
##### exmaple:1
    there are some phone numbers 917-555-090 in the article      
    call call me at 545.555.989 and of course 
    Im  always reachable at (02)888.090.50t
       
script 
    
      \(?\d{3}[-.)]\d{3}[-.]\d{4} 
      
     find 
      \(?(\d{3})[-.)]\d{3}[-.]\d{4} 
     repalace 
     $1-xxx-xxxx 
##### exmpale:2 將前後兩個單字位置調換

      Gary, Heish 
      emily, pppp 
      Apple , loop 

script
       選擇
      (\w+),\s+(\w+)
       替換
      

 

      
     


