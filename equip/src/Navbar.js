import React from 'react';

const Navbar = (props) => {
  console.log('props', props);
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
    
      <a href="../login/login.html"  style= {styles.link12} >Back to Farmer's Hub</a> 
    
        <img src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khv6EqxVNmxfIwXs1M3EMoAJtliUthvBo8fw8" style={styles.logo22} />
        
        <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" style={styles.cartIcon} />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: 150,
    background:  'rgb(34 197 94)',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logo22: {
   
    marginRight: 600,

  },
  link12: {
      backgroundColor: 'grey',

      marginRight: 400,
      padding: 2,
      color: 'white'
  },
  cartIcon: {
    height: 52,
    marginRight: 20
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount:  {
    background: 'yellow',
    borderRadius: '50%',
    padding:  '4px 8px',
    position: 'absolute',
    right: 0,
    top: 70
  }
};

export default Navbar;