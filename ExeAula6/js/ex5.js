document.querySelectorAll('.tabBtn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const t = btn.getAttribute('data-target');
    document.querySelectorAll('.aba').forEach(function(a) {
      a.style.display = a.id === t ? 'block' : 'none';
    });
  });
});

let timer = null;
let segundos = 0;
const cronDisplay = document.querySelector('#cron');

document.querySelector('#startCron').addEventListener('click', function(){
  if (timer) return;
  timer = setInterval(function(){
    segundos++;
    cronDisplay.textContent = segundos + ' s';
  },1000);
});

const slides=[
  '../imagens/img1.jpg',
  '../imagens/img2.jpg',
  '../imagens/img3.jpg',
  '../imagens/img4.jpg',
  '../imagens/img5.jpg'
];

let idxSlide=0;
const slideImg=document.querySelector('#slideImg');

function atualizarSlide(){ slideImg.src=slides[idxSlide]; }
atualizarSlide();

document.querySelector('#prevSlide').addEventListener('click',function(){
  idxSlide=(idxSlide-1+slides.length)%slides.length;
  atualizarSlide();
});
document.querySelector('#nextSlide').addEventListener('click',function(){
  idxSlide=(idxSlide+1)%slides.length;
  atualizarSlide();
});

document.querySelector('#btnTab').addEventListener('click', function(){
  const n=Number(document.querySelector('#tabNum').value);
  const s=document.querySelector('#saidaTab');
  if(!Number.isFinite(n)){ s.textContent='Informe um número válido.'; return; }
  let h='<ul>';
  for(let i=1;i<=10;i++){ h+=`<li>${n} x ${i} = ${n*i}</li>`; }
  h+='</ul>';
  s.innerHTML=h;
});
