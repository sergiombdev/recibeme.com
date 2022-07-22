-- totales de tipo de envios

create view shippingSummary as
	select s.id_store, s.name, s.address as addressStore, s.token, s.sku_code, s.logo_url, s.id_plan,
		   r.id_request, r.first_name, r.middle_name, r.last_name, r.address, r.lng, r.lat, r.full_date, r.prefered_delivery_time, r.delivery_time, r.prime, r.id_driver, r.id_payment_status, r.id_shippment_type, 
		   ds.id_delivery_status, ds.status 
	from Store as s
	inner join Request as r
	on s.id_store = r.id_store
	inner join DeliveryStatus as ds
	on ds.id_delivery_status = r.id_delivery_status;

-- detalles de solicitud
create view shippingDetails as
	select s.id_store, s.name as nameStore, s.address as addressStore, s.token, s.sku_code, s.logo_url, s.id_plan, 
		   r.id_request, r.first_name, r.middle_name, r.last_name, r.address, r.lng, r.lat, r.full_date, r.prefered_delivery_time, r.delivery_time, r.prime, r.id_driver, r.id_payment_status, r.id_shippment_type, 
		   ds.id_delivery_status, ds.status,
           ri.id_request_item, ri.quantity, ri.description, 
           ii.id_info_item, ii.name as nameItem, ii.weight, ii.code, ii.min_quantity, ii.current_price, ii.quantity as quantityItem, ii.id_warehouse 
	from Store as s
	inner join Request as r
	on s.id_store = r.id_store
	inner join DeliveryStatus as ds
	on ds.id_delivery_status = r.id_delivery_status
	inner join RequestedItems as ri
	on ri.id_request = r.id_request
	inner join InfoItems as ii
	on ri.id_info_item = ii.id_info_item;


-- inventario

-- total stock en inventario

create view stockInventory as
	select s.id_store, s.name as nameStore, s.address as addressStore, s.token, s.sku_code, s.logo_url, s.id_plan,
		   i.id_item, i.code, i.quantity, i.date, i.price, i.balance,
           ii.id_info_item, ii.name as nameItem, ii.weight, ii.min_quantity, ii.current_price, ii.quantity as quantityItem,
           w.id_warehouse, w.lat, w.lng, w.address, w.daily_delivery_limit from Store as s
	inner join Items as i
	on s.id_store = i.id_store
	inner join InfoItems as ii
	on ii.id_info_item = i.id_info_item
	inner join Warehouses as w
	on w.id_warehouse =  ii.id_warehouse;



-- registro ingreso items

create view incommingItemsRegister as 
	select s.id_store, s.name as nameStore, s.address as addressStore, s.token, s.sku_code, s.logo_url, s.id_plan,
		   i.id_item, i.code, i.quantity, i.date, i.price, i.balance,
           ii.id_info_item, ii.name as nameItem, ii.weight, ii.min_quantity, ii.current_price, ii.quantity as quantityItem, ii.id_warehouse from Store as s
	inner join Items as i
	on s.id_store = i.id_store
	inner join InfoItems as ii
	on ii.id_info_item = i.id_info_item
