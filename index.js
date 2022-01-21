
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = 'left'
let container = document.createElement('div')
let header3 = document.createElement('h3')
header3.textContent = 'Something to add here  '
// let par = document.createElement('p')
// par.textContent ='io sono qui'

container.append(header3)
header.append(container)

let dogImages = document.querySelectorAll('.dog-image')
for (let i=0; i<dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'rotate(180deg)'
}

let dogNames = document.querySelectorAll('.dog-name')
for (let i=0; i<dogNames.length; i++) {
    dogNames[i].style.textAlign = 'left'

}

let footerTxt = document.querySelector('.footer')
footerTxt.style.color = 'red'

//header = document.querySelector('#page-header')


