let TABLE_DATA = '1,Hydrogen,H,0,1\n2,Helium,He,2,2\n3,Lithium,Li,1,2-1\n4,Beryllium,Be,3,2-2\n5,Boron,B,4,2-3\n6,Carbon,C,5,2-4\n7,Nitrogen,N,6,2-5\n8,Oxygen,O,7,2-6\n9,Fluorine,F,8,2-7\n10,Neon,Ne,2,2-8\n11,Sodium,Na,1,2-8-1\n12,Magnesium,Mg,3,2-8-2\n13,Aluminum,Al,4,2-8-3\n14,Silicon,Si,5,2-8-4\n15,Phosphorus,P,6,2-8-5\n16,Sulfur,S,7,2-8-6\n17,Chlorine,Cl,8,2-8-7\n18,Argon,Ar,2,2-8-8\n19,Potassium,K,1,2-8-8-1\n20,Calcium,Ca,3,2-8-8-2\n21,Scandium,Sc,9,2-8-9-2\n22,Titanium,Ti,9,2-8-10-2\n23,Vanadium,V,9,2-8-11-2\n24,Chromium,Cr,9,2-8-13-1\n25,Manganese,Mn,9,2-8-13-2\n26,Iron,Fe,9,2-8-14-2\n27,Cobalt,Co,9,2-8-15-2\n28,Nickel,Ni,9,2-8-16-2\n29,Copper,Cu,9,2-8-18-1\n30,Zinc,Zn,9,2-8-18-2\n31,Gallium,Ga,4,2-8-18-3\n32,Germanium,Ge,5,2-8-18-4\n33,Arsenic,As,6,2-8-18-5\n34,Selenium,Se,7,2-8-18-6\n35,Bromine,Br,8,2-8-18-7\n36,Krypton,Kr,2,2-8-18-8\n37,Rubidium,Rb,1,2-8-18-8-1\n38,Strontium,Sr,3,2-8-18-8-2\n39,Yttrium,Y,9,2-8-18-9-2\n40,Zirconium,Zr,9,2-8-18-10-2\n41,Niobium,Nb,9,2-8-18-12-1\n42,Molybdenum,Mo,9,2-8-18-13-1\n43,Technetium,Tc,9,2-8-18-13-2\n44,Ruthenium,Ru,9,2-8-18-15-1\n45,Rhodium,Rh,9,2-8-18-16-1\n46,Palladium,Pd,9,2-8-18-18\n47,Silver,Ag,9,2-8-18-18-1\n48,Cadmium,Cd,9,2-8-18-18-2\n49,Indium,In,4,2-8-18-18-3\n50,Tin,Sn,5,2-8-18-18-4\n51,Antimony,Sb,6,2-8-18-18-5\n52,Tellurium,Te,7,2-8-18-18-6\n53,Iodine,I,8,2-8-18-18-7\n54,Xenon,Xe,2,2-8-18-18-8\n55,Cesium,Cs,1,2-8-18-18-8-1\n56,Barium,Ba,3,2-8-18-18-8-2\n57,Lanthanum,La,11,2-8-18-18-9-2\n58,Cerium,Ce,11,2-8-18-19-9-2\n59,Praseodymium,Pr,11,2-8-18-21-8-2\n60,Neodymium,Nd,11,2-8-18-22-8-2\n61,Promethium,Pm,11,2-8-18-23-8-2\n62,Samarium,Sm,11,2-8-18-24-8-2\n63,Europium,Eu,11,2-8-18-25-8-2\n64,Gadolinium,Gd,11,2-8-18-25-9-2\n65,Terbium,Tb,11,2-8-18-27-8-2\n66,Dysprosium,Dy,11,2-8-18-28-8-2\n67,Holmium,Ho,11,2-8-18-29-8-2\n68,Erbium,Er,11,2-8-18-30-8-2\n69,Thulium,Tm,11,2-8-18-31-8-2\n70,Ytterbium,Yb,11,2-8-18-32-8-2\n71,Lutetium,Lu,11,2-8-18-32-9-2\n72,Hafnium,Hf,9,2-8-18-32-10-2\n73,Tantalum,Ta,9,2-8-18-32-11-2\n74,Tungsten,W,9,2-8-18-32-12-2\n75,Rhenium,Re,9,2-8-18-32-13-2\n76,Osmium,Os,9,2-8-18-32-14-2\n77,Iridium,Ir,9,2-8-18-32-15-2\n78,Platinum,Pt,9,2-8-18-32-17-1\n79,Gold,Au,9,2-8-18-32-18-1\n80,Mercury,Hg,9,2-8-18-32-18-2\n81,Thallium,Tl,4,2-8-18-32-18-3\n82,Lead,Pb,5,2-8-18-32-18-4\n83,Bismuth,Bi,6,2-8-18-32-18-5\n84,Polonium,Po,7,2-8-18-32-18-6\n85,Astatine,At,8,2-8-18-32-18-7\n86,Radon,Rn,2,2-8-18-32-18-8\n87,Francium,Fr,1,2-8-18-32-18-8-1\n88,Radium,Ra,3,2-8-18-32-18-8-2\n89,Actinium,Ac,12,2-8-18-32-18-9-2\n90,Thorium,Th,12,2-8-18-32-18-10-2\n91,Protactinium,Pa,12,2-8-18-32-20-9-2\n92,Uranium,U,12,2-8-18-32-21-9-2\n93,Neptunium,Np,12,2-8-18-32-22-9-2\n94,Plutonium,Pu,12,2-8-18-32-24-8-2\n95,Americium,Am,12,2-8-18-32-25-8-2\n96,Curium,Cm,12,2-8-18-32-25-9-2\n97,Berkelium,Bk,12,2-8-18-32-27-8-2\n98,Californium,Cf,12,2-8-18-32-28-8-2\n99,Einsteinium,Es,12,2-8-18-32-29-8-2\n100,Fermium,Fm,12,2-8-18-32-30-8-2\n101,Mendelevium,Md,12,2-8-18-32-31-8-2\n102,Nobelium,No,12,2-8-18-32-32-8-2\n103,Lawrencium,Lr,12,2-8-18-32-32-8-3\n104,Rutherfordium,Rf,10,2-8-18-32-32-10-2\n105,Dubnium,Db,10,2-8-18-32-32-11-2\n106,Seaborgium,Sg,10,2-8-18-32-32-12-2\n107,Bohrium,Bh,10,2-8-18-32-32-13-2\n108,Hassium,Hs,10,2-8-18-32-32-14-2\n109,Meitnerium,Mt,10,2-8-18-32-32-15-2\n110,Darmstadtium,Ds,10,2-8-18-32-32-16-2\n111,Roentgenium,Rg,10,2-8-18-32-32-17-2\n112,Copernicium,Cn,10,2-8-18-32-32-18-2\n113,Ununtrium,Uut,4,2-8-18-32-32-18-3\n114,Flerovium,Fl,5,2-8-18-32-32-18-4\n115,Ununpentium,Uup,6,2-8-18-32-32-18-5\n116,Livermorium,Lv,7,2-8-18-32-32-18-6\n117,Ununseptium,Uus,8,2-8-18-32-32-18-7\n118,Ununoctium,Uuo,2,2-8-18-32-32-18-8'

