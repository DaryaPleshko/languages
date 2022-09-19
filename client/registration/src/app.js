const btn = document.querySelector('.enter-account');
const btnText = document.querySelector('.text-enter-account');
const input = document.querySelector('.list-input');
const register = document.querySelector('.register');


btn.addEventListener('mouseover', () => btn.style = 'background-color: rgba(192, 143, 143, 0.6)');
btn.addEventListener('mouseout', () => btn.style = ' background-color: rgba(217, 169, 169, 0.6)');


register.addEventListener('click', () => {
    window.location.href = 'file:///C:/Users/Hanna/Desktop/dasha/%D0%BA%D1%83%D1%80%D1%81%D1%8B/repository/languages/client/authorization/index.html';
})

const check = (name, email, password, confirmPassword) => {
    if (name.length === 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0) throw new Error('You have not entered all the information !');
    if (!/^[а-яА-Яa-zA-Z ]+$/g.test(name)) throw new Error('Name entered incorrectly !');
    if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Incorrectly entered email !');
    if (password.length <= 7) throw new Error('Password must contain at least 8 characters !');
    if (password.split('').sort().join('') != confirmPassword.split('').sort().join('')) throw new Error('Passwords do not match !');
    return true;
}


btn.addEventListener('click', async () => {
    try {
        const name = document.querySelector('.name').value.trim();
        const email = document.querySelector('.email').value.trim();
        const password = document.querySelector('.password').value.trim();
        const confirmPassword = document.querySelector('.confirm-password').value.trim();

        if (check(name, email, password, confirmPassword)) {

            const response = await fetch('http://localhost:5000/user/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, email: email, password: password })
            });
            const jsonResponse = await response.json();

            alert('You are successfully registered in the LANGUAGES !');
            window.location.href = 'file:///C:/Users/Hanna/Desktop/dasha/%D0%BA%D1%83%D1%80%D1%81%D1%8B/repository/languages/client/languages/index.html';
        }
    } catch (error) {
        alert(error.message);
    }
});
