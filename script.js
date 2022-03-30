const container =document.querySelector('.container')
const ajoutColonne=document.getElementById('ajout-colonne')
const ajoutNnote=document.getElementById('ajout-note')
const content =document.querySelector('.content')
const couche=document.querySelector('.couche')


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
   div.appendChild(deletColonne)    
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


deletColonne.addEventListener('click', function(){
        
        var parent =this.parentElement.parentElement;
        parent.removeChild(div);
        reflesh()
    })
}


ajoutColonne.addEventListener('click', ()=>{
   
ajoutNnote.classList.add('ajout-note')

    console.log( ajoutNnote);
})  


let i=0
ajoutColonne.addEventListener('click', ()=>{
    reflesh()
    if(i<5){
        ajouter()
        k++
    }
    
    i++   
   

})



let j=0
ajoutNnote.addEventListener('click',()=>{
    m++
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
m=0
buttonFormm.addEventListener('click',()=>{
    reflesh()
    couche.classList.remove('open')
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
    heureDepart.innerHTML= 'heure départ:'+ valueTimeStar.value
    heureFin.innerHTML= 'heure de fin : '+ valueTimeEnd.value
    // spanNote.appendChild(iconeLeft)
    notes.appendChild(champTextarea)
    notes.appendChild(date)
    notes.appendChild(heureDepart)
    notes.appendChild(heureFin)
    spanNote.appendChild(icone2)
    spanNote.appendChild(notes)
   spanNote.appendChild(icone1)
    paraNote.appendChild(spanNote)

    var trans=document.querySelectorAll('.article')
   var iconeRight=document.querySelector('.bx-chevrons-right')
    var m = 0;
        iconeRight.addEventListener('click',()=>{
            trans[m].appendChild(spanNote)
          m++     
        })
    const iconeLeft=document.querySelector('.bx-chevrons-left')
    iconeLeft.addEventListener('click',()=>{
      m--
      trans[m].appendChild(spanNote)
    })
   
})


    }
    j++
couche.classList.add('open')

const closse=document.querySelector('.titre')   
 closse.addEventListener('click',()=>{
    //  content.classList.remove('open')
 })

     

})
function reflesh(){
    const refleshColonne=document.querySelectorAll('h2');
            refleshColonne.forEach((h2, i)=>{
                h2.innerHTML='colonne' +(i+1)
            })
}

function affMas(){
    if(p==-nbr+1)
    gEL.style.visibility="hidden"
    else
    gEL.style.visibility="visible"
    if(p==0)
    dEL.style.visibility="hidden"
    else
    dEL.style.visibility="visible"
}
// function affMas(){
//     if(p==-nbr+1)
//     gEL.style.visibility="hidden"
//     else
//     gEL.style.visibility="visible"
//     if(p==0)
//     dEL.style.visibility="hidden"
//     else
//     dEL.style.visibility="visible"
// }
// }

// function reflesh(){
//     const listLabel=document.querySelectorAll('.repons');
//     listLabel.forEach((label, i)=>{
//         label.innerHTML='reponse' +(i+1)
//     })
//   }