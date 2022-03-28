const container =document.querySelector('.container')
const ajoutColonne=document.getElementById('ajout-colonne')
const ajoutNnote=document.getElementById('ajout-note')
const content =document.querySelector('.content')

var tab=['#406cc3','#2cb860','#daa520','#adff2f','#ff2a8a']
let k=0
function ajouter(){
    const div=document.createElement('div')
    div.setAttribute('class', 'article')
    div.setAttribute('id', 'id1')
    const h2=document.createElement('h2')
    h2.innerHTML='colonne '+(k+1)
    const deletColonne=document.createElement('i')
    deletColonne.setAttribute('class','bx bx-message-rounded-x')
    const para=document.createElement('div')
    para.setAttribute('class','tache')
    const span=document.createElement('h4')
    span.innerHTML=''
   
    const image=document.createElement('img')
   image.setAttribute('src', 'logoa.png')
    // para.appendChild(icone1)
    para.appendChild(span)
    // para.appendChild(icone2)
    h2.appendChild(deletColonne)    
    div.appendChild(h2)
    div.appendChild(para)
    // div.appendChild(image)
    container.appendChild(div)
        // span[3].style.display='none'
       div.style.backgroundColor=tab[k]

       const iconeRight=document.querySelector('.bx-chevrons-right')
       const paraNote=document.querySelector('.tache')
       const trans=document.querySelectorAll('.article')

// var m = 0;
//     iconeRight.addEventListener('click',()=>{
//       m++
//       trans[m].appendChild(paraNote)
//     })
//     const iconeLeft=document.querySelector('.bx-chevrons-left')
//     iconeLeft.addEventListener('click',()=>{
//       m--
//       trans[m].appendChild(paraNote)
//     })


    h2.addEventListener('click', function(){
        
        var parent =this.parentElement.parentElement;
        parent.removeChild(div);
        // reflesh()
    })

// iconeRight.addEventListener('click', ()=>{
//         trans[+1].appendChild(paraNote) 
//          if ( trans[+1].appendChild(paraNote) ) {
//             iconeRight.addEventListener('click', ()=>{
//             trans[+2].appendChild(paraNote) 
//             if ( trans[+2].appendChild(paraNote) ) {
//                 iconeRight.addEventListener('click', ()=>{
//             trans[+3].appendChild(paraNote) 
//             if ( trans[+3].appendChild(paraNote) ) {
//                 iconeRight.addEventListener('click', ()=>{
//             trans[+4].appendChild(paraNote) 

//                       })
//                  }

//                 })
//             }

//         })
//      }  
// })
// l=0
// const iconeLeft=document.querySelector('.bx-chevrons-left')
// const paraNoteLeft=document.querySelector('.tache')
// iconeLeft.addEventListener('click', ()=>{
//     console.log(l);
//     trans[l].appendChild(paraNoteLeft) 
//     if ( trans[+3].appendChild(paraNoteLeft) ) {
//        iconeLeft.addEventListener('click', ()=>{
//        trans[+2].appendChild(paraNoteLeft) 
//        if ( trans[+2].appendChild(paraNoteLeft) ) {
//            iconeLeft.addEventListener('click', ()=>{
//        trans[+1].appendChild(paraNoteLeft) 
//        if ( trans[+1].appendChild(paraNoteLeft) ) {
//            iconeLeft.addEventListener('click', ()=>{
//        trans[+0].appendChild(paraNoteLeft) 

//                  })
//             }

//            })
//        }

//    })
// } 
//     l--    
// })     
}
// l=0
// const trans=document.querySelectorAll('.article')
// function update() {
//     l++
//     // Update Active class in circle
//     trans.forEach((circle, index) => {
//         if(index <l){
//             circle.appendChild(paraNote)
//         }
        
//     })
// }


ajoutColonne.addEventListener('click', ()=>{
ajoutNnote.classList.add('ajout-note')

    console.log( ajoutNnote);
})  


let i=0
ajoutColonne.addEventListener('click', ()=>{
   
    if(i<5){
        ajouter()
        k++
    }
    i++   
})



