const rules = document.getElementById('rules');
const showRulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');

//Event listeners
showRulesBtn.addEventListener('click', function () {
  rules.classList.add('show');
});

closeBtn.addEventListener('click', function () {
  rules.classList.remove('show');
})
