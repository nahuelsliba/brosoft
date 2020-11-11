import React from 'react';
import { msg_footer_text1 } from '../i18n/translation';

function AppFooter() {
  return (    
    <header className="AppFooter"> 
      <div class="AppFooterText"> {msg_footer_text1} </div>
    </header>
  );
}

export default AppFooter;