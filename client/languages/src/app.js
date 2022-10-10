const btn = document.querySelector('.offer-verification');
const btnText = document.querySelector('.text-check');


btn.addEventListener('mouseover', () => btn.style = 'background-color: rgba(192, 143, 143, 0.6)');
btn.addEventListener('mouseout', () => btn.style = ' background-color: rgba(217, 169, 169, 0.6)');


const nameUsers = async () => {
    const greetings = document.querySelector('.greetings');

    const responseName = await fetch('http://localhost:5000/user/names', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    const jsonResponseName = await responseName.json();
    greetings.innerHTML = `Hello, ${jsonResponseName[jsonResponseName.length -1].name}`
    return greetings
}
nameUsers()
// const check = (inp) => {
//     if () throw new Error("");
//     return true;
// }


// btn.addEventListener('click', async () => {
//     try {
//         const inp = document.querySelector('.text-inp').value;
//         const result = document.querySelector('.vivod-container').value;
//         // if (check(inp)) {

//         // }

//     } catch (error) {

//     }
// });