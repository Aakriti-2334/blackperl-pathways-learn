import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is included in the Ultimate Cybersecurity Training Suite?",
      answer: "The Ultimate Cybersecurity Training Suite includes 10+ comprehensive courses covering all critical aspects of cybersecurity: DFIR Specialist Track, Security Engineering Program, SOC Analyst Certification Path, Cybersecurity Leadership Track, Advanced Threat Hunting Course, Beginner's Fundamentals Course, Malware Analysis Masterclass, and 2 exclusive bonus modules. You get lifetime access to all course materials, hands-on labs, and expert instructor support."
    },
    {
      question: "Is this offer really ₹3,999 instead of ₹25,000?",
      answer: "Yes! This is a limited-time special offer exclusively for early adopters. The regular price for the complete suite is ₹25,000, but we're offering it at just ₹3,999 (a 98% discount) to help aspiring cybersecurity professionals launch their careers. This price includes all 15 courses plus 3 bonus modules."
    },
    {
      question: "Can I purchase individual courses instead of the complete suite?",
      answer: "Absolutely! If you prefer to focus on specific skills, individual courses are available for ₹999 each. However, purchasing the complete suite gives you access to all 10+ courses and 2 bonuses at a fraction of the cost, making it the most economical option for comprehensive learning."
    },
    {
      question: "What skill level do I need to start these courses?",
      answer: "Our courses cater to all skill levels. We offer beginner-friendly courses like the Beginner's Fundamentals Course and SOC Analyst path, intermediate courses like DFIR and Malware Analysis, and advanced programs like Security Engineering and Cybersecurity Leadership. Each course clearly indicates its difficulty level so you can choose the right starting point."
    },
    {
      question: "How long will it take to complete the training?",
      answer: "The completion time varies by course and your learning pace. Individual courses range from 1-2 months. If you're taking the complete suite, you can learn at your own pace with lifetime access. Many students complete the entire suite within 9-12 months while working full-time."
    },
    {
      question: "Will I get hands-on experience?",
      answer: "Yes! All our courses include extensive hands-on labs, real-world projects, and practical exercises. You'll gain practical experience with industry-standard tools and techniques, preparing you for actual cybersecurity roles in organizations."
    },
    {
      question: "What kind of career support do you provide?",
      answer: "BlackPerl Academy boasts a 95% job placement rate. We provide career guidance, resume reviews, interview preparation, and connections to hiring partners. Our alumni network and industry partnerships help students transition into cybersecurity roles successfully."
    },
    {
      question: "How long is this special offer available?",
      answer: "This is a limited-time offer and may end at any time. We recommend enrolling as soon as possible to secure the ₹3,999 price for the complete suite. Once you enroll, you get lifetime access to all course materials and future updates."
    },
    {
      question: "Do I need any prerequisites or prior experience?",
      answer: "For beginner courses, no prior cybersecurity experience is required. Basic computer skills and familiarity with operating systems are helpful. For intermediate and advanced courses, we recommend completing foundational courses first or having equivalent work experience."
    },
    {
      question: "What makes BlackPerl Academy different from other cybersecurity training?",
      answer: "BlackPerl Academy offers comprehensive, industry-aligned training with expert instructors who are active cybersecurity professionals. Our curriculum is constantly updated to reflect current threats and industry best practices. With 15,000+ students trained and a 95% placement rate, we have a proven track record of launching successful cybersecurity careers."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Find everything you need to know about our training programs.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
