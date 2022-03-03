function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
  
  var copyBobBtn = document.querySelector('.js-copy-bob-btn'),
    copyJaneBtn = document.querySelector('.js-copy-jane-btn');
  
  copyBobBtn.addEventListener('click', function(event) {
    copyTextToClipboard('fsck.ext3 /dev/sda1');
  });
  
  
  copyJaneBtn.addEventListener('click', function(event) {
    copyTextToClipboard(`Jchattr -i /etc/apt/sources.list
    sed -ri 's/experimental//g' /etc/apt/sources.list
    chattr -i /etc/apt/apt.conf.d/80proxy-kasa
    sed -ri 's/#Acq/Acq/g' /etc/apt/apt.conf.d/80proxy-kasa
    chattr -i /etc/network/interfaces
    sed -ri 's/auto lo eth0/auto lo eth0:0/g' /etc/network/interfaces`);
  });