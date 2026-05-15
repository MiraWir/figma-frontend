import  { useState, useEffect } from 'react';
import burgerIcon from '../../assets/icons/burger.png';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const breakpoint = 992;

  //to window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= breakpoint) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isNarrow = windowWidth < breakpoint;


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        height: '128px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}>
        
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px'
        }}>
          
          <div style={{
            fontSize: '32px',
            fontWeight: 'bold'
          }}>
            <span style={{ color: '#776BB3' }}>Bu</span>
            <span style={{ color: '#FF725E' }}>cheen</span>
          </div>
          
          {!isNarrow && (
            <div style={{
              display: 'flex',
              gap: '32px',
              fontSize: '16px'
            }}>
              <span style={{ color: '#FF725E', cursor: 'pointer' }}>Home</span>
              <span style={{ color: '#999999', cursor: 'pointer' }}>Service</span>
              <span style={{ color: '#999999', cursor: 'pointer' }}>About</span>
              <span style={{ color: '#999999', cursor: 'pointer' }}>Pricing</span>
              <span style={{ color: '#999999', cursor: 'pointer' }}>Support</span>
            </div>
          )}

          {!isNarrow && (
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <button style={{
                backgroundColor: 'white',
                border: '1px solid #FF725E',
                borderRadius: '16px',
                padding: '12px 24px',
                fontSize: '16px',
                cursor: 'pointer'
              }}>
                Sign In
              </button>
              <button style={{
                backgroundColor: '#FF725E',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                padding: '12px 24px',
                fontSize: '16px',
                cursor: 'pointer'
              }}>
                Sign Up
              </button>
            </div>
          )}

          {/*burger*/}
          {isNarrow && (
            <button
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '32px',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle menu"
            >
              <img 
                src={burgerIcon} 
                alt="Menu" 
               style={{ width: '28px', height: '28px' }} 
              />
            </button>
          )}
        </div>
      </nav>

      {isNarrow && isMenuOpen && (
        <div style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #eee',
          padding: '20px',
          position: 'absolute',
          width: '100%',
          zIndex: 999,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontSize: '18px'
            }}>
              <span style={{ color: '#FF725E' }}>Home</span>
              <span style={{ color: '#999999' }}>Service</span>
              <span style={{ color: '#999999' }}>About</span>
              <span style={{ color: '#999999' }}>Pricing</span>
              <span style={{ color: '#999999' }}>Support</span>
            </div>


            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: '16px'
            }}>
              <button 
                onClick={closeMenu}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #FF725E',
                  borderRadius: '16px',
                  padding: '14px 24px',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}>
                Sign In
              </button>
              <button 
                onClick={closeMenu}
                style={{
                  backgroundColor: '#FF725E',
                  color: 'white',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '14px 24px',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;