
function searchProducts() {
    
    var input = document.getElementById('searchInput').value.toLowerCase();
    
    
    var products = document.getElementsByClassName('products');
    
    
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        
        
        var productName = product.getElementsByTagName('p')[0].innerText.toLowerCase();
        
        if (productName.indexOf(input) > -1) {
            
            product.style.display = '';
        } else {
           
            product.style.display = 'none';
        }
    }
}

document.getElementById('searchInput').addEventListener('input', searchProducts);
