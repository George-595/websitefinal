export default {
    // ... other component options ...
    computed: {
        currentPageComponent() {
            switch(this.currentPage) {
                case 'home':
                    return HomePage;
                // ... other cases ...
                default:
                    return HomePage;
            }
        }
    },
    // ... other component options ...
}