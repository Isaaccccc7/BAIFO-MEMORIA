# BAIFO WORDLE

Misión M1 · El Despertar del DOM 

## Cómo probarlo

Abre `memoria.html` en el navegador.

El objetivo del juego es descubrir qué artista será el próximo cantante
con el que colaborará Quevedo. La partida empieza  con 5 vidas y tienes que adivinar 
que artista es sabiendo solo el numero de letras que son, y si aciertas una letra la incluirá en la 
posición correspondiente. Además he añadido un botón pista que solamente se aplicará si el usuario 
tiene menos de tres vidas (La pista consiste en una card con una frase relacionada con el artista).

Además he incluido dos botones que son el de reiniciar la partida que te cambia el artista y te vuelve a inicializar las vidas a 5. Y un botón que es el punto extra que si lo pulsas cambia al modo oscuro que cambia tanto el fondo como el color de los elementos del html.

## Uso de IA

Usé Claude como herramienta de apoyo durante el desarrollo del proyecto. Prompts que utilicé: "Quiero poner varios fondos(archivos PNG) en mi página web, cual sería la mejor manera de implementarlos para que sea tanto responsive como para web de ordenador"(Me propuso poner con el background-image y lo puse en el body como el fondo predeterminado y el modo oscuro para cuando aplicase el boton de modo oscuro) o "Cual es la forma más optima para crear un array en una lista de botones, sabiendo que la lista está ya ordenada alfabéticamente"(Me propuso el uso de el metodo createElement el cual yo utilicé para implementarlo en una variable que la metí en un bucle para que recorriera toda la array de letas creando un boton HTML por cada posición) o "Quiero una organización de 5 sprint de la creacción de un minijuego que es el ahorcado sabiendo que le voy a implementar varios extras"(Me propuso 5 sprints en los que los primeros dos se centraban en la estructura HTML y la base del JavasCript sin ningún tipo de estilo. Mientras que los últimos se centraron mas en el el estilo, terminar detalles del JS y documentación)

He utilizado la IA  para las dudas sobre JavaScript y el DOM, revisar errores y proponer mejoras a partir de la corrección del Web Arena.

## Autopsia

1. He decidido crear el teclado de botones desde JavaScript, en vez de crear los 27 botones a mano de cada letra en el HTML. Lo que hace el programa de esta forma es recorrer el array de "letras", y crea un botón por cada posición que pasa incluyendo a la letra en el botón. Así que descarté crear los botones manualmente en el HTML porque es un trozo de código innecesario y hace más difícil la modificación del teclado. 

2. He decidido almacenar el cantante elegido y la palabra oculta en variables de JavaScript. Uso el DOM para mostrar su estado. Esto me permitió revisar las letras y actualizar la palabra sin tener que leer siempre la información del HTML. La otra opción que no elegí fue usar el contenido del DOM como fuente principal del estado del juego. Esa forma habría unido la lógica del juego con la forma en que se mostraba

3. Y por último he decidido que el usuario pueda utilizar el teclado del ordenador direcctamente en vez de tener que ir pinchando con el ratón. Ya que me parecía más cómodo de cara al usuario este cambio.
