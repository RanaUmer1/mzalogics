import React, { useState, useEffect, Suspense, lazy } from 'react'
import {
  Menu, X, ChevronDown, ArrowRight, Code, Smartphone, Globe, Monitor, CheckCircle, Users, Award, TrendingUp, Mail,
  Phone, MapPin, Linkedin, Twitter, Github, Send, Star, Briefcase, Calendar
} from 'lucide-react'

// Lazy load Three.js hero
const ThreeHero = lazy(() => Promise.resolve({ default: ThreeHeroComponent }))

// Three.js Hero Component
function ThreeHeroComponent() {
  const canvasRef = React.useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Check WebGL support
    const testCanvas = document.createElement('canvas')
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')
    if (!gl) return

    // Three.js setup
    let scene, camera, renderer, particles
    let animationId

    try {
      const THREE = window.THREE
      if (!THREE) return

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000)
      camera.position.z = 5

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true })
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      // Particle system
      const geometry = new THREE.BufferGeometry()
      const particleCount = 1000
      const positions = new Float32Array(particleCount * 3)
      const velocities = []

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10
        positions[i + 1] = (Math.random() - 0.5) * 10
        positions[i + 2] = (Math.random() - 0.5) * 10
        velocities.push({
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        })
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

      const material = new THREE.PointsMaterial({
        color: 0x6366f1,
        size: 0.05,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      })

      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      // Animation
      function animate() {
        animationId = requestAnimationFrame(animate)

        const pos = particles.geometry.attributes.position.array
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3] += velocities[i].x
          pos[i * 3 + 1] += velocities[i].y
          pos[i * 3 + 2] += velocities[i].z

          if (Math.abs(pos[i * 3]) > 5) velocities[i].x *= -1
          if (Math.abs(pos[i * 3 + 1]) > 5) velocities[i].y *= -1
          if (Math.abs(pos[i * 3 + 2]) > 5) velocities[i].z *= -1
        }
        particles.geometry.attributes.position.needsUpdate = true
        particles.rotation.y += 0.001

        renderer.render(scene, camera)
      }
      animate()

      // Handle resize
      const handleResize = () => {
        if (!canvasRef.current) return
        camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        cancelAnimationFrame(animationId)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    } catch (err) {
      console.error('Three.js initialization failed:', err)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

// Fallback hero background
function FallbackHero() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}

