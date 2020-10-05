const checkbox = document.querySelector('.toggle__shape--checkbox');
let root = document.documentElement;

checkbox.addEventListener('click', (e) => {
  if (checkbox.checked == true) {
    console.log(checkbox);
    root.style.setProperty('--background-color', 'hsl(230, 17%, 14%)');
    root.style.setProperty('--background-pattern', 'hsl(232, 19%, 15%)');
    root.style.setProperty('--card-background', 'hsl(228, 28%, 20%)');
    root.style.setProperty('--primary-text', ' hsl(0, 0%, 100%)');
    root.style.setProperty('--secondary-text', ' hsl(228, 34%, 66%)');
  } else {
    root.style.setProperty('--background-color', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--background-pattern', 'hsl(225, 100%, 98%)');
    root.style.setProperty('--card-background', 'hsl(227, 47%, 96%)');
    root.style.setProperty('--primary-text', ' hsl(230, 17%, 14%)');
    root.style.setProperty('--secondary-text', 'hsl(228, 12%, 44%)');
  }
});
