in SQLserver 2016 , 2017 it has convert table to JOSN .
using the "for json" , "for JOSN PATH" by SQL script 

i think this is a conveince way to conevr data to JSON . 


<note1>
transform relation /  tabluar data to JSON 
select charge_code , charge_name 
from sf 
for JSON AUTO 



<note2>
--- transform data / tablar to JSON / name the parent node  
select b.charge_code , b.order_rate , b.exe_rate , 
       a.nurse_treatment as 'nuse_rate.nure_treatement', 
	     a.nursing_rate as    'nuse_rate.nursing_rate'
from nurse_treatement a left join  doc_rate b on  a.charge_code =b.charge_code  

for JSON PATH 


<note3 >
create differen parent node 

select  
 id  as 'pat_record.id ', 
 age as 'pat_record.age', 
 charge_code as 'pat_record.charge_code', 
  charge_name as 'pat_record.charge_name', 
  quanity as 'FEE.quanity', 
  dept_code as 'FEE.dept_code', 
  dept_name  as 'FEE.dept_name'
from pat_record
for JSON PATH 



