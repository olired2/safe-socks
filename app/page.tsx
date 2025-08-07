"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Shield,
  Star,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface ProductCarouselProps {
  images: string[]
  alt: string
}

function ProductCarousel({ images, alt }: ProductCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative bg-white rounded-2xl p-4 mb-6 group">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`${alt} - Imagen ${currentImage + 1}`}
          width={200}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentImage ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Custom hook for scroll animations
function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default function SafeSocksLanding() {
  useScrollAnimation()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/Logotipo.jpeg"
              alt="Safe Socks Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("product")}
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                Producto
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              data-animate="fade-right"
              className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Camina con
                <span className="text-red-500 block">Seguridad</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubre Safe Socks, los calcetines antiderrapantes que revolucionan tu comodidad y seguridad. Diseñados
                con tecnología avanzada para brindarte la máxima protección en cada paso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("product")}
                  className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
                >
                  Conocer Producto
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Contactar
                </button>
              </div>
            </div>
            <div
              data-animate="fade-left"
              className="opacity-0 translate-x-[50px] transition-all duration-1000 ease-out relative"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/Logotipo.jpeg"
                  alt="Safe Socks - Calcetines Antiderrapantes"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Shield className="text-red-500 w-6 h-6" />
                  <span className="font-semibold text-gray-900">100% Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nuestra Línea de Productos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra completa gama de calcetines antiderrapantes Safe Socks, diseñados para diferentes
              necesidades y estilos de vida.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Product 1 - Classic */}
            <div
              data-animate="fade-up"
              className="opacity-0 translate-y-[50px] transition-all duration-1000 ease-out bg-gray-50 rounded-3xl p-6 hover:shadow-xl hover:shadow-red-100 transition-shadow"
              style={{ transitionDelay: "100ms" }}
            >
              <ProductCarousel
                images={[
                  "/ejemplo-p1.jpeg",
                  "/ejemplo2-p1.jpeg",
               
                ]}
                alt="Safe Socks Classic"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Socks Classic</h3>
              <p className="text-gray-600 mb-4">
                Nuestro modelo clásico con tecnología antiderrapante básica. Perfecto para uso diario en el hogar.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-bold text-lg">Desde $15</span>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
            </div>

            {/* Product 2 - Premium */}
            <div
              data-animate="fade-up"
              className="opacity-0 translate-y-[50px] transition-all duration-1000 ease-out bg-gray-50 rounded-3xl p-6 hover:shadow-xl hover:shadow-red-100 transition-shadow"
              style={{ transitionDelay: "200ms" }}
            >
              <ProductCarousel
                images={[
       "/ejemplo-p1.jpeg",
                  "/ejemplo2-p1.jpeg",
                ]}
                alt="Safe Socks Premium"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Socks Premium</h3>
              <p className="text-gray-600 mb-4">
                Versión premium con materiales de alta calidad y mayor durabilidad. Ideal para uso intensivo.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-bold text-lg">Desde $25</span>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
            </div>

            {/* Product 3 - Sport */}
            <div
              data-animate="fade-up"
              className="opacity-0 translate-y-[50px] transition-all duration-1000 ease-out bg-gray-50 rounded-3xl p-6 hover:shadow-xl hover:shadow-red-100 transition-shadow"
              style={{ transitionDelay: "300ms" }}
            >
              <ProductCarousel
                images={[
              "/ejemplo-p1.jpeg",
                  "/ejemplo2-p1.jpeg",
                ]}
                alt="Safe Socks Sport"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Socks Sport</h3>
              <p className="text-gray-600 mb-4">
                Diseñados para actividades deportivas con tecnología de absorción de humedad y máximo agarre.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-bold text-lg">Desde $30</span>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
            </div>

            {/* Product 4 - Kids */}
            <div
              data-animate="fade-up"
              className="opacity-0 translate-y-[50px] transition-all duration-1000 ease-out bg-gray-50 rounded-3xl p-6 hover:shadow-xl hover:shadow-red-100 transition-shadow"
              style={{ transitionDelay: "400ms" }}
            >
              <ProductCarousel
                images={[
                "/ejemplo-p1.jpeg",
                  "/ejemplo2-p1.jpeg",
                ]}
                alt="Safe Socks Kids"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Socks Kids</h3>
              <p className="text-gray-600 mb-4">
                Especialmente diseñados para niños con colores divertidos y máxima seguridad para los más pequeños.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-bold text-lg">Desde $12</span>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
            </div>

            {/* Product 5 - Medical */}
            <div
              data-animate="fade-up"
              className="opacity-0 translate-y-[50px] transition-all duration-1000 ease-out bg-gray-50 rounded-3xl p-6 hover:shadow-xl hover:shadow-red-100 transition-shadow md:col-span-2 lg:col-span-1"
              style={{ transitionDelay: "500ms" }}
            >
              <ProductCarousel
                images={[
                      "/ejemplo-p1.jpeg",
                  "/ejemplo2-p1.jpeg",
                ]}
                alt="Safe Socks Medical"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Socks Medical</h3>
              <p className="text-gray-600 mb-4">
                Desarrollados para hospitales y centros médicos con propiedades antibacterianas y máxima higiene.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-bold text-lg">Desde $35</span>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
            </div>
          </div>
          {/* Call to Action */}
          <div className="text-center mt-12" data-animate="fade-up">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg text-lg"
            >
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">¿Por qué elegir Safe Socks?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre todos los beneficios que hacen de Safe Socks la mejor opción para tu seguridad y comodidad
              diaria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              data-animate="fade-up"
              className="opacity-0 translate-y-[50px] transition-all duration-1000 ease-out bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-red-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Máxima Seguridad</h3>
              <p className="text-gray-600">
                Tecnología antiderrapante que previene caídas y resbalones en cualquier superficie.
              </p>
            </div>

            <div
              data-animate="fade-up"
              className="opacity-0 translate-y-[50px] transition-all duration-1000 ease-out bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Star className="text-red-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Calidad Premium</h3>
              <p className="text-gray-600">
                Materiales de primera calidad que garantizan durabilidad y confort excepcional.
              </p>
            </div>

            <div
              data-animate="fade-up"
              className="opacity-0 translate-y-[50px] transition-all duration-1000 ease-out bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-red-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Para Toda la Familia</h3>
              <p className="text-gray-600">
                Disponible en todas las tallas, perfecto para niños, adultos y adultos mayores.
              </p>
            </div>

            <div
              data-animate="fade-up"
              className="opacity-0 translate-y-[50px] transition-all duration-1000 ease-out bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              style={{ transitionDelay: "400ms" }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-red-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Garantía Total</h3>
              <p className="text-gray-600">
                Respaldamos la calidad de nuestros productos con garantía de satisfacción.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8" data-animate="fade-up">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-red-500 mb-2">10,000+</div>
              <div className="text-gray-600 font-semibold">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-red-500 mb-2">99%</div>
              <div className="text-gray-600 font-semibold">Efectividad Antiderrapante</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-red-500 mb-2">5★</div>
              <div className="text-gray-600 font-semibold">Calificación Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contáctanos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Tienes preguntas sobre Safe Socks? Estamos aquí para ayudarte. Contáctanos a través de cualquiera de
              nuestros canales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div
              data-animate="fade-right"
              className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out"
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">ejemplo@gmail.com</p>
                    <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dirección</h3>
                    <p className="text-gray-600">
                      123 Innovation Street
                      <br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Síguenos en Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-red-500 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-red-500 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-red-500 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact Button */}
          <div className="mt-8 text-center" data-animate="fade-up">
            <a
              href="https://wa.me/523121001096?text=Hola,%20quiero%20más%20información%20sobre%20Safe%20Socks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <Image
                src="/Logotipo.jpeg"
                alt="Safe Socks Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Safe Socks. Todos los derechos reservados.</p>
              <p className="text-gray-400 text-sm mt-2">Diseñado con ❤️ para tu seguridad y comodidad</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
