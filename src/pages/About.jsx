import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="page-content" style={{ paddingBottom: '100px', textAlign: 'center', marginTop: '3rem' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel"
                style={{ padding: '3rem 2rem' }}
            >
                <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--primary-gradient)',
                    borderRadius: '20px',
                    margin: '0 auto 1.5rem auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)'
                }}>
                    ℹ️
                </div>
                <h1 className="text-gradient" style={{ marginBottom: '1rem', fontSize: '2rem' }}>عن التطبيق</h1>
                <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-color)' }}>
                    هذا التطبيق تم تطويره خصيصاً لعائلة المهندس طلال.
                </p>
                <p style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
                    للتذكير: جميع المعلومات الواردة هنا لأغراض المزاح والمحبة 😄
                </p>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', opacity: 0.7 }}>
                    V 2.0.0 - Premium Edition
                    <br />
                    Powered by Qaes Talal Al Jazi
                </div>
            </motion.div>
        </div>
    );
};

export default About;
