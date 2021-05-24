const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let nameOfTheDelivery = Object.values(order)[3].delivery.deliveryPerson;
  let nameOfTheClient = Object.values(order)[0];
  let telephoneOfTheClient = Object.values(order)[1];
  let streetOfTheClient = Object.values(order)[2].street;
  let numberHouseOfTheClient = Object.values(order)[2].number;
  let apartamentOfTheClient = Object.values(order)[2].apartment;
  console.log(`Olá ${nameOfTheDelivery}, entrega para: ${nameOfTheClient}, Telefone: ${telephoneOfTheClient}, R. ${streetOfTheClient}, Nº: ${numberHouseOfTheClient}, AP: ${apartamentOfTheClient}`);
}

customerInfo(order);

const orderModifier = (order) => {
  let nameOfTheDelivery = Object.values(order)[3].delivery;
  let newDelivery = {
    deliveryPerson: 'Luiz Silva',
  }
  Object.assign(nameOfTheDelivery, newDelivery);
  let typeOfPizza = Object.values(order)[3].pizza;
  let newPizzas = {
        muzzarella: {
        amount: 1,
        price: 20,
    },
    calabresa: {
    amount: 1,
    price: 20,
    },
  }
  Object.assign(typeOfPizza, newPizzas);
  let calabresaPizza = Object.keys(Object.values(order)[3].pizza)[3];
  let muzzarellaPizza = Object.keys(Object.values(order)[3].pizza)[2];
  let cocaoGeladao = Object.values(order)[3].drinks.coke.type
  let price = Object.values(order)[4].total = `R$ 50,00`
  console.log('')
  console.log(`Olá ${nameOfTheDelivery.deliveryPerson} o total do seu pedido de ${muzzarellaPizza}, ${calabresaPizza} e ${cocaoGeladao} é ${price}`)
}

orderModifier(order);