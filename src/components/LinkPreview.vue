 <template>
 <div id="app1" style="display: flex;
    flex-direction: column;
    align-items: center;">
<header>
  <span><h4>Link Previewer</h4></span>
</header>
    <form class="form-group" style="width:fit-content;background-image: linear-gradient(45deg, #538FFB, #5B54FA);padding:1vmax;">
        <label for="url" style="color: white;
    font-weight: 800;
    font-style: italic;">Enter Url </label>
        <input type="text" name="url" v-model="url" style="margin-left:10px;"/>
    </form>
  <link-prevue :url="url">
    <template slot-scope="props" >
        <div style="display: flex;
    justify-content: center;margin-top:10px">
      <div class="card text-center" style="width: 50%;box-shadow: 3px 0px 30px 10px #75b0b9;">
        <img class="card-img-top" :src="props.img" :alt="props.title"  />
        <div class="card-block">
          <h4 class="card-title">{{props.title}}</h4>
          <p class="card-text">{{props.description}}</p>
          <a v-bind:href="props.url" class="btn btn-primary">More</a>
        </div>
      </div>
        </div>
    </template>
  </link-prevue>
</div>
</template>

<script>
import LinkPrevue from 'link-prevue'

export default {
    components:{LinkPrevue},
    data(){
        return{
            url:''
        }
    }

}
</script>

<style>

</style>