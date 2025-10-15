import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  Building, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "info@intracosta.com",
    link: "mailto:info@intracosta.com",
    gradient: "from-yellow-500/20 to-orange-500/20",
    hoverColor: "yellow"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "+30 23820 27111",
    link: "tel:+302382027111",
    gradient: "from-gray-500/20 to-gray-600/20",
    hoverColor: "gray"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    value: "Giannitsa, Greece",
    link: "https://maps.app.goo.gl/AhQDdGwnDz4zrD2n8",
    gradient: "from-yellow-500/20 to-orange-500/20",
    hoverColor: "yellow"
  }
];

const companyStats = [
  { label: "Response Time", value: "< 24 hours", icon: Clock },
  { label: "European Routes", value: "15+", icon: Globe },
  { label: "CMR Insurance", value: "Full Coverage", icon: Shield },
  { label: "On-Time Delivery", value: "99.5%", icon: Zap }
];

interface PremiumContactProps {
  onSubmit?: (formData: any) => Promise<void>;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}

export function PremiumContact({ onSubmit, contactInfo }: PremiumContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default form submission
        await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="relative py-20 bg-white text-gray-900 overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gray-50/30"></div>

      <div 
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-700">
              Επικοινωνήστε μαζί μας
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Ας</span>
            <br />
            <span className="text-yellow-600">
              Συνεργαστούμε
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Έτοιμοι να μεταφέρουμε την επιχείρησή σας στο επόμενο επίπεδο; Ας ξεκινήσουμε μια συζήτηση για τους στόχους σας και πώς μπορούμε να σας βοηθήσουμε να τους επιτύχετε.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-gray-100 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-50 border border-gray-200 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Στείλτε μας ένα μήνυμα</h3>
              <p className="text-gray-600 text-lg">
                Πείτε μας για το έργο σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
              </p>
            </div>

            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="sr-only">
                        Όνομα
                      </label>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="name"
                        type="text"
                        placeholder="Το όνομά σας"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all ${
                          errors.name ? 'border-red-400' : 'border-white/[0.15]'
                        } shadow-sm`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        placeholder="Διεύθυνση Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all ${
                          errors.email ? 'border-red-400' : 'border-white/[0.15]'
                        } shadow-sm`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="company" className="sr-only">
                      Εταιρεία
                    </label>
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="company"
                      type="text"
                      placeholder="Εταιρεία (Προαιρετικό)"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full pl-10 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all shadow-sm"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="sr-only">
                      Μήνυμα
                    </label>
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      placeholder="Πείτε μας για τις μεταφορικές σας ανάγκες..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full pl-10 pr-4 py-4 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none ${
                        errors.message ? 'border-red-400' : 'border-white/[0.15]'
                      } shadow-sm`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Αποστολή Μηνύματος
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Το μήνυμα στάλθηκε!</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Σας ευχαριστούμε που επικοινωνήσατε μαζί μας. Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-6 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-900 hover:bg-gray-200 transition-colors shadow-sm"
                  >
                    Αποστολή άλλου μηνύματος
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Άλλοι τρόποι επικοινωνίας</h3>
              <p className="text-gray-600 text-lg">
                Επιλέξτε τον τρόπο που σας εξυπηρετεί καλύτερα.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-gray-100 transition-colors group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-yellow-50 border border-gray-200 flex items-center justify-center">
                      <method.icon className="w-7 h-7 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">{method.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                      <p className="text-gray-900 font-medium">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            {/* All Email Addresses */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-500" />
                Όλες οι Διευθύνσεις Email
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Κάντε κλικ σε οποιαδήποτε διεύθυνση email για να ανοίξει το email client σας:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'info@intracosta.com',
                  'export@intracosta.com', 
                  'import@intracosta.com',
                  'dispo.greece@intracosta.com',
                  'account@intracosta.com'
                ].map((email, index) => (
                  <a
                    key={index}
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-yellow-50 border border-gray-200 hover:border-yellow-300 rounded-lg transition-colors group"
                    title={`Click to send email to ${email}`}
                  >
                    <Mail className="w-4 h-4 text-gray-400 group-hover:text-yellow-500 transition-colors flex-shrink-0" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                      {email}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Εγγύηση Γρήγορης Απάντησης</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Είμαστε περήφανοι για τους γρήγορους χρόνους απόκρισής μας. Όλες οι ερωτήσεις απαντώνται συνήθως εντός 24 ωρών κατά τις εργάσιμες ώρες, 
                και θα προγραμματίσουμε μια κλήση εντός 24 ωρών για να συζητήσουμε λεπτομερώς τις ανάγκες σας.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}