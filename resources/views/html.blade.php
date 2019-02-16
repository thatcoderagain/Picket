@extends('layouts.app')

@section('title', 'Ankita')

@section('style')

@import url(https://fonts.googleapis.com/css?family=Roboto:900,300);
body {
  background-color: #f0f0f0;
  font-family: roboto;
}
.container {
  width: 400px;
  margin: 120px auto 120px;
  background-color: #fff;
  padding: 0 20px 20px;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.075);
  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
  -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
  text-align: center;
}
.container:hover .avatar-flip {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
}
.container:hover .avatar-flip img:first-child {
  opacity: 0;
}
.container:hover .avatar-flip img:last-child {
  opacity: 1;
}
.avatar-flip {
  border-radius: 100px;
  overflow: hidden;
  height: 150px;
  width: 150px;
  position: relative;
  margin: auto;
  top: -60px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  box-shadow: 0 0 0 13px #f0f0f0;
  -webkit-box-shadow: 0 0 0 13px #f0f0f0;
  -moz-box-shadow: 0 0 0 13px #f0f0f0;
}
.avatar-flip img {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
}
.avatar-flip img:first-child {
  z-index: 1;
}
.avatar-flip img:last-child {
  z-index: 0;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  opacity: 0;
}
h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}
h4 {
  font-size: 13px;
  color: #00baff;
  letter-spacing: 1px;
  margin-bottom: 25px
}
p {
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 20px;
  color: #666;
}
button {
  display: inline-block;
  padding: 5x 5px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  outline: none;
  color: #fff;
  background-color:#5DC761 ;
  border: none;
  border-radius: 15px;
  font-family: Courier New;
}

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  background-color: #3CBC8D;
  color: white;
}

@endsection

@section('content')

<div class="container">
  <div class="avatar-flip">
    <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150">
    <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150">
  </div>
  <form action="">
       User name:<input type="text" name="userid">
        <br>
       User email:<input type="email" name="psw">
       <br>
       User Bio:<input type="text" name="userbio">
        <br>
       User Mobile NO.:<input type="" name="Mobile No.">
 </form>
  <button> UPDATE</button>
</div>

@endsection
