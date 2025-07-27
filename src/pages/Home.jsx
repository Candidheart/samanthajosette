import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Quote, Heart, Feather, BookOpen, Mic } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-12">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed mb-8">
                I don't claim answers.<br />
                I hold space.<br />
                I reflect back the truth already flickering in your chest.
              </p>
              <p className="font-sans text-lg md:text-xl text-muted-foreground mb-8">
                Some call it storytelling.<br />
                Some call it strategy.<br />
                I just call it listening.
              </p>
            </div>
            
            <div className="bg-card/50 rounded-2xl p-8 mb-12 border border-border/50">
              <p className="font-sans text-lg text-foreground mb-6 leading-relaxed">
                I'm <span className="font-semibold">Samantha Josette</span>. Writer, mother, mirror.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                I build tools and tell stories for those rebuilding what the world tried to break.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg py-6"
              >
                <Link to="/story">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read My Story
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans text-lg py-6"
              >
                <Link to="/speaking">
                  <Mic className="mr-2 h-5 w-5" />
                  Book Me to Speak
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                This is my storytelling sanctuary
              </h2>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                Personal, poetic, and sacred. It's not a funnel, it's a reflection space. 
                A home for storytelling, reflection, and deep healing.
              </p>
              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                A poetic record of becoming. A soft space for readers, listeners, and seekers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/story">Explore My Journey</Link>
                </Button>
                <Button 
                  asChild 
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a href="https://thecandidheart.com" target="_blank" rel="noopener noreferrer">
                    Visit The Candid Heart <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <Heart className="h-12 w-12 text-primary" />
                    <Quote className="h-12 w-12 text-accent" />
                    <Feather className="h-12 w-12 text-primary" />
                  </div>
                  <p className="font-serif text-xl text-foreground italic">
                    "Some stories can only be told in whispers. Some truths can only be held in sacred space."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gentle Invitation Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-8 text-center">
              <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                If my words resonate and you're looking for coaching, healing, or integration
              </h3>
              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                The Candid Heart is where that begins. A digital garden where systems meet soul, 
                and poetry holds hands with planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans"
                >
                  <a href="https://thecandidheart.com" target="_blank" rel="noopener noreferrer">
                    Explore The Candid Heart
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background font-sans"
                >
                  <Link to="/contact">Connect With Me</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing Reflection */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl md:text-2xl text-foreground italic mb-8 leading-relaxed">
            "This is where I practice being human. Where I share the messy, sacred work 
            of becoming. Where I hold space for the stories that don't fit in boxes."
          </p>
          <p className="font-sans text-lg text-muted-foreground">
            Welcome to my reflection space. Thank you for being here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

