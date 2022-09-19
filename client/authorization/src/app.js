const btn = document.querySelector('.enter-account');
const btnText = document.querySelector('.text-enter-account');
const input = document.querySelector('.list-input');
const register = document.querySelector('.register');


btn.addEventListener('mouseover', () => btn.style = 'background-color: rgba(192, 143, 143, 0.6)');
btn.addEventListener('mouseout', () => btn.style = ' background-color: rgba(217, 169, 169, 0.6)');


register.addEventListener('click', () => {
    window.location.href = 'file:///C:/Users/Hanna/Desktop/dasha/%D0%BA%D1%83%D1%80%D1%81%D1%8B/repository/languages/client/registration/index.html';
})

const check = (email, password) => {
    if (password.length === 0 || email.length == 0) throw new Error('You have not entered all the information !');
    if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Incorrectly entered email !');
    if (password.length <= 7) throw new Error('Password must contain at least 8 characters !');
    return true;
}


btn.addEventListener('click', async () => {
    try {
        const email = document.querySelector('.email').value.trim();
        const password = document.querySelector('.password').value.trim();


        if (check(email, password)) {
            const response = await fetch('http://localhost:5000/user/auth', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email, password: password })
            });
            const jsonResponse = await response.json();

            alert(`You have successfully logged in profile !`);
            window.location.href = 'file:///C:/Users/Hanna/Desktop/dasha/%D0%BA%D1%83%D1%80%D1%81%D1%8B/repository/languages/client/languages/index.html';
        }

    } catch (error) {
        alert(error.message);
    }
});


