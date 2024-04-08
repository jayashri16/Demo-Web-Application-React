function CoreConcept({Image,title,description}){
    return(
      <li>
        <img src={Image} alt={title}/>
        <h2>{title}</h2>
        <p> {description}</p>
      </li>
    )
  }
  export default CoreConcept;