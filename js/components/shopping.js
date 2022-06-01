class Shopping {
    hangdleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price, img}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping__img"><img src="${img}" alt=""></td>
                        <td class="shopping__name">${name}</td>
                        <td class="shopping__price">${price.toLocaleString()} руб.</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping__body">
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td></td>
                        <td class="shopping__sum-name">Сумма:</td>
                        <td class="shopping__sum-price">${sumCatalog.toLocaleString()} руб.</td>
                    </tr>
                </table>
                <div class="shopping__close" onclick="shoppingPage.hangdleClear()">
                <img src="img/shopping/close.png" alt="">
                </div>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();