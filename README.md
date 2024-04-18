
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

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

Al hacer click en el botón de Quiz accedemos a un menú que nos permite elegir entre un juego de adivinar el personaje con su imagen u otro de adivinar a qué personaje pertenece una frase.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

Si elegimos el de personajes, nos aparecen bajo el mismo fondo con las posibles respuestas.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

Al presionar una de las opciones nos muestra el botón para acceder a las siguientes preguntas y un marcador con los puntos.
Si la respuesta que damos es correcta, nos lo mostrará en amarillo, nos sumará un punto y se reproducirá un sonido de Homer Simpson.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

Finalmente, nos aparecerá una pantalla de resultados, en la que según nuestra puntuación nos dirá que Simpson en versión niño somos.

Para ajustar los personajes al fondo fui jugando con las clases, el CSS y el tamaño máximo para ajustarlos.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

Si hemos escogido la versión de frases, veremos como nos cambia el fondo por el de una pizarra con las preguntas.

Para cambiar el fondo, cambié el estilo del background dentro del JavaScript cuando es necesario.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


Al finalizar las diez preguntas nos mostrará los resultados donde esta vez el personaje será un adulto según nuestra puntuación.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Contacto

juanjo.salas.dev@gmail.com

