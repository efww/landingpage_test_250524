"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Github, Menu, Sparkles, Star, Zap } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/75">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LandingCraft</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white dark:bg-gray-950">
            <div className="container py-4 space-y-3">
              <a href="#features" className="block text-sm font-medium">Features</a>
              <a href="#pricing" className="block text-sm font-medium">Pricing</a>
              <a href="#testimonials" className="block text-sm font-medium">Testimonials</a>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">Sign In</Button>
                <Button size="sm" className="flex-1">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              </div>
              <div className="relative rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                ✨ Introducing LandingCraft v2.0
              </div>
            </div>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build Beautiful Landing Pages{" "}
            <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
              in Minutes
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Create stunning, high-converting landing pages with our intuitive drag-and-drop builder. 
            No coding required, just pure creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Start Building Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container px-4 py-24">
        <div className="mx-auto max-w-[800px] text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features to help you create landing pages that convert visitors into customers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5" />
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container px-4 py-24">
        <div className="mx-auto max-w-[800px] text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs. Always flexible to scale.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={plan.featured ? "border-primary shadow-lg" : ""}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6" variant={plan.featured ? "default" : "outline"}>
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container px-4 py-24">
        <div className="mx-auto max-w-[800px] text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by Thousands of Creators
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription>{testimonial.content}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-24">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-violet-600/10" />
          <CardContent className="relative p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators who are already building amazing landing pages with LandingCraft.
            </p>
            <Button size="lg" className="gap-2">
              Start Your Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container px-4 py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-semibold">LandingCraft</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 LandingCraft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance. Your pages load in milliseconds, not seconds."
  },
  {
    icon: Sparkles,
    title: "Beautiful Templates",
    description: "Choose from dozens of professionally designed templates to get started quickly."
  },
  {
    icon: CheckCircle2,
    title: "SEO Optimized",
    description: "Built-in SEO best practices to help your pages rank higher in search results."
  },
  {
    icon: Star,
    title: "Analytics Built-in",
    description: "Track visitor behavior and conversion rates with our powerful analytics dashboard."
  },
  {
    icon: Github,
    title: "Developer Friendly",
    description: "Export clean, semantic code that developers love. Full API access included."
  },
  {
    icon: Zap,
    title: "A/B Testing",
    description: "Test different variations of your pages to find what converts best."
  }
]

const pricingPlans = [
  {
    name: "Starter",
    price: 19,
    description: "Perfect for individuals and small projects",
    cta: "Start Free Trial",
    features: [
      "Up to 5 landing pages",
      "1,000 monthly visitors",
      "Basic analytics",
      "48-hour support"
    ]
  },
  {
    name: "Professional",
    price: 49,
    description: "Ideal for growing businesses",
    cta: "Start Free Trial",
    featured: true,
    features: [
      "Unlimited landing pages",
      "50,000 monthly visitors",
      "Advanced analytics",
      "Priority support",
      "A/B testing",
      "Custom domain"
    ]
  },
  {
    name: "Enterprise",
    price: 149,
    description: "For teams and large organizations",
    cta: "Contact Sales",
    features: [
      "Everything in Professional",
      "Unlimited visitors",
      "White-label options",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee"
    ]
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "LandingCraft transformed how we create landing pages. What used to take days now takes hours."
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content: "The templates are gorgeous and the editor is so intuitive. Best investment for our marketing."
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    content: "My clients love the results. LandingCraft helps me deliver professional pages quickly."
  }
]