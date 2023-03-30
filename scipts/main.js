window.onload = () => {
   document.querySelector('.video__item1').play()
   document.querySelector('.video__item1').addEventListener('ended', () => {
      document.querySelector('.video__item1').play()
   })
}

for(let i = 1; i <= 5; i++) {
   for(let j = 1; j <= 9; j++) {
      document.querySelector(`.t${i}qust${j}`).addEventListener('click', () => {
         for(let k = 1; k <= 9; k++) document.querySelector(`.t${i}q` + String(k) + '_variants').classList.add('hide');
         document.querySelector(`.t${i}q` + String(j) + '_variants').classList.remove('hide');

         let url = `../img/a${i}_${j}.jpg`
         document.querySelector(`.t${i}bgT`).style.backgroundImage = `url(${url})`;
      })
   }
}

for(let i = 1; i <= 5; i++) {
   document.querySelector(`.but${i}`).addEventListener('click', () => {
      document.querySelector('.Main').classList.add('hide')
      document.querySelector(`.theam${i}`).classList.remove('hide')
   })
}


let score = 0
let answeredQusts = 0

for(let i = 1; i <= 5; i++) {
   for(let j = 1; j <= 9; j++) {
      let qustBtn = document.querySelector(`.t${i}qust${j}`)
      if(!qustBtn.classList.contains('answered')) {
         for(let k = 1; k <= 4; k++) {
            let btn = document.querySelector(`.t${i}q${j}b${k}`)
            btn.addEventListener('click', () => {
               btn.classList.add('variantBtnPressed')
               if(btn.classList.contains('cor')) {
                  score += 1
               }
               answeredQusts += 1
               qustBtn.classList.add('answered')
            })
         }
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
      for(let i = 1; i <= 5; i++) document.querySelector(`.theam${i}`).classList.add('hide')
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
