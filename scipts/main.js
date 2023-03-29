window.onload = () => {
   document.querySelector('.video__item1').play()
   document.querySelector('.video__item1').addEventListener('ended', () => {
      document.querySelector('.video__item1').play()
   })
}

let buttons = [document.querySelector('.but1'),
 document.querySelector('.but2'),
 document.querySelector('.but3'),
 document.querySelector('.but4'),
 document.querySelector('.but5')
]

let theams = [
   document.querySelector('.theam1'),
   document.querySelector('.theam2'),
   document.querySelector('.theam3'),
   document.querySelector('.theam4'),
   document.querySelector('.theam5')
]

for(let i = 0; i <= 4; i++) {
   buttons[i].addEventListener('click', () => {
      document.querySelector('.Main').classList.add('hide')
      theams[i].classList.remove('hide')
   })
}



let t1Buts = [
   document.querySelector('.t1qust1'),
   document.querySelector('.t1qust2'),
   document.querySelector('.t1qust3'),
   document.querySelector('.t1qust4'),
   document.querySelector('.t1qust5'),
   document.querySelector('.t1qust6'),
   document.querySelector('.t1qust7'),
   document.querySelector('.t1qust8'),
   document.querySelector('.t1qust9')
]

for(let i = 0; i <= 8; i++) {
   t1Buts[i].addEventListener('click', () => {
      for(let i = 0; i <= 8; i++) document.querySelector('.t1q' + String(i+1) + '_variants').classList.add('hide');
      document.querySelector('.t1q' + String(i+1) + '_variants').classList.remove('hide');


      let url = ''
      let el = document.querySelector('.backgroundTheam')
      if(i == 0) 
         url = '../img/inform.jpg'
      else if(i == 1) 
         url = '../img/informatika.jpg'
      else if(i == 2)
         url = '../img/programm.jpg'
      else if(i == 3) 
         url = '../img/computer.jpg'
      else if(i == 4) 
         url = '../img/RAM.jpg'
      else if(i == 5) 
         url = '../img/inheritMem.jpg'
      else if(i == 6) 
         url = '../img/processor.jpg'
      else if(i == 7) 
         url = '../img/laptop_assembly.jpg'
      else if(i == 8)
         url = '../img/lang.jpg'
      el.style.backgroundImage = `url(${url})`;
   })
}

let t2Buts = [
   document.querySelector('.t2qust1'),
   document.querySelector('.t2qust2'),
   document.querySelector('.t2qust3'),
   document.querySelector('.t2qust4'),
   document.querySelector('.t2qust5'),
   document.querySelector('.t2qust6'),
   document.querySelector('.t2qust7'),
   document.querySelector('.t2qust8'),
   document.querySelector('.t2qust9')
]

for(let i = 0; i <= 8; i++) {
   t2Buts[i].addEventListener('click', () => {
      for(let i = 0; i <= 8; i++) document.querySelector('.t2q' + String(i+1) + '_variants').classList.add('hide');
      document.querySelector('.t2q' + String(i+1) + '_variants').classList.remove('hide');


      let url = ''
      let el = document.querySelector('.t2bgT')
      if(i == 0) 
         url = '../img/2_1.jpg'
      else if(i == 1) 
         url = '../img/2_2.jpg'
      else if(i == 2)
         url = '../img/2_3.jpg'
      else if(i == 3) 
         url = '../img/2_4.jpg'
      else if(i == 4) 
         url = '../img/2_5.jpg'
      else if(i == 5) 
         url = '../img/2_6.jpg'
      else if(i == 6) 
         url = '../img/computer.jpg'
      else if(i == 7) 
         url = '../img/2_8.jpg'
      else if(i == 8)
         url = '../img/2_9.jpg'
      el.style.backgroundImage = `url(${url})`;
   })
}

let t3Buts = [
   document.querySelector('.t3qust1'),
   document.querySelector('.t3qust2'),
   document.querySelector('.t3qust3'),
   document.querySelector('.t3qust4'),
   document.querySelector('.t3qust5'),
   document.querySelector('.t3qust6'),
   document.querySelector('.t3qust7'),
   document.querySelector('.t3qust8'),
   document.querySelector('.t3qust9')
]

for(let i = 0; i <= 8; i++) {
   t3Buts[i].addEventListener('click', () => {
      for(let i = 0; i <= 8; i++) document.querySelector('.t3q' + String(i+1) + '_variants').classList.add('hide');
      document.querySelector('.t3q' + String(i+1) + '_variants').classList.remove('hide');


      let url = ''
      let el = document.querySelector('.t3bgT')
      url = '../img/3_' + String(i+1) +'.jpg'
      el.style.backgroundImage = `url(${url})`;
   })
}

let t4Buts = [
   document.querySelector('.t4qust1'),
   document.querySelector('.t4qust2'),
   document.querySelector('.t4qust3'),
   document.querySelector('.t4qust4'),
   document.querySelector('.t4qust5'),
   document.querySelector('.t4qust6'),
   document.querySelector('.t4qust7'),
   document.querySelector('.t4qust8'),
   document.querySelector('.t4qust9')
]

