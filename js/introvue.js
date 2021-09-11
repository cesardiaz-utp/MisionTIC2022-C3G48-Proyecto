// Arrow Function <==> Lambda param: body, () => {}
// Funciones flecha
function old() {
    let contador = 0;
    setInterval(() => {
        const spanNumero = document.getElementById("numero");
        console.log(spanNumero.innerHTML);
        spanNumero.innerHTML = contador++;
    }, 1000);
}

//Vue.createApp(config).mount(element)
const Counter = {
    data() {
        return {
            counter: 5,
            message: "Hola Mundo",
            maria: 15
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    }
}
Vue.createApp(Counter).mount("#contador")

Vue.createApp({
    data() {
        return {
            message: "Hello from Vue!"
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split("").reverse().join("");
        }
    }
}).mount("#evento");

Vue.createApp({
    data() {
        return {
            message: "Hola"
        }
    }
}).mount("#enlace")

Vue.createApp({
    data() {
        return {
            esVisible: true
        }
    },
    methods: {
        cambio() {
            this.esVisible = !this.esVisible;
        }
    }
}).mount("#condicional")

Vue.createApp({
    data() {
        return {
            pendientes: ["Hola", "Como", "Estas", "Hoy", "?"]
        }
    }
}).mount("#ciclos");

Vue.createApp({
    data() {
        return {
            contador: 1,
            tarea: "",
            tareas: [
            ]
        }
    },
    methods: {
        agregarTarea(){
            this.tareas.push({
                id: this.contador++,
                mensaje: this.tarea
            });
            this.tarea = "";
        }
    }
}).mount("#tareas");
