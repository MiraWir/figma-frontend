
const Navbar = () => {
  return (
    <nav style={{
      height: '128px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px'
      }}>
        
        {}
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold'
        }}>
          <span style={{ color: '#776BB3' }}>Bu</span>
          <span style={{ color: '#FF725E' }}>cheen</span>
        </div>
        
        {}
        <div style={{
          display: 'flex',
          gap: '32px',
          fontSize: '16px'
        }}>
          <span style={{ color: '#FF725E' }}>Home</span>
          <span style={{ color: '#999999' }}>Service</span>
          <span style={{ color: '#999999' }}>About</span>
          <span style={{ color: '#999999' }}>Pricing</span>
          <span style={{ color: '#999999' }}>Support</span>
        </div>
        
        {}
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
      </div>
    </nav>
  );
};

export default Navbar;