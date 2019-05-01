const data = async (inputObject) => {
    const order = inputObject.order;
    return finalData = order.products.resource.embedded.reduce((orderList, currentOrder) => {
        const object = currentOrder.customFields.reduce((array, data) => {
            array[data.title] = data.values[0].value
            array.Order = order.number;
            array.Invoices = order.invoices.resource.embedded[0].number;
            array.Order_ID = order.id;
            array.Added = `${order.createdAt.split('T')[0].split('-').reverse().join('-')} @ ${order.createdAt.split('T')[1].split('+')[0].match(/\d+:\d+/g)[0]}`;
            array.Status = `${order.shipmentStatus.split('_').join(' ')},${order.paymentStatus.split('_').join(' ')}`;
            array.Payment = order.paymentTitle;
            array.Shipping = order.shipmentTitle;
            array.Price_total = order.priceIncl;
            array.Price_total_ex = order.priceExcl;
            array.Price_vat = Number(order.priceIncl - order.priceExcl).toFixed(2);
            array.Price_cost = order.priceCost;
            array.Price_shipping = order.shipmentPriceIncl;
            array.Weight = order.weight;
            array.Volume = order.volume;
            array.Colli = order.colli;
            array.Company = order.companyName;
            array.Firstname = order.firstname;
            array.Lastname = order.lastname
            array.Phone = order.phone;
            array.Mobile = order.mobile;
            array.Email = order.email;
            array.Attention = order.addressBillingName;
            array.Streetname = order.addressBillingStreet;
            array.Second_address_line = order.addressBillingStreet2;
            array.Address_Number = order.addressBillingNumber;
            array.Extension = order.addressBillingExtension;
            array.Zipcode = order.addressBillingZipcode;
            array.City = order.addressBillingCity;
            array.Region = order.addressBillingRegion;
            array.Country = order.addressBillingCountry.title;
            array.Invoice_street = order.addressShippingStreet;
            array.Invoice_street_2 = order.addressShippingStreet2;
            array.Invoice_housenumber_ext = order.addressShippingNumber;
            array.Invoice_zipcode = order.addressShippingZipcode;
            array.Invoice_city = order.addressShippingCity;
            array.Invoice_region = order.addressShippingRegion;
            array.Invoice_country = order.addressShippingCountry.title
            array.Quantity = currentOrder.quantityOrdered;
            array.Product_price = Number(currentOrder.basePriceIncl).toFixed(2);
            array.Product_price_cost = currentOrder.priceCost;
            array.Product_weight = currentOrder.weight;
            array.Product_volume = currentOrder.volume;
            array.Product_colli = currentOrder.colli;
            array.Product_supplier = currentOrder.supplierTitle;
            array.Product_brand = currentOrder.brandTitle;
            array.Product_title = currentOrder.productTitle;
            array.Product_variant = currentOrder.variantTitle;
            array.Product_article_code = currentOrder.articleCode;
            array.Product_EAN = currentOrder.ean;
            array.Product_SKU = currentOrder.sku;
            array.Discount_code = order.discountCouponCode;
            array.Discount_price = currentOrder.priceIncl;
            array.Customer = order.customer.resource.id;
            array.Comment = order.comment;
            array.Memo = order.memo;    
            array.Shipping_company = order.addressShippingCompany;
            return array;
        }, {});
        orderList.push(object);
        console.log(orderList)
        return orderList;
    }, []);
}




module.exports = {data};