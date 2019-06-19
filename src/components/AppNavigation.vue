<template>
    <v-toolbar app color="brown darken-4" dark>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-spacer class="hidden-md-and-up"></v-spacer>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-btn class="hidden-sm-and-down" flat>Menu</v-btn>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-btn flat class="hidden-sm-and-down">Sign In</v-btn>
        <v-btn color="brown lighten-3" class="hidden-sm-and-down">Join</v-btn>
    </v-toolbar>
</template>

<script>
export default {
    name: 'AppNavigation'
};
</script>
