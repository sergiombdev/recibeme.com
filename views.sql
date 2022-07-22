-- totales de tipo de envios

create view shippingSummary
	select * from Store as s
	inner join Request as r
	on s.id_store = r.id_store
	inner join DeliveryStatus as ds
	on ds.id_delivery_status = r.id_delivery_status


--detalles de solicitud
create view shippingDetails
	select * from Store as s
	inner join Request as r
	on s.id_store = r.id_store
	inner join DeliveryStatus as ds
	on ds.id_delivery_status = r.id_delivery_status
	inner join RequestItems as ri
	on ri.id_request = r.id_request
	inner join InfoItems as ii
	on ri.id_info_items = ii.info_items;


-- inventario

-- total stock en inventario

create view stockInventory
	select * from store as s
	inner join Items as i
	on s.id_store = i.id_store
	inner join infoItems as ii
	on ii.id_info_items = i.id_info_items
	inner join wharehouses as w
	on w.id_wharehouse =  ii.id_wharehouse;



-- registro ingreso items

create view incommingItemsRegister
	select * from store as s
	inner join Items as i
	on s.id_store = i.id_store
	inner join infoItems as ii
	on ii.id_info_items = i.id_info_items

