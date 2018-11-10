float randomPerlin = 0.01;

void setup() {
  scale(2);
  size(600, 250, P2D);
  for (int i = 0; i <= width; i++) {
    arr.add(i, getRandomInt());
  }
}
ArrayList<Integer> arr = new ArrayList();
int x = 0;
int y = 1;

void draw() {
  background(1);
  stroke(getRandomInt()%255, 100, getRandomInt()%255);
  for (int w = 0; w < width; w ++) {
    for (int i = 0; i < width; i++) {
      line(i, height, i, arr.get(i));
    }
    if (arr.size()-1 > y) {
      if (arr.get(x) > arr.get(y)) {
        swap(arr.get(x), arr.get(y), x, y);
      }
    }
    x++;
    y++;
    if (y == width) {
      x = 0;
      y = 1;
    }
  }
}


void swap(int i, int j, int x, int y) {
  int temp = i;
  i = j;
  j = temp;
  arr.set(x, i);
  arr.set(y, j);
}

int getRandomInt() {
  randomPerlin += 0.02;
  return (int) (noise(randomPerlin)*height);
}
