import React, { useState } from 'react';
import { useApp } from '../../lib/AppContext';
import { translations } from '../../lib/translations';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader } from '../ui/card';
import { toast } from 'sonner@2.0.3';

export const ContactPage: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    toast.success(language === 'en' ? 'Message sent successfully!' : 'Melding sendt!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+47 123 45 678',
      href: 'tel:+4712345678',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Oslo, Norway',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <div id="main-content" className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl mb-4">{t.contact.title}</h1>
          <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <h2>Send us a message</h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    {t.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    {t.contact.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    {t.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                  />
                </div>

                <div className="space-y-4">
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    {t.contact.send}
                  </Button>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                      {t.contact.responseTime}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.contact.privacy}
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2>Contact Information</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2>Social Media</h2>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="mb-2">Ready to start?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'en' 
                    ? "Let's discuss how we can help bring your ideas to life."
                    : "La oss diskutere hvordan vi kan hjelpe deg med å realisere ideene dine."}
                </p>
                <Button className="w-full" asChild>
                  <a href="mailto:hello@example.com">
                    <Mail className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'Email Us' : 'Send e-post'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
