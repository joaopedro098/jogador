let idade =0
let idadedigitada = 0
let maior =0
let menor =0

for(let i=1;i<=2;i++){
  idade = prompt("informe a idade do jogador: ")
  idadedigitada = document.querySelector("#jogador")
  //idadedigitada.textContent = idade//

  if( i==1){
    maior=idade
    menor=idade
    console.log(maior, menor)
  } else{
    if(idade>maior){
        maior=idade
    }
    if(idade<menor){
        menor=idade 
    }
  }
  
}
alert(`A idade do jogador  mais velho é ${maior}, a idade do jogador mais novo é ${menor}`)