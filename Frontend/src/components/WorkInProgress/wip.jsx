import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const WorkInProgress = () => {
  return (
    <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
			</div>
			<h2>404 - Página no encontrada</h2>
			<p>Todavia estamos trabajando sobre esta sección. Muy pronto estará disponible.</p>
			<Link to="/">Ir al menú principal</Link>
		</div>
	</div>
  )
}

export default WorkInProgress;