let j=0
ajoutNnote.addEventListener('click',()=>{
    
    if(j<1){
    const divTitre=document.createElement('div')
    divTitre.setAttribute('class', 'titre')
    divTitre.innerHTML='NOUVELLE TACHE'
    const small=document.createElement('small')
    small.innerHTML='remplir les informations de la nouvelle tache'
const form=document.createElement('form')
form.setAttribute('id', 'form')
const labelTextarea=document.createElement('label')
labelTextarea.setAttribute('for', 'text')
labelTextarea.innerHTML='Tache'
const textarea=document.createElement('textarea')
textarea.setAttribute('name', 'text')
textarea.setAttribute('id', 'text')
textarea.setAttribute('cols', '38')
textarea.setAttribute('rows', '10')
const labelDate=document.createElement('label')
labelDate.setAttribute('for', 'date')
labelDate.innerHTML='Date'
const inputDate=document.createElement('input')
inputDate.setAttribute('id', 'date')
inputDate.setAttribute('type', 'date')
const labelStar=document.createElement('label')
labelStar.setAttribute('for', 'time-star')
labelStar.innerHTML='Heure de départ'
const inputStar=document.createElement('input')
inputStar.setAttribute('type', 'time')
inputStar.setAttribute('id', 'time-star')
const labelEnd=document.createElement('label')
labelEnd.setAttribute('for', 'time-end')
labelEnd.innerHTML='Heure de fin'
const inputEnd=document.createElement('input')
inputEnd.setAttribute('type', 'time')
inputEnd.setAttribute('id', 'time-end')
const buttonForm=document.createElement('a')
buttonForm.setAttribute('href', '#')
buttonForm.setAttribute('id', 'btn-form')
buttonForm.innerHTML='Ajouter'


form.appendChild(labelTextarea)
form.appendChild(textarea)
form.appendChild(labelDate)
form.appendChild(inputDate)
form.appendChild(labelStar)
form.appendChild(inputStar)
form.appendChild(labelEnd)
form.appendChild(inputEnd)
form.appendChild(buttonForm)

content.appendChild(divTitre)
content.appendChild(small)
content.appendChild(form)
// const iconeLeft=document.querySelector('.bx-chevrons-left')
const spanNote=document.querySelector('h4')
const paraNote=document.querySelector('.tache')
const valueTextarea=document.getElementById('text')
const buttonFormm=document.getElementById('btn-form')
const valueTimeStar=document.getElementById('time-star')
const valueDate=document.getElementById('date')
const valueTimeEnd=document.getElementById('time-end')


buttonFormm.addEventListener('click',()=>{
    paraNote.classList.add('visible')
    const spanNote=document.createElement('h4')
    var notes = document.createElement('div')
    notes.setAttribute('class', 'notes')
    const icone1 = document.createElement('i')
    icone1.setAttribute('class','bx bx-chevrons-right') 
    const icone2 = document.createElement('i')
    icone2.setAttribute('class','bx bx-chevrons-left')
    var champTextarea = document.createElement('div')
    champTextarea.setAttribute('class', 'champ-textarea')
    var date = document.createElement('div')
    date.setAttribute('class', 'date')
    var heureDepart = document.createElement('div')
    heureDepart.setAttribute('class', 'heure-Depart')
    var heureFin = document.createElement('div')
    heureFin.setAttribute('class', 'heure-fin')
    champTextarea.innerHTML=valueTextarea.value 
    date.innerHTML=valueDate.value
    heureDepart.innerHTML= 'heure de départest:'+ valueTimeStar.value
    heureFin.innerHTML=valueTimeEnd.value
    // spanNote.appendChild(iconeLeft)
    notes.appendChild(champTextarea)
    notes.appendChild(date)
    notes.appendChild(heureDepart)
    notes.appendChild(heureFin)
    spanNote.appendChild(icone2)
    spanNote.appendChild(notes)
   spanNote.appendChild(icone1)
    paraNote.appendChild(spanNote)

    const trans=document.querySelectorAll('.article')
    const iconeRight=document.querySelector('.bx-chevrons-right')
    var m = 0;
    iconeRight.addEventListener('click',()=>{
      m++
      trans[m].appendChild(spanNote)
    })
    const iconeLeft=document.querySelector('.bx-chevrons-left')
    iconeLeft.addEventListener('click',()=>{
      m--
      trans[m].appendChild(spanNote)
    })

    

})

    }
    j++
content.classList.add('open')

const closse=document.querySelector('.titre')   
 closse.addEventListener('click',()=>{
     content.classList.remove('open')
 })


      

})

