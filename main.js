

//Follow along the dropdown menus and resize itself (width/height) for every dropdown as well as being different elements and
//having the dynamic background

const triggers = document.querySelectorAll('.cool > li');
const bg = document.querySelector('.dropDownBg');
const nav = document.querySelector('.top');

function handleEnter(){
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
//It is better to use the arrow function because this keyword will inherit and point the origin class when we youse the reg
// function it will throw the error saying cannot read prop add-meaning cannot add that class to the class;
}

function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}

triggers.forEach(trigger=>trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger=>trigger.addEventListener('mouseleave', handleLeave));
