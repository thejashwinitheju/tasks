class Account{
    id;
    name;
    amount;
    min_bal=500;
    constructor(id,name,amount){
        
        this.id=id;
        this.name=name;
        this.amount=amount;


    }
    get_balance(){
      return this.amount =this.amount-this.min_bal
    }
}
let a1=new Account(1,"theju",5000);
console.log(a1.get_balance());

