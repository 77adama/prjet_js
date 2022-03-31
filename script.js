const container =document.querySelector('.container')
const ajoutColonne=document.getElementById('ajout-colonne')
const ajoutNnote=document.getElementById('ajout-note')
const content =document.querySelector('.content')
const couche=document.querySelector('.couche')
var m=0
var i=0
var tab=['#406cc3','#2cb860','#daa520','#adff2f','#ff2a8a']
let k=0
function ajouter(){
  
    const div=document.createElement('div')
    div.setAttribute('class', 'article')
    div.setAttribute('id', 'id'+i)
    const divHDelete=document.createElement('div')
    divHDelete.setAttribute('id', 'h-delete')
    const h2=document.createElement('h2')
    h2.innerHTML='colonne '+(k+1)
    const deletColonne=document.createElement('i')
    deletColonne.setAttribute('class','bx bx-x') 
    const para=document.createElement('div')
    para.setAttribute('class','tache')
    const span=document.createElement('h4')
    span.innerHTML=''
   
    const image=document.createElement('img')
   image.setAttribute('src', 'logoa.png')
    // para.appendChild(icone1)
    para.appendChild(span)
    // para.appendChild(icone2)
    divHDelete.appendChild(h2)
   divHDelete.appendChild(deletColonne)    
    div.appendChild(divHDelete)
    div.appendChild(para)
    // div.appendChild(image)
    container.appendChild(div)
        // span[3].style.display='none'
       div.style.backgroundColor=tab[k]

       
     h2.addEventListener('click', ()=>{
         divHDelete.innerHTML='<input type="text" id="renommer">'
     })

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




// if(i>0){deletColonne.addEventListener('click', function(){
     
//     var parent =this.parentElement.parentElement;
//     parent.removeChild(div);
//     reflesh()
// })

// }else{deletColonne.addEventListener('click', function(){
     
//     var parent =this.parentElement.parentElement;
//     parent.removeChild(div);
//     reflesh()
// })} }
const containerConfirme =document.querySelector('.container-confirme')
deletColonne.addEventListener('click', ()=>{
        containerConfirme.classList.add('affiche-sms-confirme')
})
const annuler=document.getElementById('annuler')
annuler.addEventListener('click',()=>{
    containerConfirme.classList.remove('affiche-sms-confirme')
})
const confirmer=document.getElementById('confirmer')
const divRemove=document.querySelectorAll('#id'+i)
const bxBXx=document.querySelectorAll('.bx bx-x')
confirmer.addEventListener('click',()=>{
    containerConfirme.classList.remove('affiche-sms-confirme')
 div.remove(+i+1)
})


// deletColonne.addEventListener('click', function(){
//     i--
//     reflesh()
//     i--
//         var parent =this.parentElement.parentElement.parentElement;
//         i--
//         parent.removeChild(div);
        
//         reflesh()
//     })
    
}


ajoutColonne.addEventListener('click', ()=>{
ajoutNnote.classList.add('ajout-note')

    console.log( ajoutNnote);
})  


// var i=0
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
  
    couche.classList.remove('open')
    paraNote.classList.add('visible')
    const spanNote=document.createElement('h4')
    spanNote.setAttribute('id', 'id')
    var notes = document.createElement('div')
    notes.setAttribute('class', 'notes')
    const icone1 = document.createElement('i')
    icone1.setAttribute('class','bx bx-chevrons-right') 
    const icone2 = document.createElement('i')
    icone2.setAttribute('class','bx bx-chevrons-left')
    icone2.setAttribute('id', 'icone-righ')
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
    heureDepart.innerHTML= 'heure départ'+ valueTimeStar.value
    heureFin.innerHTML= 'heure fin'+ valueTimeEnd.value
    // spanNote.appendChild(iconeLeft)
    notes.appendChild(champTextarea)
    notes.appendChild(date)
    notes.appendChild(heureDepart)
    notes.appendChild(heureFin)
    spanNote.appendChild(icone2)
    spanNote.appendChild(notes)
   spanNote.appendChild(icone1)
    paraNote.appendChild(spanNote)

   const iconeRight=document.querySelector('.bx-chevrons-right')   
   var m = 0;
        iconeRight.addEventListener('click',()=>{
        m++
   var trans=document.querySelectorAll('.article')
         if (m==0) {
            iconeLeft.style.visibility="hidden"
         }else{iconeLeft.style.visibility="visible"}
            
            trans[m].appendChild(spanNote)
            //   m++
              console.log(m);
              if (m==4) {
                iconeRight.style.visibility="hidden"
              }
        })
       
    const iconeLeft=document.querySelector('.bx-chevrons-left')
    iconeLeft.addEventListener('click',()=>{
    const trans=document.querySelectorAll('.article')
    m--
      trans[m].appendChild(spanNote)
      console.log(m);
      if (m==0) {
        iconeLeft.style.visibility="hidden"
      }
      if (m<4) {
        iconeRight.style.visibility="visible"
      }
    })

    if (m<1) {

        iconeLeft.style.visibility="hidden"
    }else if(m>=1){ 
        alert('ok')
    }
    
    // var Date1= Date(0,0,0,heureDepart)
    // var Date2= Date(0,0,0,heureFin)
   
    // console.log(Date1) ;
    // console.log(Date(0,0,0,heureFin));
    // var d=new Date(0)
    // console.log(d);
    // if (m=1) {
    
    //     icone2.style.visibility="hidden"
    // }
    // var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    // var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    // date1 = new Date('2012/07/20 00:00:00');
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


// var trans=document.querySelectorAll('#id1')
// var iconeRight=document.querySelector('#icone-righ')
// console.log(iconeRight);
// var m=0
//      iconeRight.addEventListener('click',()=>{
//          console.log(m++);
//          m++
//          trans[m].appendChild(spanNote)
        
//      })

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