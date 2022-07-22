
-- en un intervalo de tiempo

\\delimiter
	create procedure totalDeliveryInterval(id_store int, init_date date, finish_date date)
	begin
		select s.name as name,
			   r.id_delivery_status as type,
			   count(r.id_delivery_status) as total 
		from shippingSummary 
		where s.id_store = id_store 
		and cast(r.full_date as Date)  >=init_date 
		and cast(r.full_date as Date) <=finish_date
		group by r.id_delivery_status;
	end
\\

-- desde el comienzo hasat el final
\\delimiter
	create procedure totalDelivery(id_store int)
	begin
		select s.name as name,
			   r.id_delivery_status as type,
			   count(r.id_delivery_status) as total 
		from shippingSummary 
		where s.id_store = id_store
		group by r.id_delivery_status;
	end
\\

-- en un intervalo de tiempo

\\delimiter
	create procedure DetailsDeliveryInterval(id_store int, init_date date, finish_date date)
	begin
		select *
		from shippingDetails 
		where s.id_store = id_store 
		and cast(r.full_date as Date)  >=init_date 
		and cast(r.full_date as Date) <=finish_date
		order by r.id_delivery_status;
	end
\\

-- desde el comienzo hasta el final
\\delimiter
	create procedure DetailsDelivery(id_store int)
	begin
		select *
		from shippingDetails 
		where s.id_store = id_store
		order by r.id_delivery_status desc;
	end
\\

-- solicitudes para el admin
\\delimiter
create procedure DetailsDeliveryGlobal()
begin
	select *
	from shippingDetails
	order by r.id_delivery_status desc;
end
\\



\\delimiter
create procedure stockInventory(id_store int)
	select * from stockInventory 
	where s.id_store = id_store
	order by w.id_wharehouse desc;
\\

\\delimiter
create procedure ItemsRegisterInterval(id_store int, init_date date, finish_date date)
	select * from stockInventory 
	where s.id_store = id_store
	where i.date >= init_date 
	and i.date <= finish_date
	order by ii.id_info_items desc
\\

\\delimiter
create procedure ItemsRegisterGlobal(id_store int)
	select * from stockInventory 
	where s.id_store = id_store
	order by ii.id_info_items desc
\\