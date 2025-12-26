import React, { useState } from 'react';
import { familyMembers } from '../data/family';
import FamilyCard from '../components/FamilyCard';
import { Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMembers = familyMembers.filter(member =>
        member.name.includes(searchTerm) || member.role.includes(searchTerm)
    );

    return (
        <div className="page-content" style={{ paddingBottom: '100px' }}>
            <header style={{ marginBottom: '2.5rem', textAlign: 'center', paddingTop: '2rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                        <Sparkles size={20} color="#f59e0b" />
                        <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>PREMIUM EDITION</span>
                    </div>
                    <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>عائلة المهندس طلال</h1>
                    <p style={{ fontSize: '1rem', opacity: 0.8 }}>التطبيق الرسمي (والسري) للعائلة</p>
                </motion.div>
            </header>

            <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, #6366f1, #ec4899)',
                    opacity: 0.1,
                    filter: 'blur(20px)',
                    borderRadius: '16px'
                }}></div>
                <input
                    type="text"
                    placeholder="ابحث عن شخص..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '16px 50px 16px 20px',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.5)',
                        outline: 'none',
                        fontSize: '1rem',
                        background: 'rgba(255,255,255,0.7)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        color: 'var(--text-color)',
                        position: 'relative',
                        zIndex: 1
                    }}
                />
                <Search
                    size={24}
                    color="#64748b"
                    style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
                />
            </div>

            <div className="grid">
                {filteredMembers.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                    >
                        <FamilyCard member={member} />
                    </motion.div>
                ))}
            </div>

            {filteredMembers.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)' }}>
                    <p>ما في حدا بهذا الاسم 🌚</p>
                </div>
            )}
        </div>
    );
};

export default Home;