// Main App Component
export default function TechForgeDemo() {
  const [activePage, setActivePage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [threeJsLoaded, setThreeJsLoaded] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '', service: '' })

  useEffect(() => {
    // Load Three.js from CDN (global window.THREE)
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    script.async = true
    script.onload = () => setThreeJsLoaded(true)
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Process', id: 'process' },
    { name: 'Blog', id: 'blog' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact' },
  ]

  const services = [
    { icon: Smartphone, title: 'Android Development', desc: 'Native Kotlin, Flutter & React Native apps', features: ['Native Android (Kotlin/Java)', 'Flutter cross-platform', 'React Native', 'Material Design UI', 'Play Store optimization'] },
    { icon: Code, title: 'iOS Development', desc: 'Swift, SwiftUI & cross-platform solutions', features: ['Native iOS (Swift/SwiftUI)', 'Flutter & React Native', 'Human Interface Guidelines', 'App Store deployment', 'TestFlight integration'] },
    { icon: Globe, title: 'Web Development', desc: 'React, Next.js, Node.js & modern stacks', features: ['React/Next.js/Vue', 'Node.js/Express backends', 'Progressive Web Apps', 'REST & GraphQL APIs', 'Cloud deployment'] },
    { icon: Monitor, title: 'Desktop Apps', desc: 'Electron, .NET & native desktop solutions', features: ['Electron cross-platform', '.NET/WPF Windows apps', 'macOS native apps', 'System integration', 'Auto-updates'] },
    { icon: CheckCircle, title: 'QA & Testing', desc: 'Comprehensive quality assurance services', features: ['Manual & automated testing', 'Test automation (Selenium/Cypress)', 'Performance testing', 'Security audits', 'CI/CD integration'] },
    { icon: TrendingUp, title: 'Digital Marketing', desc: 'SEO, ads, content & growth strategies', features: ['SEO & content marketing', 'Google/Facebook Ads', 'Social media management', 'Analytics & tracking', 'Conversion optimization'] },
  ]

  const portfolio = [
    { title: 'FinTech Mobile App', category: 'Android/iOS', image: '🏦', stats: '500K+ downloads', tech: ['Flutter', 'Firebase', 'Stripe'] },
    { title: 'E-commerce Platform', category: 'Web', image: '🛍️', stats: '$2M+ revenue', tech: ['Next.js', 'Node.js', 'PostgreSQL'] },
    { title: 'Healthcare Dashboard', category: 'Web/Desktop', image: '🏥', stats: '50+ hospitals', tech: ['React', 'Electron', 'AWS'] },
    { title: 'Social Media App', category: 'Mobile', image: '📱', stats: '1M+ users', tech: ['React Native', 'GraphQL', 'Redis'] },
  ]

  const process = [
    { step: 1, title: 'Discovery', desc: 'Understanding your vision, goals, and requirements through detailed consultation.' },
    { step: 2, title: 'Planning', desc: 'Creating roadmap, architecture, and detailed technical specifications.' },
    { step: 3, title: 'Design', desc: 'Crafting intuitive UI/UX with prototypes and user testing.' },
    { step: 4, title: 'Development', desc: 'Agile development with bi-weekly sprints and continuous integration.' },
    { step: 5, title: 'Testing', desc: 'Comprehensive QA across devices, platforms, and use cases.' },
    { step: 6, title: 'Launch', desc: 'Deployment, monitoring, and post-launch support.' },
  ]

  const blogPosts = [
    { title: 'Flutter vs React Native in 2025', date: 'Oct 15, 2025', category: 'Mobile', author: 'Sarah Chen' },
    { title: 'Building Scalable APIs with Node.js', date: 'Oct 10, 2025', category: 'Backend', author: 'Mike Rodriguez' },
    { title: 'The Future of Progressive Web Apps', date: 'Oct 5, 2025', category: 'Web', author: 'Emily Watson' },
  ]

  const careers = [
    { title: 'Senior React Developer', type: 'Full-time', location: 'Remote', exp: '5+ years' },
    { title: 'Flutter Developer', type: 'Full-time', location: 'Hybrid', exp: '3+ years' },
    { title: 'QA Engineer', type: 'Full-time', location: 'On-site', exp: '2+ years' },
    { title: 'Digital Marketing Specialist', type: 'Contract', location: 'Remote', exp: '4+ years' },
  ]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert(`Message sent! We'll contact you at ${formData.email} soon.`)
    setFormData({ name: '', email: '', message: '', service: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-brand-accent" />
              <span className="ml-2 text-xl font-bold text-gray-900">TechForge</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activePage === item.id ? 'text-brand-primary' : 'text-gray-700 hover:text-brand-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left py-2 text-sm font-medium ${
                    activePage === item.id ? 'text-brand-primary' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* HOME PAGE */}
        {activePage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative bg-white overflow-hidden h-screen flex items-center">
              <div className="absolute inset-0 z-0">
                {threeJsLoaded ? (
                  <Suspense fallback={<FallbackHero />}>
                    <ThreeHero />
                  </Suspense>
                ) : (
                  <FallbackHero />
                )}
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                  Building Tomorrow's
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Digital Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Expert software development for mobile, web, and desktop. From idea to launch, we transform your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setActivePage('contact')}
                    className="px-8 py-4 bg-brand-primary text-white rounded-lg font-semibold hover:opacity-90 transition-colors flex items-center justify-center"
                  >
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setActivePage('portfolio')}
                    className="px-8 py-4 bg-white text-brand-primary border-2 border-brand-primary rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                  >
                    View Our Work
                  </button>
                </div>
              </div>
            </section>

            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-6 opacity-80">
                  <img src="/logos/logo1.svg" alt="Client 1" className="h-8" />
                  <img src="/logos/logo2.svg" alt="Client 2" className="h-8" />
                  <img src="/logos/logo3.svg" alt="Client 3" className="h-8" />
                  <img src="/logos/logo4.svg" alt="Client 4" className="h-8" />
                </div>
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border bg-white shadow-sm">
                    <p className="text-lg text-slate-700">“The team delivered ahead of schedule and the quality exceeded our expectations.”</p>
                    <div className="mt-4 text-sm text-slate-500">VP Engineering, Fintech</div>
                  </div>
                  <div className="p-6 rounded-xl border bg-white shadow-sm">
                    <p className="text-lg text-slate-700">“Outstanding UX and performance. Our conversion rates went up 35% post-launch.”</p>
                    <div className="mt-4 text-sm text-slate-500">Head of Product, Ecommerce</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {services.slice(0, 6).map((service, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
                      <service.icon className="h-12 w-12 text-brand-accent mb-4" />
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.desc}</p>
                      <button onClick={() => setActivePage('services')} className="text-brand-primary font-semibold flex items-center hover:opacity-90">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-indigo-600 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">200+</div>
                    <div className="text-indigo-200">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <div className="text-indigo-200">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">95%</div>
                    <div className="text-indigo-200">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">8+</div>
                    <div className="text-indigo-200">Years Experience</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* SERVICES PAGE */}
        {activePage === 'services' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold text-center mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Comprehensive software development services tailored to your needs</p>

              <div className="space-y-16">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      <div className="bg-indigo-100 p-4 rounded-xl">
                        <service.icon className="h-16 w-16 text-brand-accent" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-lg text-gray-600 mb-6">{service.desc}</p>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button onClick={() => setActivePage('contact')} className="mt-6 px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:opacity-90 transition-colors">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PORTFOLIO PAGE */}
        {activePage === 'portfolio' && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold text-center mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Real projects, real results. See how we've helped businesses succeed.</p>

              <div className="grid md:grid-cols-2 gap-8">
                {portfolio.map((project, idx) => (
                  <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 h-64 flex items-center justify-center text-9xl">
                      {project.image}
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-brand-primary font-semibold mb-2">{project.category}</div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span className="font-semibold">{project.stats}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="text-brand-primary font-semibold flex items-center hover:opacity-90">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ABOUT PAGE */}
        {activePage === 'about' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold text-center mb-6">About TechForge</h1>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                A passionate team of developers, designers, and innovators building exceptional digital products.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    We empower businesses through cutting-edge technology solutions. Our mission is to transform ideas into scalable, user-friendly applications that drive growth and success.
                  </p>
                  <p className="text-lg text-gray-600">
                    Founded in 2017, we've grown from a small startup to a trusted partner for businesses worldwide, delivering over 200 successful projects across various industries.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Award className="h-6 w-6 text-brand-accent mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">Expert Team</div>
                        <div className="text-gray-600">50+ certified developers and designers</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 text-brand-accent mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">Client-Centric</div>
                        <div className="text-gray-600">95% client satisfaction rate</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-brand-accent mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">Proven Results</div>
                        <div className="text-gray-600">$50M+ revenue generated for clients</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-12">
                <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="font-bold mb-2">Excellence</h3>
                    <p className="text-gray-600 text-sm">Delivering top-quality solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="font-bold mb-2">Integrity</h3>
                    <p className="text-gray-600 text-sm">Transparent and honest partnerships</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="font-bold mb-2">Innovation</h3>
                    <p className="text-gray-600 text-sm">Embracing cutting-edge tech</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="font-bold mb-2">Growth</h3>
                    <p className="text-gray-600 text-sm">Continuous learning and improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PROCESS PAGE */}
        {activePage === 'process' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold text-center mb-6">Our Process</h1>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">A proven methodology that delivers results on time and within budget</p>

              <div className="space-y-8">
                {process.map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                <p className="text-gray-600 mb-6">Let's discuss your project and create a custom development plan</p>
                <button onClick={() => setActivePage('contact')} className="px-8 py-4 bg-brand-primary text-white rounded-lg font-semibold hover:opacity-90 transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </section>
        )}

        {/* BLOG PAGE */}
        {activePage === 'blog' && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold text-center mb-6">Blog</h1>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Insights, tutorials, and industry trends from our experts</p>

              <div className="grid md:grid-cols-3 gap-8">
                {blogPosts.map((post, idx) => (
                  <article key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span className="px-2 py-1 bg-slate-100 text-brand-primary rounded">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-indigo-600 cursor-pointer">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">By {post.author}</p>
                      <button className="text-brand-primary font-semibold flex items-center hover:opacity-90">
                        Read more <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Load More Posts
                </button>
              </div>
            </div>
          </section>
        )}

        {/* CAREERS PAGE */}
        {activePage === 'careers' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold text-center mb-6">Join Our Team</h1>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">We're always looking for talented people to join our growing team</p>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span className="text-gray-700">Competitive salary and benefits</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span className="text-gray-700">Remote-first culture with flexible hours</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span className="text-gray-700">Professional development budget</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span className="text-gray-700">Work on cutting-edge projects</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span className="text-gray-700">Collaborative and inclusive environment</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" /><span className="text-gray-700">Health insurance and wellness programs</span></li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-4">Our Perks</h2>
                  <div className="space-y-3">
                    <div className="flex items-center"><div className="text-2xl mr-3">💰</div><span>Competitive compensation</span></div>
                    <div className="flex items-center"><div className="text-2xl mr-3">🏠</div><span>Remote work options</span></div>
                    <div className="flex items-center"><div className="text-2xl mr-3">📚</div><span>Learning & development</span></div>
                    <div className="flex items-center"><div className="text-2xl mr-3">🎉</div><span>Team events & retreats</span></div>
                    <div className="flex items-center"><div className="text-2xl mr-3">⏰</div><span>Flexible schedules</span></div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
              <div className="space-y-4">
                {careers.map((job, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1 text-brand-accent" /> {job.type}</span>
                          <span className="flex items-center"><MapPin className="h-4 w-4 mr-1 text-brand-accent" /> {job.location}</span>
                          <span className="flex items-center"><Calendar className="h-4 w-4 mr-1 text-brand-accent" /> {job.exp}</span>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:opacity-90 transition-colors">Apply Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CONTACT PAGE */}
        {activePage === 'contact' && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold text-center mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Ready to start your project? Contact us today for a free consultation</p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start"><Mail className="h-6 w-6 text-brand-primary mr-4 flex-shrink-0 mt-1" /><div><div className="font-semibold mb-1">Email</div><a href="mailto:hello@techforge.dev" className="text-gray-600 hover:text-brand-primary">hello@techforge.dev</a></div></div>
                    <div className="flex items-start"><Phone className="h-6 w-6 text-brand-primary mr-4 flex-shrink-0 mt-1" /><div><div className="font-semibold mb-1">Phone</div><a href="tel:+1234567890" className="text-gray-600 hover:text-brand-primary">+1 (234) 567-890</a></div></div>
                    <div className="flex items-start"><MapPin className="h-6 w-6 text-brand-primary mr-4 flex-shrink-0 mt-1" /><div><div className="font-semibold mb-1">Office</div><div className="text-gray-600">123 Tech Street<br />San Francisco, CA 94102</div></div></div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-brand-primary hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                    <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-brand-primary hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                    <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-brand-primary hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Service</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none">
                        <option value="">Select a service</option>
                        <option value="android">Android Development</option>
                        <option value="ios">iOS Development</option>
                        <option value="web">Web Development</option>
                        <option value="desktop">Desktop Apps</option>
                        <option value="qa">QA & Testing</option>
                        <option value="marketing">Digital Marketing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea required rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none resize-none" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button type="submit" className="w-full px-6 py-4 bg-brand-primary text-white rounded-lg font-semibold hover:opacity-90 transition-colors flex items-center justify-center">
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4"><Code className="h-8 w-8 text-indigo-400" /><span className="ml-2 text-xl font-bold">TechForge</span></div>
              <p className="text-gray-400 text-sm">Building tomorrow's digital solutions today.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Android Development</a></li>
                <li><a href="#" className="hover:text-white">iOS Development</a></li>
                <li><a href="#" className="hover:text-white">Web Development</a></li>
                <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setActivePage('about')} className="hover:text-white">About Us</button></li>
                <li><button onClick={() => setActivePage('careers')} className="hover:text-white">Careers</button></li>
                <li><button onClick={() => setActivePage('blog')} className="hover:text-white">Blog</button></li>
                <li><button onClick={() => setActivePage('contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">Stay updated with our latest news</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                <button className="px-4 py-2 bg-brand-primary rounded-r-lg hover:opacity-90 transition-colors">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 TechForge. All rights reserved. Built with React, Next.js & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
