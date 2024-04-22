const containerEle = document.getElementById("container");
const answerEle = document.getElementById("answer")

containerEle.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);
    loadGender(name)
})
async function loadGender(name) {
    const res = await  fetch (`https://api.genderize.io/?name=${name}`)//"" ставим если делаем обычный запрос, а здесь надо бэктикс. Вопрос здесь позволяет подставить параметр в зарос и мы подставляем здесь то, что получили из инпута
    const obj = await res.json()
    console.log(obj);
    const{name:firstName, gender, probability} = obj
    console.log(firstName, gender);
    answerEle.textContent = `Name: ${firstName} Gender: ${gender} Probability: ${probability}`
    
}