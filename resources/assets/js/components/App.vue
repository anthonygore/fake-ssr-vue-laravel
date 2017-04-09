<template>
    <div id="app">
        <div v-on:click="test">
            Hello {{ name }}, your birthday is {{ birthday }}
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            name() {
                return this.$store.state.name;
            },
            birthday() {
                return this.$store.state.birthday;
            }
        },
        methods: {
            test() {
                console.log('test clicked!');
            }
        }
    }
</script>
