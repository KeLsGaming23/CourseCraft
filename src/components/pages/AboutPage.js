import michael from './images/michael.jpg';
import lawrence from './images/lawrence.jpg';
import dex from './images/Dex.png';
import jeanson from './images/jeanson.jpg'

function AboutPage() {
    return (
        <>
            <div className='bg-dark p-5'>
                <h1 className='text-white text-center'>OUR TEAM</h1>
                <div className="d-flex flex-wrap gap-4 justify-content-center p-5">

                    <div className='text-center text-white'>
                        <img src={michael} alt="michael" height={200} width={200} className='rounded-circle cards' />
                        <h5 className='mt-3 mb-1 cards'>Michael Alcoriza</h5>
                        <div className='d-flex gap-2 justify-content-center'>
                            <a href="https://www.facebook.com/mykeLs23" target='_blank'><i class="fa-lg fa-brands fa-facebook" /></a>
                            <a href="https://www.youtube.com/channel/UCdQ9DCVqRj8PcZAgPq7oIJw" target='_blank'><i class="fa-lg fa-brands fa-youtube" /></a>
                        </div>
                    </div>

                    <div className='text-center text-white'>
                        <img src={lawrence} alt="lawrence" height={200} width={200} className='rounded-circle cards' />
                        <h5 className='mt-3 mb-1 cards'>Lawrence Prieto</h5>
                        <div className='d-flex gap-2 justify-content-center'>
                            <a href="https://www.facebook.com/lawrenxceprieto" target='_blank'><i class="fa-lg fa-brands fa-facebook" /></a>
                            <a href="https://github.com/zsaries" target='_blank'><i class="fa-lg fa-brands fa-github" /></a>
                        </div>
                    </div>

                    <div className='text-center text-white'>
                        <img src={dex} alt="dex" height={200} width={200} className='rounded-circle cards' />
                        <h5 className='mt-3 mb-1 cards'>Dex Badad</h5>
                        <div className='d-flex gap-2 justify-content-center'>
                            <a href="https://www.facebook.com/jbadad11" target='_blank'><i class="fa-lg fa-brands fa-facebook" /></a>
                            <a href="https://www.linkedin.com/in/d-badad-a0797223a/" target='_blank'><i class="fa-lg fa-brands fa-linkedin" /></a>
                        </div>
                    </div>

                    <div className='text-center text-white'>
                        <img src={jeanson} alt="dex" height={200} width={200} className='rounded-circle cards' />
                        <h5 className='mt-3 mb-1 cards'>Jeanson Acal</h5>
                        <div className='d-flex gap-2 justify-content-center'>
                            <a href="https://www.facebook.com/jeanson.acal" target='_blank'><i class="fa-lg fa-brands fa-facebook" /></a>
                            <a href="https://www.instagram.com/jeanson_0/" target='_blank'><i class="fa-lg fa-brands fa-instagram" /></a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AboutPage;