import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Globe, Users, Star, Menu } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">App20</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#clients" className="text-muted-foreground hover:text-foreground transition-colors">
                Clients
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <Button size="sm">Get Started</Button>
            </div>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Where innovation meets execution
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                  Transform your ideas into <span className="text-primary">digital reality</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are a collective of world-class passionate techies bound together by our deep tech knowledge, our
                  human-centric mindset and a passion for using technology and digital solutions to drive business
                  transformation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-card rounded-2xl p-8 border border-border/50">
                <div className="h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Innovation in Progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Story
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Our collection of tech services spans various needs at every stage of the transformation process.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Explore how we help businesses transform.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Accompany enterprises in their transition</h3>
                </div>
                <p className="text-muted-foreground">
                  We guide businesses through digital transformation with sustainable and durable practices.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Valorize innovation through projects</h3>
                </div>
                <p className="text-muted-foreground">
                  We bring innovation to life through strategic projects that drive real business value.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-office-tech.png"
                alt="Modern workspace"
                className="rounded-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Combine innovation, durability and efficiency
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6" />,
                title: "Custom Development",
                description: "Tailored solutions built with cutting-edge technology and best practices.",
              },
              {
                icon: <Smartphone className="h-6 w-6" />,
                title: "Mobile Applications",
                description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Web Solutions",
                description: "Modern web applications with responsive design and optimal performance.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Digital Consulting",
                description: "Strategic guidance to help you navigate digital transformation successfully.",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Trusted By
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Leading brands trust us with their digital transformation
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {["TechCorp", "InnovateLab", "FutureSync", "DataFlow", "CloudVision", "NextGen"].map((client, index) => (
              <div key={index} className="text-center">
                <div className="h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="font-semibold text-muted-foreground">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">What our clients say about us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The team at App20 are world-class designers. They are also fantastic to collaborate with. Highly recommend!",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
                rating: 5,
              },
              {
                quote:
                  "Outstanding technical expertise combined with excellent project management. They delivered beyond our expectations.",
                author: "Michael Chen",
                role: "Product Manager, InnovateLab",
                rating: 5,
              },
              {
                quote:
                  "App20 transformed our digital presence completely. The results speak for themselves - 300% increase in conversions.",
                author: "Emily Rodriguez",
                role: "CEO, FutureSync",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                Ready to Start?
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Let's discuss your project</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We are the tech collective of experienced Certified Gurus, a leading management consultancy helping
                countless organizations succeed in their most important and strategic transformations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">App20</div>
              <p className="text-muted-foreground text-sm">
                Transforming businesses through innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm">
                  GitHub
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Custom Development
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Mobile Apps
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Web Solutions
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Consulting
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>hello@app20.in</p>
                <p>+91 98765 43210</p>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 App20. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
