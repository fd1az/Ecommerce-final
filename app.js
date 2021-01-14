class Ropa {
    constructor(imagen, urlImagen, titulo, descripcion, precio, id) {
        this.imagen = imagen
        this.urlImagen = urlImagen
        this.titulo = titulo
        this.descripcion = descripcion
        this.precio = precio
        this.id = id
    }
   
}

class Producto extends Ropa {
    constructor(imagen, urlImagen, titulo, precio, id,cantidad){
        super(imagen, urlImagen, titulo, precio, id )
        this.cantidad = cantidad
    } 
    increment(){

        const cantidad = 0
        if(cantidad == this.id){
            cantidad++
            console.log(cantidad)
        }
        cantidad == 0 

        console.log(cantidad)
        //aca solo estaba probando 
    }
    
}  
class UI {


  addProduct(product) {
    const productList = document.getElementById('product-list');
    const element = document.createElement('form');
    element.innerHTML= ` 
    <div class="card text-center mb-4"
        <div class="card-body"> 
            <img class="imagen_card" src= ${product.imagen}></img>
            <strong>UrlImage </strong> : ${product.urlImagen}
            <strong>Product Name </strong> : ${product.titulo}
            <strong>Price </strong> : ${product.precio}
            <strong>id </strong> : ${product.id}
            <strong>Quantity </strong> : ${product.cantidad}
            
           
        
        </div>
    
    
    
    </div>
    
    `;



    productList.appendChild(element);
  }  
}   



    

let Remera = new Ropa(
    'imagen-prueba1.jpg',
    'index.html',
    'Remera algodon peinado',
    'Descripcion del producto!',
    '$500',
    1
)

let Short = new Ropa(
    'imagen-prueba2.jpg',
    'index.html',
    'Short primavera',
    'Descripcion del producto!',
    '$4500',
    2
)

let Campera = new Ropa(
    'imagen-prueba3.jpg',
    'index.html',
    'Campera super abrigada',
    'Descripcion del producto!',
    '$5200',
    3
)


let Calza = new Ropa(
    'imagen-prueba3.jpg',
    'index.html',
    'Calza de running',
    'Descripcion del producto!',
    '$5500',
    4
)
let Remera2 = new Ropa(
    'imagen-prueba1.jpg',
    'index.html',
    'Remera algodon peinado',
    'Descripcion del producto!',
    '$900',
    5
)
let Remera3 = new Ropa(
    'imagen-prueba1.jpg',
    'index.html',
    'Remera algodon peinado',
    'Descripcion del producto!',
    '$300',
    6
)

let Remera4 = new Ropa(
    'imagen-prueba1.jpg',
    'index.html',
    'Remera algodon peinado',
    'Descripcion del producto!',
    '$2500',
    7
)
let Remera5 = new Ropa(
    'imagen-prueba1.jpg',
    'index.html',
    'Remera algodon peinado',
    'Descripcion del producto!',
    '$1500',
    8
)

let Remera6 = new Ropa(
    'imagen-prueba1.jpg',
    'index.html',
    'Remera algodon peinado',
    'Descripcion del producto!',
    '$600',
    9
)

let listadeproductos = [Remera, Short, Campera, Calza, Remera2, Remera3, Remera4, Remera5, Remera6,]

function createCard  (Cards) {
const containerProductos = document.getElementById('app')
const div_card = document.createElement('div')
div_card.classList.add('col-md-4')
const a_card = document.createElement('a')
a_card.classList.add('a_card')
a_card.href = `${Cards.urlImagen}`
div_card.appendChild(a_card)
const imagen_card = document.createElement('img')
imagen_card.classList.add('imagen_card')
imagen_card.classList.add('w-100')
imagen_card.src = "./img/" + Cards.imagen
imagen_card.setAttribute("id", Cards.id)
a_card.appendChild(imagen_card)
const titulo_card = document.createElement('h2')
titulo_card.setAttribute("name", Cards.name = 'titulo')
titulo_card.classList.add('titulo_card')
titulo_card.textContent = `${Cards.titulo}`
div_card.appendChild(titulo_card)
const descripcion_card = document.createElement('p')
descripcion_card.classList.add('descripcion_card')
descripcion_card.textContent = `${Cards.descripcion}`
div_card.appendChild(descripcion_card)
const precio_card = document.createElement('h3')
precio_card.classList.add('precio_card')
precio_card.id = 'precioid'
precio_card.textContent = `${Cards.precio}`
div_card.appendChild(precio_card)
const btn = document.createElement('button')
btn.textContent = 'COMPRAR'
btn.classList.add('boton-compra')
btn.setAttribute('data-id', Cards.id)
div_card.appendChild(btn)
containerProductos.appendChild(div_card)

};


//state
let state = [];


// //HANDLERS


// //INIT FUNCTION   
init()

function init() {
    listadeproductos.map(x => {
        createCard(x);
        
        })
    
        
    }
//RENDER FUNCTION


//selectores


 const app = document.getElementById('app').addEventListener('click', function(e){
    const cards = document.querySelectorAll('.col-md-4').forEach((element) => {
        const imagen = document.querySelector('.imagen_card').src
        const titulo = document.querySelector('.titulo_card').textContent
        const precio = document.querySelector('.precio_card').textContent
        const id = document.querySelector('.boton-compra').id
        let cantidad = 0
       

        const product = new Producto (imagen,titulo,precio,id,cantidad)

        if(product.cantidad == product.id) {
            product.increment()
        }
          else  {
              product.cantidad++
            
            }
        
   
          
   
           
            const ui = new UI ();
            ui.addProduct(product);
           
   
            e.preventDefault()
            
            
            
    })
     
    
         
 })
 





    




  



            
   



        

 
 