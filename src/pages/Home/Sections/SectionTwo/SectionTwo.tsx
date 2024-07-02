//import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../../../../components/Button/Button'
//import { Pagination } from 'swiper/modules'

export default function SectionTwo() {
    return (
        <section className="my-20 container mx-auto px-5 md:px-10 xl:px-16 flex flex-col gap-5">
            {/* CARDS */}
            
            <h2 className='titleFont text-4xl lg:text-5xl uppercase text-center text-[#0062ff] xl:hidden'>
                Nossos planos:
            </h2>
            {/* <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10,
                    },
                    1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper !w-full !py-10"
            >
                <SwiperSlide className='!flex !justify-center'>
                    <div 
                        className='h-full w-full border-2 border-[#0062ff] rounded-[20px] max-w-[450px] '
                    >
                        <div className='p-5'>
                            <h2 className='titleFont text-3xl md:text-4xl text-center uppercase font-bold text-[3011936] '>
                                plano individual 
                            </h2>
                            <h2 className='titleFont text-[#0062ff] text-6xl 2xl:text-7xl text-center'>
                                R$ 25,90
                            </h2>
                            <ul className='mt-4 pl-5 flex flex-col gap-1 list-disc text-lg font-semibold'>
                                <li>Sem carência independente da idade;</li>
                                <li>Até 70% de desconto em Medicamentos;</li>
                                <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                                <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                                <li>Até 50% de desconto em empresas de Educação;</li>
                                <li>Acesso ilimitado a consultas gratuitas de telemedicina com clínico geral.  </li>
                            </ul>
                            <div className='mx-auto w-fit mt-10'>
                                <Button estilo='azul'/>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!flex !justify-center'>
                    <div 
                        className='w-full border-2 border-[#0062ff] rounded-[20px] max-w-[450px] '
                    >
                        <div className='p-5 '>
                            <h2 className='titleFont text-3xl md:text-4xl text-center uppercase font-bold text-[3011936] '>
                                plano Familiar
                            </h2>
                            <h2 className='titleFont text-[#0062ff] text-6xl 2xl:text-7xl text-center'>
                                R$ 29,90
                            </h2>
                            <ul className='mt-4 pl-5 flex flex-col gap-1 list-disc text-lg font-semibold'>
                                <li>Sem carência independente da idade;</li>
                                <li>Até 70% de desconto em Medicamentos;</li>
                                <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                                <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                                <li>Até 50% de desconto em empresas de Educação;</li>
                                <li>Acesso ilimitado a consultas gratuitas de telemedicina com clínico geral por beneficiário;</li>
                                <li>Até 4 dependentes sem necessidade de grau de parentesco e/ou relação de dependência econômica.</li>
                            </ul>
                            <div className='mx-auto w-fit my-5'>
                                <Button estilo='azul'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!flex !justify-center'>
                    <div 
                        className='w-full border-2 border-[#0062ff] rounded-[20px] max-w-[450px] '
                    >
                        <div className='p-5 '>
                            <h2 className='titleFont text-3xl md:text-4xl text-center uppercase font-bold text-[3011936] '>
                                plano Saúde Individual
                            </h2>
                            <h2 className='titleFont text-[#0062ff] text-6xl 2xl:text-7xl text-center'>
                                R$ 35,90
                            </h2>
                            <ul className='mt-4 pl-5 flex flex-col gap-1 list-disc text-lg font-semibold'>
                                <li>Sem carência independente da idade;</li>
                                <li>Até 70% de desconto em Medicamentos;</li>
                                <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                                <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                                <li>Até 50% de desconto em empresas de Educação;</li>
                                <li>Acesso ilimitado a consultas gratuitas de telemedicina com clínico geral;</li>
                                <li>Incluindo também 6 consultas anuais gratuitas de telemedicina com 22 especialidades médicas.</li>
                            </ul>
                            <div className='mx-auto w-fit my-5'>
                                <Button estilo='azul'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!flex !justify-center'>
                    <div 
                        className='w-full border-2 border-[#0062ff] rounded-[20px] max-w-[450px] '
                    >
                        <div className='p-5 '>
                            <h2 className='titleFont text-3xl md:text-4xl text-center uppercase font-bold text-[3011936] '>
                                plano Saúde Familiar
                            </h2>
                            <h2 className='titleFont text-[#0062ff] text-6xl 2xl:text-7xl text-center'>
                                R$ 39,90
                            </h2>
                            <ul className='mt-4 pl-5 flex flex-col gap-1 list-disc text-lg font-semibold'>
                                <li>Sem carência independente da idade;</li>
                                <li>Até 70% de desconto em Medicamentos;</li>
                                <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                                <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                                <li>Até 50% de desconto em empresas de Educação;</li>
                                <li>Acesso ilimitado a consultas gratuitas de telemedicina com clínico geral;</li>
                                <li>Incluindo também 6 consultas anuais gratuitas de telemedicina com 22 especialidades médicas;</li>
                                <li>Até 4 dependentes sem necessidade de grau de parentesco e/ou relação de dependência econômica.</li>
                            </ul>
                            <div className='mx-auto w-fit my-5'>
                                <Button estilo='azul'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> */}

            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 md:gap-10'>
                <div 
                    className='w-full border-2 border-[#0062ff] rounded-[20px]  '
                >
                    <div className='p-5'>
                        <h2 className='titleFont text-3xl md:text-4xl text-center uppercase font-bold text-[3011936] '>
                            plano individual 
                        </h2>
                        <h2 className='titleFont text-[#0062ff] text-6xl 2xl:text-7xl text-center'>
                            R$ 25,90
                        </h2>
                        <ul className='mt-4 pl-5 flex flex-col gap-1 list-disc text-lg font-semibold'>
                            <li>Sem carência independente da idade;</li>
                            <li>Até 70% de desconto em Medicamentos;</li>
                            <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                            <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                            <li>Até 50% de desconto em empresas de Educação;</li>
                            <li>Acesso ilimitado a consultas gratuitas de telemedicina com clínico geral.  </li>
                        </ul>
                        <div className='mx-auto w-fit mt-10'>
                            <Button estilo='azul'/>
                        </div>
                        
                    </div>
                </div>

                <div 
                    className='w-full border-2 border-[#0062ff] rounded-[20px]  '
                >
                    <div className='p-5 '>
                        <h2 className='titleFont text-3xl md:text-4xl text-center uppercase font-bold text-[3011936] '>
                            plano Familiar
                        </h2>
                        <h2 className='titleFont text-[#0062ff] text-6xl 2xl:text-7xl text-center'>
                            R$ 29,90
                        </h2>
                        <ul className='mt-4 pl-5 flex flex-col gap-1 list-disc text-lg font-semibold'>
                            <li>Sem carência independente da idade;</li>
                            <li>Até 70% de desconto em Medicamentos;</li>
                            <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                            <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                            <li>Até 50% de desconto em empresas de Educação;</li>
                            <li>Acesso ilimitado a consultas gratuitas de telemedicina com clínico geral por beneficiário;</li>
                            <li>Até 4 dependentes sem necessidade de grau de parentesco e/ou relação de dependência econômica.</li>
                        </ul>
                        <div className='mx-auto w-fit my-5'>
                            <Button estilo='azul'/>
                        </div>
                    </div>
                </div>

                <div 
                    className='w-full border-2 border-[#0062ff] rounded-[20px]  '
                >
                    <div className='p-5 '>
                        <h2 className='titleFont text-3xl md:text-4xl text-center uppercase font-bold text-[3011936] '>
                            plano Saúde Individual
                        </h2>
                        <h2 className='titleFont text-[#0062ff] text-6xl 2xl:text-7xl text-center'>
                            R$ 35,90
                        </h2>
                        <ul className='mt-4 pl-5 flex flex-col gap-1 list-disc text-lg font-semibold'>
                            <li>Sem carência independente da idade;</li>
                            <li>Até 70% de desconto em Medicamentos;</li>
                            <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                            <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                            <li>Até 50% de desconto em empresas de Educação;</li>
                            <li>Acesso ilimitado a consultas gratuitas de telemedicina com clínico geral;</li>
                            <li>Incluindo também 6 consultas anuais gratuitas de telemedicina com 22 especialidades médicas.</li>
                        </ul>
                        <div className='mx-auto w-fit my-5'>
                            <Button estilo='azul'/>
                        </div>
                    </div>
                </div>

                <div 
                    className='w-full border-2 border-[#0062ff] rounded-[20px]  '
                >
                    <div className='p-5 '>
                        <h2 className='titleFont text-3xl md:text-4xl text-center uppercase font-bold text-[3011936] '>
                            plano Saúde Familiar
                        </h2>
                        <h2 className='titleFont text-[#0062ff] text-6xl 2xl:text-7xl text-center'>
                            R$ 39,90
                        </h2>
                        <ul className='mt-4 pl-5 flex flex-col gap-1 list-disc text-lg font-semibold'>
                            <li>Sem carência independente da idade;</li>
                            <li>Até 70% de desconto em Medicamentos;</li>
                            <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                            <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                            <li>Até 50% de desconto em empresas de Educação;</li>
                            <li>Acesso ilimitado a consultas gratuitas de telemedicina com clínico geral;</li>
                            <li>Incluindo também 6 consultas anuais gratuitas de telemedicina com 22 especialidades médicas;</li>
                            <li>Até 4 dependentes sem necessidade de grau de parentesco e/ou relação de dependência econômica.</li>
                        </ul>
                        <div className='mx-auto w-fit my-5'>
                            <Button estilo='azul'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}