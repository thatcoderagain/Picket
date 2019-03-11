<style>
p
{
    font-size:18px;
    color:white;
}
.alert-danger
{
    color: #dee2e6;
}
</style>

<template class="row">
    <div class="col-4 card-deck">
        <div class="card border-primary mb-3 overflow-hidden"  @mouseover="footer=true" @mouseout="footer=false">
            <img class="card-img-top" v-bind:src="src" alt="Card image cap">
            
            <div class="card-footer animated position-absolute fixed-bottom mb-0 p-0" :class="[footer ? 'slideInUp' : 'slideOutDown']">
                <div class="alert alert-info text-dark m-0">                    
                    <small class="align-right"><b>CATEGORY</b></small>
                    <br>
                    <small class="align-left"><i>KEYWORDS</i></small>
                    <br>
                    <div>                
                        <button type="button" class="btn btn-primary btn-sm">Visit Photographer</button>
                        <button type="button" class="btn btn-primary btn-sm">Add To Cart</button>                    
                    </div>
                </div>                
            </div>
        </div>
    </div>
                
</template>

<script>
    export default {
        data() {
            return {
                src: 'https://hdqwalls.com/download/minimalism-plane-ot-1600x900.jpg',
                footer: false,
            }
        }
    }
</script>
