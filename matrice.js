//Variables
const dimInput = document.getElementById('myDim');
const btn = document.getElementById('myButton') ;
const divmat1 = document.getElementById('mat1'); 
const divmat2 = document.getElementById('mat2');
const table = document.getElementById('table') ;
const sommeBtn = document.querySelector('#somme') ;
const soustractionBtn = document.querySelector('#soustraction') ;
const multiplicationBtn = document.querySelector('#multiplication') ;
//Events
btn.addEventListener('click',creerMats) ;
sommeBtn.addEventListener('click',function(){compter('plus')}) ;
soustractionBtn.addEventListener('click',function(){compter('moins')}) ;
multiplicationBtn.addEventListener('click',produit) ;
//Functions
function creerMats() {
    let i,j ;
    let dim = dimInput.value ; // recuperer la dimension à partir de input avec id =myDim
    divmat1.innerHTML = ""  ;
    divmat2.innerHTML= ""  ;    
    //matrice 1  
    matrix(divmat1,dim,1) ;
    //matrice 2
    matrix(divmat2,dim,2) ;
}
function matrix(mat,dim,index){
    for(i=1; i<=dim ; i++){                   
        for(j=1; j<=dim ;j++){
            //creation des champs 'input' de la matrice
             const input = document.createElement('input') ;
             input.id = `m${index}(${i},${j})`;
             mat.appendChild(input);
         }
         const br = document.createElement('br');
         mat.appendChild(br);
     }  
}
//Somme et sousraction de deux matrices 
function compter(operator) {
    let dim = dimInput.value ;
    table.innerHTML = "" ;
    let i,j ;
    let val = 0 ;
    for(i=1; i<=dim ; i++) {              
        const ligne = document.createElement('tr'); //creer la ligne
        table.appendChild(ligne);
            
       for(j=1; j<=dim ;j++){ 
            let idP1 = "m1("+i+","+j+")" ; 
            let idP2 = "m2("+i+","+j+")" ;
            let value1 = parseInt(document.getElementById(idP1).value); 
            let value2 = parseInt(document.getElementById(idP2).value);
            if(operator == 'plus'){val = value1 + value2}
            else if(operator == 'moins'){val = value1 - value2}
            let col = document.createElement('td'); //creer la colonne
            col.innerHTML = val;                        // ajouter s dans la colonne 
            ligne.appendChild(col) ;                //l'attacher avec la ligne
            }
    }  
}

//calcul de produit matriciel
function produit() {
    let dim = dimInput.value ;
    let i,j ;
    table.innerHTML = "" ;

    for(i=1; i<=dim ; i++){
        const ligne = document.createElement('tr'); //creer la ligne
        table.appendChild(ligne);
            
      for(j=1; j<=dim ;j++){
        let val = 0;
            
        for(k = 1; k <=dim; k++){
            let idP1 = "m1("+i+","+k+")" ; 
            let idP2 = "m2("+k+","+j+")" ;
            let value1 = parseInt(document.getElementById(idP1).value); 
            let value2 = parseInt(document.getElementById(idP2).value);
            val += value1 * value2;
        }
        let col = document.createElement('td'); //creer la colonne
        col.innerHTML = val;                        // ajouter s dans la colonne 
        ligne.appendChild(col) ; 
      }
    } 
}


