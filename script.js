let trendFood = document.querySelectorAll(".trendFood");
let foodCard = document.querySelectorAll(".foodCard");

 let arrow = document.getElementById("arrow");
 arrow.addEventListener("click", function(){
    window.scrollTo({top:0, behavior:"smooth"})
 })



let count = 0;
console.log(trendFood);

trendFood.forEach((imgs, index)=>{
    imgs.style.left=`${index*100}%`;
})


const myFun  = ( ) =>{
    trendFood.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 100}%)`
    })
     
}

setInterval(()=>{
    count++;
    if(count == trendFood.length){
        count=0
    }
    myFun()
},4000)


// food Detail 

document.addEventListener("DOMContentLoaded", () => {
    // Select all food and drink cards
    let foodCards = document.querySelectorAll(".foodCard");

    // Create an object to hold drink details
    const drinkDetails = {
        "Cappuccino": "A delicious blend of espresso and steamed milk, topped with foam.",
        "Espresso Roberto": "A rich and intense coffee experience, perfect for true coffee lovers.",
        "Liqueur Coffee": "A delightful combination of coffee and liqueur for a perfect after-dinner drink.",
        "Cold Brew": "Smooth and refreshing, cold brew coffee is perfect for warm days.",
        "Iced Mocha": "A chocolatey, chilled treat for coffee lovers.",
        "Latte": "A creamy coffee drink made with espresso and steamed milk."
    };

    // Create an object to hold food details
    const foodDetails = {
        "Roasted Chicken Bowl": "A hearty bowl filled with succulent roasted chicken, fresh vegetables, and a savory sauce.",
        "Vegetable Stir-Fry": "A vibrant mix of seasonal vegetables stir-fried in a light soy sauce.",
        "Pasta Primavera": "A classic pasta dish with fresh vegetables and a flavorful garlic sauce.",
        "Caesar Salad": "Crisp romaine lettuce, parmesan cheese, and croutons, tossed in a creamy Caesar dressing.",
        "Beef Tacos": "Savory beef tacos topped with fresh salsa, lettuce, and cheese.",
        "Margherita Pizza": "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil."
    };

    // Function to create card detail
    const createCardDetail = (curCard, isDrink = false) => {
        const itemName = curCard.querySelector('p').textContent; // Get the item name
        const detailText = isDrink ? (drinkDetails[itemName] || "This is a delicious drink!") 
                                   : (foodDetails[itemName] || "This is a tasty dish!"); // Get detail or fallback

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
            <i id="icon" class="fa-solid fa-xmark"></i>
            <img src="${curCard.querySelector('img').src}" alt="">
            <h2>${itemName}</h2>
            <p>${detailText}</p>
        `;
        document.body.appendChild(div);

        // Add event listener to close the card
        document.querySelector("#icon").addEventListener("click", function() {
            div.remove();
        });
    };

    // Event listeners for images in food cards
    foodCards.forEach((curCard) => {
        const imageElement = curCard.querySelector('img'); // Get the image element

        // Add click event listener to the image only
        imageElement.addEventListener("click", function() {
            const isDrinkCard = curCard.closest("#drink"); // Check if it's in the drink section
            createCardDetail(curCard, isDrinkCard);
        });
    });
});

