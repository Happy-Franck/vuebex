<template>
    <div class="navbar">
        <v-app-bar color="white" dense light height="100">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            </template>
            <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
            </v-list>
        </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="orange accent-4 white--text">
            <v-list-item v-for="i in niska" :key="i" :to="i.route">
                <v-list-item-title>{{i.text_link}}</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name : 'Navbar',
    data(){
        return{
            drawer: false,
            niska: [
                {text_link: 'Accueil' , route: '/'},
                {text_link: 'Nouveautes' , route: '/Nouveautes'},
                {text_link: 'Produits' , route: '/Produits'},
                {text_link: 'Equipe' , route: '/Equipe'},
                {text_link: 'Contact' , route: '/Contact'},
            ]
        }
    }
}
</script>
