import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Calendar, 
  TrendingUp, 
  Users, 
  Server, 
  Database, 
  Cloud,
  Activity,
  CheckCircle,
  MapPin
} from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      id: 1,
      company: "HDFC ERGO",
      position: "Full-Stack Developer",
      duration: "2022 – Present",
      period: "3+ Years",
      location: "Mumbai, India",
      type: "Insurance",
      description: "Leading development of Fire Insurance Product - BGR with focus on microservices architecture and performance optimization.",
      achievements: [
        "Developed robust microservices architecture for Fire Insurance Product",
        "Improved application performance by 35% through optimization",
        "Implemented Azure DevOps CI/CD pipelines for automated deployment",
        "Enhanced system reliability and reduced deployment time by 50%"
      ],
      technologies: [".NET Core", "React.js", "Azure", "Microservices", "DevOps"],
      metrics: {
        performance: "35%",
        icon: <TrendingUp size={20} />,
        label: "Performance Boost"
      },
      primaryColor: "#3B82F6",
      secondaryColor: "#1E40AF",
      bgColor: "#EFF6FF"
    },
    {
      id: 2,
      company: "Thyrocare Technologies",
      position: "Full-Stack Developer",
      duration: "2019 – 2022",
      period: "3 Years",
      location: "Mumbai, India",
      type: "Healthcare",
      description: "Built comprehensive healthcare booking platforms serving thousands of daily users with seamless lab integrations.",
      achievements: [
        "Built healthcare booking platforms serving 10,000+ daily users",
        "Developed high-performance REST APIs for lab integrations",
        "Optimized database queries resulting in 40% faster response times",
        "Integrated with multiple lab systems for seamless workflow"
      ],
      technologies: ["ASP.NET", "React.js", "SQL Server", "REST APIs", "Lab Integration"],
      metrics: {
        performance: "10K+",
        icon: <Users size={20} />,
        label: "Daily Users"
      },
      primaryColor: "#10B981",
      secondaryColor: "#047857",
      bgColor: "#ECFDF5"
    }
  ];

  const sectionStyle = {
    position: 'relative',
    padding: '4rem 0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)',
    overflow: 'hidden',
    minHeight: '100vh'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 10
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
    transition: 'all 1s ease-out'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #1e293b, #3b82f6, #6366f1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem'
  };

  const timelineStyle = {
    position: 'relative'
  };

  const timelineLineStyle = {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '4px',
    background: 'linear-gradient(to bottom, #3b82f6, #6366f1, #10b981)',
    borderRadius: '2px',
    transform: 'translateX(-50%)',
    display: window.innerWidth >= 768 ? 'block' : 'none'
  };

  return (
    <section style={sectionStyle}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '5rem',
        right: '2rem',
        width: '18rem',
        height: '18rem',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(3rem)',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '5rem',
        left: '2rem',
        width: '18rem',
        height: '18rem',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(3rem)',
        pointerEvents: 'none'
      }}></div>

      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>Experience</h2>
          <div style={{
            width: '5rem',
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
            borderRadius: '2px',
            margin: '0 auto 1rem'
          }}></div>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '32rem',
            margin: '0 auto'
          }}>
            Building scalable solutions across healthcare and insurance domains
          </p>
        </div>

        {/* Timeline */}
        <div style={timelineStyle}>
          <div style={timelineLineStyle}></div>

          {/* Experience Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                style={{
                  position: 'relative',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(3rem)',
                  transition: `all 1s ease-out ${0.3 + index * 0.2}s`,
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  alignItems: 'center'
                }}
              >
                {/* Timeline dot */}
                {window.innerWidth >= 768 && (
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '2rem',
                    transform: 'translateX(-50%)',
                    width: '1.5rem',
                    height: '1.5rem',
                    background: `linear-gradient(135deg, ${exp.primaryColor}, ${exp.secondaryColor})`,
                    borderRadius: '50%',
                    border: '4px solid white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 10
                  }}></div>
                )}

                {/* Experience Card */}
                <div
                  style={{
                    width: window.innerWidth >= 768 ? '45%' : '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(229, 231, 235, 0.5)',
                    boxShadow: activeCard === exp.id 
                      ? '0 25px 50px rgba(0, 0, 0, 0.25)' 
                      : '0 10px 25px rgba(0, 0, 0, 0.1)',
                    transform: activeCard === exp.id ? 'translateY(-0.5rem)' : 'translateY(0)',
                    transition: 'all 0.5s ease',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => setActiveCard(exp.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Card Header */}
                  <div style={{
                    padding: '2rem',
                    background: exp.bgColor,
                    borderBottom: '1px solid rgba(229, 231, 235, 0.3)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '0.5rem'
                        }}>
                          <Building2 
                            size={24} 
                            style={{ 
                              color: '#374151',
                              transform: activeCard === exp.id ? 'scale(1.1)' : 'scale(1)',
                              transition: 'transform 0.3s ease'
                            }} 
                          />
                          <h3 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                            fontWeight: 700,
                            color: '#1f2937',
                            margin: 0
                          }}>
                            {exp.company}
                          </h3>
                        </div>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: '1rem',
                          color: '#6b7280',
                          fontSize: '0.875rem'
                        }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Calendar size={16} />
                            {exp.duration}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <MapPin size={16} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '0.5rem 1rem',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          background: `linear-gradient(135deg, ${exp.primaryColor}, ${exp.secondaryColor})`,
                          color: 'white',
                          borderRadius: '9999px'
                        }}>
                          {exp.type}
                        </span>
                        <div style={{
                          fontSize: '0.875rem',
                          color: '#6b7280',
                          marginTop: '0.25rem'
                        }}>
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <h4 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#1f2937',
                      marginBottom: '0.75rem'
                    }}>
                      {exp.position}
                    </h4>
                    <p style={{
                      color: '#4b5563',
                      lineHeight: 1.6,
                      marginBottom: '1rem'
                    }}>
                      {exp.description}
                    </p>

                    {/* Key Metric */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.75rem 1rem',
                      borderRadius: '9999px',
                      border: `1px solid ${exp.primaryColor}40`,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{ color: exp.primaryColor }}>
                        {exp.metrics.icon}
                      </div>
                      <span style={{ fontWeight: 700, color: '#1f2937' }}>
                        {exp.metrics.performance}
                      </span>
                      <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                        {exp.metrics.label}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '2rem' }}>
                    {/* Achievements */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h5 style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: '#1f2937',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Activity size={20} style={{ color: '#3b82f6' }} />
                        Key Achievements
                      </h5>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem'
                          }}>
                            <CheckCircle 
                              size={20} 
                              style={{ 
                                color: '#10b981', 
                                marginTop: '0.125rem',
                                flexShrink: 0,
                                transform: activeCard === exp.id ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.2s ease'
                              }} 
                            />
                            <span style={{
                              color: '#4b5563',
                              lineHeight: 1.6
                            }}>
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: '#1f2937',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Server size={20} style={{ color: '#8b5cf6' }} />
                        Technologies Used
                      </h5>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            style={{
                              padding: '0.5rem 0.75rem',
                              background: '#f3f4f6',
                              color: '#4b5563',
                              borderRadius: '9999px',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              transition: 'all 0.2s ease',
                              cursor: 'default',
                              ':hover': {
                                background: '#e5e7eb',
                                transform: 'scale(1.05)'
                              }
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div style={{
                    padding: '0 2rem 2rem',
                    borderTop: '1px solid rgba(229, 231, 235, 0.3)',
                    paddingTop: '1rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Database size={16} />
                        <span>Full-Stack Development</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Cloud size={16} />
                        <span>Cloud & DevOps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div style={{
          marginTop: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          transition: 'all 1s ease-out 1s'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(229, 231, 235, 0.5)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            padding: '2rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  5+
                </div>
                <div style={{ color: '#6b7280', fontWeight: 500 }}>Years Experience</div>
              </div>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  10K+
                </div>
                <div style={{ color: '#6b7280', fontWeight: 500 }}>Daily Users Served</div>
              </div>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  35%+
                </div>
                <div style={{ color: '#6b7280', fontWeight: 500 }}>Performance Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;