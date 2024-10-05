function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    document.createElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in object){
       if(prop == children) continue;
       domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        taget: '_blank'
    },
    children: 'Click me to visit google'
}


const mainConatiner = document.querySelector('#root')

customRender(reactElement, mainConatiner)