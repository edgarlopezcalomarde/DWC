pizzas=[{'codigo':'P0',
					 'nombre':'--- Selecciona una Pizza ---',
					 'ingredientes':[]
					},
					{'codigo':'P1',
					 'nombre':'Prosciutto', 
					 'ingredientes':[{'ingrediente':'salsa de tomate','precio':'0.5'},
									 {'ingrediente':'mozzarella','precio':'0.5'},
									 {'ingrediente':'jamón york','precio':'0.75'}
								    ]
					},
					{'codigo':'P2',
					 'nombre':'Capricciosa',
					 'ingredientes':[{'ingrediente':'salsa de tomate','precio':'0.5'},
									 {'ingrediente':'mozzarella','precio':'0.5'},
									 {'ingrediente':'jamón york','precio':'0.75'},
									 {'ingrediente':'alcachofas','precio':'1'},
									 {'ingrediente':'champiñones','precio':'0.5'},
									 {'ingrediente':'olivas negras','precio':'0.25'}
								    ]
					},								   
					{'codigo':'P3',
					 'nombre':'Cuatro Formaggi',
					 'ingredientes':[{'ingrediente':'salsa de tomate','precio':'0.5'},
									 {'ingrediente':'mozzarella','precio':'0.5'},
									 {'ingrediente':'gorgonzola','precio':'1.25'},
									 {'ingrediente':'emmemtal','precio':'1'},
									 {'ingrediente':'brie','precio':'0.75'}
								    ]
					}
				   ];

const lista = document.getElementById("lista");
const ingredientes = document.getElementById("ingredientes")
const fotoPizza = document.getElementById("fotopizza")
const importe = document.getElementById("importe")


pizzas.forEach(pizza => {

	const option = document.createElement("option")
	const text = document.createTextNode(pizza.nombre)
	option.value = pizza.codigo
	option.appendChild(text)
	lista.appendChild(option)
	
});


lista.addEventListener("change",()=>{

	fotoPizza.innerHTML = ""
	ingredientes.innerHTML = ""
	importe.innerHTML = "Importe : "
	let total = 0

	let pizza = pizzas.find(piz => piz.codigo == lista.value)

	pizza.ingredientes.forEach(e =>{
		ingredientes.appendChild(document.createTextNode(e.ingrediente))
		ingredientes.appendChild(document.createElement("br"))
		total+=parseFloat(e.precio)
	})

	if(pizza.codigo != "P0"){
		
		const img = document.createElement("img")
		img.src = "assets/"+pizza.codigo+".jpg"

		//fotoPizza.removeChild(fotoPizza.firstChild)
		fotoPizza.appendChild(img)	
		

		importe.innerHTML = "Importe : "+ (total+5)
	}

})