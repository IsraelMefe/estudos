let url='dados/dataset.xml';
let div=document.querySelector('#cards');

fetch(url)
    .then( (resp) => resp.text())
    .then( (str) =>(new DOMParser().parseFromString(str,'text/xml')))

    .then( function(xml){
        console.log(xml);
        div.innerHTML = '';
        let pessoas = xml.querySelectorAll('contribuinte')
        for (let pessoa of pessoas){
            montaCard(pessoa)
        }
    })

    function montaCard(p){
        div.innerHTML += `<div class='card'>
                <img src='${p.childNodes[8].firstChild.nodeValue}'>
                        <h3>${p.childNodes[3]
                            .firstChild.nodeValue}</h3>
                        <div class='contato'>
                        ${p.childNodes[6]
                           .childNodes[2]
                           .firstChild.nodeValue
                        }
                        </div>
                        </div>`}