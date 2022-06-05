let lastVisitDate
const now = Date.now() //now is in milliseconds

if (window.localStorage.getItem('last-visit-date')) {
    lastVisitDate = window.localStorage.getItem('last-visit-date')
}
else {
    lastVisitDate = now
}

window.localStorage.setItem('last-visit-date', now)

const secondsSinceLastVisit = Math.floor((now - lastVisitDate)/1000)
const daysSinceLastVisit = Math.floor(secondsSinceLastVisit/(60 * 60 * 24))
document.querySelector("#today-date").textContent = `Your last visit to this page was ${daysSinceLastVisit} days ago.`
