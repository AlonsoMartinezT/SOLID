// Definimos la clase User
class User {
    constructor(username, email){   
        this.username = username;
        this.email = email;
        this.verified = false;  // Inicializamos el estado de verificación
    }
    
    // Método para enviar un correo solo si la cuenta está verificada
    sendEmail(user, subject, message){
        if (this.verified) {
            console.log(`To: ${user.email}\nSubject: ${subject}\n\n${message}`);    
        } else {
            console.log(`Por favor, verifica tu cuenta: ${this.email}`);
        }
    }
    
    // Método para verificar la cuenta
    verifyAccount(){
        this.verified = true;
    }
}
// Definimos la clase Order
class Order {
    static orderId = 0;  // Variable estática para llevar el control del ID de orden

    constructor(customer, details) {
        this.customer = customer;  // 'customer' es ahora una instancia de User
        this.details = details;
        this.orderId = ++Order.orderId;  // Asignamos un ID único para la orden
    }
    
    // Método para mostrar los detalles de la entrega de la orden
    deliverOrder() {
        console.log(`Order ${this.orderId}\n${this.customer.username}\n${this.details}`);
    }
}

// Creamos instancias de User
const user1 = new User('alonso', 'alonso@');
const user2 = new User('mar', 'mar@');

// Verificamos las cuentas de los usuarios (opcional)
user1.verifyAccount();
user2.verifyAccount();

// Creamos instancias de Order pasando objetos de tipo User
const order1 = new Order(user2, 'Double Western Combo'); // user2 es un objeto User
order1.deliverOrder();

const order2 = new Order(user1, 'Double Western Combo'); // user1 es un objeto User
order2.deliverOrder();  // Aquí se usa 'user1', no 'user2'
