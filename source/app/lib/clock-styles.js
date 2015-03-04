
/**
@mixin transition {
  transition: all 0.8s linear;
  -webkit-transition: all 0.8s linear;
  -ms-transition: all 0.8s linear;
  -moz-transition: all 0.8s linear;
}
@mixin transform($prop) {
  transform: $prop;
  -webkit-transform: $prop;
  -ms-transform: $prop;
  -moz-transform: $prop;
}
@mixin transform-origin($origin) {
	tranform-origin: $origin;
	-webkit-transform-origin: $origin;
	-ms-transform-origin: $origin;
	-moz-transform-origin: $origin;
}
@mixin center {
	margin: auto;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

#meep-clock {
  height: 100%;
  width: 100%;
}

.mp-clock {
  position: absolute;
  top: 0;
  left: 0;
}

#clock-container {
  position: absolute;
  width: 100%;
  height: 100%;
	margin: auto;
  @include transition;
	@include transform-origin(100% 50%);
	@include transform(scale(0.5));
}
#filter {
  position: absolute;
	@include center;
  overflow: hidden;
  @include transform(translate3d(0,0,0));
  @include transition;
}
#filter-background {
	position: absolute;
  -webkit-filter: blur(3px);
  @include transition;
}
.background {
  position: absolute;
  height: 100%;
  width: 100%;
	overflow: hidden;
  @include transition;
}

#normal.background {
  background-color: #6ACCBD;
}
#focus.background {
  background-color: #BDBE08;
}
#cooperation {
  display: block;
  position: absolute;
  max-width: 50%;
  max-height: 75%;
  top: 10%;
  right: 50%;
  @include transition;
}
#cooperation-logo {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 50%;
  @include transition;
}
#focus-background {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('./focus-c.png');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  @include transition;
}
#focus-egg {
  position: absolute;
  max-width: 60%;
  max-height: 60%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  @include transform(scale(0));
  @include transition;
}
#focus-logo {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 40%;
  max-height: 30%;
  @include transition;
  @include transform(translateX(100%));
}

#meep-clock.focus {
  #normal.background {
    opacity: 0;
  }
  #cooperation {
    @include transform(translateX(-120%));
  }
  #cooperation-logo {
    @include transform(translateX(100%));
  }
  #clock-container {
		@include transform(none);
  }
  #focus-egg {
    @include transform(none);
  }
  #focus-logo {
    @include transform(none);
  }
}


*/

