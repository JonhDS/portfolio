import './main.css'
import Projects from './projects'
import DivStyle from './components.style/div.style'
import SectionStyle from './components.style/section.style'

const Main = () => {
    return (
        <div className='container'>
            <section className='container_dois'>
                <div className='text'>
                    <article>
                        <span>Olá,</span><h1>Meu nome é Jonathan Dantas</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        <button className='btn'>Sobre mim</button>
                    </article>
                    <article>
                        <h2>Qualificações</h2>
                        <p className='textp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam dolore esse voluptas natus deleniti enim magnam vel itaque quidem, facere sint illo alias sequi dolores delectus, maxime nam eum.</p>
                    </article>
                </div>
                <div>
                    <img src="./src/assets/images/jonathan.png" alt="" />
                </div>
            </section>
            <SectionStyle>
                <h1>Meus Projetos</h1>
                <DivStyle>
                    <Projects/>
                </DivStyle>
            </SectionStyle>
        </div>
    )
}

export default Main;