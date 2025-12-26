import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import * as Icons from 'lucide-react';
import '../styles/components.css';

const FamilyCard = ({ member }) => {
  // Dynamic icon rendering
  const IconComponent = Icons[member.icon ? member.icon.charAt(0).toUpperCase() + member.icon.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase()) : 'User'] || User;

  return (
    <Link to={`/family/${member.id}`} className="family-card" style={{ '--accent-color': member.color }}>
      <div className="card-header">
        <div
          className="avatar-placeholder"
          style={{ background: `linear-gradient(135deg, ${member.color}, #f1f5f9)` }}
        >
          <IconComponent color="white" size={28} strokeWidth={2.5} />
        </div>
        <div className="card-title">
          <h3>{member.name}</h3>
          <span className="role-chip">{member.role}</span>
        </div>
      </div>
      <p className="card-desc">{member.shortDescription}</p>
      <div className="card-footer">
        <div className="details-btn">
          <span>اقرأ المزيد</span>
          <ArrowLeft size={16} />
        </div>
      </div>
    </Link>
  );
};

export default FamilyCard;
