const HTMLfetch = (url) => {
  return fetch(
    "http://helpers.grzegorz.warsaw.netro42.com/HTMLfetch.php?url=" + url
  )
    .then(function (response) {
      switch (response.status) {
        // status "OK"
        case 200:
          return response.text();
        // status "Not Found"
        case 404:
          throw response;
      }
    })
    .then(function (data) {
      return data;
    })
    .catch(function (response) {
      // "Not Found"
      console.log(response.statusText);
    });
};

export default HTMLfetch;
