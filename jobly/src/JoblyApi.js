import axios from 'axios';


// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NTg1NDkwNTB9.-6Qo-LGS9ntjmlaXtDcGI3eCq1MN0Q76KUTLOqpqBhg";
export default class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    // paramsOrData._token = ( // for now, hardcode token for "testing"
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
    //   "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30" +
    //   "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
    paramsOrData._token = localStorage.getItem('token');

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async loginUser(username, password) {
    let res = await this.request('login', {
      username: username || 'testuser',
      password: password || 'secret',
    }, 'post');
    return  [res.token, username];
  }

  /** Pulling data from API  */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }

  static async getJobs() {
    let res = await this.request('jobs');
    return res.jobs;
  }
  
  static async search(path, search) {
    let res = await this.request(`${path}?search=${search}`);
    return res[path];
  }

  static async registerUser(user){
    let res = await this.request(`users`, user, 'post');
    return res.token;
  }
  
  static async updateUser(username, body){
    let res = await this.request(`users/${username}`,{...body}, 'patch');
    return res.user.username;
  }

  static async getUser(user){
    let res = await this.request(`users/${user}`);
    let {username, password, ...info} = res.user;
    return info;
  }

  static async applyToJob(jobid, username, state) {
    let body = {
      username,
      state 
    };
    let res = await this.request(`jobs/${jobid}/apply`, body, 'post');
    return res.message;

  }
  /** Searching through API */
  


}