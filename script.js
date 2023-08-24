const cadastrar = document.getElementById("botao1")
const excluir=document.getElementById("excluir")
const input=document.getElementById("input1")
const imprimirlista=document.getElementById("ListaCompleta")
let lista=[]

cadastrar.addEventListener("click",Cadastrando);
function Cadastrando(evento){
  aluno=input.value
  if(AlunoExistente()===false || lista.length===0){
    lista.push(aluno)
    imprimirlista.textContent=lista
    input.value=""
  }
  
}

function AlunoExistente(){
  for(item of lista){
    if(item===input.value){
      alert("Esse aluno já foi cadastrado! Tente outro aluno!")
      input.value="";
      return(true)
    }else{
      return(false)
    }
  }
}

excluir.addEventListener("click",Excluindo);
function Excluindo(evento){
  let lista2=[]
  for(item of lista){
    if(item!==input.value){
      lista2.push(item)
    }
  }
  lista=lista2
  imprimirlista.textContent=lista
}
