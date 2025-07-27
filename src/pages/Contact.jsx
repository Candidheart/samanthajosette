import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Heart, MessageCircle, Mic, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactTypes = [
    {
      icon: Heart,
      title: "Personal Reflection & Connection",
      description: "Thoughts on my writing, questions about my journey, or simply wanting to connect human to human.",
      email: "hello@samanthajosette.me",
      note: "I read every message, though I may not be able to respond to all."
    },
    {
      icon: Mic,
      title: "Speaking Inquiries",
      description: "Keynotes, workshops, panels, or team intensives on integration, ethical AI, trauma-informed systems.",
      email: "speaking@samanthajosette.me",
      note: "Please include event details, audience size, and preferred topics."
    },
    {
      icon: MessageCircle,
      title: "Media & Interview Requests",
      description: "Podcast interviews, articles, or media appearances related to my story and work.",
      email: "media@samanthajosette.me",
      note: "I'm selective about media appearances but open to meaningful conversations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
              Connect With Me
            </h1>
            <p className="font-sans text-xl text-muted-foreground mb-8 leading-relaxed">
              This is a sacred space for connection. I hold each message with care, 
              knowing that reaching out takes courage.
            </p>
            <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <p className="font-serif text-lg text-foreground italic leading-relaxed">
                "I don't claim answers. I hold space. I reflect back the truth already flickering in your chest."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              How to Reach Me
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Different types of connection call for different approaches. 
              Choose the path that feels most aligned with your intention.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactTypes.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all-smooth border-2 hover:border-primary/30">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="font-serif text-xl text-foreground">
                      {contact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                      {contact.description}
                    </p>
                    <Button 
                      asChild 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-4"
                    >
                      <a href={`mailto:${contact.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        {contact.email}
                      </a>
                    </Button>
                    <p className="font-sans text-sm text-muted-foreground italic">
                      {contact.note}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Inquiries */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Looking for Coaching, Healing, or Business Strategy?
              </h3>
              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                If you're ready to grow, heal, or build with intention, The Candid Heart 
                is where that work begins. It's my business garden where systems meet soul.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans"
                >
                  <a href="https://thecandidheart.com" target="_blank" rel="noopener noreferrer">
                    Visit The Candid Heart <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans"
                >
                  <a href="mailto:hello@thecandidheart.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Business Inquiries
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Response Expectations */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              A Note on Connection
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 leading-relaxed text-center">
              I receive each message as a gift—a moment of trust, a reaching across the digital space 
              for human connection. I read every single one, and I hold them all with care.
            </p>
            
            <p className="mb-6 leading-relaxed text-center">
              While I may not be able to respond to every personal message individually, please know 
              that your words matter. They contribute to the collective wisdom of this space, 
              and they often inspire the content I create.
            </p>
            
            <p className="mb-8 leading-relaxed text-center">
              For speaking and business inquiries, I aim to respond within 3-5 business days. 
              For personal reflections and connections, I respond when I can offer my full presence.
            </p>
          </div>

          <div className="text-center">
            <p className="font-serif text-xl text-foreground italic mb-8">
              "Thank you for being here. Thank you for witnessing this becoming. 
              Thank you for holding space for the messy, sacred work of integration."
            </p>
            <p className="font-sans text-muted-foreground">
              With gratitude,<br />
              Samantha
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

