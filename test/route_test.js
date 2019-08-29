const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('Test Route', () => {
  it('should give me an array', () => {
    // call the test route on the server and get the data it returns
    // then test that to make sure it's acurate
    chai.request(server)
      .get('/api/test')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
      })
  });

  it('should be a length of 3', () => {
    // call the test route on the server and get the data it returns
    // then test that to make sure it's acurate
    chai.request(server)
      .get('/api/test')
      .end((err, res) => {
        expect(res.body).to.have.lengthOf(3);
      });
  });
});