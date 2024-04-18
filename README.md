
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# Los Simpsons Quizz

Este proyecto consiste en un juego  de preguntas con temática de los Simpsons.




## Autor

- [@JuanjoSalas](https://www.github.com/JuanjoSalas)


## API Referencia

https://thesimpsonsquoteapi.glitch.me/

#### Acceder a los datos

```http
  axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=15"
    );
```


## Tecnologías utilizadas

- HTML 5
- CSS 3
- JavaScript

## Referencia de colores

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Color Primario | ![#af69cd](https://via.placeholder.com/10/af69cd?text=+) #af69cd |
| Color Secundario | ![#4b0081](https://via.placeholder.com/10/4b0081?text=+) #4b0081 |
| Color detalles | ![#6b7787](https://via.placeholder.com/10/6b7787?text=+) #6b7787 |
| Color letras y botones | ![#ffff00](https://via.placeholder.com/10/ffff00?text=+) #ffff00 |


## Documentación

Cuando entramos a la URL observamos la página de inicio en la cual encontramos un diseño inspirado en la televisión de los Simpsons. Esta simula la cabecera de la serie con su banda sonora y letras características y La barra de navegación simula los botones de la televisión.

![Home](https://github.com/JuanjoSalas/Quiz/assets/161235632/ee66eb2f-5c73-4185-b630-71a1212e5990)

Al hacer click en el botón de Quiz accedemos a un menú que nos permite elegir entre un juego de adivinar el personaje con su imagen u otro de adivinar a qué personaje pertenece una frase.

![Quiz](https://github.com/JuanjoSalas/Quiz/assets/161235632/073e70e2-b54e-4220-836e-1c56ac2d2f17)

Si elegimos el de personajes, nos aparecen bajo el mismo fondo con las posibles respuestas.

![Quiz images](https://github.com/JuanjoSalas/Quiz/assets/161235632/9dfa31c8-d6a1-41af-868a-53aa2d554593)

Al presionar una de las opciones nos muestra el botón para acceder a las siguientes preguntas y un marcador con los puntos.
Si la respuesta que damos es correcta, nos lo mostrará en amarillo, nos sumará un punto y se reproducirá un sonido de Homer Simpson.

![Quiz images answer](https://github.com/JuanjoSalas/Quiz/assets/161235632/0ed64c5c-295e-4f38-ae3b-0acf00bfdece)

Finalmente, nos aparecerá una pantalla de resultados, en la que según nuestra puntuación nos dirá que Simpson en versión niño somos.

Para ajustar los personajes al fondo fui jugando con las clases, el CSS y el tamaño máximo para ajustarlos.

![Result images](https://github.com/JuanjoSalas/Quiz/assets/161235632/5468e4b6-5046-4fb7-8cd8-991428c5869b)

Si hemos escogido la versión de frases, veremos como nos cambia el fondo por el de una pizarra con las preguntas.

Para cambiar el fondo, cambié el estilo del background dentro del JavaScript cuando es necesario.

![Quiz quotes](https://github.com/JuanjoSalas/Quiz/assets/161235632/f2cd6fcc-fb25-4fe1-9110-d85ab08c811e)

![Quiz quotes answer](https://github.com/JuanjoSalas/Quiz/assets/161235632/ca77c752-1c24-4c34-b1ce-667dfa75f70f)

Al finalizar las diez preguntas nos mostrará los resultados donde esta vez el personaje será un adulto según nuestra puntuación.

![Result Quotes](https://github.com/JuanjoSalas/Quiz/assets/161235632/bc0817b2-53b8-4259-8442-386eeec87ec6)

## Contacto

juanjo.salas.dev@gmail.com

