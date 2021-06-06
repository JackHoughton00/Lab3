// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
        name:"Broccoli",
        nameAndPrice:"Broccoli $1.99",
        lactose: false,
		nuts:false,
        organic:false,
		price: 1.99
	},
    {
        name:"Soda",
        nameAndPrice:"Soda $1.99",
		lactose:false,
		nuts:false,
		price: 1.99
	},
	{
        name:"Organic Protein Bar",
        nameAndPrice:"Organic Protein Bar $1.99",
        lactose: false,
		nuts:false,
        organic: true,
		price: 1.99

	}, 
	{
        name:"Bread",
        nameAndPrice:"Bread $2.35",
		lactose: false,
		nuts:false,
        organic:false,
		price: 2.35
	},
    {
        name:"Chips",
        nameAndPrice:"Chips $2.35",
		lactose:false,
		nuts:false,
        organic:false,
		price: 2.99
	},
	{
        name:"Organic Broccoli",
        nameAndPrice:"Organic Broccoli $2.99",
        lactose: false,
		nuts:false,
        organic: true,
		price: 2.99

	}, 
    {
        name:"Canned Soup",
        nameAndPrice:"Canned Soup $2.99",
		lactose:false,
		nuts:false,
		price: 2.99
	},
    {
        name:"Almond Milk",
        nameAndPrice:"Almond Milk $3.99",
		lactose:false,
		nuts:true,
        organic:true,
		price: 3.99
	},
	{
        name:"Organic Cashews",
        nameAndPrice:"Organic Cashews $3.99",
        lactose: false,
		nuts:true,
        organic: true,
		price: 3.99

	}, 
    {
        name:"Milk",
        nameAndPrice:"Milk $4.35",
		lactose:true,
		nuts: false,
        organic:false,
		price: 4.35
	},
	{
        name:"Organic Kale Chips",
        nameAndPrice:"Organic Kale Chips $5.99",
        lactose: false,
		nuts:false,
        organic: true,
		price: 5.99

	}, 
    {
        name:"Organic Oranges",
        nameAndPrice:"Organic Oranges $6.35",
		lactose:false,
		nuts:false,
        organic:true,
		price: 6.35
	},
	{
        name:"Salmon",
        nameAndPrice:"Salmon $10.25",
        lactose:false,
		nuts:false,
        organic:false,
		price: 10.25
	}

];
	
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
function restrictListProducts(prods,lactose,nuts,organic) {
	let product_names = [];

    for (let i = 0; i < prods.length; i++){
        if ( (lactose == true && organic == true && nuts == true) && (prods[i].lactose == false && prods[i].nuts == false && prods[i].organic == true)  ){
            product_names.push(prods[i].nameAndPrice);
        } 
        else if ((lactose == true && nuts == true && organic == false) && (prods[i].lactose == false && prods[i].nuts == false)){
            product_names.push(prods[i].nameAndPrice);
        }
        else if ((lactose == true && nuts == false && organic == true) && (prods[i].lactose == false && prods[i].organic == true)){
            product_names.push(prods[i].nameAndPrice);
        }
        else if ((lactose == false && nuts == true && organic == true) && (prods[i].organic == true && prods[i].nuts == false)){
            product_names.push(prods[i].nameAndPrice);
        }
        else if ((lactose == true && nuts == false && organic == false) && (prods[i].lactose == false)){
            product_names.push(prods[i].nameAndPrice);
        }
        else if ((lactose == false && nuts == true && organic == false) && (prods[i].nuts == false)){
            product_names.push(prods[i].nameAndPrice);
        }
        else if ((lactose == false && nuts == false && organic == true) && (prods[i].organic == true)){
            product_names.push(prods[i].nameAndPrice);
        }
        else if ((lactose == false && nuts == false && organic == false)){
            product_names.push(prods[i].nameAndPrice);
        }

    }

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].nameAndPrice) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}



