let btnAdd=document.querySelector(".btn-add")
let modelCont=document.querySelector(".model-cont")
let mainCont=document.querySelector(".main-cont")
let textArea=document.querySelector(".text-area")
let allPriorityColors = document.querySelectorAll('.priority-btn');
let modelPriorityColor="light-pink";
let btnRmv=document.querySelector(".btn-rmv")
let toolBoxColors=document.querySelectorAll(".color")


let addBtnFlag=false
let rmvBtnFlag=false

// + Add a task
btnAdd.addEventListener("click", function(){
    addBtnFlag=!addBtnFlag
    if(addBtnFlag){
        modelCont.style.display="flex"
    }
    else{
        modelCont.style.display="none"
    }
})
//Remove the task
btnRmv.addEventListener("click", function(){
    if(rmvBtnFlag=!rmvBtnFlag){
        alert("You have selected the remove button")
        btnRmv.classList.add("remove")
    }
    else{
        btnRmv.classList.remove("remove")
        
    }
})

function handleRemove(ticket){
    ticket.addEventListener("click", function(){
        if(rmvBtnFlag===true){
            ticket.remove()
        }
    })

}

// Filtering of tickets according to Color
toolBoxColors.forEach(function(colorElem){
    colorElem.addEventListener('click' , function(){
        const allTicktes = document.querySelectorAll('.ticket-cont')
        // console.log(allTicktes)
        const selectedColor = colorElem.classList[0]
        // console.log(selectedColor)
  
        allTicktes.forEach(function(ticket){
          const tikcetColorBand = ticket.querySelector('.ticket-color')
          console.log(tikcetColorBand)
          if(tikcetColorBand.style.backgroundColor==selectedColor){
            ticket.style.display='block'
          }
          else{
            ticket.style.display ='none'
          }
        })
       
    })
    colorElem.addEventListener('dblclick' , function(){
        const allTicktes = document.querySelectorAll('.ticket-cont')
        allTicktes.forEach(function(ticket){
          ticket.style.display='block'
        })
      })
    })


// Create a Ticket
function createTicket(taskcolor,task,id){
    let ticket=document.createElement("div")
    ticket.setAttribute("class", "ticket-cont")
    ticket.innerHTML=`<div class="${taskcolor} ticket-color" style="border-radius: 1rem 1rem 0 0"></div>
    <div class="ticket-id">${id}</div>
    <div class="ticket-info">${task}</div>
    <div class="ticket-lock"><i class="fa-solid fa-lock"></i>
    </div>`;
    mainCont.appendChild(ticket)
    handleRemove(ticket)
}

//Append a new Task
modelCont.addEventListener("keydown", function(e){
    if(e.key==="Shift"){
        let task=textArea.value
        let id=(Math.random()*10000).toFixed(0)
        createTicket(modelPriorityColor,task,id)
        modelCont.style.display="none"
        addBtnFlag=false
    }
})

//Change the task status
allPriorityColors.forEach(function(colorElem){
    colorElem.addEventListener('click', function(){
       allPriorityColors.forEach(function(priortyColors){
        priortyColors.classList.remove('active')
       })
       colorElem.classList.add('active')
       modelPriorityColor =colorElem.classList[0]
    })  
})







