const flowersContainerElement = document.getElementById('flowers-container')
async function loadFlowers(){
    const res = await fetch("https://alisherkhamidov.github.io/book-api/flowers.json")
    const flowers = await res.json()// await - раскрыли и далее с помощью json метода обработали
    flowers.forEach((flower)=>{
        const {name, color, description, image, maxHeight} = flower // деструктуризация
        const cardElement = document.createElement('div');
        cardElement.className="card";
        const nameElement = document.createElement('span');
        nameElement.classList.add("card-el", "title"); // span присвоили сразу 2 класса
        const imgElement = document.createElement('img');
        imgElement.className="card-el";
        nameElement.textContent=name;
        imgElement.src=image;
        cardElement.append(nameElement,imgElement);
        flowersContainerElement.append(cardElement);
    })
}
loadFlowers()