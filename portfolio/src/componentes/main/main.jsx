import './main.css'
import Projects from './projects'

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
            <section>
                <h1>Meus Projetos</h1>
                <div className='projects'>
                    <Projects/>
                </div>
            </section>
        </div>
    )
}

export default Main;