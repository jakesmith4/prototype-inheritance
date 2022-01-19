function easyHTTP() {
  this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  this.http.onload = () => {
    if (this.http.status === 200) {
      const response = JSON.parse(this.http.responseText);
      callback(null, response);
    } else {
      callback(`New Error ${this.http.status}`);
    }
  };

  this.http.send();
};

// Make an HTTP GET Request

// Make an HTTP POST Request

// Make an HTTP PUSH Request

// Make an HTTP DELETE Request

export default easyHTTP;
