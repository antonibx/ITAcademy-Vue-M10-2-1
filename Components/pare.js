Vue.component('pare', {
    template: //html
    `
    <div class="bg-success p-3 mt-5">
        <h1>{{missatge}}</h1>
        <fill></fill>
    </div>
    `,
    data() {
        return {
            missatge: 'Sóc el pare'
        };
    }
});