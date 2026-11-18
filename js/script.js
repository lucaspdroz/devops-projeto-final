const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('pt-BR', options);
document.getElementById('date').textContent = formattedDate;

const year = today.getFullYear();
document.getElementById('year').textContent = year;
