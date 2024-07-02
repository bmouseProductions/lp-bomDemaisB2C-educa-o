import logoCentral from '../../assets/images/logo-central.webp'
import logoFrente from '../../assets/images/logoFrente.webp'
import banner from '../../assets/images/Header/banner-desk.webp'
import Button from '../Button/Button'

export default function Header(){
    return (
        <header className="mx-auto pt-10 lg:py-10 lg:my-20 w-full lg:w-[90%] lg:h-[500px] lg:max-w-[1400px] lg:rounded-[30px] bg-[#0062ff] bg-banner">
            <div className=" container mx-auto px-5 md:px-10 xl:px-16 2xl:px-20 ">
                <div className=' flex flex-col items-center lg:flex-row '>
                    <div 
                        data-aos="fade-down-right" 
                        data-aos-duration="2000"
                        className='lg:max-w-[480px] flex flex-col gap-10 lg:gap-4'
                    >
                        <div>
                            <img src={logoCentral} className='lg:hidden mx-auto lg:mx-0 w-[200px] ' alt="" />
                            <img src={logoFrente} className='hidden lg:block mx-auto lg:mx-0 lg:w-[300px] ' alt="" />
                        </div>
                        <h1 className='titleFont text-3xl md:text-6xl lg:text-[38px] md:leading-[50px] lg:leading-[45px] text-center uppercase md:text-start text-[#fff800]  '>
                            bomd+ é ter até 60% em Universidades e Escolas de Idioma
                        </h1>
                        <p className='text-white text-center lg:text-lg lg:text-start'>
                            Garanta até 75% off em Exames, Oftalmologia, Odontologia,
                            Medicamentos, Imunização, Educação, Beleza e Bem-estar.
                        </p>

                        <div className='mx-auto lg:mt-5 lg:mx-0'>
                            <Button estilo='amarelo'/>
                        </div>
                    </div>
                    
                    <div className='mt-10 lg:mt-0 w-full h-full box-content '>
                        <img 
                            data-aos="zoom-in-up" 
                            data-aos-duration="2000"
                            src={banner} 
                            className='mx-auto mb-[-30px] md:mb-[-50px] lg:absolute lg:ml-[-20px] xl:ml-[10%] 2xl:ml-[200px] lg:top-10 lg:max-h-[600px] ' 
                            alt="" 
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}