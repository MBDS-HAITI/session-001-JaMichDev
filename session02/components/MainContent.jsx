function MainContent() {
  return (
   <>
       <div>
              <p>Main Content</p>
       </div>
   </>
  );
}

function Todo({title,description}){
  return(
    <div>
         <h2>{title}</h2>
         <p>{description}</p>
    </div>
  );

}

export {MainContent};