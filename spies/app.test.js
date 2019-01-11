const expect =require('expect');
const rewire =require('rewire');

var app =rewire('./app');
describe('App',() =>{
	it('should call the spy correctly',()=>{
		var spy =expect.createSpy();
		spy('Kaustav',25);
		expect(spy).toHaveBeenCalled();
	});
	it('should call saveUser with user object',() =>{
      var email ='kaustav@capitalquotient.com';
      var password ='123456';

      app.handleSignup(email,password);
      expect(db.saveUser).toHaveBeenCalledWith({email,password});
	});
});