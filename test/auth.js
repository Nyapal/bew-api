const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const assert = chai.assert 
const Store = require('../models/store')

chai.use(chaiHttp);

const testStore = {
    name: 'Beauty Supply Warehouse',
    address: '555 Beauty Supply Lane'
}

describe('Store', () => {
    before( () => {

    })

    after( () => {
        Store.deleteMany({ name: 'Beauty Supply Warehouse'}).exec( (error, stores) => {
            store.remove()
        })

    })

    // TEST INDEX
  it('should index ALL stores on / GET', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });

  // TEST NEW
  it('should display new form on /stores/new GET', (done) => {
    chai.request(server)
      .get(`/stores/new`)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html
          done();
        });
  });

  // TEST CREATE
  it('should create a SINGLE store on /stores POST', (done) => {
      chai.request(server)
          .post('/stores')
          .send(testStore)
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html
            done();
          });
    });

  // TEST SHOW
  it('should show a SINGLE charity on /stores/<id> GET', (done) => {
    const store = new Store(testStore);
    charity.save((err, data) => {
      chai.request(server)
        .get(`/stores/${data._id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html
          done();
        });
    });
  });

  // TEST EDIT
  it('should edit a SINGLE charity on /stores/<id>/edit GET', (done) => {
    const store = new Store(testStore);
     charity.save((err, data) => {
       chai.request(server)
         .get(`/stores/${data._id}/edit`)
         .end((err, res) => {
           res.should.have.status(200);
           res.should.be.html
           done();
         });
     });
 });

  // TEST UPDATE
  it('should update a SINGLE charity on /stores/<id> PUT', (done) => {
    const store = new Store(testStore);
    charity.save((err, data)  => {
     chai.request(server)
      .put(`/stores/${data._id}?_method=PUT`)
      .send({'org': 'Updating the name'})
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html
        done();
      });
    });
  });

  // TEST DELETE
  it('should delete a SINGLE charity on /stores/<id> DELETE', (done) => {
    const store = new Store(testStore);
    charity.save((err, data)  => {
     chai.request(server)
      .delete(`/stores/${data._id}?_method=DELETE`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html
        done();
      });
    });
  });



})