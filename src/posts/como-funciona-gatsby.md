---
title: 'Cómo funciona Gatsby?'
date: '2018-09-07'
tags: ['jamstack', 'gatsby', 'react', 'graphql', 'webpack', 'netlify', 'CI']
---

Ayer hice una pregunta en twitter. Sí sí, así fue. Concretamente quería saber si os resultaba interesante conocer como está montado este blog. Pues bien, parece ser que así es, por lo que.. qué tal si os describo su stack tecnológico?

Como sabéis este blog nació como un MVP que voy mejorando poco a poco, así que algunas de sus tecnologías viven en permanente cambio. Aun así, su núcleo ya está consolidado y a día de hoy el stack es el siguiente:

## Framework Javascript

- [Gatsby v2 Beta](https://next.gatsbyjs.org/) _from scratch_
- Diferentes librerías y plugins de Gatsby que aportan funcionalidad concreta:
  - **Gatsby-image**: Procesado de imágenes, útil principalmente para optimizar su velocidad de carga
  - **Gatsby-plugin-google-analytics**: Soporte para estadísticas de Google Analytics
  - **Gatsby-source-filesystem**: Parser de ficheros de datos (en mi caso lectura de artículos en formato markdown)
  - **Gatsby-plugin-feed**: Soporte RSS para agregadores de contenidos

## Lenguajes y librería de UI

- **ES6** Javascript
- [React](https://reactjs.org/)
- [React-Helmet](https://github.com/nfl/react-helmet). Componente React para gestionar la información de la sección HEAD de las páginas, muy útil por ejemplo para temas de SEO
- [Css-modules](https://github.com/css-modules/css-modules). Definición de estilos de los componentes. _Spoiler: probablemente no tarde en migrarlo a [styled-components](https://www.styled-components.com/)_
- [GraphQL](https://graphql.org/). Lenguaje de consulta para APIs

## Bundler

- [Webpack](https://webpack.js.org/)

## Contenidos

- Definidos en ficheros [Markdown](https://es.wikipedia.org/wiki/Markdown)

## Hosting y entorno

- [Github](https://github.com/) (control de versiones del código)
- [Netlify](https://www.netlify.com/) (despliegue del site estático)

Si habitualmente desarrollas usando el ecosistema Javascript posiblemente ya conozcas parte de lo que he listado, pero ... **y qué es [Gatsby](https://next.gatsbyjs.org/)? Por qué Gatsby y no otra herramienta?**

Ok, empecemos por el principio:

Gatsby es un generador de sites estáticos basado en la arquitectura [JamStack](https://jamstack.org/), la cual podríamos definir como una combinación lo más sencilla posible de Javascript, APIs y lenguajes de marcado. Este generador incorpora soporte _out-of-the-box_ para Javascript ES6, React, CSS-Modules, Webpack y GraphQL, además de una serie de APIs listas para acceder a los contenidos que se quieren mostrar sin importar donde éstos se encuentren persistidos.

A grandes rasgos, podemos entender Gatsby como un software que nos brinda un entorno de desarrollo con el que generar una aplicación web basada en HTML, Javascript (React) y CSS. Una vez el desarrollo ha terminado, Gatsby nos permite generar una release optimizada (build) que podemos desplegar en el entorno final.

<img src="/diagrama-gatsby.png" width="100%" title="Arquitectura de Gatsby">

Dispone de un cliente instalable vía npm/yarn que permite generar el _boilerplate_ básico de un proyecto con solamente un comando de terminal, y al igual que otros proyectos actuales, dispone de un conjunto de [starters](https://www.gatsbyjs.org/docs/gatsby-starters/) que posibilitan partir de un punto más avanzado en el desarrollo. En mi caso, no quise usar ningún starter ya que considero que para entender los fundamentos de cualquier tecnología la "batalla" debe empezar por su núcleo, por lo más básico. Además, como bien sabréis, mantener código de terceros no es normalmente una tarea gratificante.

Gatsby es además tremendamente flexible y personalizable, en el sentido de que puedes definir templates para tus contenidos (por ejemplo para los posts), páginas, o simplemente componentes react para importar en aquella parte del código donde más te convenga.

Y me diréis: vale, ok, tiene buena pinta.. pero concretamente cuales son sus principales ventajas? instálate un [Wordpress](https://es.wordpress.com/) hombre!! Mi respuesta a este consejo es:

> get the right tool for the job!

Según mi punto de vista, si el objetivo es montar un blog personal, contar con una herramienta que genere un site totalmente estático marca la diferencia por algunos aspectos que detallaré más adelante. Además evitar la complejidad de Wordpress no es en absoluto mala idea, hablamos de kilos y kilos de PHP y MySQL que convierten mi aplicación en algo innecesariamente complejo y lento sobre lo que tengo demasiado control.

Con Gatsby puedo escribir artículos en archivos markdown dentro del propio proyecto, es decir, no utilizo una base de datos. Ésto, además de simplificar mucho las cosas tanto a nivel de desarrollo como de entorno, implica que para publicar un nuevo artículo debo hacer un despliegue de todo el site. Y si lo pensáis desde una perspectiva clásica, diréis... y eso es una ventaja? qué locura, un despliegue cada vez? cuanto trabajo! Pues... resulta que no. En realidad una vez acabas de escribir el artículo lo que queda por hacer es prácticamente nada. Tende en cuenta que al tratarse de un site estático, sólo hay que coger los archivos generados y copiarlos en un servicio de almacenamiento adecuado. En mi caso ni siquiera los copio yo, ya que hago un _git push_ de los cambios sobre una rama del repositorio de Github a la que tengo vinculada un servicio de integración contínua. Éste los detecta y automáticamente ejecuta el despliegue en Netlify. Resumiendo: **un push a la rama adecuada del repositorio desencadena un despliegue en producción que acaba en cuestión de segundos.**

Que Gatsby sea estático tiene más implicaciones positivas:

- La navegación es absurdamente rápida y por tanto la experiencia de usuario muy satisfactoria
- Hoy en día existe una buena oferta de servicios de almacenamiento estático gratuito en la nube, como pueden ser [Amazon S3](https://aws.amazon.com/es/s3) o [Heroku](https://www.heroku.com/)
- El despliegue no necesita de bases de datos ni servidores, lo que reduce tiempos y complejidad
- Se integra perfectamente con Github así como con servidores de Integración Continua como Jenkins, [Travis CI](https://travis-ci.org/) o el propio de Netlify
- Dispone de una buena y bien mantenida documentación
- El site generado es directamente una PWA
- Dispone de un cada vez más extenso ecosistema de plugins, siendo parte de ellos contribuciones de la comunidad de desarrolladores
- Si trabajas con Markdown, existen productos relacionados con los que editar estos contenidos mediante un editor WYSIWYG
- Nunca verás tanto verde auditando con Lighthouse o [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) :)

Como con tanta ventaja empiezo ya a parecer un comercial, también **os comento algunos problemas con los que me he encontrado:**

- Existe una pequeña curva de aprendizaje, en mi caso sobretodo respecto a las APIs de acceso a datos y GraphQL. La sintaxis de las queries de este último puede llegar a ser algo frustrante
- La gestión de imágenes en el contenido markdown no es tan obvia como podría parecer
- No todos los plugins son _la excelencia hecha código_
- En su versión 1, la diferencia entre Layouts y Templates resultaba un tanto difusa
- A pesar de que incorpora Hot-reloading, en algunos casos hay que parar el entorno de desarrollo y volverlo a iniciar para que los cambios tengan efecto

Por último, deciros que respecto a otros generadores de sites estáticos como [Jekyll](https://jekyllrb.com/) poco puedo aportar de primera mano ya que no los he probado, pero por lo que he podido leer estos últimos meses parece ser que cuando pasas de Jekyll a Gatsby pasa algo parecido a cuando conduces unos días un coche automático: ya no quieres volver al cambio manual.
