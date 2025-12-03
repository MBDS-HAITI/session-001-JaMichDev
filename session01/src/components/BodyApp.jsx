import {StaticDateTime} from '../components/StaticDate.jsx';
import {DynamicDateTime} from '../components/DynamicDate.jsx';

function MainContent() {
  return (
   <>
       <div>
            <StaticDateTime/>
            <DynamicDateTime/>
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

export {MainContent, Todo};