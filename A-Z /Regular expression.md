### Regular Expression   
給予電腦一個收尋的pattern 

 兩種表達式  
 1.正則表達型 
 
    var apple = /a+b/   
 
 2.函數型
 
    var apple = new RegEex {'a+b'} 
    
 運用  在search bar 中 鍵入 “\d"    
 則收尋引擎就會收尋0到9的字母  
 因為\\b 代表0到9的數字   


如果我們有一篇文章，裡面有文字也有幾組地話號碼如下： 

    there are some phone numbers 917-555-090 in the article 
    call call me at 545.555.989 and of course I'm  always 
    reachable at (02)888.090.506 .  

script 

    \d\d\d-\d\d\d-\d\d\d  
\d  代表0到9的數字
.   任何一個字母
*   0 或者  more 

##### meta-charachters 
|single char                           |qualifies                           |position         |
|------------------------------------|------------------------------------|----------------|
|\d  代表0到9的數字                     | *  zero or more                  |^ 開始         |
|\w  代表A到Z,a到z,0到9  如果是\W 就是代表不找代表A到Z,a到z,0到9 |   ＋ 1 or more   | ＄end         | 
|\s  space , tab    如果是\W 就是代表不找  space , tab  | ? 0 or 1         |         | \b  words bondry
| . any char whatso ever               | {min ,max } or  { n }         |         | 

#### exmple1 ：

       there are some phone numbers 917-555-090 in the article 
       call call me at 545.555.989 and of course 
       Im  always reachable at (02)888.090.50t
 
#### exmple1 script
       
        \d\w  

#### exmple2：
       
        the color of the raibow have many colours and the 
        raindow 	does not have a single colour  
        
#### exmple2 script 
 
        colou?ors? 
        
#### exmple3：
 
    This is something 
    is about  
    a blah 
    word
    sequence of word 
    Hello and 
    apple
    Goodbye and 
    Go go go rainbow ! 
    
#### exmple3 script  

    ^\w+$ (找word and apple )
    \w+$ (找每一行的最後一個字)
    ＾\w (找每一行的第一個字)
    \w{4} (找每個字母的頭四的字)
    \b\w{4}\b (找只有四個字母的字 )
