import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Heart, ArrowRight } from 'lucide-react';

const Story = () => {
  const chapters = [
    {
      title: "The Compartments",
      content: "For years, I tried to separate what I love into neat categories. Teaching here, sewing there, photography in this box, coaching in that one. Copywriting, apps, books, motherhood, ministry—all compartmentalized because that's what the world told me to do. Pick a lane. Stick to it. Be more polished. Be less... everything."
    },
    {
      title: "The Shattering",
      content: "But my brain doesn't work that way. My heart doesn't either. When my world fell apart—betrayal trauma, the end of everything I thought I knew about my life, my marriage, and myself—I discovered something profound. The compartments were never real. They were just walls I'd built to make others comfortable."
    },
    {
      title: "The Wilderness",
      content: "In the wilderness of rebuilding, I learned that healing is a system. Growth is a strategy. Poetry is a framework for feeling seen. I wrote my way through the darkness, one word at a time, one truth at a time. Writing became my lifeline. Poetry became my prayer."
    },
    {
      title: "The Integration",
      content: "I'm not linear. I'm layered. So I built a home for all of me—not a brand, but a garden. Where systems meet soul. Where poetry holds hands with planning. Where the woman who survived betrayal trauma can also be the strategist who builds ethical AI systems. Where the mother can also be the mirror holder."
    },
    {
      title: "The Becoming",
      content: "This is where I practice being human. Where I share the messy, sacred work of becoming. I don't claim answers—I hold space. I reflect back the truth already flickering in your chest. Some call it storytelling. Some call it strategy. I just call it listening."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
              My Story
            </h1>
            <p className="font-sans text-xl text-muted-foreground mb-8 leading-relaxed">
              A poetic record of becoming. The messy, sacred work of integration.
            </p>
            <Quote className="h-12 w-12 text-primary mx-auto mb-8" />
            <p className="font-serif text-lg text-foreground italic leading-relaxed">
              "I am not the same woman who entered this wilderness, and I am grateful. 
              She was beautiful, but she was not free."
            </p>
          </div>
        </div>
      </section>

      {/* Story Chapters */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {chapters.map((chapter, index) => (
              <Card key={index} className="border-l-4 border-l-primary bg-card/50">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                    {chapter.title}
                  </h2>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                    {chapter.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  The Garden Grows
                </h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6 leading-relaxed">
                  Today, I tend two gardens. <strong>SamanthaJosette.me</strong> is my storytelling sanctuary—
                  personal, poetic, and sacred. It's where I practice being human, where I hold space 
                  for the stories that don't fit in boxes.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  <strong>The Candid Heart</strong> is where the integration happens—where healing meets strategy, 
                  where poetry holds hands with planning. It's the business born from my becoming, 
                  the work that chose me when I stopped choosing between my passions.
                </p>
                
                <p className="mb-8 leading-relaxed">
                  Both spaces honor the truth that we are not meant to be compartmentalized. 
                  We are meant to be whole. Complex. Layered. Human.
                </p>
              </div>

              <div className="text-center">
                <p className="font-serif text-xl text-foreground italic mb-8">
                  "If you've been holding parts of yourself back, these spaces are for you. 
                  All of you is welcome here."
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
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
                    <Link to="/speaking">
                      Book Me to Speak <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing Invitation */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl md:text-2xl text-foreground italic mb-8 leading-relaxed">
            "Thank you for witnessing this becoming. Thank you for holding space 
            for the messy, sacred work of integration."
          </p>
          <Button 
            asChild 
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Link to="/contact">Connect With Me</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Story;

