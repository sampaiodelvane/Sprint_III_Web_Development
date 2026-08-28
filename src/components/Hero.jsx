const Hero = (props) => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
        <a className="btn-primary" href="#galeria">Ver a galeria</a>
      </div>
    </section>
  )
}

export default Hero
