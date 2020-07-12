const Week =  ['Dоскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function getWeekNumber() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let today = new Date(year, month, 0).getTime();
    let now = new Date().getTime();
    
    let week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7));
    return ((week % 2) ? 'Первая' : 'Вторая')
}

const today = {
    'day': Week[new Date().getDay()],
    'week': getWeekNumber()
}

export default today;