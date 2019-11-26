PImage img;
PShape globe;
float angle;
float sun;

void setup() {
  size(800, 800, P3D);
  img = loadImage("texture.png");
  globe = createShape(SPHERE, 200);
  globe.setStroke(0);
  globe.setTexture(img);
  background(0);
}
  
void draw() {
  colorMode(RGB); // make rgb for stars
  fill(0, 10); // fade stars
  rect(0, 0, width, height); // actual fading process
  fill(255); // sky color
  ellipse(random(width), random(height), 3, 3); // draw stars
  colorMode(HSB); // need hsb for point lights intensity
  pointLight(20, 100, 300, width-width, height/2, width*0.75);
  spotLight(180, 140, 100, width/2, 0, 0, -1, 0, 0, PI/2, 2);
  translate(width/2, height/2, 0);
  
  rotateY(angle += 0.01);
  rotateX(19);
  shape(globe);
}
