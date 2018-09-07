---
title: 'Cómo funciona Gatsby?'
date: '2018-09-07'
tags: ['jamstack', 'gatsby', 'react', 'graphql', 'webpack', 'netlify', 'CI']
---

Qué tal si os describo el stack tecnológico de este blog? A día de hoy, es el siguiente:

## Framework Javascript

- [Gatsby v2 Beta](https://next.gatsbyjs.org/) _from scratch_
- Diferentes librerías y plugins de Gatsby que aportan funcionalidad concreta. Los principales son:
  - Gatsby-image: procesado de imágenes principalmente para optimizar su velocidad de carga
  - Gatsby-plugin-google-analytics: Soporte para estadísticas de google analytics
  - Gatsby-source-filesystem: Parser de ficheros (en mi caso lectura de artículos guardados en archivos markdown)
  - Gatsby-plugin-feed: Soporte RSS para agregadores de contenidos

## Lenguajes y librería de UI

- ES6 Javascript
- [React](https://reactjs.org/)
- [React-Helmet](https://github.com/nfl/react-helmet). Componente React para gestionar la información de la sección HEAD de cada una de nuestras páginas, muy útil por ejemplo para temas de SEO
- [Css-modules](https://github.com/css-modules/css-modules). Hojas de estilo. Spoiler: probablemente no tarde en convertirse en [styled-components](https://www.styled-components.com/)
- [GraphQL](https://graphql.org/). Lenguaje de consulta para APIs

## Bundler

- [Webpack](https://webpack.js.org/)

## Contenidos

- Definidos en ficheros [Markdown](https://es.wikipedia.org/wiki/Markdown)

## Hosting y entorno

- [Github](https://github.com/) (control de versiones del código)
- [Netlify](https://www.netlify.com/) (despliegue del site estático)

Si habitualmente desarrollas usando el ecosistema Javascript es probable que conozcas parte de lo que he listado, pero ... qué es [Gatsby](https://next.gatsbyjs.org/)? Por qué Gatsby y no otra herramienta? Ok, empecemos por el principio:

Gatsby es un generador de sites estáticos basado en la arquitectura [JamStack](https://jamstack.org/), la cual podríamos definir como una combinación lo más sencilla posible de Javascript, APIs y lenguajes de marcado. Gatsby incorpora soporte _out-of-the-box_ para Javascript ES6, React, CSS-Modules, Webpack y GraphQL, además de una serie de APIs listas para acceder a los contenidos que se quieren mostrar sin importar donde se encuentren persistidos (CMSs, ficheros markdown locales, ficheros en CDNs, APIs remotas, YAML, JSON, bases de datos... ).

<img src="/diagrama-gatsby.png" width="100%" title="Arquitectura de Gatsby">

Dispone de un cliente instalable vía npm/yarn que permite generar el _boilerplate_ básico de un proyecto con solamente un comando de terminal. Al igual que otros proyectos actuales, dispone también de un conjunto de [starters](https://www.gatsbyjs.org/docs/gatsby-starters/) que permiten partir de un punto más avanzado en el desarrollo. En mi caso, no quise usar ningún starter ya que considero que para entender los fundamentos de cualquier tecnología la "batalla" debe empezar por su núcleo, por lo más básico.

Gatsby es además tremendamente flexible y personalizable, en el sentido de que puedes definir templates para tus contenidos (por ejemplo para los posts), páginas, o simplemente componentes react para importar en aquella parte del código donde más te convenga.

Y me diréis: vale, ok, tiene buena pinta.. pero concretamente cuales son sus principales ventajas? instálate un [Wordpress](https://es.wordpress.com/) hombre!! Mi respuesta a este consejo es:

> get the right tool for the job!

Según mi punto de vista, para montar un blog personal contar con una herramienta que genere un site totalmente estático marca la diferencia por algunos aspectos que detallaré más adelante. Además evitar la complejidad de Wordpress no es en absoluto mala idea, kilos y kilos de PHP y MySQL que convierten mi aplicación en algo innecesariamente complejo y lento sobre lo que tengo poco control. Resulta además que con Gatsby puedo trabajar con React, librería que me gusta y conozco, así que qué puede salir mal?.

Cuando añades una nueva funcionalidad o contenido en tu proyecto Gatsby, con un único comando obtienes un site estático listo para desplegar. Además sus APIs me posibilitan escribir mis artículos en archivos markdown dentro del propio proyecto, es decir, no utilizo una base de datos. Ésto, además de simplificar las cosas tanto a nivel de desarrollo como de entorno, implica que para publicar un nuevo artículo debo hacer un despliegue de todo el site. Y si lo pensáis desde una perspectiva clásica, diréis... y eso es una ventaja? qué locura Emilio, un despliegue cada vez? cuanto trabajo! Pues... resulta que no. En realidad una vez acabas de escribir el artículo lo que queda por hacer es prácticamente nada. Al tratarse de un site estático, sólo hay que coger los archivos generados y copiarlos en un servicio de almacenamiento adecuado. En mi caso ni siquiera los copio yo, ya que hago un _git push_ de los cambios sobre una rama concreta del repositorio de Github a la que tengo vinculada un servicio de integración contínua. Éste los detecta y automáticamente ejecuta el despliegue en Netlify. Resumiendo: **un push a la rama correcta desencadena un despliegue en producción en cuestión de segundos.**

Que Gatsby sea estático tiene más ventajas:

- La navegación es absurdamente rápida y por tanto la experiencia de usuario muy satisfactoria
- Hoy en día hay una buena oferta de servicios de almacenamiento estático gratuito en la nube, como pueden ser [Amazon S3](https://aws.amazon.com/es/s3) o [Heroku](https://www.heroku.com/)
- El despliegue no necesita de bases de datos ni servidores, lo que facilita enormemente las cosas
- Se integra perfectamente con Github así como con servidores de Integración Continua como Jenkins, Travis CI o el propio de Netlify
- Dispone de una buena y bien mantenida documentación
- El site generado es directamente una PWA
- Dispone de un cada vez más extenso ecosistema de plugins, siendo parte de ellos contribuciones de la comunidad de desarrolladores
- Nunca verás tanto verde auditando con Lighthouse o PageSpeed Insights :)

Como empiezo a parecer un comercial, también **os comento algunos problemas con los que me he encontrado:**

- Existe una pequeña curva de aprendizaje, en mi caso sobretodo respecto a las APIs de acceso a datos y GraphQL. La sintaxis de las queries de este último puede llegar a ser algo frustrante
- La gestión de imágenes en el contenido markdown no es tan obvia como podría parecer
- No todos los plugins son la excelencia hecha código
- En su versión 1, la diferencia entre Layouts y Templates resultaba un tanto difusa
- A pesar de que incorpora Hot-reloading, en algunos casos hay que parar el entorno de desarrollo y volverlo a iniciar para que los cambios tengan efecto

Por último, deciros que respecto a otros generadores de sites estáticos como [Jekyll](https://jekyllrb.com/) poco puedo aportar de primera mano ya que no los he probado, pero por lo que he podido leer estos últimos meses parece ser que cuando pasas de Jekyll a Gatsby pasa algo parecido a cuando conduces unos días un coche automático: ya no quieres volver al cambio manual.
