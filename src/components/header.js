import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

//@TODO revisar qué pasa con esta linea de antd (si se elimina todos los estilos mal, no solo de avatar)
import 'antd/lib/avatar/style/css'

class Header extends Component {
  _isMounted = false

  state = {
    sticky: false
  }

  componentDidMount() {
    this._isMounted = true
    document.addEventListener('scroll', this.handleScroll, true)
  }

  componentWillUnmount() {
    this._isMounted = false
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    const MAX_VERTICAL_OFFSET = 80
    if (this._isMounted) {
      if (window.pageYOffset >= MAX_VERTICAL_OFFSET) {
        if (!this.state.sticky) this.setState({ sticky: true })
      } else {
        if (this.state.sticky) this.setState({ sticky: false })
      }
    }
  }

  render() {
    let { sticky } = this.state
    return (
      <div className={sticky ? styles.stickyHeader : styles.header}>
        <div className={styles.widthWrapper}>
          <div
            className={styles.title}
            style={{ visibility: sticky ? 'visible' : 'hidden' }}
          >
            Emilio Ponce #dev
          </div>
          <div className={styles.menu}>
            <Link to={`/`} className={styles.a}>
              Inicio
            </Link>
            <Link to={`/sobre-mi/`} className={styles.a}>
              Sobre mí
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
