import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import beebZ from '../../../../assets/images/logos/beebz.png'
import englishFluency from '../../../../assets/images/logos/englishFluency.png'
import hablas from '../../../../assets/images/logos/hablas.png'
import openEnglish from '../../../../assets/images/logos/openEnglish.png'
import uninterEducacional from '../../../../assets/images/logos/uninterEducacional.png'
import universidadeBraz from '../../../../assets/images/logos/universidadeBraz.png'
import universidadeCesuca from '../../../../assets/images/logos/universidadeCEUNSP.png'
import universidadeCEUNSP from '../../../../assets/images/logos/universidadeCesuca.png'
import universidadeCruzeiro from '../../../../assets/images/logos/universidadeCruzeiro.png'
import universidadeCruzeiroVirtual from '../../../../assets/images/logos/universidadeCruzeiroVirtual.png'
import universidadeEstacio from '../../../../assets/images/logos/universidadeEstacio.png'
import universidadeFecap from '../../../../assets/images/logos/universidadeFSG.png'
import universidadeFSG from '../../../../assets/images/logos/universidadeFecap.png'
import universidadeModulo from '../../../../assets/images/logos/universidadeJudas.png'
import universidadePositivo from '../../../../assets/images/logos/universidadeModulo.png'
import universidadeJudas from '../../../../assets/images/logos/universidadePositivo.png'
import universidadeUDF from '../../../../assets/images/logos/universidadeUDF.png'
import universidadeUNICID from '../../../../assets/images/logos/universidadeUNICID.png'
import universidadeUNIFRAN from '../../../../assets/images/logos/universidadeUNIFRAN.png'
import universidadeUnip from '../../../../assets/images/logos/universidadeUNIPE.png'
import universidadeUNIPE from '../../../../assets/images/logos/universidadeUnip.jpg'


const parceiros = [
    {
        imagem: beebZ,
        nome: `beebZ`,
        categoria: `Educação`,
        desconto: 'Até 60%'
    },
    {
        imagem: englishFluency,
        nome: `English Fluency`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: hablas,
        nome: `Hablas`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: openEnglish,
        nome: `Amo Vacinas`,
        categoria: `Educação`,
        desconto: 'Até 60%'
    },
    {
        imagem: uninterEducacional,
        nome: `Uninter Educacional`,
        categoria: `Educação`,
        desconto: 'Até 10%'
    },
    {
        imagem: universidadeBraz,
        nome: `Universidade Braz Cubas`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeCesuca,
        nome: `Universidade Cesuca`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },

    {
        imagem: universidadeCEUNSP,
        nome: `Universidade CEUNSP`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeCruzeiro,
        nome: `Universidade Cruzeiro do Sul`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeCruzeiroVirtual,
        nome: `Universidade Cruzeiro do Sul Virtual`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeEstacio,
        nome: `Universidade Estácio`,
        categoria: `Educação`,
        desconto: 'Até 5%'
    },
    {
        imagem: universidadeFecap,
        nome: `Universidade Fecap`,
        categoria: `Educação`,
        desconto: 'Até 20%'
    },
    {
        imagem: universidadeFSG,
        nome: `universidadeFSG`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeModulo,
        nome: `Universidade Módulo`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadePositivo,
        nome: `Universidade Positivo`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeJudas,
        nome: `Universidade São Judas`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeUDF,
        nome: `Universidade UDF`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeUNICID,
        nome: `Universidade UNICID`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeUNIFRAN,
        nome: `Universidade UNIFRAN`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
    {
        imagem: universidadeUnip,
        nome: `Universidade Unip`,
        categoria: `Educação`,
        desconto: 'Até 10%'
    },
    {
        imagem: universidadeUNIPE,
        nome: `Universidade UNIPÊ`,
        categoria: `Educação`,
        desconto: 'Até 50%'
    },
]

export default function SectionThree() {
    return (
       <section className="my-10">
            <div 
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                className="container mx-auto px-5 md:px-10 xl:px-16 flex flex-col"
            >
                <h1 className='my-10 titleFont text-4xl lg:text-5xl text-center  lg:!leading-[60px] '>
                    CONFIRA NOSSOS <br className='hidden lg:block' />PRINCIPAIS <span className='px-3 text-white bg-[#0062ff] rounded-xl'>PARCEIROS E DESCONTOS</span> 
                </h1>

                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    modules={[Pagination, Autoplay]}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1000,
                      }}
                    breakpoints={{
                        768: {
                          slidesPerView: 2,
                          centeredSlides: false
                        },
                        1024: {
                          slidesPerView: 3,
                          centeredSlides: false
                        },
                        1300: {
                            slidesPerView: 4,
                            centeredSlides: false
                          },
                      }}
                    className="mySwiper w-full h-[430px] "
                >
                    {parceiros.map( (parceiro, index) => (
                        <SwiperSlide key={index} className='w-fit !flex justify-center'>
                            <div className='max-w-[320px] w-full h-fit flex flex-col items-center border-2 border-[#0062ff] rounded-[20px] py-10 px-3'>
                                <div>
                                    <img src={parceiro.imagem} className='rounded-full max-w-[150px] ' alt="" />
                                </div>
                                <div className='mt-5 flex flex-col gap-3'>
                                    <h2 className='titleFont text-2xl text-center'>
                                        {parceiro.nome}
                                    </h2>
                                    <p className='text-center'>
                                        {parceiro.categoria}
                                    </p>
                                    <div className='py-2 px-5 font-semibold text-white text-center bg-[#0062ff] rounded-[20px] '>
                                        {parceiro.desconto} de desconto
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
       </section>
    )
}