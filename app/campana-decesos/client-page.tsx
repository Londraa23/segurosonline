"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Check, Shield, Clock, Heart, Users, Star, FileText, ArrowRight, Building, Zap, Plus, Trophy, Smartphone, ShieldCheck, Loader2, X } from "lucide-react"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

export default function CampanaDecesosClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  
  const [formData, setFormData] = useState({
    numPersons: 1,
    ages: [''],
    cp: '',
    currentInsurance: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    privacy: false,
    commercial: false
  });

  // Cleanup body overflow when component unmounts (e.g. user navigates away)
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCTAClick = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setStep(1);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNextStep = () => {
    if (step === 4) {
      setIsCalculating(true);
      setStep(5);
      setTimeout(() => {
        setIsCalculating(false);
        setStep(6);
      }, 2500);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const updateFormData = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const updateAge = (index: number, value: string) => {
    const newAges = [...formData.ages];
    newAges[index] = value;
    updateFormData('ages', newAges);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
    closeModal();
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#0091DA]/20 text-neutral-900">
      
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logos */}
            <div className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/sanitas_logo.webp"
                alt="Sanitas"
                width={96}
                height={48}
                className="h-8 w-auto"
                priority
              />
              <span className="hidden sm:inline text-[15px] font-semibold tracking-tight text-neutral-900">
                Seguros<span className="text-[#0091DA]">Online</span>
              </span>
            </div>

            {/* Phone */}
            <a 
              href="tel:+34624217323" 
              className="flex items-center gap-2 text-sanitas-dark font-semibold hover:text-sanitas-blue transition-colors bg-sanitas-light/50 px-3 py-1.5 rounded-full md:bg-transparent md:px-0"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base hidden sm:inline">Llámanos gratis: </span>
              <span className="text-sm md:text-base">624 21 73 23</span>
            </a>
          </div>
        </div>

        {/* Trust bar below header */}
        <div className="bg-sanitas-light border-y border-sanitas-blue/10 py-2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 text-[11px] sm:text-[13px] text-sanitas-dark font-medium">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sanitas-blue" /> Más de 3 millones de familias protegidas</span>
            <span className="hidden sm:flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sanitas-blue" /> Sin letra pequeña</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sanitas-blue" /> Respuesta en 24h</span>
          </div>
        </div>
      </header>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-20 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8 items-center">
              
              {/* Left Content */}
              <div className="max-w-2xl animate-[slide-up_0.6s_ease-out_forwards]">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-sanitas-light px-3 py-1.5 text-xs sm:text-sm font-semibold text-sanitas-dark ring-1 ring-inset ring-sanitas-blue/20 mb-5 sm:mb-6">
                  <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sanitas-blue" /> Nº1 en seguros de decesos en España
                </div>
                
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
                  Protege a tu familia cuando más te necesiten
                </h1>
                
                <p className="text-lg text-neutral-600 mb-8 max-w-lg">
                  Un seguro de decesos completo para que tus seres queridos no tengan que preocuparse de nada en el momento más difícil.
                </p>
                
                <div className="mb-8">
                  <p className="text-sm text-neutral-500 font-medium mb-1">Desde</p>
                  <p className="text-4xl font-bold text-sanitas-blue flex items-baseline gap-1">
                    5€<span className="text-xl text-neutral-500 font-normal">/mes</span>
                  </p>
                </div>
                
                <div className="flex flex-col gap-3 w-full sm:w-auto sm:inline-flex">
                  <button 
                    onClick={handleCTAClick}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-sanitas-blue px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg hover:bg-sanitas-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Calcular mi precio ahora <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-neutral-500 mt-1 sm:mt-2">
                    <Shield className="w-4 h-4" /> Sin compromiso · Cotización gratuita en 2 minutos
                  </div>
                </div>

                {/* Social Proof */}
                <div className="mt-10 flex items-center gap-4 border-t border-neutral-100 pt-6">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                      "/avatar-3.png",
                      "/avatar-4.png",
                      "/avatar-5.png"
                    ].map((src, i) => (
                      <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                        <Image src={src} alt={`Usuario ${i + 1}`} fill sizes="32px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-yellow-400 mb-0.5">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-xs font-medium text-neutral-600">
                      <span className="font-bold text-neutral-900">4.8/5</span> · Más de 12.000 opiniones verificadas
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image (Hidden on mobile) */}
              <div className="hidden md:block relative mx-auto w-full max-w-lg lg:max-w-none animate-[slide-up_0.8s_ease-out_forwards]">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/family-decesos-hero.png" 
                    alt="Familia sonriendo, abuelos y nietos en el salón" 
                    fill 
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-8 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-float">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">Cobertura</p>
                    <p className="text-sm text-neutral-500">inmediata</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. TRUST STRIP */}
        <section className="bg-sanitas-dark py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center gap-3 text-white">
                <Building className="w-8 h-8 text-sanitas-light opacity-80" />
                <span className="text-sm font-medium">Más de 100 años de experiencia</span>
              </div>
              <div className="flex flex-col items-center gap-3 text-white">
                <Users className="w-8 h-8 text-sanitas-light opacity-80" />
                <span className="text-sm font-medium">+3M familias protegidas</span>
              </div>
              <div className="flex flex-col items-center gap-3 text-white">
                <Zap className="w-8 h-8 text-sanitas-light opacity-80" />
                <span className="text-sm font-medium">Atención 24/7 los 365 días</span>
              </div>
              <div className="flex flex-col items-center gap-3 text-white">
                <FileText className="w-8 h-8 text-sanitas-light opacity-80" />
                <span className="text-sm font-medium">Sin examen médico</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BENEFITS */}
        <section className="py-16 sm:py-20 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                Todo lo que necesitas, cubierto
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Lo básico, resuelto</h3>
                <ul className="space-y-4">
                  {[
                    "Servicio funerario completo incluido",
                    "Traslado nacional e internacional",
                    "Asesoría jurídica personalizada",
                    "Gestión de trámites administrativos"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sanitas-blue shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2 - Highlighted */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-sanitas-blue relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sanitas-blue text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Más valorado
                </div>
                <h3 className="text-xl font-bold text-sanitas-dark mb-6">Apoyo emocional para los tuyos</h3>
                <ul className="space-y-4">
                  {[
                    "Acompañamiento psicológico gratuito",
                    "Gastos de estancia para familiares",
                    "Servicio de guardería de emergencia",
                    "Asistencia en el hogar tras el fallecimiento"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-sanitas-blue shrink-0 mt-0.5 fill-sanitas-blue/20" />
                      <span className="text-neutral-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Mucho más que un seguro</h3>
                <ul className="space-y-4">
                  {[
                    "Farmacogenética: ADN para tratamientos",
                    "Asistencia en viaje nacional e internacional",
                    "Coberturas opcionales personalizables",
                    "Segunda opinión médica"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Plus className="w-5 h-5 text-sanitas-blue shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-16 sm:py-20 bg-white border-y border-neutral-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                Contratar es más fácil de lo que crees
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-neutral-100 -z-10"></div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-sanitas-light text-sanitas-blue flex items-center justify-center text-2xl mb-6 shadow-sm ring-4 ring-white">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">1. Calcula tu precio</h3>
                <p className="text-neutral-600">En menos de 2 minutos, sin datos bancarios</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-sanitas-light text-sanitas-blue flex items-center justify-center text-2xl mb-6 shadow-sm ring-4 ring-white">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">2. Elige tu cobertura</h3>
                <p className="text-neutral-600">Personaliza según tus necesidades y presupuesto</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-sanitas-light text-sanitas-blue flex items-center justify-center text-2xl mb-6 shadow-sm ring-4 ring-white">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">3. Protección inmediata</h3>
                <p className="text-neutral-600">Cobertura activa desde el primer día</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OPTIONAL COVERAGE */}
        <section className="py-20 bg-neutral-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">
              Garantías opcionales que puedes añadir
            </h2>
            <p className="text-lg text-neutral-600 mb-10">
              Personaliza tu seguro al 100% sin pagar por lo que no necesitas
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Accidentes",
                "Hospitalización quirúrgica",
                "Asistencia en viaje",
                "Pequemasistencia",
                "Asistencia senior",
                "Médico asistencial",
                "Protección jurídica integral",
                "Asistencia residentes en el extranjero"
              ].map((tag, i) => (
                <div key={i} className="bg-white border border-neutral-200 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-sanitas-blue hover:text-sanitas-blue transition-colors cursor-default">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA SECTION */}
        <section className="py-16 sm:py-24 sanitas-gradient relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-sanitas-dark/50 rounded-full blur-3xl"></div>
          
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6">
              ¿Hablamos sin compromiso?
            </h2>
            <p className="text-lg sm:text-xl text-sanitas-light mb-8 sm:mb-10 max-w-2xl mx-auto">
              Un asesor personal te ayuda a elegir la mejor opción para tu familia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={handleCTAClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-sanitas-blue shadow-lg hover:bg-neutral-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Calcular precio gratis <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              

            </div>
            
            <div className="flex items-center justify-center gap-3 text-sm text-sanitas-light/80">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Tus datos están protegidos</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Sin spam</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Sin compromiso</span>
            </div>
          </div>
        </section>

      </main>

      {/* 8. FOOTER */}
      <footer className="bg-white border-t border-neutral-100 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/sanitas_logo.webp"
              alt="Sanitas"
              width={96}
              height={48}
              className="h-6 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <span className="text-[14px] font-semibold tracking-tight text-neutral-500">
              Seguros<span className="text-neutral-400">Online</span>
            </span>
            <span className="text-neutral-300 ml-2">|</span>
            <span className="text-neutral-500 text-sm ml-2">Agencia Exclusiva</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-500">
            <a href="#" className="hover:text-neutral-900 transition-colors">Aviso legal</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Política de cookies</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/34624217323"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        <span className="font-medium pr-1 hidden group-hover:block sm:block text-sm sm:text-base">Escríbenos</span>
      </a>

      {/* MULTISTEP FORM MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in p-4 sm:p-6">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between shrink-0 relative">
              <div className="flex items-center gap-2.5 shrink-0">
                <Image
                  src="/sanitas_logo.webp"
                  alt="Sanitas"
                  width={96}
                  height={48}
                  className="h-7 w-auto"
                />
                <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
                  Seguros<span className="text-[#0091DA]">Online</span>
                </span>
              </div>
              <button 
                onClick={closeModal} 
                className="absolute right-4 top-4 p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              
              {/* STEP 1: Number of persons */}
              {step === 1 && (
                <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#002A54] text-center mb-2">
                    ¿Cuántas personas te gustaría incluir en la póliza?
                  </h2>
                  <p className="text-center text-neutral-600 mb-8 font-medium">Selecciona una de las opciones</p>
                  
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        onClick={() => {
                          updateFormData('numPersons', num);
                          updateFormData('ages', Array(num).fill(''));
                          handleNextStep();
                        }}
                        className="w-full bg-white border border-neutral-200 py-4 text-lg font-medium text-neutral-800 hover:border-sanitas-blue hover:text-sanitas-blue hover:bg-sanitas-light/30 transition-colors rounded"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Ages */}
              {step === 2 && (
                <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#002A54] text-center mb-2">
                    Indica la edad de las personas a incluir en la póliza
                  </h2>
                  <p className="text-center text-neutral-600 mb-8 font-medium">El precio final dependerá de las edades de las personas aseguradas</p>
                  
                  <div className="space-y-4 mb-8">
                    {formData.ages.map((age, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border border-neutral-200 p-3 sm:p-4 rounded">
                        <label className="font-semibold text-neutral-700 sm:min-w-[120px]">
                          Asegurado {idx + 1}:
                          <span className="block text-xs text-neutral-400 font-normal">(Obligatorio)</span>
                        </label>
                        <input
                          type="number"
                          placeholder="Edad"
                          value={age}
                          onChange={(e) => updateAge(idx, e.target.value)}
                          className="w-full sm:flex-1 bg-neutral-100 px-4 py-3 rounded border-none outline-none focus:ring-2 focus:ring-sanitas-blue/50 text-neutral-800"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleNextStep}
                    disabled={formData.ages.some(a => !a)}
                    className="w-full bg-[#FFE169] text-[#002A54] hover:bg-[#FFD633] py-4 text-lg font-bold transition-colors rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ¡Siguiente!
                  </button>
                </div>
              )}

              {/* STEP 3: CP */}
              {step === 3 && (
                <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#002A54] text-center mb-2">
                    Indica tu código postal
                  </h2>
                  <p className="text-center text-neutral-600 mb-8 font-medium">Algunas de las provincias españolas obtienen grandes descuentos</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border border-neutral-200 p-3 sm:p-4 rounded mb-8">
                    <label className="font-semibold text-neutral-700 sm:min-w-[140px]">
                      Código postal:
                      <span className="block text-xs text-neutral-400 font-normal">(5 cifras. Obligatorio)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="CP"
                      maxLength={5}
                      value={formData.cp}
                      onChange={(e) => updateFormData('cp', e.target.value)}
                      className="w-full sm:flex-1 bg-neutral-100 px-4 py-3 rounded border-none outline-none focus:ring-2 focus:ring-sanitas-blue/50 text-neutral-800 sm:text-center text-lg"
                    />
                  </div>
                  <button
                    onClick={handleNextStep}
                    disabled={formData.cp.length !== 5}
                    className="w-full bg-[#FFE169] text-[#002A54] hover:bg-[#FFD633] py-4 text-lg font-bold transition-colors rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ¡Siguiente!
                  </button>
                </div>
              )}

              {/* STEP 4: Current Insurance */}
              {step === 4 && (
                <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#002A54] text-center mb-2">
                    ¿Tienes un seguro de decesos actualmente?
                  </h2>
                  <p className="text-center text-neutral-600 mb-8 font-medium">Selecciona una de las opciones</p>
                  
                  <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                    {["No tengo seguro", "Sí, Santalucía", "Sí, Asisa", "Sí, Ocaso", "Sí, Adeslas", "Sí, Helvetia", "Sí, DKV"].map((ins) => (
                      <button
                        key={ins}
                        onClick={() => {
                          updateFormData('currentInsurance', ins);
                          handleNextStep();
                        }}
                        className="w-full bg-white border border-neutral-200 py-4 text-lg font-medium text-neutral-800 hover:border-sanitas-blue hover:text-sanitas-blue hover:bg-sanitas-light/30 transition-colors rounded"
                      >
                        {ins}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Loading State */}
              {step === 5 && (
                <div className="flex flex-col items-center justify-center py-16 animate-in fade-in duration-300">
                  <Loader2 className="w-16 h-16 text-sanitas-blue animate-spin mb-6" />
                  <h2 className="text-2xl font-bold text-[#002A54]">Calculando precio...</h2>
                  <p className="text-neutral-500 mt-2">Buscando las mejores coberturas para ti</p>
                </div>
              )}

              {/* STEP 6: Final Form */}
              {step === 6 && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#002A54] text-center mb-4">
                    ¡Ya tenemos tu precio!
                  </h2>
                  <p className="text-center text-neutral-700 mb-8">
                    Por favor, déjanos tus datos a continuación para que nos podamos poner en <strong>contacto contigo gratis y sin compromiso</strong>, y te informaremos del precio y de todos los detalles:
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border border-neutral-200 p-4 rounded bg-white">
                      <label className="font-semibold text-neutral-700 mb-2 block">
                        Nombre: <span className="font-normal text-neutral-400 text-sm">(Obligatorio)</span>
                      </label>
                      <input required type="text" value={formData.name} onChange={e => updateFormData('name', e.target.value)} className="w-full bg-neutral-100 px-4 py-3 rounded border-none outline-none focus:ring-2 focus:ring-sanitas-blue/50" />
                    </div>
                    
                    <div className="border border-neutral-200 p-4 rounded bg-white">
                      <label className="font-semibold text-neutral-700 mb-2 block">
                        Apellidos: <span className="font-normal text-neutral-400 text-sm">(Obligatorio)</span>
                      </label>
                      <input required type="text" value={formData.lastName} onChange={e => updateFormData('lastName', e.target.value)} className="w-full bg-neutral-100 px-4 py-3 rounded border-none outline-none focus:ring-2 focus:ring-sanitas-blue/50" />
                    </div>

                    <div className="border border-neutral-200 p-4 rounded bg-white">
                      <label className="font-semibold text-neutral-700 mb-2 block">
                        Email: <span className="font-normal text-neutral-400 text-sm">(Obligatorio)</span>
                      </label>
                      <input required type="email" value={formData.email} onChange={e => updateFormData('email', e.target.value)} className="w-full bg-neutral-100 px-4 py-3 rounded border-none outline-none focus:ring-2 focus:ring-sanitas-blue/50" />
                    </div>

                    <div className="border border-neutral-200 p-4 rounded bg-white">
                      <label className="font-semibold text-neutral-700 mb-2 block">
                        Teléfono: <span className="font-normal text-neutral-400 text-sm">Solo 9 carácteres (Obligatorio)</span>
                      </label>
                      <input required type="tel" maxLength={9} minLength={9} value={formData.phone} onChange={e => updateFormData('phone', e.target.value)} className="w-full bg-neutral-100 px-4 py-3 rounded border-none outline-none focus:ring-2 focus:ring-sanitas-blue/50" />
                    </div>

                    <div className="pt-4 space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="flex items-center h-5">
                          <input required type="checkbox" checked={formData.privacy} onChange={e => updateFormData('privacy', e.target.checked)} className="w-4 h-4 rounded border-neutral-300 text-sanitas-blue focus:ring-sanitas-blue" />
                        </div>
                        <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          Acepto el tratamiento de mis datos y la política de privacidad de datos. <span className="font-semibold">(Obligatorio)</span>
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="flex items-center h-5">
                          <input type="checkbox" checked={formData.commercial} onChange={e => updateFormData('commercial', e.target.checked)} className="w-4 h-4 rounded border-neutral-300 text-sanitas-blue focus:ring-sanitas-blue" />
                        </div>
                        <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          Deseo recibir información comercial. <span className="text-neutral-400">(Opcional)</span>
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!formData.name || !formData.lastName || !formData.email || formData.phone.length !== 9 || !formData.privacy}
                      className="w-full bg-[#FFE169] text-[#002A54] hover:bg-[#FFD633] py-4 text-xl font-bold transition-colors rounded disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                      Ver mi precio
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Global CSS for Modal Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}} />
    </div>
  )
}
