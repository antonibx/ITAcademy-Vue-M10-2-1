Vue.component('fill', {
    template: //html
    `
    <div class="bg-warning p-3">
    <h3>{{missatge}}</h3>
    </div>
    `,
    data() {
        return {
            missatge: "Sóc el fill",
        };
    }
});