let HYDROGEN = 0;
let ALKALI_METALS = 1; //color(255,0,0)
let NOBLE_GASSES = 2; //color(252,78,3)
let ALKALINE_EARTH_METALS = 3; //color(255,166,0)
let BORON_ELEMENTS = 4; //color(1,138,42)
let CARBON_ELEMENTS = 5; //color(8,255,82)
let NITROGEN_ELEMENTS = 6; //color(139,0,245)
let OXYGEN_ELEMENTS = 7; //color(217,188,108)
let HALOGEN_ELEMENTS = 8; //color(153,11,15)
let TRANSITION_ELEMENTS = 9; //color(11, 148, 153)
let SUPERHEAVIES = 10; //color(11, 148, 153)
let LANTHANIDES = 11; //color(48, 14, 237)
let ACTINIDES = 12; //color(38, 245, 252)

let SHELL_CAPACITIES = [2, 8, 18, 32, 32, 18, 8];

class Element {

  constructor(n, sym, an, f, config) {
    this.symbol = sym;
    this.name = n.toUpperCase();
    this.atomicNumber = an;
    this.family = f;
    this.shellConfig = config;
  }//constructor

  toString() {
    return this.atomicNumber + " " + this.name + " " + this.symbol;
  }//toString

  displayDetail(x, y, size) {

    this.display(x-size, y-size/2, size);

    //nucleus
    circle(x+size, y, size *.08);
    let shells = int(splitTokens(this.shellConfig, '-'));
    let electronCount = this.atomicNumber;
    let shellNum = 0;
    let shellScale = 1.0 / shells.length;
    let shellSize = size * shellScale;

    for (let s=0; s < shells.length; s++) {
      noFill();
      //orbital
      circle(x+size, y, shellSize);
      //electrons
      this.drawShell(x+size, y, shells[s], shellSize, size*1.0/7*0.2);
      shellSize+= size*shellScale;
    }
  }//displayDetail

