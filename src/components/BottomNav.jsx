import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Info } from 'lucide-react';
import '../styles/components.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={24} />
        <span>الرئيسية</span>
      </NavLink>
      <NavLink to="/family" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Users size={24} />
        <span>العائلة</span>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Info size={24} />
        <span>عن التطبيق</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
