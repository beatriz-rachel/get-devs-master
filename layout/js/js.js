var productList = {"products": [
{"id": "1", "image": "img/vestido1.jpg", "description": "Bata Bordada", "color": "amarelo", "size":"P", "price": "390.00"},
{"id": "2", "image": "img/vestido2.jpg", "description": "Chapéu de Praia com Fivela", "color": "cinza", "size":"M", "price": "520.00"},
{"id": "3", "image": "img/vestido3.jpg", "description": "Vestido Texturizado", "color": "branco", "size":"G", "price": "42.90"},
{"id": "4", "image": "img/vestido4.jpg", "description": "Bata Bordada", "color": "branco", "size":"GG", "price": "130.00"},
{"id": "5", "image": "img/vestido5.jpg", "description": "Chapéu de Praia com Fivela", "color": "amarelo", "size":"36", "price": "380.00"},
{"id": "6", "image": "img/vestido6.jpg", "description": "Vestido Texturizado", "color": "azul", "size":"38", "price": "44.00"},
{"id": "7", "image": "img/vestido7.jpg", "description": "Bata Bordada", "color": "cinza", "size":"40", "price": "180.90"},
{"id": "8", "image": "img/vestido8.jpg", "description": "Chapéu de Praia com Fivela", "color": "branco", "size":"42", "price": "560.00"},
{"id": "9", "image": "img/vestido2.jpg", "description": "Vestido Texturizado", "color": "cinza", "size":"44", "price": "122.00"}
]
};

var priceRange = {
50: 'prc-0-50',
150: 'prc-51-150',
300: 'prc-151-300',
500: 'prc-301-500',
10000000000: 'prc-501-fim'
}

//carrega lista sem filtros
function loadList() {
var list = $("#ProductList");
var _createELement = "";


$(productList.products).each(function(index) {
    var $this = this;
    productId = (this.id);
    var priceRangeClass = '';
    var productColor = (this.color).toLowerCase();
    for (index in priceRange) {
        if (parseFloat($this.price) <= parseFloat(index)) {
            priceRangeClass = priceRange[index];
            break;
        }
    }
    var productSize = (this.size);
    _createELement +=
        '<li class="product-it ' + priceRangeClass + ' ' + productColor + ' ' + productSize + '"> <article class="product"> <span class="prd-img-wrapper"> <img class="prd-img" src="' + this.image + '"></span> <h2 class="prd-tit">' + this.description + '</h2> <span class="prd-wrap"><span class="prd-price"><span class="prd-prc"> R$' + this.price + '</span></br> <span class="prd-par">até 5x de R$' + parseFloat(this.price) / 5.0 + '</span></span><a class="prd-cart" href="#">Adicionar ao carrinho.</a></span></article></li>'   

});

$(list).append(_createELement);

//filtro
$("#filters :checkbox").click(function() {

    var list = $("#ProductList");
    var re = new RegExp($("#filters :checkbox:checked").map(function() {
        return (this.value).toLowerCase();
    }).get().join("|"));
    list.children("li").show();
    list.children("li").each(function() {
        var $this = $(this);
        $this[re.source != "" && re.test($this.attr("class")) ? "show" : "hide"]();
    });
});

}

//tamanho
function sizeActive(){
    $('.fltr-szs-it').not(this).removeClass('.active');  
    $( this ).toggleClass('.active');  
 }

