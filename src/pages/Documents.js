import react from "react";

const Documents = () => {
    return (
        <div className="documents">
            <h1  className='page-heading'> Документи</h1>
            <div>
               <h2>Нормативні документи</h2>
                <span><a href="https://www.uzhnu.edu.ua/en/infocentre/get/9268" rel="noreferrer" target="_blank">Статут Ужгородського національного університету</a></span>
                <span><a href="https://www.uzhnu.edu.ua/uk/infocentre/get/31357" rel="noreferrer" target="_blank">
Положення про організацію освітнього процесу в Державному вищому навчальному закладі «Ужгородський національний університет»
</a></span>
                <span><a href="" rel="noreferrer" target="_blank">Колективний договір між адміністрацією та первинною профспілковою організацією студентів</a></span>
                <span><a href="" rel="noreferrer" target="_blank">ПОЛОЖЕННЯ ПРО ПЕРВИННУ ПРОФСПІЛКОВУ ОРГАНІЗАЦІЮ СТУДЕНТІВ</a></span>
                <span><a href="https://www.uzhnu.edu.ua/uk/infocentre/get/7589" rel="noreferrer" target="_blank">Положення про студентське самоврядування Ужгородського національного університету </a></span>
                </div>

                <div>
               <h2>Профспілкові документи</h2>
                <span><a href="https://zakon.rada.gov.ua/laws/show/1045-14#Text" rel="noreferrer" target="_blank">Закон України “Про професійні спілки, їх права та гарантії діяльності”</a></span>
                <span><a href="https://pon.org.ua/statut/" rel="noreferrer" target="_blank">СТАТУТ ПРОФСПІЛКИ ПРАЦІВНИКІВ ОСВІТИ І НАУКИ УКРАЇНИ</a></span>
                </div>

               
        </div>
    )
}

export default Documents;