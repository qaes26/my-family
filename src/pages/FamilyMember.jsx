import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { familyMembers } from '../data/family';
import { ArrowRight, User, Star } from 'lucide-react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

const FamilyMember = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const member = familyMembers.find(m => m.id === id);

    if (!member) {
        return <Navigate to="/" replace />;
    }

    const IconComponent = Icons[member.icon ? member.icon.charAt(0).toUpperCase() + member.icon.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase()) : 'User'] || User;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="page-content"
            style={{ paddingBottom: '100px', paddingTop: '1rem' }}
        >
            <button
                onClick={() => navigate(-1)}
                style={{
                    background: 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(8px)',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-color)',
                    marginBottom: '1.5rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
            >
                <ArrowRight size={18} />
                <span>الرجوع</span>
            </button>

            <div className="glass-panel" style={{ padding: '2.5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative Background Blob */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    height: '200px',
                    background: member.color,
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    opacity: 0.2,
                    zIndex: 0
                }} />

                <div style={{
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    borderRadius: '30px',
                    background: `linear-gradient(135deg, ${member.color}, #ddd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    transform: 'rotate(-5deg)'
                }}>
                    <IconComponent color="white" size={48} strokeWidth={2} />
                </div>

                <h1 className="text-gradient" style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>{member.name}</h1>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    <span style={{
                        background: 'rgba(255,255,255,0.6)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        border: '1px solid rgba(255,255,255,0.5)'
                    }}>
                        {member.role}
                    </span>
                </div>

                <div style={{
                    textAlign: 'right',
                    whiteSpace: 'pre-line',
                    lineHeight: '2',
                    fontSize: '1.1rem',
                    color: '#334155',
                    background: 'rgba(255,255,255,0.4)',
                    padding: '1.5rem',
                    borderRadius: '20px'
                }}>
                    {member.fullDescription}
                </div>
            </div>
        </motion.div>
    );
};

export default FamilyMember;
