// Adding more information to buttons when clicked by user.


const buttonElement = document.querySelector('button');
const readMore = document.querySelector('.whosWillow');

buttonElement.addEventListener('click', function (e) {

    const newPara = document.createElement('p')

    newPara.textContent = `This is my very own lorem ipsum because js doesn't have an emmet that would return a paragraph like the one in html so I will just keep on adding stuff until I think it is enough.`;

    readMore.append(newPara);
    
    newPara.style.backgroundColor = "salmon";

    

})


