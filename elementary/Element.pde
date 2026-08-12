int HYDROGEN = 0;
int ALKALI_METALS = 1; //color(255,0,0)
int NOBLE_GASSES = 2; //color(252,78,3)
int ALKALINE_EARTH_METALS = 3; //color(255,166,0)
int BORON_ELEMENTS = 4; //color(1,138,42)
int CARBON_ELEMENTS = 5; //color(8,255,82)
int NITROGEN_ELEMENTS = 6; //color(139,0,245)
int OXYGEN_ELEMENTS = 7; //color(217,188,108)
int HALOGEN_ELEMENTS = 8; //color(153,11,15)
int TRANSITION_ELEMENTS = 9; //color(11, 148, 153)
int SUPERHEAVIES = 10; //color(11, 148, 153)
int LANTHANIDES = 11; //color(48, 14, 237)
int ACTINIDES = 12; //color(38, 245, 252)

int[] SHELL_CAPACITIES = { 2, 8, 18, 32, 32, 18, 8};

class Element {

  String symbol;
  int atomicNumber;
  String name;
  int family;
  String shellConfig;

  Element(String n, String sym, int an, int f, String config) {
    symbol = sym;
    name = n.toUpperCase();
    atomicNumber = an;
    family = f;
    shellConfig = config;
  }//constructor
  Element(String n, String sym, int an) {
    this(n, sym, an, 0, "");
  }//constructor

  String toString() {
    return atomicNumber + " " + name + " " + symbol;
  }//toString

  void displayDetail(int x, int y, int size) {

    display(x-size, y-size/2, size);

    //nucleus
    circle(x+size, y, size *.08);
    int[] shells = int(split(shellConfig, '-'));
    int electronCount = atomicNumber;
    int shellNum = 0;
    float shellScale = 1.0 / shells.length;
    float shellSize = size * shellScale;

    for (int s=0; s < shells.length; s++) {
      noFill();
      //orbital
      circle(x+size, y, shellSize);
      //electrons
      drawShell(x+size, y, shells[s], shellSize, size*1.0/7*0.2);
      shellSize+= size*shellScale;
    }
  }//displayDetail

  void drawShell(int cx, int cy, int numElectrons, float size, float eSize) {
    fill(0);
    for (int i=0; i < numElectrons; i++) {
      float theta = (float)i/numElectrons * PI * 2 + PI;
      float ex = (size/2) * sin(theta) + cx;
      float ey = (size/2) * cos(theta) + cy;
      circle(ex, ey, eSize);
    }
  }//drawShell

  void display(int x, int y, int size) {
    //draw element square
    stroke(0);
    strokeWeight(2);
    if (family == HYDROGEN) { fill(255); }
    else if (family == ALKALI_METALS) { fill(color(255,0,0)); }
    else if (family == NOBLE_GASSES) { fill(color(252,78,3)); }
    else if (family == ALKALINE_EARTH_METALS) { fill(color(255,166,0)); }
    else if (family == BORON_ELEMENTS) { fill(color(1,138,42)); }
    else if (family == CARBON_ELEMENTS) { fill(color(8,255,82)); }
    else if (family == NITROGEN_ELEMENTS) { fill(color(139,0,245)); }
    else if (family == OXYGEN_ELEMENTS) { fill(color(217,188,108)); }
    else if (family == HALOGEN_ELEMENTS) { fill(color(153,11,15)); }
    else if (family == TRANSITION_ELEMENTS) { fill(color(11, 148, 153)); }
    else if (family == SUPERHEAVIES) { fill(color(11, 148, 153)); }
    else if (family == LANTHANIDES) { fill(color(48, 14, 237)); }
    else if (family == ACTINIDES) { fill(color(38, 245, 252)); }
    rect(x, y, size, size);

    fill(0);
    //atomoic number
    textAlign(CENTER, TOP);
    textSize(size * .30);
    text(atomicNumber, x+size/2, y+2);

    //symbol
    textAlign(CENTER, CENTER);
    textSize(size *.60);
    text(symbol, x + size/2, y + size/2);

    //name
    textAlign(CENTER, BOTTOM);
    textSize(size * .25);
    //get size using current ratio, decrease until it fits
    float nameSize = textWidth(name);
    float sizeoffset = size * 0.3;
    while (nameSize > (size - 4)) {
      sizeoffset--;
      textSize(sizeoffset);
      nameSize = textWidth(name);
    }//fit name in box;
    text(name, x + size/2, y + size);

  }//display
}//class
