void setup() {
  size(400, 400, P3D);
}
  
void draw() {
  background(200);
  stroke(200, 200, 10 , 100);
  translate(200, 200, 0);
  rotateX(mouseY * 0.05);
  rotateY(mouseX * 0.05);
  fill (mouseX / 4);
  sphere(100);
}
