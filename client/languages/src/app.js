const btn = document.querySelector('.offer-verification');
const btnText = document.querySelector('.text-check');


btn.addEventListener('mouseover', () => btn.style = 'background-color: rgba(192, 143, 143, 0.6)');
btn.addEventListener('mouseout', () => btn.style = ' background-color: rgba(217, 169, 169, 0.6)');
btnText.addEventListener('mouseover', () => btnText.style = 'font-size: 13px; margin-top: 11px;');
btnText.addEventListener('mouseout', () => btnText.style = 'font-size: 16px');


// const check = (inp) => {
//     if () throw new Error("");
//     return true;
// }


btn.addEventListener('click', async () => {
    try {
        const inp = document.querySelector('.text-inp').value;
        const result = document.querySelector('.vivod-container').value;

        // if (check(inp)) {

        // }

    } catch (error) {

    }
});