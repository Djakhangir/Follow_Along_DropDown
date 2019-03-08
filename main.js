

//Follow along the dropdown menus and resize itself (width/height) for every dropdown as well as being different elements and
//having the dynamic background

//clientRect method takes the coordinates of the thing allocation on the page, but another thing is that we have to take 
//coordinates of nav tag too, since we cannot assume that nav is the first thing on page. so we add clientrect to take 
//the coordinates of nav as well

const triggers = document.querySelectorAll('.cool > li');
const bg = document.querySelector('.dropDownBg');
const nav = document.querySelector('.top');

function handleEnter(){
    this.classList.add('trigger-enter');
<<<<<<< HEAD
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')){
        this.classList.add('trigger-enter-active');
        }       //or we can write like: setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    }, 150);
//It is better to use the arrow function because this keyword will inherit and point the origin class when we use the reg.
// function declaration it will throw the error saying cannot read prop add-meaning cannot add that class to the class;

//Adding the white bg;
bg.classList.add('open');
=======
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
//It is better to use the arrow function because this keyword will inherit and point the origin class when we use the reg
// function declaration it will throw the error saying cannot read prop add-meaning cannot add that class to the class;
}
>>>>>>> cd4299920bf0074c3d01bcdf20588377fea0ece3

const dropdown = this.querySelector('.dropdown'); // getting the dropdown class;
const dropdownCoords = dropdown.getBoundingClientRect();    // getting the coordinates of dropdown classes to allocate the 
const navCoords = nav.getBoundingClientRect();            // bg as a dropdown bg- expmanation in linkfollow practise and above there is additional information;
//put all coords together- and pass them to the style as the property of bg instance;
const coords = {
    height: dropdownCoords.height,
    width:dropdownCoords.width,
    top:dropdownCoords.top - navCoords.top, // we minus the navCoords we set before because we cannot assume that nav is
    left:dropdownCoords.left - navCoords.left                                   // the first thing on the page;
};
bg.style.setProperty('width', `${coords.width}px`);  //we wrap them to template strings to give the px values to the values we get
bg.style.setProperty('height', `${coords.height}px`);
bg.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`); 
// we take transform prop. because it is css prop and pass insteadof x and y values we pass our coords values to make dynamic;
}
function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    bg.classList.remove('open');    

}

triggers.forEach(trigger=>trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger=>trigger.addEventListener('mouseleave', handleLeave));
