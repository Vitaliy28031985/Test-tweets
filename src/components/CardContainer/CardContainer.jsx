import CardEl from '../CardEl/CardEl';
import s from './CardContainer.module.css';
function CardContainer() {
   return (
     <section >
       <ul className={s.cardList}>
         <CardEl />
         <CardEl />
         <CardEl />
         <CardEl />
       </ul>
     </section>
   );
}

export default CardContainer;