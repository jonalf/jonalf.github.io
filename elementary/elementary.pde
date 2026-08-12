int ELEMENT_SIZE = 75;
int BIG_ELEMENT_SIZE = 400;
int SPACING = 5;
int TABLE_VIEW = 0;
int ELEMENT_VIEW = 1;
int viewMode;
Element currentElement;

ArrayList<Element> table;
int[] rowCounts = {2, 8, 8, 18, 18, 17, 17, 15, 15};

void settings() {
  size(ELEMENT_SIZE * 18 + 10, ELEMENT_SIZE * 9 + 20);
}

void setup() {
  table = loadElements("table_data.csv");
  viewMode = TABLE_VIEW;
  currentElement = null;
}//setup

void draw() {
  background(200);
  if (viewMode == TABLE_VIEW) {
    displayElements(table);
  }
  if (viewMode == ELEMENT_VIEW) {
    currentElement.displayDetail((width/2), (height/2), BIG_ELEMENT_SIZE);
  }
}//draw

void mousePressed() {
  if (viewMode == TABLE_VIEW) {
    int col = mouseX / ELEMENT_SIZE;
    int row = mouseY / ELEMENT_SIZE;
    currentElement = getElement(row, col);
    viewMode = ELEMENT_VIEW;
  }
  else if (viewMode == ELEMENT_VIEW) {
    viewMode = TABLE_VIEW;
    currentElement = null;
  }
}//mouseClicked

Element getElement(int row, int col) {
  int element_count = -1;
  if (row == 0) {
    if (col == 0) { element_count = 0; }
    else if (col == 17) { element_count = 1; }
  }//first row
  else if (row < 3) {
      //find total of all previous rows
      int previousRows = 2;
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
    int previousRows = 18;
    if (row == 4) {
      previousRows+= rowCounts[3];
    }
    element_count = previousRows + col;
  }//fourth and fifth rows

  else if (row < 7) {
    int previousRows = 54;
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
    int previousRows = 56;
    if (row == 8) {
      previousRows = 88;
    }
    if (col > 1 && col < 17) {
      element_count = previousRows + (col - 2);
    }
  }

  if (element_count > -1) {
    return table.get(element_count);
  }
  else {
    return null;
  }
}//getElement

void displayElements(ArrayList<Element> elements) {
  int x = SPACING;
  int y = SPACING;
  int rowCount = 0;
  int rowNum = 0;
  boolean rowSwitch = true;
  for (int i=0; i < elements.size(); i++) {
    Element e = elements.get(i);

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

int getYPos(Element e, int rowNum) {
  return SPACING + (rowNum * ELEMENT_SIZE);
}//getYPos

int getXPos(Element e, int rowCount) {
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

ArrayList<Element> loadElements(String tableFile) {
  String[] lines = loadStrings(tableFile);
  ArrayList<Element> elements = new ArrayList<Element>();

  for (String line : lines ) {
    String[] parts = split(line, ",");
    if (parts.length == 3) {
      elements.add(new Element(parts[1], parts[2], int(parts[0])));
    }
    else {
      elements.add(new Element(parts[1], parts[2], int(parts[0]), int(parts[3]),  parts[4]));
    }

  }

  return elements;
}//loadTable
