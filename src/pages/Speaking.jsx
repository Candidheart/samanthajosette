import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Heart, Users, ArrowRight, Quote, CheckCircle } from 'lucide-react';

const Speaking = () => {
  const topics = [
    {
      title: "The Integration Story",
      description: "Moving beyond compartmentalization to embrace our whole, complex selves in business and life.",
      audience: "Entrepreneurs, creatives, women in leadership"
    },
    {
      title: "Ethical AI & Human Voice",
      description: "How to leverage AI automation while preserving authentic voice and human connection.",
      audience: "Business leaders, marketing teams, tech organizations"
    },
    {
      title: "Trauma-Informed Systems",
      description: "Building business systems and organizational culture that honor healing and human complexity.",
      audience: "HR teams, organizational leaders, healing professionals"
    },
    {
      title: "Poetry as Framework",
      description: "Using creative expression and storytelling as tools for processing, healing, and leadership.",
      audience: "Healing communities, creative professionals, women's groups"
    },
    {
      title: "Legacy Work",
      description: "Creating work that matters, building businesses that honor both profit and purpose.",
      audience: "Values-aligned organizations, conscious entrepreneurs"
    }
  ];

  const formats = [
    {
      title: "Keynote Presentations",
      duration: "45-60 minutes",
      description: "Inspiring talks that weave personal story with practical wisdom, leaving audiences with both heart and strategy."
    },
    {
      title: "Workshop Facilitation",
      duration: "2-4 hours",
      description: "Interactive sessions combining reflection, practical tools, and group processing for deeper integration."
    },
    {
      title: "Creative Team Intensives",
      duration: "Half or full day",
      description: "Customized sessions for teams ready to embrace ethical AI, trauma-informed practices, and authentic voice."
    },
    {
      title: "Panel Discussions",
      duration: "30-90 minutes",
      description: "Thoughtful conversation on integration, ethical business practices, and the intersection of healing and strategy."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Speaking & Workshops
              </h1>
              <p className="font-sans text-xl text-muted-foreground mb-8 leading-relaxed">
                I speak to hearts that are ready to stop choosing between their passions 
                and start integrating them. For organizations ready to embrace the messy, 
                sacred work of becoming whole.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <Mic className="h-8 w-8 text-primary" />
                <Heart className="h-8 w-8 text-accent" />
                <Users className="h-8 w-8 text-primary" />
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
              >
                <Link to="/contact">
                  Book a Speaking Engagement <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Quote className="h-16 w-16 text-primary mx-auto mb-6" />
                  <p className="font-serif text-xl text-foreground italic leading-relaxed">
                    "I don't speak to convince. I speak to reflect. To hold up a mirror 
                    for the truth already flickering in the room."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Speaking Topics
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Each talk is customized to your audience, weaving personal story with practical wisdom, 
              always honoring both the heart and the strategy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all-smooth border-2 hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground mb-2">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-muted-foreground mb-4 leading-relaxed">
                    {topic.description}
                  </p>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-accent mr-2" />
                    <span className="font-sans text-sm text-accent font-medium">
                      {topic.audience}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Formats */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Speaking Formats
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              From intimate workshops to large keynotes, each format is designed to create 
              space for both reflection and practical application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {formats.map((format, index) => (
              <Card key={index} className="border-l-4 border-l-accent bg-card/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {format.title}
                    </h3>
                    <span className="font-sans text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {format.duration}
                    </span>
                  </div>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {format.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                What You Can Expect
              </h2>
              <div className="space-y-4">
                {[
                  "Authentic storytelling that honors both vulnerability and strength",
                  "Practical frameworks rooted in lived experience",
                  "Space for reflection, integration, and group processing",
                  "Trauma-informed facilitation that honors all participants",
                  "Customized content that speaks to your specific audience",
                  "Follow-up resources and implementation support"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8 text-center">
                  <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
                  <p className="font-serif text-lg text-foreground italic mb-6 leading-relaxed">
                    "I create space for the conversations that matter. The ones that honor 
                    complexity, embrace integration, and leave room for becoming."
                  </p>
                  <p className="font-sans text-muted-foreground">
                    — Samantha Josette
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Create Space for Integration?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're planning a keynote, workshop, or team intensive, 
            let's create something meaningful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
            >
              <Link to="/contact">Book Speaking Engagement</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans"
            >
              <a href="https://thecandidheart.com" target="_blank" rel="noopener noreferrer">
                Explore The Candid Heart
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speaking;

