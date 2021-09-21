
const form = document.querySelector('#contactUsForm');
//console.log(form);
//console.log(db);
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    db.collection('contact').add({
        Name: document.getElementById('Name').value,
        email: document.getElementById('Email').value,
        phone: document.getElementById('Phone').value,
        message: document.getElementById('Message').value,
    });
    document.getElementById('Name').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Phone').value = '';
    document.getElementById('Message').value = '';
});