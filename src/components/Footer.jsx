import { Link } from 'react-router-dom';
import { Heart, Feather, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Heart className="h-5 w-5 text-primary" />
                <Feather className="h-5 w-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-foreground">
                  Samantha Josette
                </span>
                <span className="font-sans text-xs text-muted-foreground -mt-1">
                  Writer, Mother, Mirror
                </span>
              </div>
            </div>
            <p className="font-sans text-muted-foreground mb-6 max-w-sm leading-relaxed">
              My storytelling sanctuary. Personal, poetic, and sacred. 
              A soft space for readers, listeners, and seekers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@samanthajosette.me" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://thecandidheart.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="The Candid Heart"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/story" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  My Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/speaking" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Speaking
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connection */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://thecandidheart.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  The Candid Heart
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:speaking@samanthajosette.me"
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Speaking Inquiries
                </a>
              </li>
              <li>
                <a 
                  href="mailto:media@samanthajosette.me"
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Media Requests
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@samanthajosette.me"
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Personal Connection
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="text-center">
            <p className="font-sans text-muted-foreground mb-4">
              © 2025 Samantha Josette. All rights reserved.
            </p>
            <p className="font-serif text-muted-foreground italic">
              "Some stories can only be told in whispers. Some truths can only be held in sacred space."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

