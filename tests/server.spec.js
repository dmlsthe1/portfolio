const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('server', function() {
  this.timeout(5000);
  beforeEach((done) => { 
    done();
  });

  afterEach((done) => {
      done();
  })

  it('responds to /', (done) => {
  chai.request(server)
    .get('/')
    .end((err, res) => {
      expect(err).not.exist;
      expect(res).to.have.status(200);
      done();
    });
  });
})