  drawShell(cx, cy, numElectrons, size, eSize) {
    fill(0);
    for (let i=0; i < numElectrons; i++) {
      let theta = i/numElectrons * PI * 2 + PI;
      let ex = (size/2) * sin(theta) + cx;
      let ey = (size/2) * cos(theta) + cy;
      circle(ex, ey, eSize);
    }
  }//drawShell

  display(x, y, size) {
    //draw element square
    stroke(0);
    strokeWeight(2);
    if (this.family == HYDROGEN) { fill(255); }
    else if (this.family == ALKALI_METALS) { fill(color(255,0,0)); }
    else if (this.family == NOBLE_GASSES) { fill(color(252,78,3)); }
    else if (this.family == ALKALINE_EARTH_METALS) { fill(color(255,166,0)); }
    else if (this.family == BORON_ELEMENTS) { fill(color(1,138,42)); }
    else if (this.family == CARBON_ELEMENTS) { fill(color(8,255,82)); }
    else if (this.family == NITROGEN_ELEMENTS) { fill(color(139,0,245)); }
    else if (this.family == OXYGEN_ELEMENTS) { fill(color(217,188,108)); }
    else if (this.family == HALOGEN_ELEMENTS) { fill(color(153,11,15)); }
    else if (this.family == TRANSITION_ELEMENTS) { fill(color(11, 148, 153)); }
    else if (this.family == SUPERHEAVIES) { fill(color(11, 148, 153)); }
    else if (this.family == LANTHANIDES) { fill(color(48, 14, 237)); }
    else if (this.family == ACTINIDES) { fill(color(38, 245, 252)); }
    rect(x, y, size, size);

    fill(0);
    //atomoic number
    textAlign(CENTER, TOP);
    textSize(size * .25);
    text(this.atomicNumber, x+size/2, y+2);

    //symbol
    textAlign(CENTER, CENTER);
    textSize(size *.5);
    text(this.symbol, x + size/2, y + size/2);

    //name
    textAlign(CENTER, BOTTOM);
    textSize(size * .25);
    textWeight(100);
    //get size using current ratio, decrease until it fits
    let nameSize = textWidth(this.name);
    let sizeoffset = size * 0.3;
    while (nameSize > (size - 4)) {
      sizeoffset--;
      textSize(sizeoffset);
      nameSize = textWidth(this.name);
    }//fit name in box;
    text(this.name, x + size/2, y + size);

  }//display
}//class

let ELEMENT_SIZE = 75;
let BIG_ELEMENT_SIZE = 400;
let SPACING = 5;
let TABLE_VIEW = 0;
let ELEMENT_VIEW = 1;
let viewMode;
let currentElement;

let table;
let rowCounts = [2, 8, 8, 18, 18, 17, 17, 15, 15];


function setup() {
  createCanvas(ELEMENT_SIZE * 18 + 10, ELEMENT_SIZE * 9 + 20);
  table = loadElements(TABLE_DATA);
  viewMode = TABLE_VIEW;
  currentElement = null;
}//setup

function draw() {
  background(255);
  if (viewMode == TABLE_VIEW) {
    displayElements(table);
  }
  if (viewMode == ELEMENT_VIEW) {
    currentElement.displayDetail((width/2), (height/2), BIG_ELEMENT_SIZE);
  }
}//draw

function mousePressed() {
  if (viewMode == TABLE_VIEW) {
    let col = int(mouseX / ELEMENT_SIZE);
    let row = int(mouseY / ELEMENT_SIZE);
    currentElement = getElement(row, col);
    viewMode = ELEMENT_VIEW;
  }
  else if (viewMode == ELEMENT_VIEW) {
    viewMode = TABLE_VIEW;
    currentElement = null;
  }
}//mouseClicked

