window.onload = function () {

    let sum = 0.00;
    let items = 0;

    updateSum(sum);

    let buttons = document.getElementsByClassName('add-to-card');
    for (let button of buttons) {
        button.addEventListener('click', function (e) {
           addToCard(e.target);
        });
    }

    document.getElementById('card').addEventListener('click', function (e) {
       if (e.target.classList.contains('remove-product')){
           removeElement(e.target);
       }
    });

    function addToCard(parentOfProduct) {
        if (items < 8){
            let productToAdd = document.createElement('div');
            productToAdd.classList.add('card-product');
            let productNameToAdd = document.createElement('p');
            productNameToAdd.classList.add('name-card-product');
            let productPriceToAdd = document.createElement('p');
            productPriceToAdd.classList.add('card-product-price');
            let productRemoveButtonToAdd = document.createElement('button');
            productRemoveButtonToAdd.textContent = 'X';
            productRemoveButtonToAdd.classList.add('remove-product');

            let priceOfProduct = parentOfProduct.previousElementSibling;
            let nameOfProduct = priceOfProduct.previousElementSibling;

            productNameToAdd.textContent = nameOfProduct.textContent;
            productPriceToAdd.textContent = priceOfProduct.textContent;

            productToAdd.appendChild(productNameToAdd);
            productToAdd.appendChild(productPriceToAdd);
            productToAdd.appendChild(productRemoveButtonToAdd);
            document.getElementById('card').appendChild(productToAdd);
            sum += parseFloat(priceOfProduct.textContent);
            updateSum(sum);
            items += 1;
        } else {
            window.alert('Za dużo elementów w koszyku!');
        }



    }

    function updateSum(value) {
        document.getElementById('card-sum').textContent = value.toFixed(2);
    }

    function removeElement(clickedElement) {
        let elementToRemove = clickedElement.parentElement;
        document.getElementById('card').removeChild(elementToRemove);
        sum -= parseFloat(clickedElement.previousElementSibling.textContent);
        updateSum(sum);
        items -= 1;
    }


    let buttonBuy = document.getElementById('buy');
    buttonBuy.addEventListener('click', function () {
        window.alert('Dokono zakupu za ' + sum + ' zł');
        // let clickBuy = buttonBuy.parentElement;
        // document.getElementsByClassName('card-product').removeChild(clickBuy);

        sum = 0;
        updateSum(sum);
        items = 0;
    });




    document.getElementById('not-buy').addEventListener('click', function () {
        removeAllElement();

    });

    function removeAllElement() {
        let elementToRemove = document.getElementsByClassName('card-product').parentElement;
        console.log(elementToRemove);

        sum = 0;
        updateSum(sum);
        items = 0;
    }




};