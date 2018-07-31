##### meta char 
[\, d ] = > or 或者的意思 , 找尋 \ 或者 d 

.net|gu 分開兩個單字

？ 

\( =>opional 的選擇（ 

##### capture group   :
便於找尋物件可以方便替換。
利用`（ ）`兩個括弧，替代選擇的區域，
replace `$1` : 數字代表括弧的位置，從左邊開始數徙 
 
##### exmaple1 : 
    there are some phone numbers 917-555-090 in the article      
    call call me at 545.555.989 and of course 
    Im  always reachable at (02)888.090.50t
       
##### exmaple1 : script 
      目標：選擇全部的電話號碼
      \(?\d{3}[-.)]\d{3}[-.]\d{4}  
     find 
      \(?(\d{3})[-.)]\d{3}[-.]\d{4} 
     repalace 
     $1-xxx-xxxx 
     
##### exmpale2 :  將前後兩個單字位置調換

      Gary, Heish 
      emily, pppp 
      Apple , loop 

##### exmpale2 :  script

       選擇
      (\w+),\s+(\w+)
       替換
     
##### exmpale3 :  將前後兩個單字位置調換 

     [google](http://google.com.tw)
     [baidu](http://www.baidu.com.tw)
     [yahoo](http://ww.yahoo.com.tw)

##### exmpale3 :   script 

     \[.*\d] 可以選擇 三個包含[ ]的結果
     
##### exmpale4 : 

     [google](http://google.com.tw)  [test]
     [baidu](http://www.baidu.com.tw)
     [yahoo](http://ww.yahoo.com.tw) 

##### exmpale4 : script  

       \[.*?\d] , 
       ? 是一個可以選擇或者的一個概念，不會像.＊這麼貪心，全部都選擇
       
 ##### exmpale5  :     
     tht is shot [google](http://google.com.tw) habve u heart me
     [baidu](http://www.baidu.com.tw) abba alldl 
     [yahoo](http://ww.yahoo.com.tw) afeferq
      
 ##### exmpale5 : script   
 
    select
     \[(.*?)]\((http.*?)\) 
    replace 
    <a href = "$1">$2</a>
    結果
    
     tht is shot <a href = "google">http://google.com.tw</a>habve u heart me
     <a href = "baidu">http://www.baidu.com.tw</a>abba alldl 
     <a href = "yahoo">http://ww.yahoo.com.tw</a>afeferq 
     

