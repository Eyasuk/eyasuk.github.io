function composeEmail() {
    var emailAddress = 'eyasukibru290@gmail.com';
    var subject = 'Wanted to chat about...';
   
  
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                     '?subject=' + encodeURIComponent(subject)
                     
    window.location.href = mailtoLink;
  }