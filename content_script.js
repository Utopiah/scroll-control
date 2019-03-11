// Put all the javascript code here, that you want to execute after page load.
var timeSpentEl = document.createElement("div")
timeSpentEl.id="timeSpent"
timeSpentEl.style.width="0%"
timeSpentEl.style.height="3px"
timeSpentEl.style.position="fixed"
timeSpentEl.style.top="0px"
timeSpentEl.style.backgroundColor="grey"
timeSpentEl.style.zIndex="999"
timeSpentEl.style.opacity=0.5
timeSpentEl.setAttribute("timespent", 0)
document.body.appendChild(timeSpentEl)
setInterval(incTimeSpent, 1000)
function incTimeSpent(){
  var timeSpentEl = document.getElementById("timeSpent")
  timeSpentWidth = timeSpentEl.getAttribute("timespent")
  if (timeSpentWidth>=100) { timeSpentWidth = 0; alert("You spent 15 min on this page. Is this what you should focus on?"); timeSpentEl.style.backgroundColor="grey" }
  if (timeSpentWidth>=60) timeSpentEl.style.backgroundColor="orange"
  if (timeSpentWidth>=90) timeSpentEl.style.backgroundColor="red"
  timeSpentEl.style.width=timeSpentWidth + "%"
  timeSpentWidth = Number(timeSpentWidth) + 10
  timeSpentEl.setAttribute("timespent", timeSpentWidth)
}
