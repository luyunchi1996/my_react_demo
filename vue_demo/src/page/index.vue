<template>
    <div>
      <Screen>
        <Part>
           <Header height="64px"/>
           <Content height="800PX"/>
           <Footer height="180px"/>
        </Part>
      </Screen>
    </div>
</template>

<script>
// import {List} from "@/components/starndlist";
import {Screen,Header,Part,Content,Footer} from "@/components/s"
export default {
  name: 'index',
  components:{
    Screen,
    Header,
    Part,
    Content,
    Footer,
  },
  data () {
    return {


    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
