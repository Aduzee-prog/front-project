import React, { useState } from 'react'
import '../styles/Faq.css'

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Good Health Charity Platform?',
      answer: 'Good Health is a transparent, secure donation platform that connects donors with verified non-profit organizations working in healthcare, education, food security, housing, electricity, and humanitarian relief. Our mission is to make it easy for individuals to support meaningful causes that create real impact in communities worldwide.'
    },
    {
      question: 'How do I donate to a campaign?',
      answer: 'Simply browse our Featured Campaigns section on the homepage or visit the Campaigns page. Select a campaign that resonates with you, click on it to view details, and follow the secure payment process. You\'ll receive confirmation of your donation and can track its impact in real-time through our transparency reports.'
    },
    {
      question: 'Are the NGOs verified?',
      answer: 'Yes! All organizations on our platform undergo thorough verification by our admin team before they can launch campaigns. We verify their credentials, mission, and operational legitimacy to ensure your donations reach trustworthy organizations.'
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We process all payments securely with industry-standard encryption and security protocols. We never store your full payment details and use trusted payment gateways to ensure your financial information remains protected.'
    },
    {
      question: 'Can I track how my donation is being used?',
      answer: 'Yes! One of our key features is transparency. Each campaign displays real-time progress, funds raised, and impact metrics. You can see exactly how much progress has been made toward the campaign goal and the difference your donation is making.'
    },
    {
      question: 'What types of causes does Good Health support?',
      answer: 'We support campaigns in six key areas: Healthcare (medical services and facilities), Education (schools and learning programs), Food Security (nutrition and food assistance), Housing (shelter and construction), Electricity (sustainable energy access), and Humanitarian Relief (disaster response and emergency aid).'
    },
    {
      question: 'How can an NGO join the platform?',
      answer: 'NGOs can register on our platform by creating an account, providing organizational details, and submitting verification documents. Our admin team reviews applications and verifies the organization\'s legitimacy. Once approved, they can launch campaigns to reach our community of donors.'
    },
    {
      question: 'Is there a minimum donation amount?',
      answer: 'No! We believe every contribution matters. Whether you can donate ₦100 or ₦100,000, your support makes a difference. Even small donations, when combined with others, create significant impact.'
    },
    {
      question: 'Can I donate anonymously?',
      answer: 'Yes, you can make an anonymous donation if you prefer. During the donation process, you can choose to remain private. Your donation will still be recorded and tracked for the campaign, but your name won\'t be publicly displayed.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our 24/7 customer support team through our Contact page. Fill out the form with your inquiry, and our team will respond promptly. We\'re here to help with any questions or concerns you may have about donations, campaigns, or our platform.'
    }
  ]

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Good Health Charity Platform</p>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${expandedIndex === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{expandedIndex === index ? '−' : '+'}</span>
              </button>
              {expandedIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="faq-cta">
        <h2>Still have questions?</h2>
        <p>Contact our support team and we'll be happy to help!</p>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
      </section>
    </div>
  )
}

export default Faq
