const container =document.querySelector('.container')
const ajoutColonne=document.getElementById('ajout-colonne')
const ajoutNnote=document.getElementById('ajout-note')
const content =document.querySelector('.content')
const couche=document.querySelector('.couche')



const api= 'localhost:8000?controller=tache&action=tache'
// fetch()
// .then(function (donne) {
//     json=donne.json()
//     return json



var m=0
var i=0
var tab=['#406cc3','#2cb860','#daa520','#adff2f','#ff2a8a']
let k=0
function ajouter(){
  
    const div=document.createElement('div')
    div.classList.add("article","animate__backInDown")
    div.setAttribute('id', 'id'+i)
    const divHDelet=document.createElement('div')
    divHDelet.setAttribute('id', 'h-delet')
    const divHDelete=document.createElement('div')
    divHDelete.setAttribute('id', 'h-delete')
    const h2=document.createElement('h2')
    h2.innerHTML='colonne '+(k+1)
    const deletColonne=document.createElement('i')
    deletColonne.setAttribute('class','bx bx-x') 
    deletColonne.setAttribute('id', 'bx')
    const para=document.createElement('div')
    para.setAttribute('class','tache')
    const span=document.createElement('h4')
    span.innerHTML=''
   
    const image=document.createElement('img')
   image.setAttribute('src', 'logoa.png')
    // para.appendChild(icone1)
    para.appendChild(span)
    // para.appendChild(icone2)
    divHDelet.appendChild(h2)
    divHDelete.appendChild(divHDelet)
   divHDelete.appendChild(deletColonne)    
    div.appendChild(divHDelete)
    div.appendChild(para)
    // div.appendChild(image)
    container.appendChild(div)
        // span[3].style.display='none'
       div.style.backgroundColor=tab[k]

    
     h2.addEventListener('click', ()=>{
         divHDelet.innerHTML="<input type='text' id='renommer' value='colonne'>"
     })


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
if(i>0){ 
deletColonne.addEventListener('click', (e)=>{
        containerConfirme.classList.add('affiche-sms-confirme')
        const confirmer=document.getElementById('confirmer')
        confirmer.addEventListener('click',()=>{
            i--
            deletColonne.parentElement.parentElement.remove(div)
    containerConfirme.classList.remove('affiche-sms-confirme')
    reflesh()
   
    i=0
        })
})
}
    deletColonne.addEventListener('click',()=>{
if(container.childElementCount==1){
    deletColonne.addEventListener('click', ()=>{
    k--
        containerConfirme.classList.add('affiche-sms-confirme')
        const confirmer=document.getElementById('confirmer')
        confirmer.addEventListener('click',()=>{
           
            deletColonne.parentElement.parentElement.remove(div)
    containerConfirme.classList.remove('affiche-sms-confirme')
    reflesh()
            ajoutNnote.classList.add('disabled')
        })
})
}
ajoutColonne.addEventListener('click',()=>{
    ajoutNnote.classList.remove('disabled')
})
})
const annuler=document.getElementById('annuler')
annuler.addEventListener('click',()=>{
    containerConfirme.classList.remove('affiche-sms-confirme')
})

// const confirmer=document.getElementById('confirmer')

// const divRemove=document.querySelectorAll('#id'+i)
// const bxBXx=document.querySelectorAll('.bx bx-x')



// confirmer.addEventListener('click',(e)=>{
// const bxBXx=document.querySelectorAll('.bx bx-x')

    
//     divRemove[i].remove()
//     console.log(divRemove[i]);
    
//     console.log(e.target);
//     containerConfirme.classList.remove('affiche-sms-confirme')
//   k--
//  reflesh()

   
// })


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

const btnColonne=document.getElementById('btn-colonne')
btnColonne.addEventListener('click',()=>{
    ajoutColonne.classList.add('open-ajout-colonne')
})

ajoutColonne.addEventListener('click', ()=>{
ajoutNnote.classList.add('ajout-note')
    
})  

    ajoutColonne.addEventListener('click', ()=>{
    
        if (container.childElementCount <5) {
            ajouter()
            k++  
    
            reflesh()   
}
i++
             
         })
// ajoutColonne.addEventListener('click', ()=>{
    
//     if(i<5){
//         ajouter()
//         k++   
//     } 
//     i++           
//      })


const indexModal=document.querySelector('.index-modal')
let j=0
ajoutNnote.addEventListener('click',()=>{
   indexModal.classList.toggle('open-index-modal')
    if(j<1){
    const divTitre=document.createElement('div')
    divTitre.setAttribute('class', 'titre')
    divTitre.innerHTML='NOUVELLE TACHE'
    const deletModal=document.createElement('i')
    deletModal.setAttribute('class','bx bx-x') 
    deletModal.setAttribute('id','delet-modal')
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
// form.appendChild(spanText)
form.appendChild(labelDate)
form.appendChild(inputDate)
form.appendChild(labelStar)
form.appendChild(inputStar)
form.appendChild(labelEnd)
form.appendChild(inputEnd)
form.appendChild(buttonForm)

divTitre.appendChild(deletModal)
content.appendChild(divTitre)
content.appendChild(small)
content.appendChild(form)

deletModal.addEventListener('click',()=>{
    indexModal.classList.remove('open-index-modal')
    couche.classList.remove('open')   
})
// const iconeLeft=document.querySelector('.bx-chevrons-left')
const spanNote=document.querySelector('h4')
const paraNote=document.querySelector('.tache')
const valueTextarea=document.getElementById('text')
const buttonFormm=document.getElementById('btn-form')
const valueTimeStar=document.getElementById('time-star')
const valueDate=document.getElementById('date')
const valueTimeEnd=document.getElementById('time-end')

buttonFormm.addEventListener('click',(e)=>{
  indexModal.classList.remove('open-index-modal')
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
    var deletTache=document.createElement('i')
    deletTache.setAttribute('class','bx bx-x delet-tache') 
    var divSurvol = document.createElement('div')
    divSurvol.setAttribute('class','survol')
    var divFormulaire=document.createElement('div')
    divFormulaire.setAttribute('class','div-formulaire')
    var date = document.createElement('div')
    date.setAttribute('class', 'date')
    var heureDepart = document.createElement('div')
    heureDepart.setAttribute('class', 'heure-Depart')
    var heureFin = document.createElement('div')
    heureFin.setAttribute('class', 'heure-fin')
    champTextarea.innerHTML=valueTextarea.value 
    date.innerHTML=valueDate.value
    heureDepart.innerHTML= 'heure départ :'+ valueTimeStar.value
    heureFin.innerHTML= 'heure fin :'+ valueTimeEnd.value
    // spanNote.appendChild(iconeLeft)
    notes.appendChild(champTextarea)
    notes.appendChild(deletTache)
    divSurvol.appendChild(date)
    divSurvol.appendChild(heureDepart)
    divSurvol.appendChild(heureFin)
    divFormulaire.appendChild(notes)
    divFormulaire.appendChild(divSurvol)
    spanNote.appendChild(icone2)
    // spanNote.appendChild(notes)
    spanNote.appendChild(divFormulaire)
   spanNote.appendChild(icone1)
    paraNote.appendChild(spanNote)

const ajoutColonne=document.getElementById('ajout-colonne')
    ajoutColonne.addEventListener('click', ()=>{
        if ((m==3&container.childElementCount==5)|| (m==2&container.childElementCount==4)||(m==1&container.childElementCount==3)||(m==0&container.childElementCount==2)) {
            iconeRight.style.visibility="visible"
       
          }
        //   if (m==2&container.childElementCount==4) {
        //     iconeRight.style.visibility="visible"
        //   }
        })  
        const confirmer=document.getElementById('confirmer')
        confirmer.addEventListener('click',(e)=>{
            if ((m==3&container.childElementCount==5)||(m==2&container.childElementCount==4)||(m==1&container.childElementCount==3)||(m==0&container.childElementCount==3)||(m==0&container.childElementCount==2)) {
                iconeRight.style.visibility="hidden"
                
            }
          
        })


   var contentCorbeille=document.querySelector('.content-corbeille')
    deletTache.addEventListener('click',()=>{
       contentCorbeille.appendChild(spanNote)
       iconeRight.style.visibility="hidden"
       iconeLeft.style.visibility="hidden"
       const divRestaurer=document.createElement('div')
       divRestaurer.setAttribute('id', 'div-restaurer')
       divRestaurer.innerHTML="restaurer"
       deletTache.style.display="none"
       notes.appendChild(divRestaurer)
       if (contentCorbeille.appendChild(spanNote)) {
           divRestaurer.addEventListener('click',()=>{
   var trans=document.querySelectorAll('.article')
               trans[m].appendChild(spanNote);
               deletTache.style.display="block"
               iconeRight.style.visibility="visible"
                 iconeLeft.style.visibility="visible"
                 divRestaurer.style.display="none"
           })
       }
    })
   const iconeRight=document.querySelector('.bx-chevrons-right')   
   var m = 0;
   reflesh()
        iconeRight.addEventListener('click',()=>{
            reflesh()
        m++
   var trans=document.querySelectorAll('.article')
         if (m==0) {
            iconeLeft.style.visibility="hidden"
         }else{iconeLeft.style.visibility="visible" }
            
            trans[m].appendChild(spanNote)
            //   m++
            //   console.log(m);
              if (m==4) {
                iconeRight.style.visibility="hidden"
              }
              if ((m==3&container.childElementCount==4)|| (m==2&container.childElementCount==3)||(m==1&container.childElementCount==2)) {
                iconeRight.style.visibility="hidden"
              }
   var trans=document.querySelectorAll('.article')
        })
       
    const iconeLeft=document.querySelector('.bx-chevrons-left')
    reflesh()
    iconeLeft.addEventListener('click',()=>{
        reflesh()
    //    if(container.firstElementChild)
    var trans=document.querySelectorAll('.article')
    m--
      trans[m].appendChild(spanNote)
      if (m==0) {
        iconeLeft.style.visibility="hidden"
      }
      if (m<4) {
        iconeRight.style.visibility="visible"
      }
    })

    if (m<1) {

        iconeLeft.style.visibility="hidden"
    }
    var now = new Date();

    var selectedDate = inputDate.valueAsNumber+now.getHours()*3600000+now.getMinutes()*60000+now.getSeconds()*1000+now.getMilliseconds()

    if ((selectedDate<now.getTime())||(!selectedDate)) {
  indexModal.classList.add('open-index-modal')
        couche.classList.add('open')
        const spanText=document.createElement('span')
        spanText.setAttribute('class','span-text')
        spanText.innerHTML='la date saisie est incorrect'
        form.appendChild(spanText)
        spanNote.innerHTML=''
        
    }

     if(!valueTextarea.value){
  indexModal.classList.add('open-index-modal')
        spanNote.innerHTML=''
        couche.classList.add('open')
        const spanTexAreatVide=document.createElement('span')
        spanTexAreatVide.setAttribute('class','span-texAreat-vide')
        spanTexAreatVide.innerHTML="Ce champ est obligatoire"
        form.appendChild(spanTexAreatVide)

    }
    if (valueTimeStar.value>=valueTimeEnd.value) {
  indexModal.classList.add('open-index-modal')
        spanNote.innerHTML=''
        couche.classList.add('open')
        const spanErrorHeur=document.createElement('span')
        spanErrorHeur.setAttribute('class','span-error-heur')
        spanErrorHeur.innerHTML="l'heure de départ doit supérieur à l'heure d'arrivé'"
        form.appendChild(spanErrorHeur)
    }

    var now = Date.parse(new Date()) 
   

    var timeStar=Date.parse( `${inputDate.value} ${valueTimeStar.value}`) 
    var timeEnd=Date.parse( `${inputDate.value} ${valueTimeEnd.value}`) 

    var heureDebut=timeStar-now
    var heureFin=timeEnd-now
    const deletColonne=document.querySelector('.bx bx-x')
    setInterval(() => {
        heureDebut-=1000
        heureFin-=1000
        if (heureDebut<=0) {
            spanNote.style.backgroundColor="green"
            iconeRight.style.display="none"
            iconeLeft.style.display="none"
            deletTache.style.display="none"
        }
        if (heureFin<=0) {
            spanNote.style.backgroundColor="blue"
        const deletColonne=document.querySelectorAll('.bx bx-x')
const containerConfirme =document.querySelector('.container-confirme')
            deletColonne.addEventListener('click', ()=>{
                // containerConfirme.classList.remove('affiche-sms-confirme')
             
            })
        }
    }, 1000);

    

    // console.log([timeStar, timeEnd,now]);
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
const containerCorbeille=document.querySelector('.container-corbeille')
const btnCorbeil=document.getElementById('bxs-trash')
const indexCorbeille=document.querySelector('.index-corbeille')
const headeR=document.querySelector('.header')
btnCorbeil.addEventListener('click',()=>{
    indexCorbeille.classList.toggle('open-index-corbeille')
    btnCorbeil.classList.toggle('open-bxs-trash')
    headeR.classList.toggle('transit-header')
    containerCorbeille.classList.toggle('open-container-corbeille')
    container.classList.toggle('transit-container')
    
})


