######  lag函數 與 lead 函數


```select c.* ,
 from (

select * ,  lead(tot_amt,1) over(order by dept_code) as apple 
from bonus 
)c
````
