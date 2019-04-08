class Auth {
  constructor() {
    this.authenticated = false;
    this.clientId = 'af2d79aa-45db-4a68-ae20-e17ef555cb85';
    this.clientSecret = '1234';
  }


  login(username, password, cb) {
    const body = [
      { key: 'grant_type', value: 'password' },
      { key: 'client_id', value: this.clientId },
      { key: 'client_secret', value: this.clientSecret },
      { key: 'username', value: username },
      { key: 'password', value: password }
    ];

    const bodyString = body.map(e => `${e.key}=${e.value}`).join('&');

    fetch('https://local.wiki/oauth/token',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: bodyString,
    })
    .then(response => {
      console.log('token status', response.status);
      if (response.status === 200) {
        return response.json();
      } else {
        console.log('bad response', response.status);
        return;
      }
    })
    .then(data => {
      this.authenticated = true;
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      return cb();
    })
    .catch(err => console.log('fetch error', err));

  }


  getAccessToken = () => {
    return localStorage.getItem("access_token");
  }


  getUserID = (cb) => {
    fetch('https://local.wiki/oauth/debug', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.getAccessToken()}`
      }
    })
    .then(response => response.json())
    .then(user => cb(user.id))
    .catch(err => console.log('fetch error', err));
  }


  logout(cb) {
    this.authenticated = false;
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return cb();
  }


  isAuthenticated() {
    // console.log('isAuthenticated:', this.authenticated);
    return this.authenticated;
  }
}

export default new Auth();