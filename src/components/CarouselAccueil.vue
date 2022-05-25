<template>
    <v-carousel cycle show-arrows-on-hover height="875">
      <v-carousel-item v-for="(liste,i) in listes" :key="i" :src="liste.src">
          <v-row class="fill-height" align="center" justify="center">
            <div class="ombre">
                <div class="display-1 font-weight-black">{{liste.title}} </div>
            </div>
          </v-row>
      </v-carousel-item>
    </v-carousel>
</template>
<script>
    export default {
        name: 'CarouselAccueil',
        data: () => ({
            listes: [
                {
                    src: require('@/assets/carousel/Beer-sands-bottles_1920x1080.jpg') ,
                    title: 'Drinking',
                },
                {
                    src: require('@/assets/carousel/beer.jpg') ,
                    title: 'Drinking',
                },
                {
                    src: require('@/assets/carousel/beer-wallpaper-1920x1080-2638_48.jpg') ,
                    title: 'Drinking',
                },
            ],
        }),
    }
</script>
<style scoped>
    .ombre{
        width: 35%;
        text-align: center;
        text-shadow: 0px 0px 15px rgb(70, 69, 69);
        padding: 2%;
        background: rgba(190, 190, 190, 0.322);
        border-radius: 20px;
    }
</style>
