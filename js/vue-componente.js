const app = Vue.createApp({
    data(){
        return {

        }
    }
});

app.component("todo-item", {
    template: `<li>Este es un elemento de la lista 123</li>`
})

app.mount("#app");