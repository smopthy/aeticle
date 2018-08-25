######  lag函數 與 lead 函數


```select c.* ,
 from (

select * ,  lead(tot_amt,1) over(order by dept_code) as apple 
from bonus 
)c
````


運用：與同一個代碼的對應欄位運算或對比，例如同一個科室醫護的獎金上下兩個月對比
