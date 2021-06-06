
/* This entire function, openPage, was directly sourced from https://www.w3schools.com/howto/howto_js_full_page_tabs.asp */

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click(); 



var lactose; 
var organic; 
var nuts;

function getLactose(){
  lactose = document.getElementById("Lactose").checked; 

}
function getNuts(){
  nuts = document.getElementById("Nuts").checked; 
 
}
function getOrganic(){
  organic = document.getElementById("Organic").checked;  

}

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
  //var s1 = document.getElementById(slct1);
  var s2 = document.getElementById(slct2);
  


// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  s2.innerHTML = "";
  
// obtain a reduced list of products based on restrictions


  var optionArray = restrictListProducts(products,lactose,nuts,organic);

// for each item in the array, create a checkbox element, each containing information such as:
// <input type="checkbox" name="product" value="Bread">
// <label for="Bread">Bread/label><br>
  
for (i = 0; i < optionArray.length; i++) {
    
  var productName = optionArray[i];
  // create the checkbox and add in HTML DOM
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "product";
  checkbox.value = productName;
  s2.appendChild(checkbox);
  
  // create a label for the checkbox, and also add in HTML DOM
  var label = document.createElement('label')
  label.htmlFor = productName;
  label.appendChild(document.createTextNode(productName));
  s2.appendChild(label);
  
  // create a breakline node and add in HTML DOM
  s2.appendChild(document.createElement("br"));    
}
}

