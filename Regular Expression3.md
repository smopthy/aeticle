###### back reference  

目的如何在每一行內，找尋每一行相同的字

###### exmple1 :

     this is some tex text with 
     double double words some where  I I I am 
     not not sure why why  I am typing ok ? 
     rianbow rainbow unicorn unircorn 
     
##### exmple1 script :
     
     (\w+)\s+\1  ＝> \1 告訴計算機我要同樣group 的字母串 
     
     
     

