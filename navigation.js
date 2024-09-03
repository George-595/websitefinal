new Vue({
    el: '#app',
    data: {
        dropdowns: {
            investingSystem: false
        }
    },
    methods: {
        toggleDropdown(dropdown) {
            this.dropdowns[dropdown] = !this.dropdowns[dropdown];
        }
    },
    mounted() {
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) {
                Object.keys(this.dropdowns).forEach(key => {
                    this.dropdowns[key] = false;
                });
            }
        });
    }
});