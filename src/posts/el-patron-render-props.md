---
title: 'El patrón Render Props'
date: '2018-11-14'
imageCredits: 'Hoy la cosa va de planetas...'
---

Ya estoy de vuelta, hoy con un artículo sobre una de las técnicas más usadas en React para compartir información entre componentes: el patrón avanzado **Render Props**.

En React acostumbramos a compartir la información entre componentes anidados mediante propiedades. Como bien sabrás, esto implica una jerarquía que a veces puede resultar poco flexible, sobretodo cuando la complejidad aumenta.

Existen diferentes soluciones para este problema: crear un estado externo como se acostumbra a hacer en REDUX, generar un contexto independiente al que acceder cuando interese como plantea la Context API, utilizar componentes que devuelven otros componentes con la información requerida, como los High Order Components (HOCs), etc. Cada una de estas opciones daría para un artículo, pero hoy nos centraremos únicamente en el patrón Render Props, una técnica mediante la cual podemos compartir información de manera muy práctica y sencilla.

## Fundamento del patrón Render Props

Esta técnica consiste en implementar un componente que dispone de la información a compartir, aquella que el resto de componentes necesitan conocer para llevar a cabo su lógica interna. Este componente se invoca envolviendo a los componentes interesados, y les proporciona su información mediante una función que posibilita que estos la reciban en forma de propiedad.

## Por qué se llama Render Props?

Existen dos escuelas respecto a la implementación de Render Props, ambas totalmente válidas:

## Opción 1: propiedad render

Esta implementación originalmente dio nombre al patrón, y consiste en utilizar una propiedad render al invocar el componente que contiene la información a compartir. En esta propiedad render definimos una función que permite que los componentes que necesitan la información la reciban en forma de propiedad.

Importante advertir que es el componente que contiene la información a compartir el encargado de renderizar en última instancia.

**Componente compartido:**

```jsx{4}
const PATTERN_NAME = 'Render Props'
class InfoComponent extends Component {
  render() {
    return <div>{this.props.render({ patterName: PATTERN_NAME })}</div>
  }
}
```

**Invocación del componente compartido:**

```jsx
<InfoComponent
  render={({ patternName }) => <NeedsInfoComponent name={patternName} />}
/>
```

Habrás podido deducir que la propiedad no tiene por qué llamarse 'render', esto es por convención y básicamente arbitrario.

## Opción 2: Children as a function

Esta implementación es una variante de la anterior que aprovecha directamente la propiedad children de React: **this.props.children**.

Por lo que he podido saber, actualmente es la implementación más habitual. Veremos a continuación una pequeña prueba de concepto que he desarrollado para ejemplificar esta técnica.

## Código: Tu peso en exoplanetas potencialmente habitables

En el siguiente ejemplo podéis consultar vuestro peso en otros planetas, concretamente en algunos de los exoplanetas más conocidos de la actualidad. Deberemos introducir un valor (tu peso en la Tierra), y este será compartido para que así cada exoplaneta pueda transformarlo en función de sus condiciones locales (concretamente su gravedad estimada) obteniendo así tu hipotético peso.

<img src="/exoplanets.png" width="100%" title="UI de la webapp que calcula tu peso en diferentes exoplanetas">

En este ejemplo, he creado un componente llamado _Weight_ en cuyo estado almacenamos la información a compartir, aquello que el resto de componentes necesitan conocer. Concretamente se trata de nuestro peso en la Tierra y las unidades en las que queremos representarlo (kg o lbs).

Como podéis ver en la línea resaltada, este componente utiliza **this.props.children** para renderizar todos sus componentes hijos.

```jsx{48}
import React, { Component } from 'react'
import styles from './Weight.module.css'

const CONVERSION_FACTOR = 2.205

class Weight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: 0,
      units: 'kg'
    }
  }

  updateWeight = e => {
    this.setState({
      weight: e.target.value
    })
  }

  toggleUnits = e => {
    e.target.checked === true
      ? this.setState({
          weight: this.state.weight * CONVERSION_FACTOR,
          units: 'lbs'
        })
      : this.setState({
          weight: this.state.weight / CONVERSION_FACTOR,
          units: 'kg'
        })
  }

  render() {
    return (
      <div>
        <h3>
          Introduce your weight on Planet Earth:{' '}
          <input
            className={styles.input}
            value={this.state.weight}
            onChange={this.updateWeight}
            type="number"
          />
        </h3>
        <div className={styles.checkbox}>
          <input type="checkbox" onClick={this.toggleUnits} /> Weight in Pounds
        </div>
        <div>{this.props.children(this.state.weight, this.state.units)}</div>
      </div>
    )
  }
}

export default Weight
```

Además, disponemos de un componente principal llamado **App.js** desde el cual invocamos a los principales componentes de la aplicación. Es en este componente en el que "conectamos" la información del estado de _Weight_ con los componentes que la necesitan, concretamente los exoplanetas _Trappist_, _Gliese_, _Kepler_ y _Wolf_.

_Weight_ envuelve a los expoplanetas, y les provee de parte de su estado mediante la declaración de una función con dos parámetros. Esa información llega a los componentes hijos en forma de propiedades, y estos finalmente son renderizados.

```jsx{8}
...
const App = () => {
  return (
    <div className="App">
      ...
      <div className="App-body">
        <Weight>
          {(weight, units) => (
            <div className="App-planets">
              <Trappist weight={weight} units={units} />
              <Gliese weight={weight} units={units} />
              <Kepler weight={weight} units={units} />
              <Wolf weight={weight} units={units} />
            </div>
          )}
        </Weight>
      </div>
      ...
    </div>
  )
}

export default App
```

## Enlace al repositorio

[Aquí tienes](https://github.com/emilioponce/your-weight-on-habitable-exoplanets) el enlace al repositorio donde encontrarás todo el código de la aplicación.

Te aconsejo que lo bajes y trastees un poco, en nuestra profesión se suele aprender más con las manos que con los ojos. Y si te apetece ampliar el ejemplo o implementar alguna mejora no dudes en hacer PR!
