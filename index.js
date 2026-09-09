import { placeholderPropertyObj } from './properties/placeholderPropertyObj.js'
import { propertyForSaleArr } from './properties/propertyForSaleArr.js'

const sales = propertyForSaleArr
const placeholderObj = placeholderPropertyObj



function getPropertyHtml(propertyArr = [ placeholderObj]){
    
    const propertyHtml = propertyArr.map(
        property =>{
            const { propertyLocation, priceGBP, roomsM2, comment, image } = property
            const totalSize = roomsM2.reduce((total, current) =>{
                return total + current
            }, 0)
            return `
            <section class="card">
                <img src="/images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>£ ${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${totalSize} m²</h3>
                </div>
            </section>
        `
    }).join('\n')

    console.log(propertyHtml)
    return propertyHtml
}

/*
    JS to be used:
    __ import/export OK!
    __ .map() OK!
    __ .join() OK!
    __ Object destructuring OK!
    __ .reduce OK!
    __ Default parameters OK!
*/

document.getElementById('container').innerHTML = getPropertyHtml(sales)