export function getMutation(target, callback) {
  const config = {
    childList: true
  }

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if(mutation.type === 'childList') {
        callback();
      }
    })
  })

  observer.observe(target, config);
}