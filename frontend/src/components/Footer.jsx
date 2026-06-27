import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)',
            padding: '2rem 1rem',
            marginTop: 'auto',
            textAlign: 'center'
        }}>
            <div className="container">
                <p style={{ color: 'var(--text-secondary)' }}>
                    &copy; {new Date().getFullYear()} Grocery Ease. All rights reserved.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a href="#" style={{ color: 'var(--primary-color)' }}>{t('home')}</a>
                    <a href="#" style={{ color: 'var(--primary-color)' }}>Terms of Service</a>
                    <a href="#" style={{ color: 'var(--primary-color)' }}>Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
