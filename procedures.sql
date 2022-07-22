
-- en un intervalo de tiempo
delimiter //
	create procedure totalDeliveryInterval(idStore int, initDate date, finishDate date)
	begin
		select name,
			   status,
			   count(id_delivery_status) as total 
		from shippingSummary 
		where id_store = idStore 
		and cast(full_date as Date)  >=initDate 
		and cast(full_date as Date) <=finishDate
		group by id_delivery_status;
	end
//

-- desde el comienzo hasat el final
delimiter //
	create procedure totalDelivery(idStore int)
	begin
		select name,
			   status,
			   count(id_delivery_status) as total 
		from shippingSummary
		where id_store = idStore
		group by id_delivery_status;
	end
//

-- en un intervalo de tiempo

delimiter //
	create procedure DetailsDeliveryInterval(idStore int, initDate date, finishDate date)
	begin
		select *
		from shippingDetails
		where id_store = idStore 
		and cast(full_date as Date)  >= initDate 
		and cast(full_date as Date) <= finishDate
		order by id_delivery_status;
	end
//

-- desde el comienzo hasta el final
delimiter //
	create procedure DetailsDelivery(idStore int)
	begin
		select *
		from shippingDetails 
		where id_store = idStore
		order by id_delivery_status desc;
	end
//

-- solicitudes para el admin
delimiter //
create procedure DetailsDeliveryGlobal()
begin
	select *
	from shippingDetails
	order by id_delivery_status desc;
end
//



delimiter //
create procedure stockInventory(idStore int)
	select * from stockInventory 
	where id_store = idStore
	order by id_warehouse desc;
//

delimiter //
create procedure ItemsRegisterInterval(idStore int, initDate date, finishDate date)
	select * from stockInventory 
	where id_store = idStore
	and date >= initDate
	and date <= finishDate
	order by id_info_item desc
//

delimiter //
create procedure ItemsRegisterGlobal(idStore int)
	select * from stockInventory 
	where id_store = idStore
	order by id_info_item desc
//