for(let i = 0; i <= 8; i++) {
   t4Buts[i].addEventListener('click', () => {
      for(let i = 0; i <= 8; i++) document.querySelector('.t4q' + String(i+1) + '_variants').classList.add('hide');
      document.querySelector('.t4q' + String(i+1) + '_variants').classList.remove('hide');


      let url = ''
      let el = document.querySelector('.t4bgT')
      if(i == 0) 
         url = '../img/inform.jpg'
      else if(i == 1) 
         url = '../img/informatika.jpg'
      else if(i == 2)
         url = '../img/programm.jpg'
      else if(i == 3) 
         url = '../img/computer.jpg'
      else if(i == 4) 
         url = '../img/RAM.jpg'
      else if(i == 5) 
         url = '../img/inheritMem.jpg'
      else if(i == 6) 
         url = '../img/processor.jpg'
      else if(i == 7) 
         url = '../img/laptop_assembly.jpg'
      else if(i == 8)
         url = '../img/lang.jpg'
      el.style.backgroundImage = `url(${url})`;
   })
}

let t5Buts = [
   document.querySelector('.t5qust1'),
   document.querySelector('.t5qust2'),
   document.querySelector('.t5qust3'),
   document.querySelector('.t5qust4'),
   document.querySelector('.t5qust5'),
   document.querySelector('.t5qust6'),
   document.querySelector('.t5qust7'),
   document.querySelector('.t5qust8'),
   document.querySelector('.t5qust9')
]

for(let i = 0; i <= 8; i++) {
   t5Buts[i].addEventListener('click', () => {
      for(let i = 0; i <= 8; i++) document.querySelector('.t5q' + String(i+1) + '_variants').classList.add('hide');
      document.querySelector('.t5q' + String(i+1) + '_variants').classList.remove('hide');


      let url = ''
      let el = document.querySelector('.t4bgT')
      if(i == 0) 
         url = '../img/inform.jpg'
      else if(i == 1) 
         url = '../img/informatika.jpg'
      else if(i == 2)
         url = '../img/programm.jpg'
      else if(i == 3) 
         url = '../img/computer.jpg'
      else if(i == 4) 
         url = '../img/RAM.jpg'
      else if(i == 5) 
         url = '../img/inheritMem.jpg'
      else if(i == 6) 
         url = '../img/processor.jpg'
      else if(i == 7) 
         url = '../img/laptop_assembly.jpg'
      else if(i == 8)
         url = '../img/lang.jpg'
      el.style.backgroundImage = `url(${url})`;
   })
}


let score = 0
let answeredQusts = 0

for(let i = 1; i <= 5; i++) {
   for(let j = 1; j <= 9; j++) {
      for(let k = 1; k <= 4; k++) {
         let btn = document.querySelector(`.t${i}q${j}b${k}`)
         btn.addEventListener('click', () => {
            let qustBtn = document.querySelector(`.t${i}qust${j}`)
            if(!qustBtn.classList.contains('answered')) {
               btn.classList.add('variantBtnPressed')
               if(btn.classList.contains('cor')) {
                  score += 1
               }
               answeredQusts += 1
               qustBtn.classList.add('answered')
            }
         })
      }
   }
}

let btnsBack = [ 
   document.querySelector('.qustBtnBack'),
   document.querySelector('.qustBtnBack2'),
   document.querySelector('.qustBtnBack3'),
   document.querySelector('.qustBtnBack4'),
   document.querySelector('.qustBtnBack5')
]

btnsBack.forEach(el => {
   el.addEventListener('click', () => {
      theams.forEach(el => {
         el.classList.add('hide')
      });
   
   
      document.querySelector('.Main').classList.remove('hide');
   })
});

let butScor = document.querySelector('.mainScoreBut');
butScor.addEventListener('click', () => {
   document.querySelector('.Main').classList.add('hide')
   document.querySelector('.secScore').classList.remove('hide')

   let scoreEl = document.querySelector('.score');
   scoreEl.textContent = 'Процент правильных ответов: ' + String(Math.round(score/45*100)) + '%'

   let ansQust = document.querySelector('.answeredQustans');
   ansQust.textContent = 'Кол-во вопросов, на которые Вы ответили: ' + String(answeredQusts) + ` из 45 (${Math.round((answeredQusts/45)*100)}%)`
})

let scoreBack = document.querySelector('.secScore_backBtn');
scoreBack.addEventListener('click', () => {
   document.querySelector('.Main').classList.remove('hide')
   document.querySelector('.secScore').classList.add('hide')
})


let introBut = document.querySelector('.introBut');
introBut.addEventListener('click', () => {
   document.querySelector('.Main').classList.add('hide')
   document.querySelector('.secIntro').classList.remove('hide');
})


let introBtnBack = document.querySelector('.secIntro_backBtn');
introBtnBack.addEventListener('click', () => {
   document.querySelector('.Main').classList.remove('hide')
   document.querySelector('.secIntro').classList.add('hide');
})


let introButs = document.querySelectorAll('.intro__buts');
introButs.forEach(el => {
   el.addEventListener('mouseover', () => {
      let introImg = document.querySelector('.introImg');
      introImg.classList.add('hovered')      
   })

   el.addEventListener('mouseout', () => {
      let introImg = document.querySelector('.introImg');
      introImg.classList.remove('hovered')      
   })
});


document.querySelector('.butComputer').addEventListener('click', () => {
      document.querySelector('.extraComputorInfo').classList.remove('hide')
      document.querySelector('.partsOfComp').classList.add('hide')
})

document.querySelector('.backToBaseCompInfo__btn').addEventListener('click', () => {
   document.querySelector('.extraComputorInfo').classList.add('hide')
   document.querySelector('.partsOfComp').classList.remove('hide')
})