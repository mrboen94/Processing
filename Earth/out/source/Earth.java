import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class Earth extends PApplet {

PImage img;
PShape globe;
float angle;
float sun;

public void setup() {
  
  img = loadImage("texture.png");
  globe = createShape(SPHERE, 200);
  globe.setStroke(0);
  globe.setTexture(img);
  background(0);
}
  
public void draw() {
  colorMode(RGB); // make rgb for stars
  fill(0, 10); // fade stars
  rect(0, 0, width, height); // actual fading process
  fill(255); // sky color
  ellipse(random(width), random(height), 3, 3); // draw stars
  colorMode(HSB); // need hsb for point lights intensity
  pointLight(20, 100, 300, width-width, height/2, width*0.75f);
  spotLight(180, 140, 100, width/2, 0, 0, -1, 0, 0, PI/2, 2);
  translate(width/2, height/2, 0);
  
  rotateY(angle += 0.01f);
  rotateX(19);
  float s = mouseX / PApplet.parseFloat(width);
  specular(s, s, s);
  shape(globe);
}
  public void settings() {  size(800, 800, P3D); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Earth" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
