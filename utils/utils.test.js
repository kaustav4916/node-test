const expect = require('expect');
const utils =require('./utils');

describe('Utils',()=>{
it('should add two numbers',()=>{
var res = utils.add(33,11);
expect(res).toBe(44).toBeA('number');
/*if (res !==44) {
	throw new Error(`Expected 44,but got ${res}.`)
}*/
});
it('should asyn add two numbers',(done)=>{
utils.asyncAdd(4,3,(sum)=>{
	expect(sum).toBe(7).toBeA('number');
   done();
});
});
it('should square numbers',()=>{
var res = utils.square(3);
/*if (res !==9) {
	throw new Error(`Expected 9,but got ${res}.`)
}*/
expect(res).toBe(9).toBeA('number');
});
it('should async square a number',(done)=>{
	utils.asyncSquare(5,(res)=>{
		expect(res).toBe(25).toBeA('number');
		done();
	});
});
it('should expect some values',()=>{
	/*expect(12).toNotBe(12);*/
	expect({name:'Kaustav'}).toEqual({name:'Kaustav'});
});
});

/*it('should set firstName and LastName',()=>{
	var user ={location: 'Bagalore',age:25};
	var res =utils.setName(user,'Kaustav Karmakar');
	expect(res).toInclude({
		firstName:'Kaustav',
		lastName :'Karmakar'
		
	});
});*/