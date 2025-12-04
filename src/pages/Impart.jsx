import React from 'react'
import '../styles/Impact.css'

const Impact = () => {
  const impactAreas = [
    {
      icon: '🏥',
      title: 'Healthcare',
      description: 'We support medical facilities, healthcare workers, and initiatives that provide essential medical services to underserved communities. From emergency care to preventive health programs, we help ensure everyone has access to quality healthcare.',
      metrics: '50+ Health Centers Supported'
    },
    {
      icon: '📚',
      title: 'Education',
      description: 'Education transforms futures. We fund schools, scholarships, and educational programs that empower students to build better lives. Your donations help provide learning materials, facilities, and teacher training.',
      metrics: '1000+ Students Supported'
    },
    {
      icon: '🍎',
      title: 'Food Security',
      description: 'No one should go hungry. We support food assistance programs, nutrition initiatives, and sustainable agriculture projects that ensure communities have reliable access to nutritious food.',
      metrics: '10,000+ People Fed Monthly'
    },
    {
      icon: '🏠',
      title: 'Housing',
      description: 'Safe shelter is a basic human right. We support housing construction, renovation, and emergency shelter programs that provide people with secure, dignified homes.',
      metrics: '200+ Homes Built'
    },
    {
      icon: '⚡',
      title: 'Electricity',
      description: 'Access to electricity transforms communities. We support sustainable energy projects, solar installations, and electrification initiatives that bring power to off-grid areas.',
      metrics: '30+ Communities Electrified'
    },
    {
      icon: '🆘',
      title: 'Humanitarian Relief',
      description: 'In times of crisis, we mobilize support. From disaster relief to emergency aid, our rapid response programs help communities recover from natural disasters and humanitarian emergencies.',
      metrics: '15+ Emergency Operations'
    }
  ]

  const successStories = [
    {
      title: 'Rural Healthcare Initiative',
      description: 'With donor support, we established 5 health clinics in remote areas, providing healthcare to over 25,000 people who previously had no access to medical services.',
      impact: '25,000+ Lives Touched'
    },
    {
      title: 'Education for All Program',
      description: 'Funded scholarships helped 500 underprivileged students complete their education. Many are now pursuing higher studies and contributing to their communities.',
      impact: '500 Students Educated'
    },
    {
      title: 'Emergency Response Network',
      description: 'Our rapid response team provided humanitarian aid to 15,000 people affected by disasters, including food, shelter, and medical assistance.',
      impact: '15,000 People Assisted'
    }
  ]

  return (
    <div className="impact-page">
      <section className="impact-hero">
        <h1>Our Impact</h1>
        <p>See the real difference your donations are making in communities worldwide</p>
      </section>

      <section className="impact-intro">
        <div className="intro-content">
          <h2>Making a Global Difference</h2>
          <p>At Good Health Charity Platform, we believe in transparency and measurable impact. Every donation you make directly contributes to real change in six key areas. We track every peso, report regularly, and work with verified organizations to ensure your generosity creates lasting positive impact.</p>
          <p>Our network of verified NGOs operates across healthcare, education, food security, housing, electricity access, and humanitarian relief. Together, we're building a world where everyone has access to basic necessities and opportunities to thrive.</p>
        </div>
      </section>

      <section className="impact-areas">
        <h2>Six Areas of Impact</h2>
        <div className="areas-grid">
          {impactAreas.map((area, index) => (
            <div key={index} className="impact-card">
              <div className="impact-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="impact-metric">{area.metrics}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="stories-grid">
          {successStories.map((story, index) => (
            <div key={index} className="story-card">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <div className="story-impact">{story.impact}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-stats">
        <h2>By The Numbers</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-number">₦500M+</div>
            <div className="stat-label">Total Funds Distributed</div>
          </div>
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Verified Organizations</div>
          </div>
          <div className="stat">
            <div className="stat-number">100K+</div>
            <div className="stat-label">Lives Impacted</div>
          </div>
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Funds to Cause</div>
          </div>
        </div>
      </section>

      <section className="impact-commitment">
        <h2>Our Commitment to Transparency</h2>
        <div className="commitment-content">
          <div className="commitment-item">
            <h3>Real-Time Tracking</h3>
            <p>Monitor every campaign's progress with live updates. See exactly how much has been raised and what's been accomplished.</p>
          </div>
          <div className="commitment-item">
            <h3>Verified Organizations</h3>
            <p>All NGOs on our platform are thoroughly vetted. We verify credentials, financial management, and operational legitimacy.</p>
          </div>
          <div className="commitment-item">
            <h3>Regular Reports</h3>
            <p>Organizations submit detailed impact reports. We ensure accountability and share results with our donor community.</p>
          </div>
          <div className="commitment-item">
            <h3>95%+ Efficiency</h3>
            <p>We maintain low overhead costs, ensuring that the maximum percentage of your donation goes directly to the cause.</p>
          </div>
        </div>
      </section>

      <section className="impact-cta">
        <h2>Join Our Mission</h2>
        <p>Your donation, no matter the size, creates measurable impact. Be part of a global community working to make the world a better place.</p>
        <a href="/campaigns" className="btn btn-primary large">View Campaigns</a>
      </section>
    </div>
  )
}

export default Impact