function getElement(row, col) {
  let element_count = -1;
  if (row == 0) {
    if (col == 0) { element_count = 0; }
    else if (col == 17) { element_count = 1; }
  }//first row
  else if (row < 3) {
      //find total of all previous rows
      let previousRows = 2;
      if (row == 2) {
        previousRows+= rowCounts[1] ;
      }
      element_count = previousRows;
      if (col < 2) {
        element_count+= col;
      }//left side
      else if (col > 11) {
        element_count+= (col - 10);
      }
  }//second and third rows

  else if (row < 5) {
    //find total of all previous rows
    let previousRows = 18;
    if (row == 4) {
      previousRows+= rowCounts[3];
    }
    element_count = previousRows + col;
  }//fourth and fifth rows

  else if (row < 7) {
    let previousRows = 54;
    if (row == 6) {
      previousRows+= rowCounts[5]  + rowCounts[7];
    }
    element_count = previousRows;
    if (col < 2) {
      element_count+= col;
    }
    else if (col > 2) {
      element_count+= (col - 1) + rowCounts[7];
    }
  }//sixth and seventh rows

  else {
    let previousRows = 56;
    if (row == 8) {
      previousRows = 88;
    }
    if (col > 1 && col < 17) {
      element_count = previousRows + (col - 2);
    }
  }

  if (element_count > -1) {
    return table[element_count];
  }
  else {
    return null;
  }
}//getElement

function displayElements(elements) {
  let x = SPACING;
  let y = SPACING;
  let rowCount = 0;
  let rowNum = 0;
  let rowSwitch = true;
  for (i=0; i < elements.length; i++) {
    e = elements[i];

    if (e.family == LANTHANIDES ) {
      rowNum = 7;
      if (rowCount == 2 && rowSwitch) {
        rowCount = 0;
        rowSwitch = false;
      }//reset count
    }//end lanthanides row
    else if (e.family == ACTINIDES) {
      rowNum = 8;
      if (rowCount == 2 && rowSwitch) {
        rowCount = 0;
        rowSwitch = false;
      }
    }//end actinides row
    if (rowCount != 0 && rowCount %  rowCounts[rowNum] == 0) {
      if (rowNum == 7) {
        rowNum = 5;
        rowCount = 2;
        rowSwitch = true;
      }
      else if (rowNum == 8) {
        rowNum = 6;
        rowCount = 2;
        rowSwitch = true;
      }
      else {
        rowNum++;
        rowCount = 0;
      }
    }//elements per row

    x = getXPos(e, rowCount);
    y = getYPos(e, rowNum);
    e.display(x, y, ELEMENT_SIZE);

    rowCount++;
  // }
  }
}//displayElements

function getYPos(e, rowNum) {
  return SPACING + (rowNum * ELEMENT_SIZE);
}//getYPos

function getXPos(e, rowCount) {
  if (e.family == HYDROGEN || e.family == ALKALI_METALS) {
    return SPACING;
  }
  else if (e.family == ALKALINE_EARTH_METALS) {
    return SPACING + ELEMENT_SIZE;
  }
  else if (e.family == BORON_ELEMENTS) {
    return SPACING + (12 * ELEMENT_SIZE);
  }
  else if (e.family == CARBON_ELEMENTS) {
    return SPACING + (13 * ELEMENT_SIZE);
  }
  else if (e.family == NITROGEN_ELEMENTS) {
    return SPACING + (14 * ELEMENT_SIZE);
  }
  else if (e.family == OXYGEN_ELEMENTS) {
    return SPACING + (15 * ELEMENT_SIZE);
  }
  else if (e.family == HALOGEN_ELEMENTS) {
    return SPACING + (16 * ELEMENT_SIZE);
  }
  else if (e.family == NOBLE_GASSES) {
    return SPACING + (17 * ELEMENT_SIZE);
  }
  else if (e.family == TRANSITION_ELEMENTS || e.family == SUPERHEAVIES) {
    if (e.atomicNumber < 57) {
      return SPACING + (ELEMENT_SIZE * rowCount);//(2 * ELEMENT_SIZE);
    }
    else {
      return SPACING + (ELEMENT_SIZE * (rowCount+1));
    }
  }
  else if (e.family == LANTHANIDES || e.family == ACTINIDES) {
    return SPACING + (rowCount + 2)* ELEMENT_SIZE;
  }
  else {
    return width;
  }
}//getX

function loadElements(tableFile) {
  let lines = splitTokens(tableFile, "\n");
  let elements = new Array(118);
  let e = 0;
  for (let l=0; l < lines.length; l++ ) {
    let line = lines[l];
    let parts = splitTokens(line, ",");
    elements[e] = new Element(parts[1], parts[2], int(parts[0]), int(parts[3]),  parts[4]);
    e++;
  }
  return elements;
}//loadTable
