<style>
#bg
{
   background-color: #DFE4EC;
}
#bgheader
{
    background-color:#247C74;
    color: white;
}
</style>
<template>
    <div class="container-fluid fullscreen" id="bg">
        <div class="container mt-5">
            <div class="card">
                <div class="card-header p-2" id="bgheader">
                    <h2 class="font-weight-bold">Subscription</h2>
                </div>
                <div class="card-body pt-3 pb-3">
                    <div class="row bg-dark text-white">
                        <div class="col-sm-3 col-md-2 p-3 ">Plan Name</div>
                        <div class="col-sm-3 col-md-3 p-3">From</div>
                        <div class="col-sm-3 col-md-3 p-3">Validity</div>
                        <div class="col-sm-3 col-md-3 p-3">Images Left</div>
                    </div>
                    <div class="row bg-light text-black">
                        <div class="col-sm-3 col-md-2 pt-1 pb-1">Plan Name</div>
                        <div class="col-sm-3 col-md-3 pt-1 pb-1">From</div>
                        <div class="col-sm-3 col-md-3 pt-1 pb-1">Validity</div>
                        <div class="col-sm-3 col-md-3 pt-1 pb-1">Images Left</div>
                    </div>
                </div>
            </div>
            <br>

        </div>
        <div class="alert text-center" id="bg">
            <h4>You have not subscribed to any plans!</h4>
            <button type="button" class="btn btn-primary btn-lg">Subscribe</button>
        </div>
        <div class="container mt-3">
            <div class="card">
                <div class="card-header p-2" id="bgheader">
                   <h2 class="font-weight-bold">Plan History</h2>
               </div>
               <div class="shadow">
                <div class="card-body pt-3 pb-3">
                    <div class="row bg-dark text-white">
                        <div class="col-sm-3 col-md-2 p-3 ">Plan Name</div>
                        <div class="col-sm-3 col-md-3 p-3">From</div>
                        <div class="col-sm-3 col-md-3 p-3">Validity</div>
                        <div class="col-sm-3 col-md-3 p-3">Bill</div>
                    </div>
                    <div class="row bg-light text-dark">
                        <div class="col-sm-3 col-md-2 pt-1 pb-1">Plan Name</div>
                        <div class="col-sm-3 col-md-3 pt-1 pb-1">From</div>
                        <div class="col-sm-3 col-md-3 pt-1 pb-1">Validity</div>
                        <div class="col-sm-3 col-md-3 pt-1 pb-1">Bill</div>
                    </div>
                    <div class="row bg-light text-dark">
                        <div class="col-sm-3 col-md-2 pt-1 pb-1">Plan Name</div>
                        <div class="col-sm-3 col-md-3 pt-1 pb-1">From</div>
                        <div class="col-sm-3 col-md-3 pt-1 pb-1">Validity</div>
                        <div class="col-sm-3 col-md-3 pt-1 pb-1">Bill</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
