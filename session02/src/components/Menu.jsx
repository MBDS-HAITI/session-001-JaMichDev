function MenuItem({title,onClick}){
  return(
    
        <button onClick={onClick}>{title}</button> 
  );
}

export {MenuItem};