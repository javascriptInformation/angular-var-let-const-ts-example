import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = 'Hello a';

  constructor() {
    this.exampleForBlockScope();
    this.exampleForHoisting();
    this.exampleForRedeclaration();
    this.problemWithVar();
  }

  exampleForBlockScope() {
    // console.log('Calling out of block variable', this.a);
    console.log('-------- start of block scope  examples ------');

    {
      let bLet = 'Block Scoped let';
      var bVar = 'Block Scoped Var';
      const aConst = 'Block Scoped const';
      console.log('Calling the let variable in block:: ', bLet);
      console.log('Calling the var variable in block:: ', bVar);
      console.log('Calling the const variable in block:: ', aConst);
      console.log('-------- end of block examples ------');
    }
    // please uncomment the below line while you testing
    //  console.log("Calling the let variable out of the block:: ", bLet)
    //  console.log("Calling the const variable out of the block:: ", aConst)
    console.log('Calling the var variable out of the block:: ', bVar);
    console.log('-------- end of block scoped examples ------');
  }

  exampleForHoisting() {
    console.log('-------- start of hoisting  examples ------');

    // example for hoistin of var
    console.log('calling the variable before decalring', aVar);
    var aVar = 'Example for hoisting';

    // example for hoisting of let
    // please uncomment the below two lines for output
    // console.log("Calling the varible before declaration of let", aLet);
    // let aLet = "Example for let hoisting";

    // example for hositing of const
    // console.log("Calling the varible before declaration of let", aLet);
    // const aLet = "Example for let hoisting";

    console.log('-------- end of hoisting  examples ------');
  }

  exampleForRedeclaration() {
    console.log('-------- start of redclartion  examples ------');

    var ab = 'hello ab var';
    var ab = 'hello redeclaration of var ab';
    ab = 'Hello after reassigning the value';

    let id = 'hello';
    // let id = 'hello after redclaraing';

    const name = ' hi ';
    // const name = ' hi after redeclaration';

    console.log(' redclaring of var ex:: ', ab);
    console.log(' redclaring of let ex:: ', id);
    console.log(' redclaring of let ex:: ', name);
    console.log('-------- end of redclartion  examples ------');
  }

  problemWithVar() {
    console.log('-------- start of var problem  examples ------');

    var example = 'out of the block';
    console.log('before the block for var prob', example);

    {
      var example = 'inside the block';
      console.log('inside the block for var prob', example);
    }
    console.log('after the block for var prob', example);
    console.log('-------- end of var problem  examples ------');
  }
}
